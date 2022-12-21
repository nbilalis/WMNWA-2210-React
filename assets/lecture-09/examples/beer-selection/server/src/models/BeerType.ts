import { Schema, Types, model } from 'mongoose';

interface IBeerType {
  title: string;
  slug: string;
  description: string;
  subtypes: Types.ObjectId[];
}

const schema = new Schema<IBeerType>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  subtypes: [{ type: Schema.Types.ObjectId, ref: 'subtypes' }],
});

const BeerType = model<IBeerType>('types', schema);

export default BeerType;
