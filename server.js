const express = require('express');
const {PrismaClient} = require('@prisma/client');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

const prisma = new PrismaClient();

app.get('/', (req, res) => {
    res.json({message: 'API CRUD'});
});



app.listen(port, () => { console.log(`Escuchando servidor en el puerto ${port}`);});