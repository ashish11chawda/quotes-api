import express from "express";
const router = express.Router();
import _ from "lodash";

let quotes = [
    {
        id: "1",
        author: "Eleanor Roosevelt",
        quote: "I am who I am today because of the choices I made yesterday."
    },
    {
        id: "2",
        author: "Norman Vincent Peale",
        quote: "When you get up in the morning, you have two choices - either to be happy or to be unhappy. Just choose to be happy."
    }
];

// routes start with /quotes

router.get('/', (req, res) => {
    res.send(_.sortBy(quotes, 'id'));
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    let quote = quotes.find(quote => quote.id === id);
    if (quote) {
        res.send(quote);
    } else {
        res.status(404).send("Quote not found");
    }
});

router.post('/', (req, res) => {
    let quote = {
        id: (quotes.length + 1).toString(),
        author : req.body.author,
        quote : req.body.quote
    }
    quotes.push(quote);
    res.send(quote);
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let quote = quotes.find(quote => quote.id === id);
    if (quote) {
        quotes = quotes.filter(quote => quote.id != id);
        quote = {
            id: id,
            author : req.body.author,
            quote : req.body.quote
        }
        quotes.push(quote);
        res.send(quote);
    }
    else {
        res.status(404);
        res.send(`Quote with ID "${id}" not found`);
    }
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    let quote = quotes.find(quote => quote.id === id);
    if (quote) {
        quotes = quotes.filter(quote => quote.id != id);
        res.send(quote);
    }
    else {
        res.status(404);
        res.send(`Quote with ID "${id}" not found`);
    }
});

export default router;