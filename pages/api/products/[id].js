import dbConnect from "../../../utils/db";
import Product from "../../../models/Product";

export default async function handler(req, res) {
    const { method, query:{ id} } = req;

    await dbConnect();

    if (method === "GET") {
        try{
           const pizza = await Product.findById(id);
           res.status(200).json(pizza);
        }catch(err){
            return res.status(500).json({ message: err.message });
        }
    }
    if (method === "PUT") {
       try{
         const editpizza = await Product.findByIdAndUpdate(id);
         res.status(201).json(editpizza);
       }catch(err){
          return res.status(500).json({ message: err.message });
       }
    }
    if (method === "DELETE") {
       try{
         const addpizza = await Product.create(req.body);
         res.status(201).json(addpizza);
       }catch(err){
          return res.status(500).json({ message: err.message });
       }
    }
  }