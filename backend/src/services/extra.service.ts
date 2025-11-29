import prisma from "../database/prisma.js";

export const getAllExtras = () => prisma.extra.findMany({ orderBy: { id: "asc" } });
export const getExtra = (id: number) => prisma.extra.findUnique({ where: { id } });
export const createExtra = (data: { name: string; price: number }) => prisma.extra.create({ data });
export const updateExtra = (id: number, data: Partial<{ name: string; price: number }>) =>
  prisma.extra.update({ where: { id }, data: data as any });
export const deleteExtra = (id: number) => prisma.extra.delete({ where: { id } });
