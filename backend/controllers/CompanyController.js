import CompanyModel from "../models/CompanyModel.js";
import bcrypt from 'bcrypt';
import { createToken } from "../helper/createToken.js";
import { uploadToCloudinary } from "../helper/uploadToCloudinary.js";

export const createCompany = async(req , res) =>{
    try{
        const {
            companyName,
        } = req.body

        const newCompany = new CompanyModel({
            companyName,
        });

        const company = await newCompany.save();
        console.log("Company Created Successfully");

        res.status(200).json({
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
export const updateCompany = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            companyName,
            description,
            website,
            location,
            createdBy
        } = req.body;

        const createdAt = new Date();
        console.log(createdAt);

        const isCompany = await CompanyModel.findById(id);

        if (!isCompany) {
            return res.status(404).json({
                message: "Company not found"
            });
        }
        const { buffer, mimetype } = req.file;
        const documentBuffer = buffer;
        const logoUrl = await uploadToCloudinary(companyName, documentBuffer, 'Logo');

        const company = await CompanyModel.findByIdAndUpdate(
            id,
            {
                companyName,
                description,
                website,
                location,
                logo : logoUrl,
                createdBy,
                createdAt
            },
            { new: true }
        );

        res.status(200).json({
            message: "Company updated successfully",
            company
        });
    } catch (error) {
        console.log("ERROR IN UPDATING COMPANY _", error);
        res.status(500).json({
            message: "Internal server error",
            error
        });
    }
};

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

export const getAllCompanies = async (req, res) => {
    try {
        const companies = await CompanyModel.find(); 
        console.log("Companies Fetched Successfully");
        res.status(200).json({
            message: "Companies Fetched Successfully",
            companies
        });
    } catch (error) {
        console.log("ERROR IN FETCHING COMPANIES _", error);
        res.status(500).json({
            message: "Internal server error",
            error
        });
    }
};

export const getCompany = async(req, res) =>{
    try{
        const { id } = req.params;
        const company = await CompanyModel.findById({_id : id});
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

