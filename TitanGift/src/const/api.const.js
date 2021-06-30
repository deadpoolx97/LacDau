export const BASE_URL = "http://localhost:3010";

export const HEADER_DEFAULT = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const TIMEOUT = 30000;

// HTTP Status
export const STT_OK = 200;
export const STT_CREATED = 201;
export const STT_BAD_REQUEST = 400;
export const STT_UNAUTHORIZED = 401;
export const STT_FORBIDDEN = 403;
export const STT_NOT_FOUND = 404;
export const STT_INTERNAL_SERVER = 500;

//products
export const GET_PRODUCTS = "/products/";
export const ADD_PRODUCTS = "/products";
export const PUT_PRODUCTS = "/products/{0}";
export const DELETE_PRODUCTS = "/products/{0}";
