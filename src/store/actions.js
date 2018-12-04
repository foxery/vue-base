export const recordTop = ({ commit }) => {
  commit({
    type: 'getTop',     //对应mutation.js中的getTop方法
    top: 100
  });
};