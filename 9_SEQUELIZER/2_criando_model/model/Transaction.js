const {DataTypes} = require('sequelize');

const db = require('../db/conn')

const Transaction = db.define('Transaction', {
    bank: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Bank name is required' },
            notEmpty: { msg: 'Bank name cannot be empty' }
        }
    },

    value: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {msg: 'Value is reuqired'},
        min: 0.01
    },

    category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {msg: 'Category is required'},
            notEmpty: {msg: 'Category cannot be ampty'},
            isIn: {
                args: [['food', 'transport','entertainment', 'bills', 'health', 'education', 'other']],
                msg: 'Category must be one of: food, transport, entertainment, bills, health, education, other'
            }
        }
    },

    type: {
        type: DataTypes.ENUM('income', 'expense'),
        allowNull: false,
        validate: {
            notNull: {msg: 'Transaction type is required'}
        }
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