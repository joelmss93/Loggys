import { Request, Response } from 'express';

//import db from '../database/connection';
const mongoose = require('mongoose');

require('../models/Logistica');

const Logistica = mongoose.model('Logistica');

module.exports = {
    async index(req: Request, res: Response){
        const logistica = await Logistica.find( { $where: 'this.localAtual != this.localDestino' } );
        
        return res.json(logistica);
    },

    async show(req: Request, res: Response){
        const logistica = await Logistica.findById(req.params.id);

        return res.json([logistica]);
    },

    async store(req: Request, res: Response){
        const logistica = await Logistica.create(req.body);

        return res.json(logistica);
    },

    async update(req: Request, res: Response){
        const logistica = await Logistica.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(logistica);
    },

    async delete(req: Request, res: Response){
        const logistica = await Logistica.findByIdAndRemove(req.params.id);

        return res.send('Deletado');
    }
}
