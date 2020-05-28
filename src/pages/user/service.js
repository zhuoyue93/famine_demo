import Taro from "@tarojs/taro";
import Request from '../../utils/request';

export const demo = data => Request({
  url: '路径',
  method: 'POST',
  data,
});


export const login = () => Taro.login({});

export const getopenid = res =>
  Taro.request({
    url: `https://api.weixin.qq.com/sns/jscode2session?appid=wxe6d855211ce9265e&secret=a657364bf3258a0260390010ade87c47&js_code=${res.code}&grant_type=authorization_code`,
    method: 'GET'
  });

export const getUserInfo = () =>
        Taro.getUserInfo();

