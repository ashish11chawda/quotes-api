import express from "express"; 
import bodyParser from "body-parser";// helps to parse the body of the request
import cors from "cors";
import quotesRoutes from "./routes/quotes.js";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/quotes', quotesRoutes);

app.get('/', (req, res) => {res.send("Hello World!")});

app.listen(PORT, () => {console.log(`Server is up and running!`)});