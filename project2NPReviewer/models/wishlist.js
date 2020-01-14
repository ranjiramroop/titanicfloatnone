module.exports = function(sequelize, DataTypes) {
  var wishlist = sequelize.define("wishlist", {
    apiID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fullName: {
      type: DataTypes.STRING

      // allowNull: false
    },
    description: {
      type: DataTypes.TEXT
      // allowNull: false
    },
    url: {
      type: DataTypes.STRING
      // allowNull: false
    }
  });

  return wishlist;
};
