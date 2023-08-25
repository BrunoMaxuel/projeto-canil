import { Schema, model, Model, connection } from "mongoose";
type UserType = {
    email: string,
    password: string
};

const schema = new Schema<UserType>({
    email: {type: String, required: true},
    password: {type: String, required: true}
  });

const modelName: string = 'users';
export default (connection && connection.models[modelName]) ?
    connection.models[modelName] as Model<UserType>
     :
    model<UserType>(modelName, schema, 'users');