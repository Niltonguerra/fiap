import { Person } from "@/entities/person.entity";
import { User } from "@/entities/user.entity";
import { database } from "@/lib/pg/db";

export class UserRepository {
  public async create({username, password}:User): Promise<User | undefined>  {
    const result = await database.clientInstance?.query<User>(
      `INSERT INTO "USER" (username, password) VALUES ($1, $2) RETURNING *`,
      [username, password]
    );
    return result?.rows[0];
  }

  public async  findWithPersonId(userId: number):Promise<User & Person| undefined> {
    const result = await database.clientInstance?.query(
      `SELECT * FROM "USER" LEFT JOIN person ON "USER".id = person.user_id WHERE "USER".id = $1`,
      [userId],
    );
    return result?.rows[0];
  }
}