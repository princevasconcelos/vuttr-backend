# Very Useful Tools to Remember

## Stack

- Nodejs
- Express
- Mongodb

## Running

```
git clone ... && yarn install
yarn start
```

## Testing

- Mocha
- Supertest

```
yarn test
```

## Styling

- Eslint (Standard)

## Routes

- `GET /tools`: list all tools
- `GET /tools?q=:word`: get tools that title includes `word`
- `GET /tools?tag=:tagname`: get tools that tags includes `tagname`
- `POST /tools`: create new tool
- `DELETE /tools/:id`: delete a tool

## Examples

### GET /tools

Response (200):

```js
[
  {
    title: "Notion",
    _id: "5d4f419b3cea153d0d090213",
    link: "https://notion.so",
    description:
      "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
    tags: ["organization", "planning", "collaboration", "writing", "calendar"]
  },
  {
    title: "json-server",
    _id: "5d4e37a49366e7465256a50f",
    link: "https://github.com/typicode/json-server",
    description:
      "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
    tags: ["api", "json", "schema", "node", "github", "rest", "web"]
  },
  {
    title: "fastify",
    _id: "5d4e3794e3eff54622d1409e",
    link: "https://www.fastify.io/",
    description:
      "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
    tags: ["web", "framework", "node", "http2", "https", "localhost"]
  }
];
```

### GET /tools?q=notion

Response (200):

```js
[
  {
    title: "Notion",
    _id: "5d4f419b3cea153d0d090213",
    link: "https://notion.so",
    description:
      "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
    tags: ["organization", "planning", "collaboration", "writing", "calendar"]
  }
];
```

### GET /tools?tag=node

Response (200):

```js
[
  {
    title: "json-server",
    _id: "5d4e37a49366e7465256a50f",
    link: "https://github.com/typicode/json-server",
    description:
      "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
    tags: ["api", "json", "schema", "node", "github", "rest", "web"]
  },
  {
    title: "fastify",
    _id: "5d4e3794e3eff54622d1409e",
    link: "https://www.fastify.io/",
    description:
      "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
    tags: ["web", "framework", "node", "http2", "https", "localhost"]
  }
];
```

### POST /tools

body:

```js
  {
    title: 'fastify',
    link: 'https://www.fastify.io/',
    description:
      'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.',
    tags: ['web', 'framework', 'node', 'http2', 'https', 'localhost'],
  }
```

Response (201):

```js
{
    title: 'fastify',
    _id: "5d4e3794e3eff54622d1409e",
    link: 'https://www.fastify.io/',
    description:
        'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.',
    tags: ['web', 'framework', 'node', 'http2', 'https', 'localhost'],
}
```

### DELETE /tools/5d4e3794e3eff54622d1409e

Response (201)
