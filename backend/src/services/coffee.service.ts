import prisma from "../database/prisma.js";
import { Prisma } from "@prisma/client";

export const getAllCoffees = async () => {
  return prisma.coffee.findMany({ orderBy: { id: "asc" } });
};

export const getCoffee = async (id: number) => {
  return prisma.coffee.findUnique({ where: { id } });
};

export const createCoffee = async (data: { name: string; description?: string | null; basePrice: number }) => {
  return prisma.coffee.create({ data });
};

export const updateCoffee = async (id: number, data: Partial<{ name: string; description?: string | null; basePrice: number }>) => {
  return prisma.coffee.update({ where: { id }, data: data as Prisma.CoffeeUpdateInput });
};

export const deleteCoffee = async (id: number) => {
  return prisma.coffee.delete({ where: { id } });
};
