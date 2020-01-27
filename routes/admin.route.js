import express from 'express';
import {
    AddProduct_POST,
    Products_GET
}
from '../controllers/admin.controller.js';

export const router = express.Router();

router.post('/add-product', AddProduct_POST);
router.get('/products', Products_GET);