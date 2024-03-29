const { calculatePrice } = require('../services/priceService');

describe('Price Calculation Service', () => {
  test('Calculate price for valid input', async () => {
    const input = {
      zone: 'central',
      organization_id: '005',
      total_distance: 12,
      item_type: 'perishable'
    };
    const expectedOutput = { total_price: 2050 }; 
    const result = await calculatePrice(input);
    expect(result).toEqual(expectedOutput);
  });

  test('Throw error for invalid pricing information', async () => {
    const input = {
      zone: 'central',
      organization_id: '999', 
      total_distance: 12,
      item_type: 'perishable'
    };
    await expect(calculatePrice(input)).rejects.toThrow('Pricing information not found');
  });

  test('Throw error for missing input parameters', async () => {
    const input = {
      zone: 'central',
      total_distance: 12,
      item_type: 'perishable'
    };
    await expect(calculatePrice(input)).rejects.toThrow();
  });

  test('Throw error for invalid input type', async () => {
    const input = {
      zone: 'central',
      organization_id: '005',
      total_distance: 'invalid', // Invalid data type
      item_type: 'perishable'
    };
    await expect(calculatePrice(input)).rejects.toThrow();
  });

});
