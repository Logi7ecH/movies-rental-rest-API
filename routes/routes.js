const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController')

//POST New Movies Collection
router.post('/movies', moviesController.addMovies)

//GET All Movies Collection
router.get('/movies', moviesController.getAllMovies)

//GET Movie by ID
router.get('/movies/:id', moviesController.getMovieByID)

//UPDATE Movie by ID
router.put('/movies/:id', moviesController.updateMovieByID)

//DELETE Movie by ID
router.delete('/movies/:id', moviesController.deleteMovieByID)
module.exports = router;