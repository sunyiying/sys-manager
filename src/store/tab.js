export default {
  state: {
    menu: [],
    isCollapse:false,
    currentMenu: null,
    tabsList: [{
      path: "/",
      label: "首頁",
      name:"home",
      icon: "home"
  }]
  },
  mutations: {
    selectMenu(state, val) {
      if (val.name !== 'home') {
        state.currentMenu = val;
        if (state.tabsList.findIndex(c => c.name == val.name) == -1)
          state.tabsList.push(val);
      }else{
        state.currentMenu=null;
      }  
    },
    closeTab(state,val){
     let itemIndex= state.tabsList.findIndex(c=>c.name==val.name);
     state.tabsList.splice(itemIndex,1);
    },
    closeMenu(state){
      state.isCollapse=!state.isCollapse;
    }
  },
  actions: {}
};
