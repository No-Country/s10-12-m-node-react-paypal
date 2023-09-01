const AvatarServices = require('../services/avatar.services');
const avatarServices = new AvatarServices();
const catchAsync = require('../helpers/catchAsync');

exports.updateAvatar =catchAsync( async (req, res, next) => {
    const user_id = req.params.id // id del usuario logeado
    console.log(user_id)
    const newAvatarFile = req.file; // Archivo de imagen subido

        const updateUser = await avatarServices.updateAvatar({user_id,newAvatarFile,next});
        res.status(200).json({
            status: 'success',
            message: 'Avatar updated successfully',
            user: updateUser,
        });
    });
    

    exports.deleteAvatar = catchAsync(async (req, res, next) => {
        const user_id = req.params.id // id del usuario 
        const deleteAvatar = await avatarServices.deleteAvatar(user_id,next)
        res.status(200).json({
            status: 'success',
            message: 'Avatar deleted successfully',
            user: deleteAvatar,
        });
    
    });