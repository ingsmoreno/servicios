import { Request, Response } from "express";
import { app } from "./app";

app.get('/', (req: Request, response: Response) => {
    response
        .status(200)
        .send('Hola Bienvenido');
});

app.listen(3000, ()=>{
    console.log('Server running at PORT: 3000');
}).on("Error", (error) => {
    throw new Error(error.message);
});