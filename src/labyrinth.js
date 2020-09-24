function isMazeValid(maze){
    var height = maze.length;
    var width = maze[0].length;

    if(height > 30 || width > 30
        || height === 0 || width === 0){
        return false;
    }

    for(var i = 0; i<height; i++){
        if(maze[i].length !== width){
            return false;
        }

        for(var j = 0; j<width; j++){
            let cell = maze[i][j];
            if(cell.localeCompare(".") !==0 && cell.localeCompare("#") !==0){
                return false;
            }
        }
    }

    if(maze[height-1][width-1].localeCompare(".") !==0){
        return false;
    }

    return true;
}

function findMinimumNumberOfSteps(maze){
    var path = findPath(maze);
    if (path === undefined){
        return -1;
    }
    return path.length-1;
}

function findPath(maze) {
    var height = maze.length;
    var width = maze[0].length;
    var start = [0, 0];
    var end = [height-1, width-1];
    var queue = [];

    maze[start[0]][start[1]] = '#';
    queue.push([start]);

    while (queue.length > 0) {
        var path = queue.shift();
        var pos = path[path.length-1];
        var directions = [
            [pos[0] + 1, pos[1]],
            [pos[0], pos[1] + 1],
            [pos[0] - 1, pos[1]],
            [pos[0], pos[1] - 1]
        ];

        for (var i = 0; i < directions.length; i++) {

            var direction = directions[i];
            var row = direction[0];
            var col = direction[1];

            if (row === end[0] && col === end[1]) {
                return path.concat([end]);
            }
            if (row < 0 || row >= height
                || col < 0 || col >= width
                || maze[row][col] !== '.') {
                continue;
            }

            maze[row][col] = '#';
            queue.push(path.concat([direction]));
        }
    }
}

module.exports.findMinimumNumberOfSteps = findMinimumNumberOfSteps;
module.exports.isMazeValid = isMazeValid;
