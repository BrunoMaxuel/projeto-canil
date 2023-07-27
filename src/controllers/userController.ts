import { Request, Response } from 'express';
import { User } from '../models/User';
import { where } from 'sequelize';

export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
};

export const NewName = async(req: Request, res: Response) => {
    await User.create({
        name: "fulano de tal",
        age: 200
    });
};

export const AumentarIdade = async(req: Request, res: Response) => {
    const id = req.params.id;
    let pesquisa = await User.findAll({ where: {id}});
    if(pesquisa.length > 0){
        let usuario = pesquisa[0];
        usuario.age++;
        await usuario.save();
    }
    res.redirect('/');
};

export const DiminuirIdade = async (req: Request, res: Response) => {
    const id = req.params.id;
    let pesquisa = await User.findAll({ where: {id}});
    if(pesquisa.length > 0){
        let usuario = pesquisa[0];
        usuario.age--;
        await usuario.save();
    }
    res.redirect('/');
};

export const DeleteUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    await User.destroy({where: {id}});
    res.redirect('/');
};


export const idadeAction = (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
};