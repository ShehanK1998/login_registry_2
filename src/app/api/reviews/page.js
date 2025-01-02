import db from '@/lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Fetch reviews
    try {
      const [rows] = await db.query('SELECT * FROM reviews ORDER BY created_at DESC');
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch reviews', error: error.message });
    }
  } else if (req.method === 'POST') {
    // Add a new review
    const { name, review, rating } = req.body;

    if (!name || !review || !rating) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
      const [result] = await db.query(
        'INSERT INTO reviews (name, review, rating) VALUES (?, ?, ?)',
        [name, review, rating]
      );
      res.status(201).json({ message: 'Review added successfully', id: result.insertId });
    } catch (error) {
      res.status(500).json({ message: 'Failed to add review', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
