const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('nodesequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

// try {
//     sequelize.authenticate()
//     console.log('Conectado com sucesso')

// } catch (error) {
//     console.log('Erro ao conectar no sequelize: ', error)
// }

module.exports = sequelize