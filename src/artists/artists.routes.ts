import { Router } from 'express';
import * as ArtistsController from './artists.controller';

const router = Router();

router
  .get('/', ArtistsController.getAllArtists)
  .post('/', ArtistsController.addArtist)
  .get('./search/:name', ArtistsController.searchArtistByName)


export default router;


