module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    dob: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          len: [8,8]
        }
      },
  });

  User.associate = function(models) {
    User.hasMany(models.Review, {
      onDelete: "cascade"
    });
  };

  return User;
};
