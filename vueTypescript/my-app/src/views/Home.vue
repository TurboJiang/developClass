<template>
  <div class="home">sdfd</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Action, Mutation, State } from "vuex-class";
export default class Home extends Vue {
  private cate: string = "in_theaters";
  private active: number = 0;
  private loading: boolean = true;
  private movieListData = null;
  // ！：强制movieList将这个从外界映射进来成为本地的一个方法
  @Action private movieList!: (cate: string) => any;

  private constructor() {
    super();
    this.movieList(this.cate).then((res: any) => {
      this.movieListData = res.subjects;
      console.log(res.subjects);
    })
  }
  // 私有生命周期
  // private created() {
  //   this.movieList(this.cate).then((res: any) => {
  //     this.movieListData = res.subjects;
  //     console.log(res.subjects);
  //   });
  // }
}
</script>
