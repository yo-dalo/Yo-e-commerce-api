const db = require('../config/db');

class Item {
    // Get all items with pagination and sorting
    static async getAll({ page = 1, limit = 10, sortBy = 'name', order = 'ASC' }) {
        const offset = (page - 1) * limit;
        const validSortBy = ['name', 'status', 'created_at'];
        const validOrder = ['ASC', 'DESC'];

        if (!validSortBy.includes(sortBy)) sortBy = 'name';
        if (!validOrder.includes(order)) order = 'ASC';

        const query = `
            SELECT i.*, c.name AS category_name, sc.name AS subcategory_name
            FROM items i
            LEFT JOIN categories c ON i.category_id = c.id
            LEFT JOIN sub_categories sc ON i.subcategory_id = sc.id
            WHERE i.deleted_at IS NULL
            ORDER BY ${sortBy} ${order}
            LIMIT ? OFFSET ?
        `;
        const [items] = await db.execute(query, [limit, offset]);
        return items;
    }

    // Get item by ID
    static async getById(id) {
      console.log(id);
        const query = `
            SELECT i.*, c.name AS category_name, sc.name AS subcategory_name
            FROM items i
            LEFT JOIN categories c ON i.category_id = c.id
            LEFT JOIN sub_categories sc ON i.subcategory_id = sc.id
            WHERE i.id = ? AND i.deleted_at IS NULL
        `;
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    }

    // Get item by ID for update
    static async getByIdForUpdate(id) {
        const query = `
            SELECT *
            FROM items
            WHERE id = ? AND deleted_at IS NULL
        `;
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    }

    // Create new item
    static async create({ name, description, category_id, subcategory_id, status, created_by }) {
        const query = `
            INSERT INTO items (name, description, category_id, subcategory_id, status, created_by)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const [result] = await db.execute(query, [name, description, category_id, subcategory_id, status, created_by]);
        return result.insertId;
    }

    // Update item by ID
    static async update(id, { name, description, category_id, subcategory_id, status, updated_by }) {
        const query = `
            UPDATE items
            SET name = ?, description = ?, category_id = ?, subcategory_id = ?, status = ?, updated_by = ?
            WHERE id = ? AND deleted_at IS NULL
        `;
        await db.execute(query, [name, description, category_id, subcategory_id, status, updated_by, id]);
    }


static async totel() {
        const query = `SELECT COUNT(*) AS total_items FROM items;`;
        
        const [row]=  await db.execute(query);
      return row;
    }


    // Soft delete item by ID
    static async delete(id) {
        const query = `
            UPDATE items
            SET deleted_at = CURRENT_TIMESTAMP
            WHERE id = ?
        `;
        await db.execute(query, [id]);
    }
    
    
    
    //////////// for main website modle 
    
    
    // models/itemModel.js

   static async getByIdX(id) {
  const query = `
    SELECT 
  i.id AS item_id,
  i.name,
  i.description,
  i.category_id,
  c.name AS category_name,
  i.subcategory_id,
  sc.name AS subcategory_name,
  i.status AS item_status,

  iv.id AS variant_id,
  iv.size_id,
  GROUP_CONCAT(DISTINCT s.size) AS size_name,
  iv.color_id,
  GROUP_CONCAT(DISTINCT co.color) AS color_name,
  iv.stock,
  iv.low_stock_threshold,
  iv.price,
  iv.is_out_of_stock,
  iv.status AS variant_status,
  GROUP_CONCAT(DISTINCT ii.image_path) AS images

FROM items i
JOIN categories c ON i.category_id = c.id
JOIN sub_categories sc ON i.subcategory_id = sc.id
JOIN item_variants iv ON i.id = iv.item_id
JOIN sizes s ON iv.size_id = s.id
JOIN colors co ON iv.color_id = co.id
LEFT JOIN item_images ii ON iv.id = ii.variant_id

WHERE i.status = 'ACTIVE' AND iv.status = 'ACTIVE' AND iv.stock > 0

GROUP BY i.id, iv.id

    
  `;

  const [rows] = await db.execute(query, [id]);
  return rows;
};

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}

module.exports = Item;
