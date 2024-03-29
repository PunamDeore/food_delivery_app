const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger');
const sequelize = require('./config/database');
const pricingRoutes = require('./routes/pricingRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api/pricing', pricingRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => {
  console.error('Database synchronization error:', err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
