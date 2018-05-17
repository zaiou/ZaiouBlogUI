import * as t from './mutation-types.js';
import { user } from '@/sessionstorage/index'
export default {//获取用户信息保存到store
	[t.SET_USER_DATA](state, data) {
		state.userInfo = data; //保存用户信息到store中的info
		user.set(data) //保存用户信息到sessionstorage
	},


	// 退出登录
	// [t.OUT_LOGIN](state) {
	// 	state.userInfo = { name: "" };
	// 	state.login = false;
	// },
	// [t.RECORD_USERINFO](state, info) {
	// 	state.userInfo = info;
	// 	state.login = true;
	// },
	
}