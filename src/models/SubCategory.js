const db = require('../config/db');

class SubCategory {
    // Get all subcategories with pagination and sorting
    static async getAll({ page = 1, limit = 10, sortBy = 'name', order = 'ASC' }) {
        const offset = (page - 1) * limit;
        const validSortBy = ['name', 'status', 'created_at'];
        const validOrder = ['ASC', 'DESC'];

        if (!validSortBy.includes(sortBy)) sortBy = 'name';
        if (!validOrder.includes(order)) order = 'ASC';

        const query = `
            SELECT sc.*, c.name AS category_name 
            FROM sub_categories sc
            LEFT JOIN categories c ON sc.category_id = c.id
            ORDER BY ${sortBy} ${order}
            LIMIT ? OFFSET ?
        `;
        const [subCategories] = await db.execute(query, [limit, offset]);
        return subCategories;
    }
    // Get subcategory by ID
    static async getById(id) {
        const query = `
            SELECT sc.*, c.name AS category_name 
            FROM sub_categories sc
            LEFT JOIN categories c ON sc.category_id = c.id
            WHERE sc.id = ?
        `;
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    }


static async getImgById(id) {
        const query = `
            SELECT img FROM sub_categories
            WHERE id = ?
        `;
        const [rows] = await db.execute(query, [id]);
        return rows[0]?.img;
    }





    // Get subcategory by ID for update
    static async getByIdForUpdate(id) {
        const query = `SELECT * FROM sub_categories WHERE id = ?`;
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    }

    // Create new subcategory
    static async create(img,{ category_id, name, slug, status, created_by }) {
        const query = `
            INSERT INTO sub_categories (category_id, name, slug, img, status, created_by)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const [result] = await db.execute(query, [
            category_id, name, slug, img, status, created_by
        ]);
        return result.insertId;
    }

    // Update subcategory by ID
    static async update(id,img, { category_id, name, slug, status, updated_by }) {
      console.log(id,img, { category_id, name, slug, status, updated_by });
        const query = `
            UPDATE sub_categories
            SET category_id = ?, name = ?, slug = ?, img = ?, status = ?, updated_by = ?
            WHERE id = ?
        `;
        await db.execute(query, [
            category_id, name, slug, img, status, updated_by, id
        ]);
    }
    static async updateWithoutImg(id, { category_id, name, slug, status, updated_by }) {
        const query = `
            UPDATE sub_categories
            SET category_id = ?, name = ?, slug = ?,  status = ?, updated_by = ?
            WHERE id = ?
        `;
        await db.execute(query, [
            category_id, name, slug,  status, updated_by, id
        ]);
    }


static async totel() {
        const query = `SELECT COUNT(*) AS total_sub_categories FROM sub_categories;`;
        
        const [row]=  await db.execute(query);
      return row;
    }


    // Delete subcategory by ID
    static async delete(id) {
        const query = `DELETE FROM sub_categories WHERE id = ?`;
        await db.execute(query, [id]);
    }
    
    
    ////extra moder 
    
        static async getAllByCatcategoryId(id,{ page = 1,  sortBy = 'name', order = 'ASC' }) {
      
        const validSortBy = ['name', 'status', 'created_at'];
        const validOrder = ['ASC', 'DESC'];

        if (!validSortBy.includes(sortBy)) sortBy = 'name';
        if (!validOrder.includes(order)) order = 'ASC';

        const query = `
            SELECT 
            id, 
            category_id,
            name,
            status
            from 
            sub_categories WHERE category_id =?
            ORDER BY ${sortBy} ${order}
        `;
        const [subCategories] = await db.execute(query, [id]);
        
        return subCategories;
    }

    
    
    
    
    
    
    
    
    
    
    
}

module.exports = SubCategory;
