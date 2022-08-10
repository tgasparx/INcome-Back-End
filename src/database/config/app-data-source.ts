import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "123",
    database: "income",
    entities: ["src/database/Models/*.entity.ts"],
    logging: true,
    synchronize: true,
})