const App = Vue.createApp({
  // methods and content go here
  //add data
  data() {
    return {
      firstname: "Wil",
      lastname: "Crat",
      imageSource: "./images/terminal.png",
    };
  },
});

//mount the app to indicate the portion of the page the app controls
App.mount("#app");

//}).mount('#app'); also works
