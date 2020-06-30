import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '1dfe48e5-0ab3-4058-bda8-1443c394d958'
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data)
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`)
      .then(res => res.data)
  },
  follow(id) {
    return instance.post(`follow/${id}`)
      .then(res => res.data)
  }
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put('profile/status', {
      status
    })
  }
};

export const authAPI = {
  me() {
    return instance.get('auth/me')
  },
  login(email, password, rememberMe = false) {
    return instance.post('auth/login', {
      email,
      password,
      rememberMe
    })
  },
  logout() {
    return instance.delete('auth/login');
  }
};