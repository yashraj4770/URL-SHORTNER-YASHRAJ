import { UserModel } from "../models/user-schema.js";

// User Service - CRUD
export const registerUser = async (userObject) => {
  try {
    const doc = await UserModel.create(userObject);
    return doc;
  } catch (err) {
    throw err;
  }
};