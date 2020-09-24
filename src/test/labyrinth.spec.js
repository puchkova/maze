const labyrinth = require('../../src/labyrinth');

describe('findMinimumNumberOfSteps function', () => {
    test('should return the minimum number of steps in the maze', () => {
    const maze = [
        [".", ".", "."],
        ["#", "#", "."],
        [".", ".", "."],
        [".", "#", "#"],
        [".", ".", "."]
    ];

    expect(labyrinth.findMinimumNumberOfSteps(maze)).toEqual(10);
});

    test('should return the number of steps of the shortest path in the maze', () => {
    const maze = [
        [".", ".", "."],
        [".", "#", "."],
        [".", ".", "."],
        [".", "#", "#"],
        [".", ".", "."]
    ];
        expect(labyrinth.findMinimumNumberOfSteps(maze)).toEqual(6);
    });

    test('should return the number of steps of the shortest path in the maze', () => {
        const maze = [
            [".", ".", ".", ".", "."],
            [".", "#", ".", "#", "."],
            [".", ".", ".", "#", "."]
        ];

     expect(labyrinth.findMinimumNumberOfSteps(maze)).toEqual(6);
});

    test('should return -1 if there is no path in the maze', () => {
        const maze = [
            [".", "#"],
            ["#", "#"]
        ];

        expect(labyrinth.findMinimumNumberOfSteps(maze)).toEqual(-1);
    });
});

describe('isMazeValid function', () => {
    test('should return false if the maze is not rectangular', () => {
    const maze = [
        [".", ".", "."],
        ["#", "#", "."],
        [".", ".", "."],
        [".", "#", "#", "#"],
        [".", ".", "."]
    ];

    expect(labyrinth.isMazeValid(maze)).toEqual(false);
});

    test('should return false if the maze size is larger than 30*30', () => {
    const maze = createMaze();

    expect(labyrinth.isMazeValid(maze)).toEqual(false);
});

function createMaze(){
    const row = 31;
    const col = 31;
    const value = ".";
    const maze = Array(row);
    for (var i = 0; i<row; i++) {
        maze[i] = Array(col).fill(value);
    }
    return maze;
}

    test('should return false if cells contain neither "." nor "#"', () => {
        const maze = [
            [".", "."],
            ["!", "."]
        ];

        expect(labyrinth.isMazeValid(maze)).toEqual(false);
    });

    test('should return false if the last cell contains "#"', () => {
        const maze = [
            [".", "."],
            [".", "#"]
        ];

        expect(labyrinth.isMazeValid(maze)).toEqual(false);
    });

test('should return false if the maze cells are empty', () => {
    const maze = [[],[]];

    expect(labyrinth.isMazeValid(maze)).toEqual(false);
});
});
