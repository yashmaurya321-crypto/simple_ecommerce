const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const validator = require('validator');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.connect('mongodb://localhost/userdata').then(() => {
    console.log('Connected to db');
}).catch((err) => {
    console.log(err);
});

const userScheme = mongoose.Schema({
    name: String,
    address: String,
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'Invalid email format'
        }
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('users', userScheme);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/register', async (req, res) => {
    try {
        const { name, address, email, password } = req.body;
        const existingUser = await User.findOne({ email: email });

        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // Hash password

        const newUser = new User({
            name, address, email, password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const userData = {
            _id: user._id,
            name: user.name,
            address: user.address,
            email: user.email
        };
        res.status(200).json({ message: 'Login successful'});
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.post('/profile', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const userData = {
            _id: user._id,
            name: user.name,
            address: user.address,
            email: user.email
        };
        res.status(200).json({ message: 'user dtaa successful', user: userData });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
