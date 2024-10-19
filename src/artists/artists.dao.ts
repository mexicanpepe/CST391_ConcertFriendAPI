import { OkPacket } from 'mysql2';
import { execute } from '../services/mysql.connector';
import { Artist } from './artists.model';
import { artistQueries } from './artists.queries';


export const getAllArtists = async (): Promise<Artist[]> => {
  return execute<Artist[]>(artistQueries.getAllArtists, []);
};

//add artist
export const addArtist = async (name: string): Promise<OkPacket> => {
  return execute<OkPacket>(artistQueries.addArtist, [name]);
};

// Search artist partial match
export const searchArtistByName = async (searchTerm: string): Promise<Artist[]> => {
  const query = `%${searchTerm}%`;
  return execute<Artist[]>(artistQueries.searchArtistByName, [query]);
};
