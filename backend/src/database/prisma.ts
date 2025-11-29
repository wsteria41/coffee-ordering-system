import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.$connect()
  .then(() => console.log("Prisma DB connected!"))
  .catch((err: unknown) => console.error("Prisma connection error:", err));


export default prisma;
