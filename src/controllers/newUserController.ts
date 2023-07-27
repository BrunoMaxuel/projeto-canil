import {Request, Response} from 'express';
import { User } from '../models/User';

export const cliente = async(req: Request, resp: Response)=>{
    // const name = req.body.name;
    // const age = parseInt(req.body.age);
    resp.redirect('/');
    // await User.create({
    //     name: name,
    //     age: age
    // });
    // resp.redirect('/');
}