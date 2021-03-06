'use strict';
module.exports = (sequelize, DataTypes) => {
	const Transaction = sequelize.define(
		'Transaction',
		{
			startDate: DataTypes.DATEONLY,
			dueDate: DataTypes.DATEONLY,
			userId: DataTypes.INTEGER,
			attache: DataTypes.STRING,
			status: DataTypes.STRING
		},
		{
			tableName: 'transaction'
		}
	);
	Transaction.associate = function(models) {
		Transaction.belongsTo(models.User, {
			as: 'user',
			foreignKey: {
				name: 'userId'
			}
		});
	};
	return Transaction;
};
