const login = {
    namespaced: true,
    state: {
        user: {}

    },
    mutations: {
        updatedUser(state, newData) {
            state.user = newData
        },

    },
    actions: {

    },
    getters: {

    }

}
export default login;