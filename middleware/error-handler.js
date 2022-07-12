const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);
    return res.status(500).json({ msg: 'An error occurred. Please try again' });
}

module.exports = errorHandlerMiddleware;