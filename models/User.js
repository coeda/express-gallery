module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        validatePassword: (value) => {
          if(/[{}<>;]/g.test(value)) {
            throw new TypeError("invalid characters in password");
          }
        }
      }
    },
    emailaddress: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        isIn: [['ADMIN', 'USER']]
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Photo);
      }
    }
  });

  return User;
};