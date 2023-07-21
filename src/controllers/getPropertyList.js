const { Properties } = require('../db');

const getPropertyList = async (req,res) => {
    try {
        const result = await Properties.findAll({
            attributes: ['id', 'price', 'currency', 'bedrooms', 'bathrooms', 'name', 'location', 'type', 'size', 'category' ],
        })
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

module.exports = {getPropertyList}