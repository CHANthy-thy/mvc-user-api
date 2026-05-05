import { db } from "../config/db";

export class User {
  static async getAll() {
    const [rows] = await db.execute("SELECT * FROM users");
    return rows;
  }

  static async getById(id: number) {
    const [rows] = await db.execute("SELECT * FROM users WHERE id = ?", [id]);
    return rows;
  }

  static async create(name: string, email: string) {
    const [result] = await db.execute(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );
    return result;
  }

  static async update(id: number, name: string, email: string) {
    return await db.execute(
      "UPDATE users SET name=?, email=? WHERE id=?",
      [name, email, id]
    );
  }

  static async delete(id: number) {
    return await db.execute("DELETE FROM users WHERE id=?", [id]);
  }
}
