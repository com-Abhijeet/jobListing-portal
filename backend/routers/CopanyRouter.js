import { Router } from "express";
import { createCompany, updateCompany, deleteCompany, getCompany, getAllCompanies, companyLogin } from "../controllers/CompanyController.js";
import authenticateToken from "../middleware/authenticateToken.js";

const CompanyRouter = Router();

CompanyRouter.post("/create", createCompany);
CompanyRouter.get("/login", companyLogin);
CompanyRouter.put("/update/:id", authenticateToken, updateCompany);
CompanyRouter.delete("/delete/:id", authenticateToken, deleteCompany);
CompanyRouter.get("/get", authenticateToken, );
CompanyRouter.get("/get/:id", authenticateToken, getCompany);

export default CompanyRouter;

