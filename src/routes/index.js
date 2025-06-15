import { Router } from "express";
const router = Router();
router.get("/", (req, res) => {
    res.render("index", { title: "Inicio" });
});
router.get("/propiedades", (req, res) => {
    res.render("propiedades", { title: "Propiedades" });
});

export default router;