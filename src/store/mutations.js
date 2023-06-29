let mutations = {
    setAccountNum(state) {
        let accountNum = window.localStorage.getItem('accountNum')
        this.state.accountNum = accountNum
    },
    setDatas(state, datas) {
        this.state.datas = datas;
    },
    setWeb(state, obj) {
        state.web = obj
    },
    setAppurl(state, url) {
        state.appUrl = url
    }
}
export default mutations
