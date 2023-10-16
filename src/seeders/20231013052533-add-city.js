'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
 
    const citiesWithMultipleAirportsInIndia = [
      {
        name: 'Delhi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mumbai',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bangalore',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chennai',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kolkata',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hyderabad',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pune',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ahmedabad',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jaipur',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bengaluru',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ];

    await queryInterface.bulkInsert('cities',citiesWithMultipleAirportsInIndia);
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
