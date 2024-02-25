import prisma from "../../lib/prisma";

const getTodos = async () => {
  try {
    const todos = await prisma.todo.findMany();
    return { todos };
  } catch (error) {}
};

export const todoQuery = {
  getTodos,
};
