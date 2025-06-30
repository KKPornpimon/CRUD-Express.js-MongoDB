const userController = {
    hello: (req, res) => {
        res.send('Hello World!')
    },
    kanom: (req, res) => {
        res.send('Kanom is delicious!')
    }
}

export default userController;