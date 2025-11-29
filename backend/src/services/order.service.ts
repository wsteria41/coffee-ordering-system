import prisma from "../database/prisma.js";

export async function createOrder(
  userId: number | null,
  items: Array<any>
) {
  return await prisma.$transaction(async (tx) => {
    let total = 0;
    const createdItems = [];

    for (const item of items) {
      const coffee = await tx.coffee.findUnique({
        where: { id: item.coffeeId },
      });

      if (!coffee) throw new Error("Invalid coffeeId");

      const sizePrice =
        item.size === "large"
          ? 200
          : item.size === "medium"
          ? 100
          : 0;

      let extrasSum = 0;

      if (item.extras && Array.isArray(item.extras)) {
        for (const extraId of item.extras) {
          const extra = await tx.extra.findUnique({
            where: { id: extraId },
          });

          if (!extra) throw new Error("Invalid extra");

          extrasSum += extra.price;
        }
      }

      const itemPrice =
        (coffee.basePrice + sizePrice + extrasSum) *
        (item.quantity || 1);

      total += itemPrice;

      createdItems.push({
        coffeeId: item.coffeeId,
        size: item.size,
        quantity: item.quantity || 1,
        extras: JSON.stringify(item.extras || []),
        price: itemPrice,
      });
    }

    const order = await tx.order.create({
      data: {
        totalPrice: total,
        status: "pending",
      },
    });

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

    return { orderId: order.id, total };
  });
}
