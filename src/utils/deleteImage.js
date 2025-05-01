const fs = require('fs');
const path = require('path');

 const deleteImage = (image) => {
const imagePath = path.join('uploads', image);
  fs.unlink(imagePath, (err) => {
    if (err) {
      console.error('Error deleting image:', err);
    } else {
      console.log('Image deleted successfully');
    }
  });
};

module.exports = deleteImage;