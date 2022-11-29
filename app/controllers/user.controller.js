const db = require('../models');
const User = db.users;

// Create a user account
exports.create = async (req, res) => {
    // Validate request
    if (!req.body.username) {
        res.status(400).send({ message: 'Username cannot be empty' });
        return;
    }

    if (!req.body.password) {
        res.status(400).send({ message: 'Password cannot be empty' });
        return;
    }

    if (!req.body.pin) {
        res.status(400).send({ message: 'PIN cannot be empty' });
        return;
    }

    if (!req.body.realname) {
        res.status(400).send({ message: 'Your real name cannot be empty' });
        return;
    }

    if (!req.body.height) {
        res.status(400).send({ message: 'Height cannot be empty' });
        return;
    }

    if (!req.body.weight) {
        res.status(400).send({ message: 'Weight cannot be empty' });
        return;
    }

    let exists = await User.find({ username: req.body.username }).count();

    if (exists) {
        res.status(400).send({ message: 'This user already exists' });
        return;
    }

    const user = new User({
        username: req.body.username,
        password: req.body.password,
        pin: req.body.pin,
        realname: req.body.realname,
        height: req.body.height,
        weight: req.body.weight
    });

    user.save(user).then(data => {
        res.send(data);
    });
};

// Retrieve user account by provided credentials
exports.findAll = async (req, res) => {
    var existsPassword = await User.find({ username: req.query.username, password: req.query.password });
    var existsPin = await User.find({ username: req.query.username, pin: req.query.pin });

    if (existsPassword.length > 0) {
        res.send(existsPassword[0]);
    } else if (existsPin.length > 0) {
        res.send(existsPin[0]);
    } else {
        res.status(400).send({ message: 'Invalid username or password or PIN' });
        return; 
    }
};

exports.deleteByGUID = (req, res) => {
    User.deleteMany({ _id: req.query.userGUID }).then(data => {
        res.send(data);
    });
}