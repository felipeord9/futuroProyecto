const { User, UserSchema } = require('./userModel')
const { Product, ProductSchema} = require('./productModel')

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Product.init(ProductSchema,Product.config(sequelize))

  User.associate(sequelize.models)
  Product.associate(sequelize.models)

}

module.exports = setupModels