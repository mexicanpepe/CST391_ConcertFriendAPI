import { OkPacket } from 'mysql2';
import { execute } from '../services/mysql.connector';
import { Concert } from './concerts.model';
import { concertQueries } from './concerts.queries';

export const getAllConcerts = async (): Promise<Concert[]> => {
  return execute<Concert[]>(concertQueries.getAllConcerts, []);
};

export const getConcertById = async (id: number): Promise<Concert[]> => {
  return execute<Concert[]>(concertQueries.getConcertById, [id]);
};

export const addConcert = async (concert: Concert): Promise<OkPacket> => {
  return execute<OkPacket>(concertQueries.addConcert, [
    concert.artist_id,
    concert.user_id,
    concert.venue,
    concert.date,
    concert.setlist,
    concert.media,
  ]);
};

export const updateConcertById = async (concert: Concert): Promise<OkPacket> => {
  return execute<OkPacket>(concertQueries.updateConcertById, [
    concert.artist_id,
    concert.user_id,
    concert.venue,
    concert.date,
    concert.setlist,
    concert.media,
    concert.concert_id,
  ]);
};

export const deleteConcertById = async (id: number): Promise<OkPacket> => {
  return execute<OkPacket>(concertQueries.deleteConcertById, [id]);
};
