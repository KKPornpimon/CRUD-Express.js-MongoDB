import userController from "../controllers/user.controller.js";

const userRouter = (router) => {

    router.get('/', userController.hello)

    router.get('/kanom', userController.kanom)
}

export default userRouter;