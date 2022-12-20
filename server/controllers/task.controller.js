const { PrismaClient } = require("@prisma/client");

module.exports = {
    create: async (request, response) => {
        const prisma = new PrismaClient();
        const { title, description, dueAt } = request.body;

        const newTask = await prisma.task.create({
            data: {
                title,
                description,
                dueAt,
            },
        });

        return response.status(201).json({ task: newTask });
    },
    getAll: async (request, response) => {
        const prisma = new PrismaClient();

        const tasks = await prisma.task.findMany({});

        console.log(tasks);

        return response.status(200).json({ tasks: tasks });
    },
    delete: async (request, response) => {
        const prisma = new PrismaClient();

        const { id } = request.params;

        await prisma.task.delete({
            where: {
                id,
            },
        });

        return response
            .status(204)
            .json({ message: "Successfully deleted task: " + id });
    },
};
