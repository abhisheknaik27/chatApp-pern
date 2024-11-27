import express from "express";
const router = express.Router();

//prefix: <url>/api/auth
router.get('/login', (req, res) => {
    res.send('logged in');
});

router.get('/logout', (req, res) => {
    res.send('logout');
});

router.get('/signup', (req, res) => {
    res.send('signed up');
});

export default router;