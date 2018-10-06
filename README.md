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

## 状態管理(State管理)

中央集権的な状態管理のパターンはStoreパターンと呼ばれ、次の制約を与える。

- 状態は単一のStoreで管理する
- 状態はActionによってのみ変更される

### stateを管理するStore

```javascript:store.js
const store = {
    debug: true,
    state: {
        message: 'Hello World!',
    },
    setMessageAction(newValue) {
        this.debug && console.log(`setMessageAction triggerrd with ${newValue}`);
        this.state.message = newValue;
    },
    clearMessageAction() {
        this.debug && console.log('clearMessageAction triggered');
        this.state.message = '';
    }
}
```

### Storeからstateを読み込む

```javascript: app.js
const vm1 = new Vue({
    el: '#vm1',
    template: `
        <div>
            <input :value="sharedState.message" @input="updateMessage">
        </div>
    `,
    data() {
        return {
            shareState: store.state,
        }
    },
    methods: {
        updateMessage(e) {
            store.setMessageAction(e.target.value);
        }
    }
});

const vm2 = new Vue({
    el: '#vm2',
    template: `
        <div>
            <p>{{sharedState.message}}</p>
            <button @click="clear">clear</button>
        </div>
    `,
    data() {
        return {
            sharedState: store.state,     
        }
    },
    methods: {
        clear() {
            store.clearMessageAction();
        }
    }
});
```

Storeを利用する際のルール

- src/pageのコンポーネントでだけStoreをimportする
- src/componentsのコンポーネントはStoreのstateを参照しない
- src/componentsの各コンポーネントは、レンダリングに必要なデータをpropsで受け取る
- src/componentsのコンポーネントはActionを実行しない
- src/componentsは$emit()を実行して、親コンポーネントにイベントを伝える
- Actionはsrc/pageのコンポーネントが実行する

### Vuex

状態管理ライブラリ

```terminal
$ npm install --save vuex
```

VuexのStoreは4つのプロパティで構成される。

```javascript
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
```

- state アプリケーションの状態
- mutations stateを変更する唯一の存在。mutationsに定義した関数はcommit()から呼び出す
- actions commit()を使ってmutationsを呼び出す関数を定義。dispatchでactionを呼び出す
- getters Store用の算出プロパティ(computedのようなもの)

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
- [ライトに使うVue.js](https://app.codegrid.net/series/2017-light-vue)