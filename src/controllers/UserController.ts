import { Request, Response } from "express";
import { UserService } from "../service/User";

// បង្កើត instance នៅខាងក្រៅ class បែបនេះគឺត្រឹមត្រូវហើយ
const userService = new UserService();

export class UserController {

  // GET ALL
  static async getAll(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  // GET ONE
  static async getOne(req: Request, res: Response) {
    try {
      const user = await userService.getUserById(Number(req.params.id));
      res.json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  // CREATE
  static async create(req: Request, res: Response) {
    try {
      // បោះ req.body ទៅឱ្យ Service ឆែក Validation
      const result = await userService.createNewUser(req.body);
      res.status(201).json({ message: "User created", data: result });
    } catch (error: any) {
      // បើ Validation ក្នុង Service ខុស វានឹងលោតមក catch ត្រង់នេះ
      res.status(400).json({ error: error.message });
    }
  }

  // UPDATE
  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await userService.updateExistingUser(Number(id), req.body);
      res.json({ message: "Updated", data: result });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  // DELETE
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
