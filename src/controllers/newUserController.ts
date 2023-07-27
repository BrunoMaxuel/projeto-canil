import {Request, Response} from 'express';
import { User } from '../models/User';

export const cliente = async(req: Request, resp: Response)=>{
    const nameBody = req.body.name;
    const ageBody = parseInt(req.body.age);
    try {
        const newUser = await User.create({
          name: nameBody,
          age: ageBody,
        });
    
        console.log('Usuário criado:', newUser);
        // Outras operações a serem realizadas após a criação do usuário.
      } catch (error) {
        console.error('Erro ao criar usuário:', error);
      }
    resp.redirect('/');
}