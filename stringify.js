const fastJson = require('fast-json-stringify');

// {
//   "req": {
//     "headers": {
//       "host": "127.0.0.1",
//       "x-forwarded-for": "127.0.0.1",
//       "x-auth": "authkey",
//       "accept": "application/json"
//     },
//     "url": "/hello?foo=bar",
//     "method": "GET",
//     "href": "http://127.0.0.1/hello?foo=bar",
//     "query": {
//       "foo": "bar"
//     }
//   },
//   "started_at": 1522032522164,
//   "res": {
//     "headers": {
//       "content-type": "application/json; charset=utf-8",
//       "content-length": "281"
//     },
//     "status": 200
//   },
//   "duration": 2,
//   "level": "info",
//   "message": "HTTP GET /hello?foo=bar"
// }

const stringify = fastJson({
  title: 'koa2 logger',
  type: 'object',
  properties: {
    started_at: { type: 'integer' },
    duration: { type: 'integer' },
    level: { type: 'string' },
    message: { type: 'string' },
    req: {
      type: 'object',
      properties: {
        headers: {
          type: 'object',
          additionalProperties: { type: 'string' },
        },
        url: { type: 'string' },
        method: { type: 'string' },
        href: { type: 'string' },
        query: {
          type: 'object',
          additionalProperties: { type: 'string' },
        },
        origin: { type: 'string' },
        originalUrl: { type: 'string' },
        path: { type: 'string' },
        querystring: { type: 'string' },
        search: { type: 'string' },
        hostname: { type: 'string' },
        URL: { type: 'string' },
        type: { type: 'string' },
        charset: { type: 'string' },
        protocol: { type: 'string' },
        secure: { type: 'string' },
        ip: { type: 'string' },
      },
    },
    res: {
      type: 'object',
      properties: {
        headers: {
          type: 'object',
          additionalProperties: { type: 'string' },
        },
        status: { type: 'string' },
        body: {
          type: 'object',
          additionalProperties: true,
        },
      },
    },
  },
});

module.exports = stringify;
