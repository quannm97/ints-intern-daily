const express = require("express");
const app = express();
const PORT = 8000;
const users = [
    { name: "Quan", age: "26" },
    { name: "Dung", age: "24" },
    { name: "Yen", age: "23" },
];

const posts = [{ title: "My favourite wife" }, { title: "My favourite GFs" }];

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
});
// post
app.post("/", (req, res) => {
    console.log("🚀 ~ file: rounting.js:19 ~ app.post ~ req.body:", req.body);
    res.status(200).send("Created");
});

// app.post('/posts', (req, res) => {
//     const {authorization} = req.headers
//     if(authorization && authorization === '1234') {
//         const post = req.body
//         console.log("🚀 ~ file: rounting.js:29 ~ app.post ~ post:", post)
//         posts.push(post)
//         res.status(201).send(post)
//     } else {
//         res.status(404).send('Invalid request')
//     }
// })

function validateAuth(req, res, next) {
    const { authorization } = req.headers;
    if (authorization && authorization === "1234") {
        next();
    } else {
        res.status(404).send("Invalid request");
    }
}

app.post("/posts", validateAuth, (req, res) => {
    const post = req.body;
    posts.push(post);
    res.status(201).send(post);
});

// get
app.get("/", (req, res) => {
    res.send({
        msg: "hello",
        user: {},
    });
});

app.get("/users", (req, res) => {
    res.status(200).send(users);
});

app.get("/posts", (req, res) => {
    res.status(200).send(posts);
});

// Dynamic URL

app.get("/users/:name", (req, res) => {
    const { name } = req.params;
    const user = users.find((user) => user.name === name);
    if (user) res.status(200).send({ user });
    else res.status(404).send("Not found");
});

app.get("/posts", (req, res) => {
    const { title } = req.query;
    const post = posts.find((post) => post.title === title);
    if (post) res.status(200).send({ post });
    else res.status(404).send("Not found");
});

app.listen(PORT, function () {});
