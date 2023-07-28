const { Properties, Images } = require('../db');

const getLastProperties = async (req,res) => {
    try {
        const result = await Properties.findAll({
            attributes: ['id', 'price', 'currency', 'bedrooms', 'bathrooms', 'name', 'location', 'type', 'size', 'category', 'createdAt' ],
            include: [
                {
                  model: Images,
                  as: 'images',
                  attributes: ['url'],
                },
              ],
              limit: 10,
              order: [['createdAt', 'DESC']],
        })
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

module.exports = {getLastProperties}