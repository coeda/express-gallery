module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Photo", {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.User);
      }
    }
  });

  return Task;
};