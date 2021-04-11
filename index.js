const express = require('express');

// This will listen to incoming requests from the node side 
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there'});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`ALLESYS: Listening on Port ${PORT}`);
});