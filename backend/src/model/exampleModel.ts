import { Model, model, Schema } from "mongoose";
import { IExample } from "../interface/IExample";

const ExampleSchema: Schema = new Schema({});
ExampleSchema.index({ member_id: 1, type: -1 });
const Example: Model<IExample> = model<IExample>("Example", ExampleSchema);
export default Example;
