import { Router } from "express";
const router = Router();
router.get("/", (req, res) => {
    res.render("index");
});
router.get("/propiedades", (req, res) => {
    res.render("propiedades");
});

export default router;