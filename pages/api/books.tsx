import { booksDataWithPrice as books } from 'books-data'

export default (req, res) => {
  res.statusCode = 200
  res.json({ books })
}
