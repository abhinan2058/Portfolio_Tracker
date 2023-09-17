module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
      fullname:{
        type: DataTypes.TEXT,
        allowNull:false,
      },
      username:{
        type: DataTypes.TEXT,
        allowNull:false,
      },
      password:{
        type:DataTypes.TEXT,
        allowNull:false,
      },
      confirmPassword:{
        type: DataTypes.TEXT,
        allowNull:false,
      },
      email:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contact:{
        type: DataTypes.INTEGER,
        allowNull:true,
      }

      
    
    });
    return User;
  };