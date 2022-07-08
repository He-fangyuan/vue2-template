import axios from "axios";
import Cookies from "js-cookie"; //cookies存储
import qs from "qs"; //字符串解析
import NProgress from "nprogress"; //加载
import { Message } from "element-ui"; //信息提示

NProgress.inc(0.2);
NProgress.configure({ easing: "ease", speed: 500, showSpinner: false });

// 全局默认配置
// 设置 POST 请求头
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"; //"application/json;charset=UTF-8"
// 配置 CORS 跨域
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;
//axios默认配置
axios.defaults.timeout = 10000; //超时时间
axios.defaults.baseURL = "http://127.0.0.1:4523/mock/991747";

// 请求发起前拦截器
axios.interceptors.request.use(
  (config) => {
    NProgress.start();
    //验证token
    if (Cookies.get("token")) {
      config.headers.Authorization = Cookies.get("token");
    }
    // POST 请求参数处理成 axios post 方法所需的格式
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
    }
    // 这句不能省，不然后面的请求就无法成功发起，因为读不到配置参数
    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

// 响应拦截
axios.interceptors.response.use(
  (response) => {
    // 关闭 loading 效果
    NProgress.done();
    //设置token
    if (response.data.code === 11000) {
      Cookies.set("access_token", response.data.message, { expires: 1 / 12 });
      return Promise.resolve();
    } else if (response.data.code === 10000) {
      // 约定报错信息
      Message({
        message: response.data.message,
        type: "warning",
      });
      return Promise.reject(response);
    } else {
      return Promise.resolve(response);
    }
  },
  (error) => {
    if (error.response.status === 404) {
      Message({
        message: "请求地址出错",
        type: "warning",
      });
    } else if (error.response.status === 401) {
      Message({
        message: error.response.data.message,
        type: "warning",
      });
      Cookies.remove("token");
      setTimeout(() => {
        location.reload();
      }, 3000);
    }
    return Promise.reject(error.response); // 返回接口返回的错误信息
  }
);
// 导出
export default axios;
