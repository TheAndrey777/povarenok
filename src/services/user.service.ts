import { InsertResult } from "typeorm";
import { User } from "../entities/user";

class UserService {
  public async findByUsername(username: string): Promise<User | null> {
    return await User.findOne({
      where: {
        username
      },
      select: ["id", "admin", "email", "username", "password"]
    });
  }

  public async createUser(username: string, email: string, password: string): Promise<number | null>  {
    const res: InsertResult = await User.insert({
      username,
      email,
      password,
      admin: false
    });
    if (!res?.identifiers?.length)
      return null;

    return res.identifiers[0].id ?? null;
  }

  public async getUserById(id: number) {
    return await User.findOne({
      where: {
        id
      },
      relations: {
        favourites: true,
        recipes: true
      },
      select: ["id", "admin", "email", "username", "recipes", "favourites"]
    });
  }

  public async getAllUsers() {
    return await User.find();
  }
}

export default new UserService;