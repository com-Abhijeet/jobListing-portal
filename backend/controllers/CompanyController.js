import CompanyModel from "../models/CompanyModel.js";
import bcrypt from 'bcrypt';
import { sendRegisterSuccessMail } from "../Mailer/sendRegisterSuccessMail.js";
import { createToken } from "../helper/createToken.js";

export const createCompany = async(req , res) =>{
    try{
        const {
            companyName,
            email,
            password,
            contact
        } = req.body

        
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newCompany = new CompanyModel({
            companyName,
            email,
            password : hashedPassword,
            contact,
        });

        const company = await newCompany.save();
        console.log("Company Created Successfully");
        sendRegisterSuccessMail({ recipient_email : email ,companyName});
        res.status(201).json({
            message: "Company Created Successfully",
            company
        });
    }catch(error){
        console.log("ERROR IN CREATING COMPANY _", error);
        res.status(500).json({
            message: "Internal server error" , error
        });
    }
};

export const companyLogin = async(req, res)=>{
    try{
        const { email , password } = req.body;
        const company = await CompanyModel.findOne({email : email})
        if(!company){
            return res.status(404).json({
                message: "Company not found"
            });
        }
        const isMatch = await bcrypt.compare(password, company.password);
        if(!isMatch){
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        }
        const token = createToken(company._id, company.companyName);
                console.log("Generated token" , token);
                  
                res.cookie('token', token, {
                    httpOnly: false,
                    maxAge: 24*60*60*1000,
                    secure : process.env.NODE_ENV === 'production',
                    sameSite: 'Strict'
                    
                });
                console.log("Token set in Cokkie");
                res.status(200).json({
                    message: 'Login successful',
                    token,
                });
    }catch(error){
        console.log("ERROR IN LOGGING IN COMPANY _", error);
        res.status(500).json({
                message: "Internal server error" , error
            });
    }
}
export const updateCompany = async(req, res) =>{
    try{
        const { id } = req.params;
        const { companyName, email, password, contact } = req.body;
        const company = await CompanyModel.findByIdAndUpdate(id, { companyName, email, password, contact }, { new: true });
        console.log("Company Updated Successfully");
        res.status(200).json({
            message: "Company Updated Successfully",
            company
        });
    }catch(error){
        console.log("ERROR IN UPDATING COMPANY _", error);
        res.status(500).json({
            message: "Internal server error" , error
        });
    }
}

export const deleteCompany = async(req, res) =>{
    try{
        const { id } = req.params;
        const company = await CompanyModel.findByIdAndDelete(id);
        console.log("Company Deleted Successfully");
        res.status(200).json({
            message: "Company Deleted Successfully",
            company
        });
    }catch(error){
        console.log("ERROR IN DELETING COMPANY _", error);
        res.status(500).json({
            message: "Internal server error" , error
        });
    }
}

export const getAllCompanies = async(req, res) =>{
    try{
        const company = await CompanyModel.find();
        console.log("Company Fetched Successfully");
        res.status(200).json({
            message: "Company Fetched Successfully",
            company
        });
    }catch(error){
        console.log("ERROR IN FETCHING COMPANY _", error);
        res.status(500).json({
            message: "Internal server error" , error
        });
    }
}

export const getCompany = async(req, res) =>{
    try{
        const { id } = req.params;
        const company = await CompanyModel.findById(id);
        console.log("Company Fetched Successfully");
        res.status(200).json({
            message: "Company Fetched Successfully",
            company
        });
    }catch(error){
        console.log("ERROR IN FETCHING COMPANY _", error);
        res.status(500).json({
            message: "Internal server error" , error
        });
    }
}

