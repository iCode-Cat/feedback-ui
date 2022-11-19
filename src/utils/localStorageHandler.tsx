const asyncLocalStorage = {
  saveToStore: (name: string, value: string) => {
    return Promise.resolve().then(() => {
      localStorage.setItem(name, value);
    });
  },
  getFromStore: function (name: string) {
    return Promise.resolve().then(() => {
      return localStorage.getItem(name);
    });
  },
};

export { asyncLocalStorage };
