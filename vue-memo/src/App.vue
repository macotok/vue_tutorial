<template>
  <div id="app">
    <nav-link></nav-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavLink from './components/NavLink';
  export default {
    name: 'app',
    data() {
      return {
        memos: [
          {
            id: 1,
            text: 'テスト',
            date: '18-09-28',
            tags: ['タグ1', 'タグ2']
          },
          {
            id: 2,
            text: 'テスト2',
            date: '18-10-01',
            tags: ['タグ2', 'タグ3']
          }
        ]
      }
    },
    computed: {
      nexrId() {
        return this.memos.reduce((id, memo) => {
          return id < memo.id ? memo.id : id;
        }, 0) + 1;
      }
    },
    methods: {
      add(newMemo) {
        newMemo.id = this.nextId;
        this.memos.push(newMemo);
      },
      remove(id) {
        const index = this.memos.findIndex((memo) => {
          return memo.id === id;
        });
        this.memos.splice(index, 1);
      }
    },
    components: {
      NavLink,
    }
  }
</script>

<style>
  @import '../static/styles.css';
</style>
