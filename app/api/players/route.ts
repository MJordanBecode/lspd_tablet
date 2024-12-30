// pages/api/players.ts
export default function handler(req:any, res:any) {
    if (req.method === 'GET') {
      // Exemple de données à envoyer à FiveM
      const players = ['Player1', 'Player2', 'Player3'];
      res.status(200).json({ players });
    } else {
      res.status(405).end();  // Method Not Allowed
    }
  }
  