import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import homeContent from '@/view/homeContent'
import dealCenter from '@/components/dealCenter'
import fiatradCenter from '@/components/fiatradCenter'
import payOpts from '@/view/payOpts'
import userSetting from '@/components/userSetting'
import c2c from '@/components/c2c'
import c2cOrder from '@/view/c2c/c2cOrder'
import c2cRelease from '@/view/c2c/c2cRelease'
import c2cTrade from '@/view/c2c/c2cTrade'
import c2cDetail from '@/view/c2c/c2cDetail'
import leverdealCenter from '@/components/lever_dealCenter'
import login from '@/components/login'
import register from '@/components/register'
import account from '@/components/account'
import accountCenter from '@/view/accountCenter'
import accountEntrust from '@/view/accountEntrust'
import accountSet from '@/view/accountSet'
import authentication from '@/view/authentication'
import payment from '@/view/payment'
import accountMessage from '@/view/accountMessage'
import setCash from '@/components/setCash'
import recharge from '@/view/recharge'
import rechargeMoney from '@/view/rechargeMoney'
import coinRecord from '@/view/coinRecord'
import noticeList from '@/components/noticeList'
import noticeDetail from '@/components/noticeDetail'
import aceite from '@/view/aceite'
import region from '@/view/region'
import chargeRecord from '@/view/chargeRecord'
import new_account from '@/components/new_account'
import finance from '@/view/accounts/finance'
import transfer from '@/view/accounts/transfer'
import lever from '@/view/accounts/lever'
import finanrec from '@/view/accounts/finanrec'
import manger from '@/view/accounts/lever_manger'
import legal from '@/view/accounts/legal'
import change from '@/view/accounts/change'
import legalAccount from '@/view/accounts/legalAccount'
import changeAccount from '@/view/accounts/changeAccount'
import transferLegal from '@/view/accounts/transferLegal'
import transferLog from '@/view/transfer_log'
import res_pass from '@/view/res_pass'
import allTransaction from '@/view/all_transaction'
import leverTransactions from '@/view/lever_transactions'
import leverTransaction from '@/view/lever/lever_transaction'
import leverList from '@/view/lever/leverList'
import transferRecord from '@/view/lever/transferRecord'
import success from '@/view/success'
import quotation from '@/components/quotation'
import ForgetPwd from '@/components/ForgetPwd' //忘记密码
import ResetPwd from '@/components/ResetPwd' //重置密码密码
import withdraw_address from '@/view/accounts/withdraw_address'
import letransactions from '@/view/accounts/letransactions'
import leverRecord from '../view/lever/leverRecord.vue'
import bindEmail from '../view/bindEmail.vue'
import secondContract from "@/components/secondContract";
import iepnList from "@/components/iepnList";
import accountRecharge from '@/view/accounts/accountRecharge.vue';
// import match from '../components/match.vue'
Vue.use(Router)
export default new Router({
    routes: [

        {
            path: '/',
            name: 'home',
            component: home,

            children: [{
                    path: '',
                    name: 'homeContent',
                    component: homeContent
                },
                {
                    path: '/match',
                    component: () =>
                        import ('../components/match.vue')
                },
                {
                    path: '/fiatradCenter',
                    name: 'fiatradCenter',
                    component: () =>
                        import ('@/components/fiatradCenter')
                },
                {
                    path: '/userSetting',
                    name: 'userSetting',
                    component: () =>
                        import ('@/components/userSetting'),
                    children: [{
                        path: '',
                        component: () =>
                            import ('@/view/payOpts')
                    }]
                },
                {
                    path: '/c2c',
                    name: 'c2c',
                    component: () =>
                        import ('@/components/c2c'),
                    children: []
                },
                {
                    path: '/c2cOrder',
                    name: 'c2cOrder',
                    component: () =>
                        import ('@/view/c2c/c2cOrder')

                },
                {
                    path: '/c2cRelease',
                    name: 'c2cRelease',
                    component: () =>
                        import ('@/view/c2c/c2cRelease')

                },
                {
                    path: '/c2cTrade',
                    name: 'c2cTrade',
                    component: () =>
                        import ('@/view/c2c/c2cTrade')

                },
                {
                    path: '/c2cDetail',
                    name: 'c2cDetail',
                    component: () =>
                        import ('@/view/c2c/c2cDetail')

                },
                {
                    path: '/dealCenter',
                    name: 'dealCenter',
                    component: () =>
                        import ('@/components/dealCenter')
                },
                {
                    path: '/quotation',
                    name: 'quotation',
                    component: () =>
                        import ('@/components/quotation')
                },
                {
                    path: '/secondDealCenter',
                    name: 'secondContract',
                    component: () =>
                        import ('@/components/secondContract')
                },
                {
                    path: '/leverdealCenter',
                    name: 'leverdealCenter',
                    component: () =>
                        import ('@/components/lever_dealCenter')
                },
                {
                    path: '/allTransaction',
                    name: 'allTransaction',
                    component: () =>
                        import ('@/view/all_transaction')
                },
                {
                    path: '/leverRecord',
                    component: () =>
                        import ('../view/lever/leverRecord.vue')
                },
                {
                    path: '/bindEmail',
                    component: () =>
                        import ('../view/bindEmail.vue')
                },
                {
                    path: '/leverTransactions',
                    name: 'leverTransactions',
                    component: () =>
                        import ('@/view/lever_transactions')
                },
                {
                    path: '/leverTransaction',
                    name: 'leverTransaction',
                    component: () =>
                        import ('@/view/lever/lever_transaction')
                },
                {
                    path: '/leverList',
                    name: 'leverList',
                    component: () =>
                        import ('@/view/lever/leverList')
                },
                {
                    path: '/transferRecord',
                    name: 'transferRecord',
                    component: () =>
                        import ('@/view/lever/transferRecord')
                },
                {
                    path: '/success',
                    name: 'success',
                    component: () =>
                        import ('@/view/success')
                },
                {
                    path: '/pledge',
                    name: 'pledge',
                    component: () =>
                        import ('@/view/lock')
                },

            ]
        },
        {
            path: '/components/login',
            name: 'login',
            component: () =>
                import ('@/components/login')
        },
        {
            path: '/forgetPwd',
            name: 'forgetPwd',
            component: () =>
                import ('@/components/ForgetPwd')
        },
        {
            path: '/resetPwd',
            name: 'resetPwd',
            component: () =>
                import ('@/components/ResetPwd')
        },
        {
            path: '/components/register',
            name: 'register',
            component: () =>
                import ('@/components/register')
        },
        {
            path: '/noticeList',
            name: 'noticeList',
            component: () =>
                import ('@/components/noticeList')
        },
        {
            path: '/upstart',
            name: 'upStar',
            component: () =>
                import ('@/components/iepnList')
        },
        {
            path: '/components/noticeDetail',
            name: 'noticeDetail',
            component: () =>
                import ('@/components/noticeDetail')
        },
        {
            path: '/account',
            name: 'account',
            component: () =>
                import ('@/components/account'),
            children: [{
                    path: '/accountCenter',
                    name: 'accountCenter',
                    component: () =>
                        import ('@/view/accountCenter')
                },
                {
                    path: '/accountEntrust',
                    name: 'accountEntrust',
                    component: () =>
                        import ('@/view/accountEntrust')
                },
                {
                    path: '/accountMessage',
                    name: 'accountMessage',
                    component: () =>
                        import ('@/view/accountMessage')
                },
                {
                    path: '/accountSet',
                    name: 'accountSet',
                    component: () =>
                        import ('@/view/accountSet')
                },
                {
                    path: '/recharge',
                    name: 'recharge',
                    component: () =>
                        import ('@/view/recharge')
                },
                {
                    path: '/coinRecord',
                    name: 'coinRecord',
                    component: () =>
                        import ('@/view/coinRecord')
                },
                {
                    path: '/rechargeMoney',
                    name: 'rechargeMoney',
                    component: () =>
                        import ('@/view/rechargeMoney')
                },
                {
                    path: '/aceite',
                    name: 'aceite',
                    component: () =>
                        import ('@/view/aceite')
                },
                {
                    path: '/region',
                    name: 'region',
                    component: () =>
                        import ('@/view/region')
                },
                {
                    path: '/chargeRecord',
                    name: 'chargeRecord',
                    component: () =>
                        import ('@/view/chargeRecord')
                },
                {
                    path: '/transferLog',
                    name: 'transferLog',
                    component: () =>
                        import ('@/view/transfer_log')
                },
                {
                    path: '/res_pass',
                    name: 'res_pass',
                    component: () =>
                        import ('@/view/res_pass')
                },


                {
                    path: '/userSetting',
                    name: 'userSetting',
                    component: () =>
                        import ('@/view/payOpts'),
                },
                {
                    path: '/authentication',
                    name: 'authentication',
                    component: () =>
                        import ('@/view/authentication')
                },
                {
                    path: '/payment',
                    name: 'payment',
                    component: () =>
                        import ('@/view/payment')
                },
            ]

        },
        {
            path: '/new_account',
            name: 'new_account',
            component: () =>
                import ('@/components/new_account'),
            children: [
                //jqk
                {
                    path: '/finance',
                    name: 'finance',
                    component: () =>
                        import ('@/view/accounts/finance')
                },
                {
                    path: '/letransactions',
                    name: 'letransactions',
                    component: () =>
                        import ('@/view/accounts/letransactions'),
                },
                {
                    path: '/transfer',
                    name: 'transfer',
                    component: () =>
                        import ('@/view/accounts/transfer')
                },
                {
                    path: '/lever',
                    name: 'lever',
                    component: () =>
                        import ('@/view/accounts/lever')
                },
                {
                    path: '/change',
                    name: 'change',
                    component: () =>
                        import ('@/view/accounts/change')
                },
                {
                    path: '/legal',
                    name: 'legal',
                    component: () =>
                        import ('@/view/accounts/legal')
                },
                {
                    path: '/legalAccount',
                    name: 'legalAccount',
                    component: () =>
                        import ('@/view/accounts/legalAccount')
                },
                {
                    path: '/changeAccount',
                    name: 'changeAccount',
                    component: () =>
                        import ('@/view/accounts/changeAccount')
                },
                {
                    path: '/transferLegal',
                    name: 'transferLegal',
                    component: () =>
                        import ('@/view/accounts/transferLegal')
                },
                {
                    path: '/accountRecharge',
                    name: 'accountRecharge',
                    component: () =>
                        import ('@/view/accounts/accountRecharge')
                },
                {
                    path: '/withdraw',
                    name: 'withdraw',
                    component: () =>
                        import ('@/view/accounts/withdraw')
                },
                {
                    path: '/record',
                    name: 'record',
                    component: () =>
                        import ('@/view/accounts/record')
                },
            ]

        },
        // 合约管理
        {

            path: '/lever_manger',
            name: 'manger',
            component: () =>
                import ('@/view/accounts/lever_manger'),
        },
        // 财务记录
        {

            path: '/finanrec',
            name: 'finanrec',
            component: () =>
                import ('@/view/accounts/finanrec'),
        },
        // 地址管理
        {

            path: '/withdraw_address',
            name: 'withdraw_address',
            component: () =>
                import ('@/view/accounts/withdraw_address'),
        },
        //123

        {
            path: '/setCash',
            name: 'setCash',
            component: () =>
                import ('@/components/setCash')
        },


    ]
})