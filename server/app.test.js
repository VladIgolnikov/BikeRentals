const request = require('supertest');
const app = require('./app');

describe('Test the API routes', () => {
  test('It should send 200 response to the GET method at "/"', () => {
    return request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test('It should send 404 response to the GET method at "/test"', () => {
    return request(app)
      .post('/test')
      .then(response => {
        expect(response.statusCode).toBe(404);
      });
  });
});
