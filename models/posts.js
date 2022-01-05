const {Sequelize, DataTypes} = require('sequelize');
const connection = require('../database/connection.js');
const Posts = connection.define(`posts`, { // nome da tabela
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imgUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    createAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },

})
module.exports = Posts;