const sequelize = require('../config/db/connect');
const { User } = require('../models');

const testUser = () => {
  const user = {
    username: 'David',
    email: 'David@mcneary.com',
    password: 'password123'
  };
  return User.build(user);
}

test('Check for user validation', async () => {
  const validatedUser = await testUser().validate();
  console.log(validatedUser);
  return expect(validatedUser).toBeDefined();
});

test('Creates an instance of the User model', () => {
  return expect(testUser()).toBeInstanceOf(User);
});

test('Checks to see if a user can log in', () => {
  
});