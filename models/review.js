module.exports = function(sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
        body: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1,1000]
          }
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          favorite: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            validate: {
              len: [1]
            }
          }
      });
  
    Review.associate = function(models) {
      
      Review.belongsTo(models.User, {
        foreignKey: {
            allowNull: false
          }
      });

      Review.belongsTo(models.Whiskey, {
        foreignKey: {
            allowNull: false
          }
      });
    };
  
    return Review;
  };