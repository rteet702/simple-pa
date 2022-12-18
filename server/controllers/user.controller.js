const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
    register: async (request, response) => {
        const { firstName, lastName, email, password, confirmPassword } =
            request.body;
        const prisma = new PrismaClient();
        await prisma.$connect();

        if (confirmPassword !== password) {
            await prisma.$disconnect();
            return response
                .status(400)
                .json({ error: "Passwords do not match." });
        }
        const userTest = await prisma.user.findFirst({
            where: { email: email },
        });
        if (userTest) {
            await prisma.$disconnect();
            return response
                .status(400)
                .json({ error: "Email already in use." });
        }

        const pwHash = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                password: pwHash,
            },
        });

        prisma.$disconnect();

        const userToken = jwt.sign(
            {
                id: newUser.id,
            },
            process.env.SECRET
        );

        return response
            .status(201)
            .cookie("userToken", userToken, { httpOnly: true })
            .json({ msg: "User created successfully.", user: newUser });
    },
    login: async (request, response) => {
        const prisma = new PrismaClient();
        const { email, password } = request.body;
        await prisma.$connect();

        const user = await prisma.user.findFirst({
            where: {
                email: email,
            },
        });

        if (user === null) {
            return response.status(404).json({ error: "User not found." });
        }

        const passwordCheck = await bcrypt.compare(password, user.password);

        if (!passwordCheck) {
            return response.status(400).json({ error: "Invalid password." });
        }

        const userToken = jwt.sign(
            {
                id: user.id,
            },
            process.env.SECRET
        );

        await prisma.$disconnect();

        return response
            .status(200)
            .cookie("userToken", userToken, { httpOnly: true })
            .json({ message: "Succesfully logged in" });
    },
    logout: (request, response) => {
        response.clearCookie("userToken");
        response.sendStatus(200);
    },
    getLoggedInUser: async (request, response) => {
        const prisma = new PrismaClient();
        await prisma.$connect();

        jwt.verify(
            request.cookies.userToken,
            process.env.SECRET,
            (error, decoded) => {
                if (error) {
                    return response.status(400).json({
                        message: "No logged in user or cookie present.",
                    });
                }

                prisma.user
                    .findFirst({
                        where: {
                            id: decoded.id,
                        },
                    })
                    .then((user) => {
                        return response.status(200).json({ user });
                    });
            }
        );
    },
};
