# Maze
The project is the NodeJS server-side application built using Express framework. The Jest framework and the Supertest library were used for automated testing.

The point of this application is to get the minimum number of steps needed to go through the rectangular maze. The maze is rectangular a matrix with maximum size of 30x30. Every cell can be empty (.) or be a wall (#). It is not allowed to go through the walls. The starting point is the upper left point and the end is the lower right point.   

## Application Structure
- `app.js` - The entry point to the application. This file defines the server. It also contains the POST request.
- `labyrinth.js` - The file contains 3 functions: 
	 - `isMazeValid` - This function checks if the matrix is rectangular, contains only allowed values, is not larger than allowed size and is not empty. 
	 - `findPath` - This function returns the shortest path in the maze. 
	 - `findMinimumNumberOfSteps` - This function returns the length of the path.
- `labyrinth.spec.js` - This file contains unit tests for the `isMazeValid` and `findMinimumNumberOfSteps` functions.
- `app.spec.js` - This file contains a test suit for the endpoint.
- `Dockerfile` - This file contains the build instructions to build the image.

## Installing & Running 
1. Clone this repo

2. Open your terminal and run the command `npm install`

3. Run the command `node src/app.js`

4. Open API Client and send the POST request using URL http://localhost:3000/maze with the maze in request body. Select `JSON` as the body content type.

	*Example input:*   
[  
  [".", ".", "."],  
  ["#", "#", "."],  
  [".", ".", "."],  
  [".", "#", "#"],  
  [".", ".", "."]  
]

5. Now you can see in the response body the minimum number of steps to go throught the maze 

6. Run the `npm test` command to run the automated tests 

7. Run the `docker run -it -p 8080:3000 maze-docker` command to run the application in docker container 

8. Your server is now available at http://localhost:8080/maze
