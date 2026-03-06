import { User } from '../core/models/user.model';

export const USERS_MOCK: User[] = [
  {
    id: '1',
    name: 'Admin',
    email: 'admin@test.com',
    password: '123456',
  },
  {
    id: '2',
    name: 'John',
    email: 'john@test.com',
    password: '123456',
  },
];