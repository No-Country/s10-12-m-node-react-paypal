const  cloudinary  = require('cloudinary');
require('dotenv').config();

cloudinary.config({ 
  cloud_name: 'dye5vc9zh', 
  api_key: '922837935385788', 
  api_secret: 'Lgu22MO_sM-fnbmOASxEpjROjXo'
});

module.exports = cloudinary;