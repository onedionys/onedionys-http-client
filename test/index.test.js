const assert = require('assert');
const { describe, it } = require('mocha');
const { HttpClient } = require('../src/http-client');

describe('HttpClient', () => {
  it('should successfully make GET request to a URL', async () => {
    const httpClient = new HttpClient();
    const response = await httpClient.get('https://jsonplaceholder.typicode.com/posts/1');
    assert.strictEqual(response.status, 200);
    assert.ok(response.data);
  });

  it('should successfully make POST request to a URL', async () => {
    const httpClient = new HttpClient();
    const data = { title: 'foo', body: 'bar', userId: 1 };
    const response = await httpClient.post('https://jsonplaceholder.typicode.com/posts', data);
    assert.strictEqual(response.status, 201);
    assert.ok(response.data);
  });
});
