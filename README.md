# vue_tutorial

## ライブラリ/ツール

- [vue-cli](https://github.com/vuejs/vue-cli) プロジェクトの雛形を生成する(バンドルやlocalサーバー設定)
- [vueify](https://github.com/vuejs/vueify) Browserifyでコンポーネント定義
- [vue-loader](https://github.com/vuejs/vue-loader) webpackでコンポーネント定義
- Vuex State管理
- [vue-router](https://github.com/vuejs/vue-router) ルーティングライブラリ
- [vue-validator](https://github.com/kazupon/vue-validator) フォームバリデーションライブラリ

### vue-routerの指定

```javascript:main.js
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter) // VueRouterを使うことをVueに知らせる

const router = new VueRouter(routes) // ルーターインスタンスの作成

new Vue({
  router // router にルーターインスタンスを指定
});
```

## オプション

- el VueインスタンスとDOM要素を紐付ける
- data stateを持たせる(stateはtemplateから{{}}で参照)
- methods Vueインスタンスにメソッドを追加
- computed なんからの処理を加えた値を表示
- created Vueインスタンスが作成されたあと、要素とは紐付いていないタイミング（$elがundefined）で実行したいとき
- mounted 要素に紐付けられたあとのタイミングで、何らかの処理を実行したいとき
- watch 値の変更を監視して処理を実行

## ディレクティブ

- v-on イベントのハンドリング(click、submit、keyup)
- v-model フォーム要素のvalueとStateをバインディング
- v-if/v-show 条件によって要素の表示/非表示切り替え
- v-bind 動的に属性値を割り当てる
- v-for 繰り返し表示

## .vueファイルとは

.vueファイルを構成する3つの要素

- template コンポーネントのHTMLを記述
- style コンポーネントのCSSを記述
- script コンポーネントのJavaScriptを記述(vue-loaderがBabelでトランスパイル)

```javascript
<template>
  <div class="my-component">
    <button @click="onClick">{{message}}</button>
  </div>
</template>

<style lang="scss" scoped>
  .my-component {
    color: tomato;
    button {
      border: 1px solid #000;
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        message: 'Hello!!'
      }
    },
    methods: {
      onClick() {
        console.log(this.message)
      }
    }
  }
</script>
```

## 便利なツール

- [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd/related) DevToolsでアプリケーションやコンポーネントの状態を確認

## 参考サイト

- [これから始める
Vue.js 2.0](https://app.codegrid.net/series/2016-vue)
- [Vue Router](https://router.vuejs.org/ja/)