const { Properties, Images } = require('../db');
const path = require('path');
const fs = require('fs');
const {SERVER_URL} = process.env

const editProperty = async (req,res) => {
    const { id } = req.params;
    const { data } = req.body;
    let images = []
    req.files && (images = req.files.images)
    const dataOk = JSON.parse(data);
    try {
        const property = await Properties.findOne({where:{id}})
        if(!property) throw Error ('propiedad no encontrada')
      const result = await property.update({
        featured: dataOk.featured,
        name: dataOk.name,
        description: dataOk.description,
        type: dataOk.type,
        category: dataOk.category,
        price: dataOk.price,
        currency: dataOk.currency,
        location: dataOk.location,
        size: dataOk.size,
        constructed: dataOk.constructed,
        bedrooms: dataOk.bedrooms,
        bathrooms: dataOk.bathrooms,
        kitchen: dataOk.kitchen,
        garage: dataOk.garage,
        others: dataOk.others,
        services: dataOk.services,
        amenities: dataOk.amenities,
      });
  
      const folderPath = path.join('public/', property.id.toString());

      if(images.length > 1){images.forEach(async (image) => {
        const imagePath = path.join(folderPath, image.name).replace("\\","/"); // Ruta completa al archivo de destino
        image.mv(imagePath, (error) => {
          if (error) {
            throw Error (error.message);
          }
        });
        const imageUrl = `${SERVER_URL}/${imagePath}`
        const urlOk = imageUrl.split('/').filter(item => item !=='public').join('/')
        await Images.create({propertyId:property.id,url:urlOk,name:image.name})
      });}
      return res.status(200).send('Propiedad actualizada con exito!')
    } catch (error) {
      return res.status(400).send(error.message);
    }

}

module.exports = {editProperty}