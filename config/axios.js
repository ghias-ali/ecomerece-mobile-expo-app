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

const onchangeboard = axios.create({
  baseURL: `${url}/getBoard/`,
});
onchangeboard.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const onchangeClass = axios.create({
  baseURL: `${url}/getTeacher/`,
});
onchangeClass.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const getTeachername = axios.create({
  baseURL: `${url}/getBook/`,
});
getTeachername.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const generalsearch = axios.create({
  baseURL: `${url}/search`,
});
generalsearch.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const checkout = axios.create({
  baseURL: `${url}/checkout `,
});
checkout.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const ordersList = axios.create({
  baseURL: `${url}/user/order/list`,
});
ordersList.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const subscription = axios.create({
  baseURL: `${url}/buy/subscription`,
});
subscription.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const getteacherbook = axios.create({
  baseURL: `${url}/get-teacher-books`,
});
getteacherbook.interceptors.request.use(
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
  onchangeboard,
  onchangeClass,
  getTeachername,
  generalsearch,
  checkout,
  ordersList,
  subscription,
  getteacherbook,
};
