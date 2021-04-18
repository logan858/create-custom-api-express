const { deleteOne } = require('../../models/movie')
const Movie = require('../../models/movie')
const Performer = require('../../models/performer')

module.exports = {
    index,
    show,
    create,
    update,
    delete: deleteMovie,
}

async function index(req, res) {
    await Movie.find({}, function(err, movies) {
        res.status(200).json(movies)
    })
}

async function show(req, res) {
    console.log(req.params.id)
    await Movie.find({_id: req.params.id}, function(err, movie) {
        res.status(200).json(movie)
    })
}

async function create(req, res) {
    console.log(req.body)
    await Movie.create({
        title: req.params.title,
        releaseYear: req.params.releaseYear,
        nowShowing: req.params.nowShowing,
        reviews: req.params.reviews,
        cast: req.params.cast,
        mpaaRating: req.body.mpaaRating,
    }, function(err, movie) {
        return res.status(201).json(movie)
    })
}

async function update(req, res) {
    console.log(req.body)
    await Movie.find({_id:req.params.id}, function(err, movie) {
        title = req.body.title
        releaseYear = req.body.releaseYear
        nowShowing = req.body.nowShowing
        reviews = req.body.reviews
        cast = req.body.cast
        mpaaRating = req.body.mpaaRating
        return res.status(204).json(movie)
    })
}

async function deleteMovie (req, res) {
    await Movie.find({_id: req.params.id}).deleteOne()
    return res.status(200)
}