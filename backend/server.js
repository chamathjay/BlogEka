import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import bcrypt from 'bcrypt';

//schema
import User from './Schema/User.js';

const server = express();
let PORT = 3000;
const uri = process.env.DB_LOCATION;

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,20}$/; // regex for password

server.use(express.json());

mongoose.connect(uri, {
    autoIndex: true,
});

server.post("/signup", (req, res) => {
    // console.log(req.body.fullname);
    let { fullname, email, password } = req.body;

    // validate the data from frontend
    if (fullname.length < 3) {
        return res.status(403).json({ "error": "Full name must be at least 3 characters long" });
    }

    if (!email.length) {
        return res.status(403).json({ "error": "Email required" });
    }
    if (!emailRegex.test(email)) {
        return res.status(403).json({ "error": "Invalid email" });
    }

    if (!passwordRegex.test(password)) {
        return res.status(403).json({ "error": "Password must be between 6 to 20 characters and contain at least one number, one uppercase and lowercase letter" });
    }

    bcrypt.hash(password, 10, (err, hash) => {

        let username = email.split("@")[0];
        let user = new User({
            personal_info: { fullname, email, password: hash, username }
        });

        user.save().then((u) => {
            return res.status(200).json({ user: u })
        })
            .catch(err => {
                return res.status(500).json({ "error": err.message });
            });

    });
});

server.listen(PORT, () => {
    console.log(`Server is listening on port -> ${PORT}`);
});