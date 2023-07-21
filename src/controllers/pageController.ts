import { Request, Response } from "express";

export const home = (req: Request, res: Response)=>{
    res.send('Pagina inicial');
}
export const dogs = (req: Request, res: Response)=>{
    res.send('pagina de dogs');
}
export const cats = (req: Request, res: Response)=>{
    res.send('pagina de cats');
}
export const fishes = (req: Request, res: Response)=>{
    res.send('pagina de fishes');
}