import prisma from "../database/prisma";
export const getAllCoffees = async () => {
    return prisma.coffee.findMany();
};
export const getCoffeeById = async (id) => {
    return prisma.coffee.findUnique({
        where: { id },
    });
};
export const createCoffee = async (data) => {
    return prisma.coffee.create({
        data,
    });
};
export const updateCoffee = async (id, data) => {
    return prisma.coffee.update({
        where: { id },
        data,
    });
};
export const deleteCoffee = async (id) => {
    return prisma.coffee.delete({
        where: { id },
    });
};
