const {  Images } = require('../db');

const moveImage = async (req,res) => {
    const {index,id, direction} = req.query
    try {
        const image = await Images.findAll({where:{propertyId:id}})
        if(!image) throw Error ("Hubo un problema al obtener las imagenes!")
        if(direction === 'left'){
            const temp = image[index]
            image[index] = image[index-1]
            image[index-1] = temp
        }
        
        res.status(200).json()
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

module.exports = {moveImage}