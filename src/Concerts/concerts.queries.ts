export const concertQueries = {
  getAllConcerts: `
    SELECT * FROM concerts;
  `,
  getConcertById: `
    SELECT * FROM concerts WHERE concert_id = ?;
  `,
  addConcert: `
    INSERT INTO concerts (artist_id, user_id, venue, date, setlist, media) VALUES (?, ?, ?, ?, ?, ?);
  `,
  updateConcertById: `
    UPDATE concerts SET artist_id = ?, user_id = ?, venue = ?, date = ?, setlist = ?, media = ? WHERE concert_id = ?;
  `,
  deleteConcertById: `
    DELETE FROM concerts WHERE concert_id = ?;
  `,
};
