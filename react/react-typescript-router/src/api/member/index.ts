import { members } from './mockData'
import { MemberEntity } from '../../model';

// 模拟向外输出 声明返回值 :Promise 返回一个Promise(promise还需要返回一个参数 用泛型<>) :void无返回值
const fetchMembers = (): Promise<MemberEntity[]> => {
    return Promise.resolve(members)
}
export const memberAPI = {
    fetchMembers
}