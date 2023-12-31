const User = require('./User');
const Plant = require('./Plant');
const addPlant = require('./addPlant');

User.hasMany(Plant, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Plant.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Plant, addPlant };
