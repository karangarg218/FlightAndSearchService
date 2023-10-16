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
    const Airplane = [
      
        {
           modelNumber: 'AirbusA380',
           capacity: 853,
           createdAt: new Date(),
           updatedAt: new Date(),
        },
        {
           modelNumber: 'Boeing747',
           capacity: 660,
           createdAt: new Date(),
           updatedAt: new Date(),
        },
        {
           modelNumber: "Boeing 777",
           capacity: 760,
           createdAt: new Date(),
           updatedAt: new Date(),
          
        },
        {
           modelNumber: "Boeing 787 Dreamliner",
           capacity: 290,
           createdAt: new Date(),
           updatedAt: new Date(),
        },
        {
           modelNumber: "Airbus A350",
           capacity: 440,
           createdAt: new Date(),
           updatedAt: new Date(),
        }
     ]
     
    


   await queryInterface.bulkInsert('Airplanes',Airplane)
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
