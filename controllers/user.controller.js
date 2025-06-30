import User from "../models/User.js";

const userController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            console.log('Error fetching users:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

}

export default userController;