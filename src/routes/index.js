import { Router } from "express";
const router = Router();
router.get("/", (req, res) => {
    res.render("index");
});
router.get("/propiedades", (req, res) => {
    res.render("propiedades");
});
router.get("/admin", (req, res) => {
    res.render("admin");
});
router.get("/dashboard", (req, res) => {
    res.render("dashboard");
});

export default router;