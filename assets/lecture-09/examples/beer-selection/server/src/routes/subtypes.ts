import BeerSubtype from "../models/BeerSubtype";
import BeerType from "../models/BeerType";
import type { Request, Response } from "express";
import { Router } from "express";

("use strict");

const router = Router();

router.route("/subtypes").get(async (req: Request, res: Response) => {
  let slug, type;

  if ((slug = req.query.type)) {
    type = await BeerType.findOne({ slug }).exec();
  }

  console.info({ type });

  try {
    let subtypes;
    subtypes = await BeerSubtype.find(type ? { type: type._id } : {})
      .populate("type")
      .exec();

    /* const slugify = (str: string) =>
      str
        .toLowerCase()
        .trim()
        .replace("dunkelweizen", "dunkleweizen")
        .replace(/[\s_-]+/g, "-")
        .replace(/[^\w-]/g, "");

    subtypes.forEach((subtype) => {
      console.info({ subtype });

      BeerSubtype.updateOne(
        { _id: subtype._id },
        {
          $set: {
            slug: slugify(subtype.title),
          },
        }
      ).exec();
    }); */

    /* BeerSubtype.updateMany(
      { type: new ObjectId("63988b418970aa7d320ec5aa") },
      {
        $set: {
          image_url: undefined,
        },
      }
    ).exec(); */

    res.json(subtypes);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.route("/subtypes/:id").get(async (req: Request, res: Response) => {
  try {
    const type = await BeerSubtype.findById(req.params.id)
      .populate("type")
      .exec();

    if (!type) {
      return res.status(404).json({ message: "Type not found" });
    }

    res.json(type);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
