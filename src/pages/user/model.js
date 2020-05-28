import * as userApi from './service';

export default {
  namespace: 'user',
  state: {},

  effects: {
    * effectsDemo(_, {call, put}) {
      const code = yield call(userApi.login, {});
      const openid = yield call(userApi.getopenid, code);
      const data = yield call(userApi.getUserInfo, {});
      yield put({
        type: 'save',
        payload: {...openid,...data}
      });
    },
  },

  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    },
  },

};
