import { Sequelize } from 'sequelize'

const db = new Sequelize(
    'app-task-react',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

export default db