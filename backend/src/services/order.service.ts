import prisma from "../database/prisma.js";

type OrderItemInput = {
  coffeeId: number;
  size?: "small" | "medium" | "large" | string;
  quantity?: number;
  extras?: number[]; // ids of extras
};

export async function createOrder(userId: number | null, items: OrderItemInput[]) {
  return await prisma.$transaction(async (tx) => {
    let total = 0;
    const createdItems: Array<any> = [];

    for (const item of items) {
      const coffee = await tx.coffee.findUnique({ where: { id: item.coffeeId } });
      if (!coffee) throw Object.assign(new Error("Invalid coffeeId"), { status: 400 });

      const sizePrice = item.size === "large" ? 200 : item.size === "medium" ? 100 : 0;

      let extrasSum = 0;
      if (item.extras && Array.isArray(item.extras)) {
        for (const extraId of item.extras) {
          const extra = await tx.extra.findUnique({ where: { id: extraId } });
          if (!extra) throw Object.assign(new Error("Invalid extra"), { status: 400 });
          extrasSum += extra.price;
        }
      }

      const qty = item.quantity && item.quantity > 0 ? item.quantity : 1;
      const itemPrice = (coffee.basePrice + sizePrice + extrasSum) * qty;
      total += itemPrice;

      createdItems.push({
        coffeeId: item.coffeeId,
        size: item.size || "small",
        quantity: qty,
        extras: JSON.stringify(item.extras || []),
        price: itemPrice,
      });
    }

    const order = await tx.order.create({ data: { userId, totalPrice: total, status: "pending" } });

    for (const ci of createdItems) {
      await tx.orderItem.create({
        data: {
          orderId: order.id,
          coffeeId: ci.coffeeId,
          size: ci.size,
          quantity: ci.quantity,
          extras: ci.extras,
          price: ci.price,
        },
      });
    }

    return { id: order.id, total: total };
  });
}

export async function getOrder(id: number) {
  return prisma.order.findUnique({
    where: { id },
    include: { items: { include: { coffee: true } } },
  });
}

export async function listOrders() {
  return prisma.order.findMany({ orderBy: { id: "desc" }, include: { items: true } });
}
