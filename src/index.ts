import express from 'express';
import skinrouter from './routes/skins.routes';
import cors from 'cors';

const app = express ();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use('/api/skin', skinrouter);


app.listen(PORT,()=>{
    console.log(`Escuchando el puerto ${PORT}`);
});


