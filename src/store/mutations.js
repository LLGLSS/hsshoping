const mutations = {
  updateGoodsNumber (state, goodsNumber) {
    state.goodsNumber = goodsNumber
  },
  goodsInfo (state, goodsInfo) {
    state.goodsInfo = goodsInfo // 更改仓库中的商品信息
    state.goodsInfo = state.goodsInfo.map(el => {
      return {
        ...el,
        checked: false,
        number: 1
      }
    })
  },
  // 把商品从首页添加到购物车
  addGoods (state, id) {
    // 目前已成功更改购物车中number数据，下一步把数据显示在计数器文本框中
    // 计数器文本框双向绑定之后，要获取仓库中的数组中对应对象的值（怎么获取?）需要文本框和number的值绑定
    state.goodsInfo.forEach(item => {
      if (item.id === id) {
        state.goodsCartInfo.push(item)
      }
    })
    // console.log(state.goodsCartInfo)
  },
  // 选中购物车单个商品
  checkedGood (state, id) {
    state.goodsCartInfo.forEach(item => {
      if (item.id === id) {
        item.checked = !item.checked
      }
    })
  },
  // 选中购物车所有商品
  checkedAllGoods (state, flag) {
    state.goodsCartInfo.forEach(item => {
      item.checked = flag
    })
  },
  // ===========================================以下为todoList
  toggleTodo (state, id) {
    console.log(id)
    state.todos[id].done = !state.todos[id].done
    console.log(state.todos)
  },
  toggleAllTodo (state, flag) {
    // console.log(state.todos.length)
    state.todos.forEach(item => {
      item.done = flag
    })
  },
  // 添加todolist
  addTodo (state, addText) {
    state.todos.push({ id: state.todos.length, text: addText, done: false })
  },
  // 删除todolist
  deleteTodo (state, id) {
    // console.log(state.todos[id].id)
    state.todos.forEach(item => {
      if (item.id === id) {
        // console.log(item.id)
        state.todos.splice(state.todos[id], 1)
        // console.log(state.todos)
        state.todos.forEach((item, index) => {
          item.id = index
        })
      }
    })
  }
}

export default mutations
