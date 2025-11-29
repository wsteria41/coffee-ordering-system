import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Coffee seed
  await prisma.coffee.createMany({
    data: [
      { name: "Espresso", description: "Strong shot", basePrice: 300 },
      { name: "Latte", description: "Milky coffee", basePrice: 400 },
      { name: "Americano", description: "Hot water + espresso", basePrice: 350 }
    ],
  });

  // Extra seed
  await prisma.extra.createMany({
    data: [
      { name: "Extra Shot", price: 100 },
      { name: "Soy Milk", price: 80 },
      { name: "Whipped Cream", price: 120 },
    ],
  });
}

main()
  .then(() => {
    console.log("Database seeded!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
