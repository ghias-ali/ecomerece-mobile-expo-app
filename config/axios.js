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

const cart = axios.create({
  baseURL: `${url}/cart/`,
});
cart.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const cartDelete = axios.create({
  baseURL: `${url}/user/cart/delete/`,
});
cartDelete.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const addToCart = axios.create({
  baseURL: `${url}/add-to-Cart/`,
});
addToCart.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const addToFav = axios.create({
  baseURL: `${url}/add-to-favourite/`,
});
addToFav.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const getFav = axios.create({
  baseURL: `${url}/favourite/`,
});
getFav.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const deleteFav = axios.create({
  baseURL: `${url}/user/favourite/delete/`,
});
deleteFav.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export {
  login,
  bookscat,
  bookDetail,
  register,
  cart,
  cartDelete,
  addToCart,
  addToFav,
  getFav,
  deleteFav,
};
