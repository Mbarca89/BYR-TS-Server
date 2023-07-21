const { Properties, Images } = require('../db');

const getProperties = async (req,res) => {
    try {
        const result = await Properties.findAll({
            attributes: ['id', 'price', 'currency', 'bedrooms', 'bathrooms', 'name', 'location', 'type', 'size', 'category' ],
            include: [
                {
                  model: Images,
                  as: 'images',
                  attributes: ['url'],
                },
              ],
        })
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

module.exports = {getProperties}