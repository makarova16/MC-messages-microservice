'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  messages.init({
    user_connection_id: DataTypes.STRING,
    sender: DataTypes.STRING,
    message: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'messages',
  });
  return messages;
};