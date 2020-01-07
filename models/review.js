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
            allowNull: true,
            defaultValue: false,
            validate: {
              len: [1]
            }
          }
      });
  
    Review.associate = function(models) {
      
      Review.belongsTo(models.User, {
        foreignKey: {
            allowNull: true
          }
      });

      Review.belongsTo(models.Whiskey, {
        foreignKey: {
            allowNull: true
          }
      });
    };
  
    return Review;
  };