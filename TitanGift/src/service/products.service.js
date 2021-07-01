import { apiConstant } from "const";
import Api from "api";

export const getProducts = queryString => Api().get(apiConstant.GET_PRODUCTS + queryString);
