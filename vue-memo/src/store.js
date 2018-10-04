const state = {
  memos: [],
};

const debug = process.env.NODE_ENV !== 'production';

const actions = {
  addMemo(newMemo) {
    debug && console.log(`addMemo triggered with`, newmemo);
    newMemo.id = state.memos.reduce((id, memo) => {
      return id < memo.id ? memo.id : id;
    }, 0) + 1;
    state.memos.push(newMemo);
  },
  removeMemo(id) {
    debug && console.log(`removeMemo triggered with`, id);
    const targetId = parseInt(id, 10);
    const index = state.memos.findIndex((memo) => {
      return memo.id === targetId;
    });
    state.memos.splice(index, 1);
  },
  updateMemo(memo) {
    debug && console.log(`updateMemo triggered with`, memo);
    const targetId = parseInt(memo.id, 10);
    const index = state.memos.findIndex((memo) => {
      return memo.id === targetId;
    });
    state.memos.splice(index, 1, memo);
  }
};
