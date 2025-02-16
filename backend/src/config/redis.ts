import Redis from "ioredis";

const redis = new Redis();

redis.on("error", (err) => {
    console.error("❌ Redis connection error:", err);
});

redis.on("connect", () => {
    console.log("✅ Redis Connected!");
});

export default redis;
