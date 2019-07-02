import { MemberEntity } from '../../model'
import { members } from './mockData'

// 等待action调用 交给reducer更新状态
// 指定Promise的泛型类型
const fetchMembers = (): Promise<MemberEntity[]> => {
    return Promise.resolve(members);
}
export const memberAPI = {
    fetchMembers
}