import express from 'express';
import TEST_CONTROLLER from '../controllers/test.controller.js';

export const router = express.Router();

router.get('/', TEST_CONTROLLER);