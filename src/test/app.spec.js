const app = require('../../src/app');
const request = require("supertest");

describe('TEST app.js', () => {
    afterAll(async () => {
        app.close();
    });

    test('POST /maze should return successfully posted minimum number of steps in a maze', async () => {

        const maze = [
            [".", ".", "."],
            ["#", "#", "."],
            [".", ".", "."],
            [".", "#", "#"],
            [".", ".", "."]
        ];
        return request(app)
            .post("/maze")
            .send(maze)
            .then(res => {
                expect(res.statusCode).toEqual(200);
            });
    });

    test("POST /maze should return error if maze is not valid", async () => {
        const maze = [
            [".", ".", "."],
            ["#", "#", "."],
            [".", ".", "."],
            [".", "#", "#", "#"],
            [".", ".", "."]
        ];

        return request(app)
            .post("/maze")
            .send(maze)
            .then(res => {
                expect(res.statusCode).toEqual(400);
            });
    });

    test("POST /maze should return error if maze has no path", async () => {
        const maze = [
            [".", "#"],
            ["#", "#"]
        ];

        return request(app)
            .post("/maze")
            .send(maze)
            .then(res => {
                expect(res.statusCode).toEqual(400);
            });
    });
});
