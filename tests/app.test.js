const request = require('supertest');
const { app } = require('../src/app');

describe('Livestream app HTTP routes', () => {
  test('GET / should return the home page', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Create Room');
  });

  test('GET /login should return the login page', async () => {
    const response = await request(app).get('/login');

    expect(response.statusCode).toBe(200);
  });
});