import { Schema, Types, model } from "mongoose";

interface IBeerSubtype {
  title: string;
  slug: string;
  description: string;
  abv: { from: number; to: number; unit: "%" } | "Varies";
  ibu: { from: number; to: number } | "Varies";
  pairs_with: string;
  serving_temperature: { from: number; to: number; unit: "℉" | "℃" } | "Varies";
  image_url?: string;
  type: Types.ObjectId;
}

const schema = new Schema<IBeerSubtype>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  abv: { type: Object, required: true },
  ibu: { type: Object, required: true },
  pairs_with: { type: String, required: true },
  image_url: { type: String },
  type: { type: Schema.Types.ObjectId, ref: "types", required: true },
});

const BeerSubtype = model<IBeerSubtype>("subtypes", schema);

export default BeerSubtype;
