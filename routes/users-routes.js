import express from "express";

import pool from '../db.js';
import res from "express/lib/response.js";
import  bcrypt from 'bcrypt';
import error from "jsonwebtoken/lib/JsonWebTokenError.js";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await pool.query('SELECT * FROM users');
        res.json({users:users.rows});
    }catch(err) {
        res.status(500).json({error:error.message});
    }
});

router.post('/', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = await pool.query(
            'INSERT INTO users (user_name,user_email,user_password) VALUES ($1,$2,$3) RETURNING *',
            [req.body.name,req.body.email,hashedPassword]);
        res.json({users:newUser.rows[0]});
    }catch(err) {
res.status(500).json({error:error.message});
    }

})

export default router;