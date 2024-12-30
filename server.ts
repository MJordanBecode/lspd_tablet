import express, { Request, Response } from 'express';
import next from 'next';

// Configurer Next.js
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // Rediriger toutes les requêtes vers Next.js
  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  // Démarrer le serveur Express
  server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
