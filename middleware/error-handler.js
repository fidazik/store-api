const errorMiddleware = (req, res) => res.status(500).send('An error occurred. Please try again');

module.exports = errorMiddleware;