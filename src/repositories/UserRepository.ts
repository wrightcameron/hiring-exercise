import { User } from "models/user";
import bcrypt from "bcryptjs";
import UserModel from "../models/users/user";

class UserRepository {
  private async hashPassword(password): Promise<string> {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            reject(err);
          } else {
            resolve(hash);
          }
        });
      });
    });
  }

  public async update(update: User, userId: string): Promise<User> {
    if (update.password) {
      update.password = await this.hashPassword(update.password);
    }
    return new Promise((resolve, reject) => {
      UserModel.update({ _id: userId }, update, (error, writeResult: User) => {
        if (error) {
          reject(error);
        } else {
          resolve(writeResult);
        }
      });
    });
  }

  public async doesExist(user: User): Promise<boolean> {
    return new Promise(resolve => {
      UserModel.find({ email: user.email }, (error: Error, users: User[]) => {
        if (error || !users.length) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }

  public async create(user: User): Promise<User> {
    const password: string = await this.hashPassword(user.password);
    const $user = new UserModel({
      ...user,
      password,
      admin: false
    });
    return $user.save();
  }

  public async getById(userId: string): Promise<User> {
    return new Promise((resolve, reject) => {
      UserModel.find({ _id: userId }, (error: Error, users: User[]) => {
        if (error) {
          reject(error);
        } else if (!users.length) {
          reject(`No user found with id: ${userId}`);
        } else {
          const user = users[0];
          delete user.password;
          resolve(user);
        }
      });
    });
  }

  public async list(): Promise<Array<User>> {
    return new Promise((resolve, reject) => {
      UserModel.find({}, (error: Error, users: User[]) => {
        if (error) {
          reject(error);
        } else if (!users.length) {
          reject(`No user found with id`);
        } else {
          users.forEach(user => {
            delete user.password;
          });
          resolve(users);
        }
      });
    });
  }

  public async deleteById(userId: string): Promise<string> {
    return new Promise((resolve, reject) => {
      UserModel.deleteOne({ _id: userId }, error => {
        if (error) {
          reject(error);
        } else {
          resolve(userId);
        }
      });
    });
  }
}

export default new UserRepository();
