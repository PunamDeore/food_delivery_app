const Pricing = require('../models/Pricing');

async function calculatePrice({ zone, organization_id, total_distance, item_type }) {
  try {
    const pricingInfo = await Pricing.findOne({
      where: {
        organization_id,
        zone,
        item_type
      }
    });

    if (!pricingInfo) {
      throw new Error("Pricing information not found");
    }

    let totalPrice = pricingInfo.fix_price;
    if (total_distance > pricingInfo.base_distance_in_km) {
      const extraDistance = total_distance - pricingInfo.base_distance_in_km;
      totalPrice += extraDistance * pricingInfo.km_price;
    }

    
    totalPrice *= 100;

    return { total_price: totalPrice };
  } catch (error) {
    throw new Error("Error calculating price: " + error.message);
  }
}

module.exports = { calculatePrice };
