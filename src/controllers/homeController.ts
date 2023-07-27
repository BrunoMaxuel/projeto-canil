import { Request, Response } from 'express';

import { Product } from '../models/Product';

import { User } from '../models/User';

export const home = async (req: Request, res: Response)=>{
    const users = await User.findAll();
    res.render('pages/home', {users});
};