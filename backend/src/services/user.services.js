const db = require('../models/index');
const generatejwt = require('../helpers/JWT');
const bcrypt = require('bcryptjs');
const AppError = require('../helpers/AppError');

class UserServices {
    async login({ email, password, next }) {
        try {
            const user = await db.User.findOne({
                where: {
                    email: email,
                    status: true,
                },
                include: [
                    {
                        model: db.Accounts,
                    },
                ],
            });
            if (!user) {
                return next(
                    new AppError(`User with email: ${email} not found`, 404),
                );
            }
            //3. validar si la contraseña es correcta
            if (!(await bcrypt.compare(password, user.password))) {
                return next(new AppError(`Incorrect email or password`, 401));
            }

            //4. generar el token
            const token = await generatejwt(user.id);

            return { user, token };
        } catch (error) {
            throw new Error(error);
        }
    }

    async findOneUser({ attributes, next }) {
        try {
            const user = await db.User.findOne({
                where: attributes,
            });
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    async createUser({ body, next }) {
        try {
            const user = await this.findOneUser({
                attributes: { email: body.email },
                next,
            });
            if (user) {
                return next(new AppError(`User already exist`, 400));
            }
            const salt = await bcrypt.genSalt(12);
            const secretPassword = await bcrypt.hash(body.password, salt);
            body.password = secretPassword;
            const newUser = await db.User.create(body);
            const token = await generatejwt(newUser.id);

            return { newUser, token };
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateUser({ body, sessionUser, next }) {
        try {
            const { name, lastName, nickName, email, phone } = body;
            const verifyEmailUser = await this.findOneUser({
                attributes: { email },
                next,
            });
            if (verifyEmailUser && sessionUser.email != email) {
                throw next(new AppError(`${email} already exist`, 400));
            }
            const updatedUser = sessionUser.update({
                name,
                lastName,
                nickName,
                email,
                phone,
            });
            return updatedUser;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteUser({ sessionUser }) {
        try {
            await sessionUser.update({ status: false });
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = UserServices;
