import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.coffee.createMany({
    data: [
      { name: "Espresso", description: "Strong espresso shot", basePrice: 300 },
      { name: "Latte", description: "Milk coffee", basePrice: 400 },
      { name: "Americano", description: "Espresso + hot water", basePrice: 350 }
    ],
  });

  await prisma.extra.createMany({
    data: [
      { name: "Extra Shot", price: 100 },
      { name: "Soy Milk", price: 80 },
      { name: "Whipped Cream", price: 120 }
    ],
  });

  console.log("🌱 Database seeded!");
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
