import axios from "axios";

const url = "https://kitabank.studentsresource.net/api";
const login = axios.create({
  baseURL: `${url}/login`,
});
login.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const bookscat = axios.create({
  baseURL: `${url}/`,
});
bookscat.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const bookDetail = axios.create({
  baseURL: `${url}/book/detail/`,
});
bookDetail.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const register = axios.create({
  baseURL: `${url}/register`,
});
register.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export { login, bookscat, bookDetail, register };
