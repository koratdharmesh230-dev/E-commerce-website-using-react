'use strict';

import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // define association here
    }
  }

  Order.init(
    {
      total_price: DataTypes.DECIMAL,
      status: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );

  return Order;
};
