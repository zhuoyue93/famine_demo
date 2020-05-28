import * as indexApi from "../index/service";

export default  {
  namespace: 'index',
  state: {
    banner: [{id: 11, name: "小白课", price: 19, resource: null, primaryPicUrl: "https://www.ichangtou.com/images/project-p1.jpg"},{id: 12, name: "进阶课程", price: 328, resource: null, primaryPicUrl: "https://www.ichangtou.com/images/project-p2.jpg"}]
  },

  effects: {
    * swiper(_, {call, put}) {
      const data = yield call(indexApi.demo, {});
      // yield put({
      //   type: 'save',
      //   payload: {
      //     banner: data
      //   },
      // });
    }
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  }
}
