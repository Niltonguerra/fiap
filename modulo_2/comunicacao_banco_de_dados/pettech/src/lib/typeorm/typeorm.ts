import { DataSource } from 'typeorm';
import { env } from '@/env';
import { Product } from '@/entities/product.entity';
import { Category } from '@/entities/category.entity';
import { ProductAutoGenerateUUID1751217296592 } from './migrations/1751217296592-ProductAutoGenerateUUID';

export const appDataSource = new DataSource({
  type: 'postgres',
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  synchronize: true, // Use with caution in production
  logging: env.NODE_ENV === 'development', // Enable logging for debugging
  entities: [Product,Category],
  migrations: [ProductAutoGenerateUUID1751217296592 ],
})

appDataSource.initialize()
  .then(() => {
  console.log('Database with typeorm connected')
})
  .catch((error) => {
    console.error('Error connecting to the database with typeorm:', error);
});