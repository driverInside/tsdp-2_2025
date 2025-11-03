import UserRepository from './userrepository';

describe('User respository', () => {

  it('should be defined', () => {
    const userRepository = new UserRepository();

    expect(userRepository).toBeDefined();
  });

  it('should return an user by nss', () => {
    const userRepository = new UserRepository();

    expect(userRepository.getUserByNSS).toBeDefined();
  });
});