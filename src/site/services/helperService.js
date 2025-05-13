const Item = require('../models/Item');
const ItemImage = require('../models/ItemImage');
const ItemVariant = require('../models/ItemVariant');
const Category = require('../models/Category');
const Color = require('../models/Color');
const Refund = require("../models/Refund");
const Order = require("../models/Order");
const SubCategory = require('../models/SubCategory');
const Return = require("../models/Return");
const Size = require('../models/Size');
const Payment = require("../models/Payment");
const User = require("../models/User");


const allCount = async (query) => {
   const c1= await Item.totel();
  const c2=   await Category.totel();
  const c3=   await Color.totel();
  const c4=   await Refund.totel();
  const c5=   await Order.totel();
  const c6=   await SubCategory.totel();
  const c7=   await Return.totel();
  const c8=   await Size.totel();
  const c9=   await Payment.totel();
  
   
    
    return [{
      ...c1[0],
      ...c2[0],
      ...c3[0],
      ...c4[0],
      ...c5[0],
      ...c6[0],
      ...c7[0],
      ...c8[0],
      ...c9[0],
      
    }]
    
};



module.exports = {
    allCount,
};
