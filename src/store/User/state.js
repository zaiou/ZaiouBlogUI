import { user } from '@/sessionstorage/index'
export default {
    userInfo: user.get() || {},
    defaultSrc:'https://dn-coding-net-production-static.qbox.me/fef910b9-575c-49ac-82c6-13f7dbd92f00.jpg',
};