import { Router } from "express";
import { createCompany, updateCompany, deleteCompany, getCompany, getAllCompanies, companyLogin } from "../controllers/CompanyController.js";
import authenticateToken from "../middleware/authenticateToken.js";
import upload from "../middleware/multer.js"

const CompanyRouter = Router();

CompanyRouter.post("/register", createCompany);
CompanyRouter.post("/login", companyLogin);
CompanyRouter.get("/get", authenticateToken, getAllCompanies );
CompanyRouter.get("/get/:id", authenticateToken, getCompany);
CompanyRouter.put("/update/:id", authenticateToken, upload.single('file'), updateCompany);
CompanyRouter.delete("/delete/:id", authenticateToken, deleteCompany);


export default CompanyRouter;

