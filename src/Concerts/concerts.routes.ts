import { Router} from 'express';
import * as ConcertsController from './concerts.controller'

const router = Router();

router
//get all concerts
  .get('/', ConcertsController.getAllConcerts)
  //get concert by ID
  .get('/:id', ConcertsController.getConcertById)
  //add a new concert
  .post('/', ConcertsController.addConcert)
  // update an existing concert by id
  .put('/:id', ConcertsController.updateConcertById)
  //delete concert by id
  .delete('/:id', ConcertsController.deleteConcertById)

export default router;




