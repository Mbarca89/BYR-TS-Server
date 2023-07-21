const { Properties, Images } = require('../db');
const fs = require('fs');
const path = require('path');

const deleteProperty = async (req,res) => {
    const {id} = req.params
    try {
        const property = await Properties.findOne({where:{id}})
        if (!property) throw Error ('La propiedad no existe!')
        await property.destroy()
        await Images.destroy({where:{propertyId:id}})
        const folderPath = path.join('public/', id.toString());
        fs.rmSync(folderPath, { recursive: true });
        return res.status(200).send('Propiedad eliminada')
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

module.exports = {deleteProperty}