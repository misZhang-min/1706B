
export default {

  namespace: 'num',

  state: {
    num:520
  },


  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    changeNum(state,{payload:{type}}) {
      return { ...state, num: type==='+'?++state.num: --state.num};
    },
  },

};
