const menus={
    state: {
        isCollapse:false
      },
      getters:{
        isCollapse:state=>state.isCollapse
      },
      mutations: {
        SET_LEFT_MEUN:state=>{
          state.isCollapse=!state.isCollapse;
        }
      },
      actions: {
        setLeftMenu:({commit})=>{
          commit('SET_LEFT_MEUN');
        }
      }
}
export default menus;