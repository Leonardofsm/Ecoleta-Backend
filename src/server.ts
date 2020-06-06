import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//Servindo arquivos estaticos de uma pasta especifica na aplicação
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads' )));

app.listen(3333);