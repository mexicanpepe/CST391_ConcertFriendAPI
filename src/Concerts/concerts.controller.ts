import { Request, Response } from 'express';
import * as ConcertDao from './conerts.dao';

export const getAllConcerts = async (req: Request, res: Response) => {
  const concerts = await ConcertDao.getAllConcerts();
  res.status(200).json(concerts);
};

export const getConcertById = async (req: Request, res: Response) => {
  const concert = await ConcertDao.getConcertById(parseInt(req.params.id));
  res.status(200).json(concert);
};

export const addConcert = async (req: Request, res: Response) => {
  const result = await ConcertDao.addConcert(req.body);
  res.status(201).json(result);
};

export const updateConcertById = async (req: Request, res: Response) => {
  const result = await ConcertDao.updateConcertById(req.body);
  res.status(200).json(result);
};

export const deleteConcertById = async (req: Request, res: Response) => {
  const result = await ConcertDao.deleteConcertById(parseInt(req.params.id));
  res.status(200).json(result);
};
