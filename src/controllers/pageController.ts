import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/pet";
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