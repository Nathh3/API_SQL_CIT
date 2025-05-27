import express from 'express';
import cors from 'cors';
import clienteRouter from './routes/cliente.route'
import trabajoRouter from './routes/trabajo.route'
import transportistaRouter from './routes/transportista.route'



const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/cliente', clienteRouter);
app.use('/api/trabajo', trabajoRouter);
app.use('/api/transportista', transportistaRouter);


app.listen(PORT, () => {
    console.log(`Esuchando el puerto ${PORT}`);
});