import { response } from "express";
import PostMessage from "../models/dataModel.js";
// these can be used with axios to make api calls and they are the funcction names.


export const getLeads = async (req, res) => {
    Leads.findAll().then((users) => {
    res.send(users);
});
};

export const getActivity = async (req,res)=>{
   

};

export const getShipment= async(req, res) => {
   
}

export const getCargo= async(req, res) => {
    
}

