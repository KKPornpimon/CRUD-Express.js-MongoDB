// การจัดการคำสั่ง ที่ใช้จัดการกับ database

import User from "../models/User.js";

const userService = {
    getAllUsers: async () => {
        return await User.find();
    },
    getUserById: async (id) => {
        return await User.findById(id);
    },
    createUser: async (name, age, phone) => {
        const newUser = new User(
            {
                name,
                age,
                phone
            }
        );
        return await newUser.save();
    },
    updateUser: async (id, name, age, phone) => {
        return await User.findByIdAndUpdate(
            id,
            {
                $set: {
                    name,   
                    age,
                    phone
                }
            },
            { new: true }
        );
    },
    deleteUser: async (id) => {
        return await User.findByIdAndDelete(id);
    }
}

export default userService;