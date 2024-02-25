import prisma from "../../lib/prisma";

const getTodos = async () => {
  try {
    const todos = await prisma.todo.findMany();
    console.log(todos);
    return todos;
  } catch (error) {}
};

export const todoQuery = {
  getTodos,
};
