const { promisify } = require('promise-callbacks');

const w = (promise) => {
  if (promise) {
    return promise.then((data) => [null, data]).catch((error) => [error, null]);
  } else {
    return Promise.reject(new Error('promise is undefined'));
  }
};
const p = (context, fnName) => {
  return promisify.methods(context, [fnName])[fnName];
};

export { w, p };
