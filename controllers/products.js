const getAllProducts = async (req, res) => {
    try {
        res.send(200).json({ msg: 'Get all products' });
    } catch (error) {
        res.status(500).send('An error occurred. Please try again');
    }
};