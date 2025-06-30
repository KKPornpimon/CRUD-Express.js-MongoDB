import userController from "../controllers/user.controller.js";

const userRouter = (router) => {

    router.get('/users', userController.getAllUsers);

}

export default userRouter;