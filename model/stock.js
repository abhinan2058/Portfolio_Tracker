module.exports = (sequelize, DataTypes) => {
    const Stock = sequelize.define("stock", {
      scrip:{
        type: DataTypes.TEXT,
        allowNull:false,
      },
      quantity:{
        type: DataTypes.INTEGER,
        allowNull:false,
      },
      purchasePrice:{
        type:DataTypes.INTEGER,
        allowNull:false,
      },
      totalInvestment:{
        type: DataTypes.INTEGER,
        allowNull:true,
      },
    });
    return Stock;
  };