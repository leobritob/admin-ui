import { ServerApi } from '~/providers';

function createUser(params: { first_name: string; last_anme: string; email: string; password: string }) {
  return ServerApi.post('/api/v1/users', params);
}

export const ServerApiService = {
  createUser,
};
