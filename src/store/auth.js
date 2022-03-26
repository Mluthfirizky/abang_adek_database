export default {
    state: {
        searchValue: "",
      },
      getters: {
        search(state){
          return state.searchValue
        },
      },
      mutations: { 
        changeValue(state, isidata) {
          state.searchValue = isidata
        },
      },
      actions: { 
        async dataCollect(context, {dataInfo, data}) {
          localStorage.setItem(dataInfo, data);
        },
        // changeValue(state, value){
        //     state.searchValue = value
        // }
      }
  }