import app from "./app";
import dotenv from 'dotenv';
import { sequelize } from "./config/mysql";
import "./models/characters.model"
import "./models/locations.model"


dotenv.config()

async function main() {

    try {
        await sequelize.authenticate()
        await sequelize.sync({ force: true })
        const port = process.env.PORT
        app.listen(port, () => {
            console.log(`✅ Server Running on port ${port}`)
        })
    } catch (error: any) {
        console.error('Unable to connect to the database:', error);
    }
}

main();