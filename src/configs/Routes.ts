/**
 * Created by zhuzhui on 2016/11/2.
 */
import {LoginPage} from '../pages/login/login';
import {MyPraisePage} from '../pages/myPraise/myPraise';
import {AgreementPage} from '../pages/agreement/agreement';
import {TabsPage} from '../pages/tabs/tabs';
import {SMSLoginPage} from '../pages/smsLogin/smsLogin';

export const Routes = {
    'Tabs': {
        page: TabsPage,
        params: {index:1},
        options: {duration:0},
        done: null,
        root: true,
        url: '/tabs',
        enable: true,
        title: '主页',
    },
    'Login': {
        page: LoginPage,
        params: null,
        options: null,
        done: null,
        tokens: ['token','uuid'],
        tokensLocation: ['local','local'],
        reverse: true,
        next: {
            name: 'Contact',
            params: null,
            options: null,
            done: null,
            force: false
        },
        url: '/login',
        title: '登录页',
    },
    'SMSLogin': {
        page: SMSLoginPage,
        params: null,
        options: null,
        done: null,
        tokens: ['token','uuid'],
        tokensLocation: ['local','local'],
        reverse: true,
        next: {
            name: 'Contact',
            params: null,
            options: null,
            done: null,
            force: false
        },
        url: '/SMSlogin',
        title: '短信登录页',
    },
    'MyPraise': {
        page: MyPraisePage,
        params: null,
        options: null,
        done: null,
        tokens: ['token','uuid'],
        redirect: {
            name: 'Login',
            params: null,
            options: null,
            done: null
        },
        url: '/myPraise',
        title: '我的点赞'
    },
    'Agreement': {
        page: AgreementPage,
        url: '/agreement',
        title: '用户协议',
        pop: { //当用户在此页面点击返回按钮时且当前页面栈里找不到上一级页面时的指定跳转页面（非必须配置）
            name: 'Tabs',
            params: null,
            options: null,
            done: null,
            force:false //true表示无论页面栈里有没有上一级页面都强制跳向配置页，默认为false
        }
    },
}