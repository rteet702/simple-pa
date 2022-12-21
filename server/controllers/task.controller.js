const { PrismaClient } = require("@prisma/client");

module.exports = {
    create: async (request, response) => {
        const prisma = new PrismaClient();
        const { title, description, dueAt } = request.body;

        // dueAt adjustment
        const fixedDueAt = new Date(dueAt);
        fixedDueAt.setHours(fixedDueAt.getHours() + 16);

        if (!title || !description || !dueAt) {
            return response.status(400).json({ error: "All fields required!" });
        }

        const newTask = await prisma.task.create({
            data: {
                title,
                description,
                dueAt: fixedDueAt,
            },
        });

        return response.status(201).json({ task: newTask });
    },
    getAll: async (request, response) => {
        const prisma = new PrismaClient();

        const tasks = await prisma.task.findMany({
            orderBy: {
                dueAt: "asc",
            },
        });

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
    update: async (request, response) => {
        const prisma = new PrismaClient();

        const { id } = request.params;

        const update = await prisma.task.update({
            where: {
                id: id,
            },
            data: request.body,
        });

        return response
            .status(200)
            .json({ message: "Succesfully updated task: " + id, task: update });
    },
};
