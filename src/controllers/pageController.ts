import { Request, Response } from 'express';

export const home = (req: Request, res: Response) =>{
  res.send('HOME NO CONTROLE');
   //res.render('HOME NO CONTROLE');

}

export const dogs = (req: Request, res: Response) =>{
  //res.render('pages/page');

}

export const cats = (req: Request, res: Response) =>{
  //res.render('pages/page');

}

export const fishes = (req: Request, Res: Response) =>{
  //res.render('pages/page');

}
