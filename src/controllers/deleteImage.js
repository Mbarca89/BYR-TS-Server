const {  Images } = require('../db');
const fs = require('fs');
const path = require('path');

const deleteImage = async (req,res) => {
    const {imageId,id} = req.query
    try {
        const image = await Images.findOne({where:{id:imageId}})
        if(!image) throw Error ("Imagen no encontrada!")
        await image.destroy()
        const folderPath = path.join('public/', id.toString(), image.name);
        fs.unlink(folderPath, (error) => {
            if(error) throw Error (error)
        });
        res.status(200).send('Imagen borrada con éxito!')
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

module.exports = {deleteImage}