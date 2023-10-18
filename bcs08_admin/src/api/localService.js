export let userLocalStorage = {
    get: () => {
      let dataJson = localStorage.getItem("USER");
      return JSON.parse(dataJson);
    },
    set: (user) => {
      let dataJson = JSON.stringify(user);
      localStorage.setItem("USER", dataJson);
    },
    remove: () => {
      localStorage.removeItem("USER");
    },
  };
  
  