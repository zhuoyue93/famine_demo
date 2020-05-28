import * as detailApi from './service';

export default {
  namespace: 'detail',
  state: {
    banner: []
  },

  effects: {
    * effectsDemo({payload}, {call, put }) {
      const data = yield call(detailApi.demo, {...payload});
      yield put({
        type: 'save',
        payload: {
          banner: data,
        }
      });
    },
    * queryrecord({payload}, {call, put,select }) {
      const user = {user:{nickName: 'zy',openid:'o-F_q4t0SuJ0TkYXMwuMmkJ5nN88'},openid:'o-F_q4t0SuJ0TkYXMwuMmkJ5nN88'};//yield select(state =>{state.user.userInfo});
      const data = yield call(detailApi.queryrecord, {...payload,...user});
      yield put({
        type: 'save',
        payload: {
          ...data
        }
      });
    },

    *buy({payload}, {call, put,select }) {
      const user = {user:{nickName: 'zy',openid:'o-F_q4t0SuJ0TkYXMwuMmkJ5nN88'},openid:'o-F_q4t0SuJ0TkYXMwuMmkJ5nN88'};//yield select(state =>{state.user.userInfo});
      const data = yield call(detailApi.buy, {...payload,...user});
      yield put({
        type: 'save',
        payload: {
          banner: data,
        }
      });
    }
  },

  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    },
  },

};
