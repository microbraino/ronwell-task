import 'reflect-metadata';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: true,
  logging: false,
  entities: ["./src/entities/*.ts"],
  subscribers: ["./src/subscribers/**/*.ts"],
  migrations: ["./src/migrations/**/*.ts"]
});

export default AppDataSource;

