import { Router } from "express";
import { addNew, getSuppliers, remove, update } from "../controllers/supplier";

const router = Router();
router.get('/', getSuppliers);
router.post('/add-new', addNew);
router.put('/update', update);
router.delete('/remove', remove);

export default router;