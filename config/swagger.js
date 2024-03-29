const swaggerOptions = {
  openapi: '3.0.0',
  info: {
    title: 'Food Delivery API',
    version: '1.0.0',
    description: 'API documentation for the food delivery application',
  },
  servers: [
    {
      url: 'http://localhost:3000/api',
      description: 'Development server',
    },
  ],
  paths: {
    '/pricing/calculatePrice': {
      post: {
        summary: 'Calculate price for food delivery',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  zone: { type: 'string' },
                  organization_id: { type: 'string' },
                  total_distance: { type: 'number' },
                  item_type: { type: 'string' },
                },
                required: ['zone', 'organization_id', 'total_distance', 'item_type'],
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Successful response',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    total_price: { type: 'number' },
                  },
                },
              },
            },
          },
          '400': {
            description: 'Bad request',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    error: { type: 'string' },
                  },
                },
              },
            },
          },
          '500': {
            description: 'Internal server error',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    error: { type: 'string' },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

module.exports = swaggerOptions;
