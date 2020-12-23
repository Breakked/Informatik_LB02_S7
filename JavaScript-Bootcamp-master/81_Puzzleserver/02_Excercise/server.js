let express = require("express");
let app     = express();
const port = process.env.PORT || 3000;

const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2; // 2 minutes


/*
Aufgabe 1
a) Erstellen Sie ein Array mit 10 Einträgen von aktuellen Musikbands, der von diesem
Server aufgerufen werden kann. */
const bandList = ["The Beatles","Led Zeppelin",
    "Nirvana", "Green Day", "ACDC", "Half Alive", "ABBA",
    "Guns N' Roses", "Earth, Wind & Fire", "Digable Planets"];



/*
b) Die URL muss http://localhost:3000/musicbands lauten */
/*
c) Aus der Liste von 1a soll per Zufall eine Musikband zurückgegeben werden (HTTP Response) */
app.get('/musicbands', (req, res) => {
    const random = Math.floor(Math.random() * bandList.length);
    res.send(JSON.stringify({puzzle: bandList[random]}));
});


/*
d) Fügen Sie die korrekten Header ein, damit CORS Requests beantworten werden.
 */
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000/musicbands');
    res.header('Content-Type', 'application/json');
    next();




