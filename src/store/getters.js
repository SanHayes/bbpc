export default {
    onlinereq(state) {
        return state.web.onlinereq || '1'
    },
    invitation_code(state) {
        return state.web.invitation_code || '0'
    },
    appUrl(state){
        return state.appUrl
    }
}
