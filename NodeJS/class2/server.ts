import express, { Request, Response } from 'express';

const PORT = 3000;
const hostname = 'localhost';

const app = express();
app.use(express.json());

//Definimos la primer ruta, en este caso en root
app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello World desde Express</h1>');
});

app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});