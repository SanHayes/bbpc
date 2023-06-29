export default {
    getWeb({ commit, state }, vm) {
        return vm.$http.get('/api/web').then(res => {
            if (res.status === 200) {
                const data = res.data
                document.title = data.name || vm.$t('siteName');
                commit('setWeb', data)
                return data
            }

        })
    }
}