import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.extra.deleteMany();
  await prisma.coffee.deleteMany();

  await prisma.coffee.createMany({
    data: [
      { name: "Espresso", description: "Strong espresso shot", basePrice: 300 },
      { name: "Latte", description: "Milk coffee", basePrice: 400 },
      { name: "Americano", description: "Espresso + hot water", basePrice: 350 },
      { name: "Cappuccino", description: "Espresso + milk foam", basePrice: 450 },
      { name: "Mocha", description: "Chocolate + espresso", basePrice: 500 },
      { name: "Flat White", description: "Smooth microfoam milk", basePrice: 480 },
      { name: "Macchiato", description: "Espresso with foam", basePrice: 420 },
      { name: "Caramel Latte", description: "Latte + caramel syrup", basePrice: 550 }
    ],
  });

  await prisma.extra.createMany({
    data: [
      { name: "Extra Shot", price: 100 },
      { name: "Soy Milk", price: 80 },
      { name: "Whipped Cream", price: 120 },
      { name: "Caramel Syrup", price: 90 },
      { name: "Vanilla Syrup", price: 90 },
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
