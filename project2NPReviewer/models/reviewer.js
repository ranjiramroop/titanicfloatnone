module.exports = function(sequelize, DataTypes) {
  var Reviewer = sequelize.define("Reviewer", {
    // Giving the Reviewer model a name of type STRING
    name: DataTypes.STRING
  });

  Reviewer.associate = function(models) {
    // Associating Reviewer with Posts
    // When an Reviewer is deleted, also delete any associated Posts
    Reviewer.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Reviewer;
};
