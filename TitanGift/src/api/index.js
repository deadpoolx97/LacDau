import { ApiConstant, AppConstant } from "const";

export const defaultConfig = {
  baseUrl: ApiConstant.BASE_URL,
  headers: ApiConstant.HEADER_DEFAULT,
  timeout: ApiConstant.TIMEOUT,
};

export const defaultConfigWithToken = {
  ...defaultConfig,
  headers: { ...ApiConstant.HEADER_DEFAULT },
};

export const createApiWithToken = (initConfig = defaultConfigWithToken, token) => {
  if (!token) token = Cookie.get(AppConstant.KEY_TOKEN);
  if (token) {
    initConfig.headers.Authorization = `Bearer ${token}`;
  }
  return axios.create(initConfig);
};

var Api = () => createApiWithToken();

export const LoginApi = axios.create(defaultConfig);

export var ReceiptApi = axios.create({
  ...defaultConfig,
  baseURL: ApiConstant.RECEIPT_BASE_URL,
});
export default Api;
