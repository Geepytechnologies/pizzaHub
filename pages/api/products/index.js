import dbConnect from "../../../utils/db";
import Product from "../../../models/Product";

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    if (method === "GET") {
        try{
           const pizzas = await Product.find();
           res.status(200).json(pizzas);
        }catch(err){
            return res.status(500).json({ message: err.message });
        }
    }
    if (method === "POST") {
       try{
         const addpizza = await Product.create(req.body);
         res.status(201).json(addpizza);
       }catch(err){
          return res.status(500).json({ message: err.message });
       }
    }
  }