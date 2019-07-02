// 分模块开发
import { State } from '@/store/interface'
import { Commit } from 'vuex';
import { getMovieList } from '@/api/movie'
const getters = {}
const state: State = {
    movieList: []
}
const mutations = {}
// actions通过commit提交给mutations 修改数据
const actions = {
    // commit解构出来并重新命名
    async movieList(context: { commit: Commit }, cate: string) {
        // 返回的结果不约束类型 any任何类型
        const res = await getMovieList(cate).then((response: any) => response)
        // 获取到res
        return res
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}