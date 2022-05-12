const express = require('express');
const {PrismaClient} = require('@prisma/client');
const { response } = require('express');
const cors = require('cors');

const corsOptions = {origin: "http://localhost:8081"};
const app = express();
app.use(express.json());
app.use(cors(corsOptions));

const port = process.env.PORT || 3000;

const prisma = new PrismaClient();

app.get('/', (req, res) => {
    res.json({message: 'API CRUD'});
});

app.get('/explorers', async (req, res=response) => {
    try {
        const allExplorers = await prisma.explorer.findMany({});
        res.json(allExplorers);
    } catch (e) {
        console.log(e);
        res.json({message: 'Error en el servidor'})
    }
})

app.get('/explorers/:id', async (req, res=response) => {
    try {
        const {id} = req.params;
        const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
        res.json(explorer);
    } catch (e) {
        console.log(e);
        res.json({message: 'Error en el servidor'})
    }
});

app.post('/explorers', async(req, res=response) => {
    try {
        const {name, username, mission} = req.body;
        const explorer = {name, username, mission};
        const message = 'Explorer Creado';
        await prisma.explorer.create({data:explorer});
        return res.json({message});
    } catch (e) {
        console.log(e);
        res.json.status(500).json({message: 'Error en el servidor'});
    }
});

app.put('/explorers/:id', async(req, res=response) => {
    try {
        const {id} = req.params;
        const {name, username, mission} = req.body;
        const explorer = {name, username, mission};
        const message = 'Explorer Actualizado';
        await prisma.explorer.update({where: {id: parseInt(id)}, data:explorer});
        return res.json({message});
    } catch (e) {
        console.log(e);
        res.json.status(500).json({message: 'Error en el servidor'});
    }
});

app.delete('/explorers/:id', async(req, res=response) => {
    try {
        const {id} = req.params;
        const message = 'Explorer Eliminado';
        await prisma.explorer.delete({where: {id: parseInt(id)}});
        return res.json({message});
    } catch (e) {
        console.log(e);
        res.json.status(500).json({message: 'Error en el servidor'});
    }
});

app.get('/ajolonautas', async (req, res=response) => {
    try {
        const allAjolonautas = await prisma.ajolonauta.findMany({});
        res.json(allAjolonautas);
    } catch (e) {
        console.log(e);
        res.json({message: 'Error en el servidor'})
    }
})

app.get('/ajolonautas/:id', async (req, res=response) => {
    try {
        const {id} = req.params;
        const ajolonauta = await prisma.ajolonauta.findUnique({where: {id: parseInt(id)}});
        res.json(ajolonauta);
    } catch (e) {
        console.log(e);
        res.json({message: 'Error en el servidor'})
    }
});

app.post('/ajolonautas', async(req, res=response) => {
    try {
        const {name, lang, missionCommander} = req.body;
        const ajolonauta = {name, lang, missionCommander};
        const message = 'Ajolonauta Creado';
        await prisma.ajolonauta.create({data:ajolonauta});
        return res.json({message});
    } catch (e) {
        console.log(e);
        res.json.status(500).json({message: 'Error en el servidor'});
    }
});

app.put('/ajolonautas/:id', async(req, res=response) => {
    try {
        const {id} = req.params;
        const {name, lang, missionCommander} = req.body;
        const ajolonauta = {name, lang, missionCommander};
        const message = 'Ajolonauta Actualizado';
        await prisma.ajolonauta.update({where: {id: parseInt(id)}, data:ajolonauta});
        return res.json({message});
    } catch (e) {
        console.log(e);
        res.json.status(500).json({message: 'Error en el servidor'});
    }
});

app.delete('/ajolonautas/:id', async(req, res=response) => {
    try {
        const {id} = req.params;
        const message = 'Ajolonauta Eliminado';
        await prisma.ajolonauta.delete({where: {id: parseInt(id)}});
        return res.json({message});
    } catch (e) {
        console.log(e);
        res.json.status(500).json({message: 'Error en el servidor'});
    }
});

app.listen(port, () => { console.log(`Escuchando servidor en el puerto ${port}`);});