module.exports = function(sequelize, DataTypes) {
    var Whiskey = sequelize.define("Whiskey", {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
              len: [1]
            }
          }
      });
  
    Whiskey.associate = function(models) {
      
      Whiskey.hasMany(models.Review, {
        onDelete: "cascade"
      });
    };
  
    return Whiskey;
  };