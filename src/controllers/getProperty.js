const { Properties, Images } = require('../db');

const getProperty = async (req,res) => {
    const {id} = req.params
    try {
        const result = await Properties.findOne({
            where:{id},
            include: [
                {
                  model: Images,
                  as: 'images',
                  attributes: ['id','url'],
                },
              ],
        })
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

module.exports = {getProperty}