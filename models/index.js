const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const User = require('./User');
const Cart = require('./Cart');
<<<<<<< HEAD
=======

>>>>>>> 30dc35061c3d702a6ccf4200e7b161809aabb423

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
})
// Products belongsTo User
Product.belongsTo(User, {
  foreignKey: "user_id",
})
// Categories have many Products
Category.hasMany(Product)
// User have many Products
User.hasMany(Product)
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag, 
  foreignKey: "tag_id",
})
Cart.belongsTo(User, {
  foreignKey: "user_id",
<<<<<<< HEAD
})  
User.hasOne(Cart, {
  foreignKey: "user_id",
})
Product.belongsTo(Cart, {
  foreignKey: "id",
})
Cart.hasMany(Product, {
  foreignKey: "cart_id",
})
=======
})
User.hasOne(Cart, {
  foreignKey: "user_id",
})

Product.belongsToMany(Cart, {
  through: Cart,
  foreignKey: "product_id",
  })
Cart.hasMany(Product, {
  foreignKey: "product_id",
})

>>>>>>> 30dc35061c3d702a6ccf4200e7b161809aabb423

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
  User,
  Cart
};
