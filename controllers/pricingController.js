const { calculatePrice } = require('../services/priceService');

async function calculatePriceController(req, res) {
  try {
    const { zone, organization_id, total_distance, item_type } = req.body;
    const price = await calculatePrice({ zone, organization_id, total_distance, item_type });
    res.json(price);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { calculatePriceController };
