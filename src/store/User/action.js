import * as t from './mutation-types.js';
import Api from '@/api/index'

export default {
	storageUserData({commit}){ //设置用户信息到store
		Api.get('admin/info',{}).then(e=>{
			console.log(JSON.stringify(e))
			if(e.code==0){
				commit(t.SET_USER_DATA,e.data)
			}
		})
	},
	[t.USER_REFRESH]({state,commit}){ //用户刷新页面获取用户信息设置到store
		Api.get('auth/info', {}).then(e => {
			if(e.code==0){
				commit(t.SET_USER_DATA,e.data)
			}
		})
	}
}