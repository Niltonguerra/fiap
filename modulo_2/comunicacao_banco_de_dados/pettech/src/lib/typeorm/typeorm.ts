import { DataSource } from 'typeorm';

import { env } from '@/env';

export const appDataSource = new DataSource({
  type: 'postgres',
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  synchronize: true, // Use with caution in production
  logging: env.NODE_ENV === 'development', // Enable logging for debugging
  entities: ['src/lib/pg/typeorm/entities/*.ts'],
})

appDataSource.initialize()
  .then(() => {
  console.log('Database with typeorm connected')
})
  .catch((error) => {
    console.error('Error connecting to the database with typeorm:', error);
});