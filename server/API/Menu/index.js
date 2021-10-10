//Libraries
import express from "express";

//Database Model
import { MenuModel, ImageModel } from "../../database/Allmodel";

const Router = express.Router();

/*
Route           /list
Descrip         Get the list of menu based on id
Params          _id
Access          Public
Method          GET
*/
Router.get("/list/:_id", async (req,res) => {
    try {
        const {_id} = req.params;
        const menus = await MenuModel.findOne(_id);

        return res.json({menus});
    } catch (error) {
            return res.status(500).json({error: error.message});
    }
});

/*
Route           /image
Descrip         Get menu image based on id 
Params          _id
Access          Public
Method          GET
*/
Router.get("/image/:_id", async (req,res) => {
    try {
        const {_id} = req.params;
        const menus = await ImageModel.findOne(_id);

        return res.json({menus});
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;