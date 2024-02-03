import express from 'express';
import path from 'path';

const root = express.Router();

root.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', '..', 'frontend', 'dist', 'index.html'));
})

root.use('/assets', express.static(path.resolve(__dirname, '..', '..', '..', 'frontend', 'dist', 'assets')));



export default root;