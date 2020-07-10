<template>
    <div id="Todo">
        <h1>Todolist全部</h1>
        <input v-model="addText" type="text"><button @click="add()">添加</button>
        <div v-for="(item) in todos" :key='item.id + 300'>
            <input type="checkbox" :checked="item.done" @click="checkTodo(item.id)"> {{item.text}}{{item.done}}
            <span @click="delTodo(item.id)" style="color:red">X</span>
        </div>
        <input type="checkbox" @click="checkedAll()">全选
        <hr>
        <h1>已完成的</h1>
        <div v-for="(item) in todos" :key='item.id + 100'>
          <div v-if="item.done === true">
            <input type="checkbox" :checked="item.done" @click="checkTodo(item.id)">
            {{item.text}}
            <span @click="delTodo(item.id)" style="color:red">X</span>
          </div>
        </div>
        <hr>
        <h1>未完成的</h1>
        <div v-for="(item) in todos" :key='item.id + 200'>
          <div v-if="item.done !== true">
            <input type="checkbox" :checked="item.done" @click="checkTodo(item.id)">
            {{item.text}}
            <span @click="delTodo(item.id)" style="color:red">X</span>
          </div>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
      checkAll: false,
      addText: ''
    }
  },
  methods: {
    ...mapMutations(['toggleTodo']),
    checkTodo (id) {
      this.toggleTodo(id)
    },
    ...mapMutations(['toggleAllTodo']),
    checkedAll () {
      console.log(this.checkAll)
      this.checkAll = !this.checkAll
      this.toggleAllTodo(this.checkAll)
    },
    ...mapMutations(['addTodo']),
    add (addtext) {
      this.addTodo(this.addText)
      this.addText = ''
    },
    ...mapMutations(['deleteTodo']),
    delTodo (id) {
      // console.log(id)
      this.deleteTodo(id)
    }
  },
  computed: {
    ...mapState(['todos'])
  }
}
</script>
<style lang="less" scoped>
</style>
