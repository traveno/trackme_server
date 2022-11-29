const db = require('../models');
const Stat = db.stats;

// Create a user stat
exports.create = async (req, res) => {
    const stat = new Stat({
        userGUID: req.body.userGUID,
        workout: req.body.workout,
        weight: req.body.weight
    });

    stat.save(stat).then(data => {
        res.send(data);
    });
};

// Retrieve user stats
exports.findAll = async (req, res) => {
    if (!req.query.userGUID) {
        res.status(400).send('No userGUID provided!');
        return;
    }

    var stats = await Stat.find({ userGUID: req.query.userGUID });

    console.log(stats.length);

    res.send(stats);
};

// Delete all stats that belong to a userGUID
exports.deleteAll = (req, res) => {
    Stat.deleteMany({ userGUID: req.query.userGUID }).then(data => {
        res.send(data);
    });
}