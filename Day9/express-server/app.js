const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require('passport')
const local = require('./strategies/local')

const store = new session.MemoryStore
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const PORT = 8000;

// Express setting
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(
    session({
        secret: ["some secret"],
        cookie: { maxAge: 3000 },
        saveUninitialized: false,
        store
    })
);

app.use(express.urlencoded({
    extended:false
}))
app.use(express.json())
app.use((req, res, next) => {
    next();
});

app.use(passport.initialize())
app.use(passport.session())

app.use('/user', userRoute)
app.use('/auth', authRoute)
// Main logic



app.listen(PORT, function () {});

