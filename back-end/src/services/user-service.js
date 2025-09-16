import { UserModel } from "../models/user-schema.js"

export const registerUser = async (userObject) => {
    try{
    const doc = await UserModel.create(userObject);
    return doc;
    }
    catch(err){
        throw err;

    }
}

export const LoginUser = async (userObject) => {
    try{
    const doc = await UserModel.findOne({email:userObject.email,password:userObject.password}).exec();
    return doc;
    }
    catch(err){
        throw err;

    }
}