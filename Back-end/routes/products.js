import express from 'express';
import db from '../models/index.js';

const router = express.Router();
const Product = db.Product;

// Get all products

router.get('/', async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (err) {
        console.error("Error fetching products", err);
        res.status(500).json({error: "server error"});
    }
});

// Get single product by ID

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({error: "Product not found"});
        }
        res.json(product);
    } catch (err) {
        console.error("Error fetching product", err);
        res.status(500).json({error:"Server error"});
    }
});

export default router;