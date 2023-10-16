'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const airportSeedData = [
      // Airports in Delhi
      {
        name: 'Indira Gandhi International Airport',
        address: 'Delhi, India',
        cityId: 1, // Delhi
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Safdarjung Airport',
        address: 'Delhi, India',
        cityId: 1, // Delhi
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      // Airports in Mumbai
      {
        name: 'Chhatrapati Shivaji Maharaj International Airport',
        address: 'Mumbai, India',
        cityId: 2, // Mumbai
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Juhu Aerodrome',
        address: 'Mumbai, India',
        cityId: 2, // Mumbai
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      // Airports in Bangalore
      {
        name: 'Kempegowda International Airport',
        address: 'Bangalore, India',
        cityId: 3, // Bangalore
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'HAL Bangalore International Airport',
        address: 'Bangalore, India',
        cityId: 3, // Bangalore
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      // Airports in Chennai
      {
        name: 'Chennai International Airport',
        address: 'Chennai, India',
        cityId: 4, // Chennai
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chennai Egmore Airfield',
        address: 'Chennai, India',
        cityId: 4, // Chennai
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      // Airports in Kolkata
      {
        name: 'Netaji Subhas Chandra Bose International Airport',
        address: 'Kolkata, India',
        cityId: 5, // Kolkata
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kolkata Airport 2',
        address: 'Kolkata, India',
        cityId: 5, // Kolkata
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      // Airports in Hyderabad
      {
        name: 'Rajiv Gandhi International Airport',
        address: 'Hyderabad, India',
        cityId: 6, // Hyderabad
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Begumpet Airport',
        address: 'Hyderabad, India',
        cityId: 6, // Hyderabad
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      // Airports in Pune
      {
        name: 'Pune Airport 1',
        address: 'Pune, India',
        cityId: 7, // Pune
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pune Airport 2',
        address: 'Pune, India',
        cityId: 7, // Pune
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      // Airports in Ahmedabad
      {
        name: 'Sardar Vallabhbhai Patel International Airport',
        address: 'Ahmedabad, India',
        cityId: 8, // Ahmedabad
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ahmedabad Airport 2',
        address: 'Ahmedabad, India',
        cityId: 8, // Ahmedabad
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      // Airports in Jaipur
      {
        name: 'Jaipur International Airport',
        address: 'Jaipur, India',
        cityId: 9, // Jaipur
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jaipur Airport 2',
        address: 'Jaipur, India',
        cityId: 9, // Jaipur
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      // Airports in Bengaluru
      {
        name: 'Kempegowda International Airport',
        address: 'Bengaluru, India',
        cityId: 10, // Bengaluru
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'HAL Bangalore International Airport',
        address: 'Bengaluru, India',
        cityId: 10, // Bengaluru
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more airports for other cities...
    ];

   
    await queryInterface.bulkInsert('Airports',airportSeedData)

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
