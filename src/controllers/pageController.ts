import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/pet";
import  users  from "../models/Auth";

export const home = (req: Request, res: Response)=>{
    let list = Pet.getAll();
    res.render('pages/page',{
        banner: {
            menu: createMenuObject('all'),
            title: 'Todos animais Disponíveis',
            background: 'allanimals.jpg'
        },
        list
    }
    );
}
export const dogs = (req: Request, res: Response)=>{
    let list = Pet.getFromType('dog');
    res.render('pages/page',{
        banner: {
            menu: createMenuObject('dog'),
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    }
    );
}
export const cats = (req: Request, res: Response)=>{
    let list = Pet.getFromType('cat');
    res.render('pages/page',{
        banner: {
            menu: createMenuObject('cat'),
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    }
    );
}
export const fishes = (req: Request, res: Response)=>{
    let list = Pet.getFromType('fish');
    res.render('pages/page',{
        banner: {
            menu: createMenuObject('fishe'), 
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    }
    );
}
export const login = (req: Request, res: Response)=>{
    res.render("pages/login");
}
export const cadastrar = async (req: Request, res: Response)=>{
    res.render("pages/cadastrar");
}
export const cadastrarAdd = async (req: Request, res: Response) => {
    const nomeBody = req.body.nome;
    const emailBody = req.body.email;
    const passwordBody = req.body.password;
      if(nomeBody && emailBody && passwordBody){
          const usuario = await users.findOne({ email: emailBody});
          if (usuario ) 
          {
              console.log("usuario já cadastrado!");
              res.redirect("/cadastrar");
          }
          else
            {
                await users.create({
                    nome: nomeBody,
                    email: emailBody,
                    password: passwordBody,
                });
                console.log("Usuario cadastrado com sucesso!");
                res.render("pages/login");
            }
      }
      else{
        console.log("Preencha todos os campos!");
        res.render("pages/cadastrar");
      }
      
};
  
  
  
  
  
  