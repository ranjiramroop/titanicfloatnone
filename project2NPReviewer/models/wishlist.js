module.exports = function(sequelize, DataTypes) {
  var wishlist = sequelize.define("wishlist", {
    apiID: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return wishlist;
};
