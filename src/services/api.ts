import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/api',
});

async function refreshToken(error: Error) {
  return new Promise((resolve, reject) => {
    try {
      const refresh_token = localStorage.getItem('@UniJobs:refreshToken');

      if (refresh_token) {
        api
          .post(`/refreshToken`, refresh_token)
          .then(async res => {
            localStorage.setItem('@UniJobs:token', res.data.token.token);
            localStorage.setItem(
              '@UniJobs:refreshToken',
              res.data.token.refreshToken,
            );
            // Fazer algo caso seja feito o refresh token
            return resolve(error);
          })
          .catch(err => {
            // Fazer algo caso não seja feito o refresh token
            return reject(err);
          });
      }
    } catch (err) {
      return reject(err);
    }
  });
}

// Response interceptor for API calls
api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const token = localStorage.getItem('@UniJobs:refreshToken');
    if (error.response.status === 401 && token) {
      const response = await refreshToken(error);
      return response;
    }
  },
);

export default api;
