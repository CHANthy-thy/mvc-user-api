import { Request, Response } from "express";
import { UserService } from "../service/User";

const userService = new UserService();

export class UserController {

 
  static async getAll(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }


  static async getOne(req: Request, res: Response) {
    try {
      const user = await userService.getUserById(Number(req.params.id));
      res.json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }


  static async create(req: Request, res: Response) {
    try {
      
      const result = await userService.createNewUser(req.body);
      res.status(201).json({ message: "User created", data: result });
    } catch (error: any) {
      
      res.status(400).json({ error: error.message });
    }
  }

  
  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await userService.updateExistingUser(Number(id), req.body);
      res.json({ message: "Updated", data: result });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }


  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await userService.removeUser(Number(id));
      res.json({ message: "Deleted" });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
