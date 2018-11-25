const w = (promise) => {
  if (promise) {
    return promise.then((data) => [null, data]).catch((error) => [error, null]);
  } else {
    return Promise.reject(new Error('promise is undefined'));
  }
};

export { w };
