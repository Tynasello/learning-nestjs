import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema({
  name: String,
  description: String,
  population: Number,
});
