const db = require('../../config/db');

class Item {
  static async findAll(filters = {}) {
    try {
      let query = `
        SELECT i.*, 
               c.name as category_name, c.slug as category_slug,
               sc.name as subcategory_name, sc.slug as subcategory_slug
        FROM items i
        LEFT JOIN categories c ON i.category_id = c.id
        LEFT JOIN sub_categories sc ON i.subcategory_id = sc.id
        WHERE i.deleted_at IS NULL
      `;
      const params = [];

      // Apply filters
      if (filters.status) {
        query += ' AND i.status = ?';
        params.push(filters.status);
      }

      if (filters.category_id) {
        query += ' AND i.category_id = ?';
        params.push(filters.category_id);
      }

      if (filters.category_slug) {
        query += ' AND c.slug = ?';
        params.push(filters.category_slug);
      }

      if (filters.subcategory_id) {
        query += ' AND i.subcategory_id = ?';
        params.push(filters.subcategory_id);
      }

      if (filters.subcategory_slug) {
        query += ' AND sc.slug = ?';
        params.push(filters.subcategory_slug);
      }

      if (filters.search) {
        query += ' AND (i.name LIKE ? OR i.description LIKE ?)';
        params.push(`%${filters.search}%`, `%${filters.search}%`);
      }

      if (filters.min_price || filters.max_price) {
        query += ' AND EXISTS (SELECT 1 FROM item_variants iv WHERE iv.item_id = i.id';
        if (filters.min_price) {
          query += ' AND iv.price >= ?';
          params.push(filters.min_price);
        }
        if (filters.max_price) {
          query += ' AND iv.price <= ?';
          params.push(filters.max_price);
        }
        query += ')';
      }

      if (filters.in_stock === 'true') {
        query += ' AND EXISTS (SELECT 1 FROM item_variants iv WHERE iv.item_id = i.id AND iv.stock > 0)';
      }

      // Sorting
      query += ' ORDER BY ';
      if (filters.sortBy) {
        const validSortColumns = ['name', 'created_at', 'updated_at', 'price'];
        if (validSortColumns.includes(filters.sortBy)) {
          if (filters.sortBy === 'price') {
            query += `(SELECT MIN(price) FROM item_variants WHERE item_id = i.id) ${filters.sortOrder === 'desc' ? 'DESC' : 'ASC'}`;
          } else {
            query += `i.${filters.sortBy} ${filters.sortOrder === 'desc' ? 'DESC' : 'ASC'}`;
          }
        } else {
          query += 'i.created_at DESC';
        }
      } else {
        query += 'i.created_at DESC';
      }

      // Pagination
      if (filters.limit) {
        query += ' LIMIT ?';
        params.push(parseInt(filters.limit));
        
        if (filters.offset) {
          query += ' OFFSET ?';
          params.push(parseInt(filters.offset));
        }
      }

      const [items] = await db.query(query, params);
      
      // Get images and variants for each item
      const itemsWithDetails = await Promise.all(
        items.map(async (item) => {
          const [images] = await db.query('SELECT * FROM item_images WHERE item_id = ?', [item.id]);
          const [variants] = await db.query('SELECT * FROM item_variants WHERE item_id = ?', [item.id]);
          return {
            ...item,
            images,
            variants
          };
        })
      );

      return itemsWithDetails;
    } catch (error) {
      throw new Error(`Failed to fetch items: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      const [items] = await db.query(`
        SELECT i.*, 
               c.name as category_name, c.slug as category_slug,
               sc.name as subcategory_name, sc.slug as subcategory_slug
        FROM items i
        LEFT JOIN categories c ON i.category_id = c.id
        LEFT JOIN sub_categories sc ON i.subcategory_id = sc.id
        WHERE i.id = ? AND i.deleted_at IS NULL
      `, [id]);

      if (items.length === 0) return null;

      const item = items[0];
      const [images] = await db.query('SELECT * FROM item_images WHERE item_id = ?', [id]);
      const [variants] = await db.query('SELECT * FROM item_variants WHERE item_id = ?', [id]);

      return {
        ...item,
        images,
        variants
      };
    } catch (error) {
      throw new Error(`Failed to fetch item by ID: ${error.message}`);
    }
  }

  // Other methods...
}

module.exports = Item;