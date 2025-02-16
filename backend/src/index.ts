import app from "./app";
import dotenv from "dotenv";
import { sequelize } from "./config/mysql";
import redis from "./config/redis";
import "./models/characters.model";
import "./models/locations.model";

dotenv.config();

async function main() {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: false });

        const port = process.env.PORT || 8080;
        app.listen(port, () => {
            console.log(`✅ Server Running on port ${port}`);
        });

    } catch (error: any) {
        console.error("❌ Unable to start the server:", error);
        process.exit(1);
    }
}

main();
