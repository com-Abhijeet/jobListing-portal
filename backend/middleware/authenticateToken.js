import jwt from 'jsonwebtoken';

// the web token should be set in authorization header
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.sendStatus(401).redirect('/login'); //redirect user to login
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403).redirect('/login'); // If token is invalid, return Forbidden
        req.user = user;
        next(); // Proceed to the next middleware or route handler
    });
};

export default authenticateToken;