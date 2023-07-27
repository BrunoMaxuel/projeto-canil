import { Request, Response } from 'express';

import { Product } from '../models/Product';

import { User } from '../models/User';

export const home = async (req: Request, res: Response)=>{
    // const users = await User.findAll();

    // const user = await User.build({
    //     name: 
    // });
    // const user = await  User.findAll({where: {id: 17}});
     const users = await User.findAll();
    // if(user.length > 0){
    //     let usuario = user[0];
    //     usuario.age = 90;
    //     usuario.name = "bruninnnn";
    //     await usuario.save();
    // }
    // await User.destroy({ where: {id: 17}});

    // let results = await User.findAll({ where: {name: "moça de dão"}});
    // if(results.length > 0){
    //     let usuario = results[0];
    //     await usuario.destroy();
    // }
    res.render('pages/home');
};