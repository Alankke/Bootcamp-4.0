//Callbacks en TypeScript

function fetchData(callback: (data: string) => void) {
    let data = "Datos recibidos";
    callback(data);
}

fetchData((data) => {
    console.log(data);
});

fetchData(function (data) {
    console.log(data);
});



// Promises
fetch("https://api.example.com/data")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

// En este caso, fetch devuelve Promise, usamos .then() para manejar
// la respuesta a la promesa cumplida y .catch() para manejar errores.

// Async/Await
async function getData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();

        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


// MIDDLEWARES:
// Definimos un middleware:
function isAdmin(req: Request, res: Response, next: Function) {
    const isAdmin = req.body.isAdmin;
    
    if (isAdmin) {
        next();
    } else {
        res.status(403).send("Access denied");
    }
}

// Usamos el middleware en toda la aplicación (ejemplo con Express):
app.use(isAdmin);

app.get("/admin", (req: Request, res: Response) => {
    res.send("Welcome, admin!");
});

// Usamos el middleware en una ruta especifica:
app.get("/admin", isAdmin, (req: Request, res: Response) => {
    res.send("Welcome, admin!");
});

