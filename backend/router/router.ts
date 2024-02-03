import express from 'express';
import path from 'path';

const router = express.Router();

router.use(express.static(path.resolve(__dirname, '..', '..', '..', 'frontend', 'dist')));

router.get('/test', (req, res) => {
    res.send('Test route');
});

router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', '..', 'frontend', 'dist', 'index.html'));
});

export default router;