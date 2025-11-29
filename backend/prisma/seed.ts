import prisma from "../src/database/prisma.js";

async function main() {
  await prisma.coffee.createMany({
    data: [
      { name: "Espresso", description: "Strong shot", basePrice: 300 },
      { name: "Latte", description: "Milky coffee", basePrice: 400 },
      { name: "Americano", description: "Hot water + espresso", basePrice: 350 }
    ],
  });

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
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
