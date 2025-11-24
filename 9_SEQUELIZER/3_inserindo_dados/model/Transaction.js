const {DataTypes} = require('sequelize');

const db = require('../db/conn')

const Transaction = db.define('Transaction', {
    bank: {
        type: DataTypes.STRING,
        allowNull: false
    },

    value: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false       
    },

    category: {
        type: DataTypes.STRING,
        allowNull: false        
    },

    type: {
        type: DataTypes.ENUM('income', 'expense'),
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: true
    },

    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }


})

module.exports = Transaction