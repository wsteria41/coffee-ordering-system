import prisma from "../database/prisma";
import { CoffeeInput } from "../types/coffee.types";

export const getAllCoffees = async () => {
  return prisma.coffee.findMany();
};

export const getCoffeeById = async (id: number) => {
  return prisma.coffee.findUnique({
    where: { id },
  });
};

export const createCoffee = async (data: CoffeeInput) => {
  return prisma.coffee.create({
    data,
  });
};

export const updateCoffee = async (id: number, data: CoffeeInput) => {
  return prisma.coffee.update({
    where: { id },
    data,
  });
};

export const deleteCoffee = async (id: number) => {
  return prisma.coffee.delete({
    where: { id },
  });
};
