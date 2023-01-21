const MoviesModel = require("../models/movies");

//Add movies controller
const addMovies = async (req, res) => {
    const newMovies = new MoviesModel({
        name: req.body.name,
        year: req.body.year,
        score: req.body.score
    })

    try {
        const dataSaved = await newMovies.save();
        res.status(200).json(dataSaved);
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

//Get All Movies Collection
const getAllMovies = async (req, res) => {
    try {
        const movies = await MoviesModel.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//Get spesific movie by ID
const getMovieByID = async (req, res) => {
    try {
        const movie = await MoviesModel.findById(req.params.id);
        res.json(movie);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//Update movie by ID
const updateMovieByID = async (req, res) => {
    try {
        const movieID = req.params.id;
        const {
            name,
            year,
            score
        } = req.body;
        const options = {
            new: true
        };

        const result = await MoviesModel.findByIdAndUpdate(movieID, {
            name: name,
            year: year,
            score: score
        }, options);
        res.send(result);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

//Delete movie by ID
const deleteMovieByID = async (req, res) => {
    try {
        const movieID = req.params.id;
        const movieDeleted = await MoviesModel.findByIdAndDelete(movieID)
        res.send(`Sucessfuly Deleted ${movieDeleted.name} from Collection`);
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}
module.exports = {
    addMovies,
    getAllMovies,
    getMovieByID,
    updateMovieByID,
    deleteMovieByID
}