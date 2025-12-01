import express, { Request, Response } from 'express';

const PORT = 3000;
const hostname = 'localhost';

const app = express();
app.use(express.json());

//Definimos la primer ruta, en este caso en root
app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello World desde Express</h1>');
});

// Tenemos que escuchar al puerto, si no, no entran las peticiones. 
// Como Node es un entorno basado en eventos, se queda "escuchando" las peticiones que entren al puerto indicado.
app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});

// Parámetro de consulta dentro de la ruta, en este caso id
app.get("/products/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const productId = req.params.id; //De las dos formas es lo mismo, en el caso anterior lo separó en una variable aparte
  res.send(`Producto solicitado: ${id}`);
});

//Envío de datos 
app.post("/new-user", (req: Request, res: Response) => {
  const { name, lastname, email } = req.body;

  // Aquí normalmente guardaríamos los datos en una base de datos
  res.send(`Usuario ${name} ${lastname} con email ${email} creado exitosamente.`);
});