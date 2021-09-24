import express from 'express';
import data from '../data.js';
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
})
);

productRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    const createProducts = await Product.insertMany(data.products);
    res.send({ createProducts });
})
);

productRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const products = await Product.findById(req.params.id);
        if (Product) { res.send(products); }
        else {
            res.status(404).send({ message: 'Product not found' });
        }

    })
);

export default productRouter;