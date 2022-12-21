import BeerType from "../models/BeerType";
import { Router } from "express";
import type { Request, Response } from "express";
import { ObjectId } from "mongodb";

("use strict");

const router = Router();

router.route("/types").get(async (req: Request, res: Response) => {
  try {
    const types = await BeerType.find({}, null, { sort: { _id: -1 } });
    res.json(types.sort());
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.route("/types/:id").get((req: Request, res: Response) => {
  // BeerType.findById(req.params.id)
  BeerType.aggregate([
    {
      $match: { _id: new ObjectId(req.params.id) },
    },
    {
      $lookup: {
        from: "subtypes",
        localField: "_id",
        foreignField: "type",
        as: "subtypes",
      },
    },
  ])
    .then((type) => res.json(type))
    .catch((err) => res.status(400).json("Error: " + err));
});

export default router;
