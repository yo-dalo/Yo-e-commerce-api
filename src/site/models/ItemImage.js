const db = require('../config/db');

class ItemImage {
    // Get images by item ID
    static async getByItemId(itemId) {
        const query = `SELECT * FROM item_images WHERE item_id = ?`;
        const [images] = await db.execute(query, [itemId]);
        return images;
    }




    // Create new image
    static async create({ item_id,img }) {
      console.log({ item_id,img });
        const query = `
            INSERT INTO item_images (item_id, img)
            VALUES (?, ?)
        `;
        await db.execute(query, [item_id, img]);
    }

    // Delete images by item ID
    static async deleteByItemId(itemId) {
        const query = `DELETE FROM item_images WHERE item_id = ?`;
      const deleteImg  = await db.execute(query, [itemId]);
      
    }
    static async deleteById(id) {
        const query = `DELETE FROM item_images WHERE id = ?`;
      await db.execute(query, [id]);
      
    }
}

module.exports = ItemImage;
