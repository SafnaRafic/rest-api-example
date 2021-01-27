const Director = require("../models/Director");

const list = async(req, res) => {
    try {
        const directors = await Director.find({});
        res.json(directors);
        console.log(directors);
    } catch (e) {
        console.error("Error fetching directors from database: ", e);
        res.status(500).send("Unable to fetch directors sorrys");
    }
};

module.exports = {
    list, 
};