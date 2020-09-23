const labyrinth = require('../src/labyrinth');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/maze', function(request, response){
    var steps = labyrinth.findMinimumNumberOfSteps(request.body)
    if (!labyrinth.isMazeValid(request.body)){
        response.status(400).json('The input is invalid');
    }
    if (steps===-1){
        response.status(400).json('The maze has no path');
    }
    else{
        response.send({MinimumNumberOfSteps: steps});
    }
    });

app.listen(3000);

module.exports = app
