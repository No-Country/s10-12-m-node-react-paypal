const db = require('../models/index');
const AppError = require('../helpers/AppError');
const cloudinary = require('../config/cloudinary').v2;
const defaultValue = '/backend/public/media/image/avatar.png';
const fs = require('fs');
const path = require('path');
const UserServices = require('../services/user.services')
class AvatarServices {
    async updateAvatar ({user_id, newAvatarFile, next}){
        const userServices = new UserServices();
        try {
            const user = await userServices.findOneUser({
                attributes:{id:user_id},
                next
            })
            if(!user){
                throw next(new AppError('User does not exist', 400));
            }
            if (!newAvatarFile) {
                return next(
                    new AppError(`"No image file provided": ${newAvatarFile} not found`, 400),
                )
            }
            //Subir la nueva imagen a Cloudinary
            const result = await cloudinary.uploader.upload(newAvatarFile.path)

            // Obtener la URL de la nueva imagen de Cloudinary
            const avatarUrl = result.secure_url;

            // Actualizar el campo 'avatar' del usuario en la base de datos
            const updateUser = await db.User.update(
                {avatar:avatarUrl},
                {where: {id:user_id}}
            )
            this.deleteLocalImages()
            return updateUser;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteLocalImages() {
        const uploadsFolder = path.join(__dirname, '../../public/uploads');
        
        try {
            const files = await fs.promises.readdir(uploadsFolder);
            
            for (const file of files) {
                const filePath = path.join(uploadsFolder, file);
                await fs.promises.unlink(filePath);
                console.log('File deleted:', filePath);
            }
        } catch (error) {
            console.error('Error deleting files:', error);
        }
    }

    async deleteAvatar (user_id) {
      try {
        //Obtener el usuario por su ID para verificar si tiene un avatar existente
        const user = await db.User.findByPk(user_id);
        if(!user){
            throw new AppError("User not found", 404);
        }
        //Eliminar el avatar de cloudinary si es que existe
        if(user.avatar){
            const publicId = user.avatar.split('/').pop().split('.')[0];//Obtengo el PUBLICID de cloudinary
            await cloudinary.uploader.destroy(publicId)
        }
        //Actualizar el campo 'avatar' del usuario en la base de datos con el avatar por defecto
        const updateUser = await user.update({avatar:defaultValue});
        return updateUser;
      } catch (error) {
        throw new AppError(error.message, 500)
      }
    }
}

module.exports = AvatarServices;