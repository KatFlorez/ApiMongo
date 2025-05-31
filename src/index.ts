import express from 'express';
import cors from 'cors';
import usuariorouter from "./routes/usuario.routes";
import restauranterouter from './routes/restaurante.routes';
import reservarouter from './routes/reserva.routes';

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/api/usuarios', usuariorouter);
app.use('/api/restaurantes', restauranterouter);
app.use('/api/reservas', reservarouter);

app.listen(PORT, () => {
    console.log(`Escuchando el puerto ${PORT}`);
});


