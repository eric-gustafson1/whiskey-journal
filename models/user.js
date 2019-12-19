module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    over21: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
  });

  User.associate = function (models) {
    User.hasMany(models.Review, {
      onDelete: "cascade"
    });
  };

  return User;
};
