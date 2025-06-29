import { database } from "@/lib/pg/db";
import { IUserRepository } from "../user.repository.interface";
import { IPerson } from "@/entities/models/person.interface";
import { IUser } from "@/entities/models/user.interface";

export class UserRepository implements IUserRepository {
  async findByUsername(username: string): Promise<IUser | undefined> {
    const result = await database.clientInstance?.query<IUser>(
      `SELECT * FROM "USER" WHERE "USER".username = $1`,
      [username],
    );
    return result?.rows[0];
  }

  public async create({username, password}:IUser): Promise<IUser | undefined>  {
    const result = await database.clientInstance?.query<IUser>(
      `INSERT INTO "USER" (username, password) VALUES ($1, $2) RETURNING *`,
      [username, password]
    );
    return result?.rows[0];
  }

  public async  findWithPersonId(userId: number):Promise<IUser & IPerson| undefined> {
    const result = await database.clientInstance?.query(
      `SELECT * FROM "USER" LEFT JOIN person ON "USER".id = person.user_id WHERE "USER".id = $1`,
      [userId],
    );
    return result?.rows[0];
  }
}