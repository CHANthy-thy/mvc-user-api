import { User } from '../models/User';

// Must have 'export' here
export class UserService {
    async getAllUsers() {
        return await User.getAll();
    }

    async getUserById(id: number) {
        return await User.getById(id);
    }

    async createNewUser(userData: { name: string, email: string }) {
        if (!userData.email || !userData.email.includes('@')) {
            throw new Error("invalid email format");
        }
        return await User.create(userData.name, userData.email);
    }

    async updateExistingUser(id: number, userData: { name: string, email: string }) {
        return await User.update(id, userData.name, userData.email);
    }

    async removeUser(id: number) {
        return await User.delete(id);
    }
}
