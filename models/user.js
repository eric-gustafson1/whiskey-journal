module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
<<<<<<< HEAD
    over21: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
=======
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        len: [8, 8]
      }
    },
>>>>>>> master
  });

  User.associate = function (models) {
    User.hasMany(models.Review, {
      onDelete: "cascade"
    });
  };

  return User;
};
