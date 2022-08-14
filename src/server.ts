import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index'; //importando nossa pagina de rotas

dotenv.config(); //definições das variaveis globais como também a porta do servidor

const server = express(); //criando e atricuindo uma variavel ao servidor

server.set('view engine', 'mustache'); //definindo a nossa template engine
server.set('views', path.join(__dirname, 'views')); //onde será as pastas de visualização do projeto
server.engine('mustache', mustache()); //ativando a função mustache q foi importada acima

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes); //criando as nossas rotas

server.use((req, res)=> {
  res.send('Página Não encontrada');

});

//ROTAS

server.listen(process.env.PORT);


