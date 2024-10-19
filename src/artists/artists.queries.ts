export const artistQueries = {

  getAllArtists: `
    SELECT artist_id, name
    FROM artists;
  `,

  addArtist: `
    INSERT INTO artists (name)
    VALUES (?);
  `,

  searchArtistByName: `
    SELECT artist_id, name
    FROM artists
    WHERE name LIKE ?;
  `
};

