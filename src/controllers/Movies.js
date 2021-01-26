const Movie = require("../models/Movie");

const list = async(req, res) => {
    try {
        const movies = await Movie.find({});
        res.json(movies);
    } catch (e) {
        console.error("Error fetching movies from database: ", e);
        res.status(500).send("Unable to fetch movies sorrys");
    }
};

const add = async(req, res) => {
    const title = req.body.title;
    const movie = new Movie({ title: title });
    await movie.save();
    res.json(movie);
};

module.exports = {
    list,
};