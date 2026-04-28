import { Request, Response } from "express";
import { User } from "../models/User";

export class UserController {

  // CREATE
  static async create(req: Request, res: Response) {
    try {
      const { name, email } = req.body; // destructuring

      const result = await User.create(name, email);

      res.json({
        message: "User created",
        data: result
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  // GET ALL
  static async getAll(req: Request, res: Response) {
    try {
      const users = await User.getAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  // GET ONE
  static async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await User.getById(Number(id));

      res.json(user);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  // UPDATE
  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;

      const result = await User.update(Number(id), name, email);

      res.json({
        message: "Updated",
        data: result
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  // DELETE
  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await User.delete(Number(id));

      res.json({
        message: "Deleted",
        data: result
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}