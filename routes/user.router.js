import userController from "../controllers/user.controller.js";
import checkMiddleware from "../middlewares/check.middleware.js";

const userRouter = (router) => {

    router.get('/users', userController.getAllUsers);
    router.get('/users/:id', checkMiddleware(), userController.getUserById);
    router.post('/users', userController.createUser);
    router.put('/users/:id', userController.updateUser);
    router.delete('/users/:id', userController.deleteUser);
    

}

export default userRouter;