import express from 'express';
import pedidorouter from './routes/pedido.routes';
import cors from 'cors';
import usuariorouter from "./routes/usuarios.routes"
const app = express ();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use('/api/pedido', pedidorouter);
app.use('/api/usuario',usuariorouter );



app.listen(PORT,()=>{
    console.log(`Escuchando el puerto ${PORT}`);
});


