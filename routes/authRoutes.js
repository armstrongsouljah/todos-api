const router = require('express').Router()
const authController = require('../controllers/authController')

router.post('/register', async (req, res) => {

    const {username, password } = req.body
    const {error} = await authController.registerUser({
        username,
        password
    })

    if(error) {
        return res.status(400).json({
            error
        })
    } else {
        return res.status(201).json({
            message: "Account successfully created",
        })
    }
})

module.exports = router;
