# Maze
The project is the NodeJS server-side application built using Express framework. The Jest framework and the Supertest library were used for automated testing. It is possible to run the application in a Docker container.

The point of this application is to get the minimum number of steps needed to go through the maze. The maze is rectangular a matrix with maximum size of 30x30. Every cell can be empty (.) or be a wall (#). It is not allowed to go through the walls. The starting point is the upper left point and the end is the lower right point.   

## Prerequisites
- NodeJS - You can follow instructions https://nodejs.org/en/ to install node on your machine.
- Docker - You can follow instructions https://docs.docker.com/engine/installation/ to install Docker on your machine.

## Application Structure
- `app.js` - The entry point to the application. This file defines the server. It also contains the POST request.
- `labyrinth.js` - The file contains 3 functions: 
	 - `isMazeValid` - This function checks if the matrix is rectangular, contains only allowed values, is not larger than allowed size and is not empty. 
	 - `findPath` - This function returns the shortest path in the maze. 
	 - `findMinimumNumberOfSteps` - This function returns the length of the path.
- `labyrinth.spec.js` - This file contains unit tests for the `isMazeValid` and `findMinimumNumberOfSteps` functions.
- `app.spec.js` - This file contains a test suit for the endpoint.
- `Dockerfile` - This file contains the build instructions to build the image.
- `docker-compose.yml` - This file contains the conficuration to set up the docker environment.

## Installing & Running 
1. Clone this repo

2. Open your terminal and run the command `docker run -d -p 8080:3000 docker-maze` to run the application in docker container

3. Open API Client and send the POST request using URL http://localhost:8080/maze with the maze in request body. Select `JSON` as the body content type.

	*Example input:*   
[  
  [".", ".", "."],  
  ["#", "#", "."],  
  [".", ".", "."],  
  [".", "#", "#"],  
  [".", ".", "."]  
]

4. Now you can see the minimum number of steps to go throught the maze in the response body 

5. Run the `npm install` command to download devDependencies

6. Run the `npm test` command to run the automated tests 
