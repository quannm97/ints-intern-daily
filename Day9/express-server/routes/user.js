const { Router } = require("express");
const db = require("../database");
const { check, validationResult } = require("express-validator");

const router = new Router();

router.use((req, res, next) => {
    console.log("This is user route");
    next();
});

router.get("/", async (req, res) => {
    const result = await db.promise().query(`SELECT * FROM USER`);
    res.status(200).send(result[0]);
});

const validateData = () => {
    return [check("username").notEmpty(), check("password").notEmpty()];
};

router.post(
    "/",
    [
        check("username").notEmpty().withMessage('username cannot be empty'), 
        check("password").notEmpty().withMessage('password cannot be empty')
    ],
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).send({ errors: errors.array() });
        }

        const { username, password } = req.body;
        if (username && password) {
            try {
                db.promise().query(
                    ` INSERT INTO USER VALUES('${3}','${username}', '${password}')`
                );
                res.status(200).send("Created user");
            } catch (error) {
                console.log(error);
            }
        }
    }
);

module.exports = router;
