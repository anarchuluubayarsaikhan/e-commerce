import { Request, Response } from "express";
import { postProduct } from "../model/postproductmodel";

const productfiltercontroller = async (req: Request, res: Response) => {
  try {
    const { categoryvalue, size } = req.query;

    let categories: string[] = [];
    

    console.log(req.query)

    if (categoryvalue) {
      categories = String(categoryvalue).split(",");
    }
   

    console.log({categories})

    const filter: { subcategory?: {$in: string[]}; size?: string } = {};
    if (categoryvalue) {
      filter.subcategory = {$in: categories}
    }
    if (size) {
      filter.size = String(size);
    }
    const filtereddata = await postProduct.find(filter);
    res.send(filtereddata);
  } catch (error) {
    console.error(error);
    res.status(404).send("Could not filter");
  }
};
export { productfiltercontroller };
