const OrderItem = require('../models/orderItem');

const orderItemService = {
  create: async (data) => {
    const [result] = await OrderItem.create(data);
    return result;
  },

  getAll: async () => {
    const [rows] = await OrderItem.findAll();
    return rows;
  },

  getById: async (id) => {
    const [rows] = await OrderItem.findById(id);
    return rows[0];
  },

  update: async (id, data) => {
    const [result] = await OrderItem.update(id, data);
    return result;
  },

  delete: async (id) => {
    const [result] = await OrderItem.delete(id);
    return result;
  }
};

module.exports = orderItemService;
