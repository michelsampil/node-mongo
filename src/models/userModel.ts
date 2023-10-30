import mongoose, { Document, Schema, Model, model } from 'mongoose';

// Define the schema
interface IData extends Document {
  name: string;
  age: number;
}

const dataSchema: Schema<IData> = new Schema<IData>({
  name: {
    required: true,
    type: String
  },
  age: {
    required: true,
    type: Number
  }
});

// Define the model
const Data: Model<IData> = model<IData>('Data', dataSchema);

export default Data;
