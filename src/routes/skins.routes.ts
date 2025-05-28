import express from 'express';
import * as Skincontroller from '../controllers/skin.controller';
import { Skins } from '../models/skins';

const router = express.Router();

router.get('/',(rq, rs) => {
    Skincontroller.Getskins()
        .then((obj) => {
            rs.json(obj);
        })
        .catch((e)=>{
            rs.status(500).json(e);
        })
});

router.post('/',(rq, rs) => {
    Skincontroller.Postskins(rq.body as Skins)
        .then((obj) => {
            if(obj)
            rs.status(201).send();
        else
            rs.status(500).send()
        })
        .catch((e)=>{
            rs.status(500).json(e);
        })
});

export default router; 