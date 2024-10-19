import { Request, RequestHandler, Response } from 'express';
import * as ArtistDao from './artists.dao';

// get all artists
export const getAllArtists: RequestHandler = async (req: Request, res: Response) => {
  try {
    const artists = await ArtistDao.getAllArtists();
    res.status(200).json(artists);  // No need to return res.status()
  } catch (error) {
    console.error('[artists.controller][getAllArtists][Error]:', error);
    res.status(500).json({ message: 'There was an error fetching artists.' });
  }
};

// add new artist
export const addArtist: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ message: 'Artist name is required' });
      return;
    }

    const result = await ArtistDao.addArtist(name);
    res.status(201).json(result);  // No need to return res.status()
  } catch (error) {
    console.error('[artists.controller][addArtist][Error]:', error);
    res.status(500).json({ message: 'There was an error adding the artist.' });
  }
};

// search artist by name
export const searchArtistByName: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    if (!name) {
      res.status(400).json({ message: 'Search term is required' });
      return;
    }

    const artists = await ArtistDao.searchArtistByName(name);
    res.status(200).json(artists);
  } catch (error) {
    console.error('[artists.controller][searchArtistByName][Error]:', error);
    res.status(500).json({ message: 'There was an error searching for artists.' });
  }
};
