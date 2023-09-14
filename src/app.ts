import express from 'express';
import http from 'http';

const app = express();

app.listen(3000, () => {
    console.log(`Server is running on port http://localhost:3000`);
})