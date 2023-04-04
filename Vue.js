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

//binding classes and styles
Vue.createApp({
  data() {
    return {
      classObject: {
        centered: true,
        active: true,
      },
    };
  },
}).mount("#class");

//styleObject
Vue.createApp({
  data() {
    return {
      styleObject: {
        "background-color": "red",
      },
    };
  },
}).mount("#style");
