import express from "express"; 
import bodyParser from "body-parser"; // helps to parse the body of the request

import quotesRoutes from "./routes/quotes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/quotes', quotesRoutes);

app.get('/', (req, res) => {res.send("Hello World!")});

app.listen(PORT, () => {console.log(`Server is running on port http://localhost:${PORT}`)});