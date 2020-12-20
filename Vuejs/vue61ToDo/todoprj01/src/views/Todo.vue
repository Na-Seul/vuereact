<style scoped>
body {
    text-align: center;
    background-color: #f6f6f8;
}
input {
    border-style: groove;
    width: 200px;
}
button {
    border-style: groove;
}
.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

<template>
    <div id="app">

        <!-- TodoHeader -->
        <todo-header></todo-header>

        <!-- TodoInput -->
        <todo-input v-on:add-todo="addTodo"></todo-input>

        <!-- TodoList -->
        <todo-list v-bind:todo-items="todoItems" v-on:done-toggle="doneToggle" v-on:remove-todo="removeTodo"></todo-list>

        <!-- TodoFooter -->
        <todo-footer v-on:clear-all="clearAll"></todo-footer>

    </div>
</template>

<script>
import TodoHeader from "@/components/todo/TodoHeader";
import TodoInput from "@/components/todo/TodoInput";
import TodoList from "@/components/todo/TodoList";
import TodoFooter from "@/components/todo/TodoFooter";

    export default {
        props: [] ,
        data: function() {
            return {
                todoItems: [
                    { id: 1, todo: "영화보기", done: false },
                    { id: 2, todo: "주말 산책", done: true },
                    { id: 3, todo: "ES6 학습", done: false },
                    { id: 4, todo: "잠실 야구장", done: false }
                ],
            }
        },
        methods: {
            doneToggle: function (id, index) {
                this.$data.todoItems[index].done = !this.$data.todoItems[index].done;
            },
            removeTodo: function (id, index) {
                this.$data.todoItems.splice(index,1);
            },
            clearAll: function() {
                this.$data.todoItems = [];
            },
            addTodo: function(newTodoItem){
                // this.$data.todoItems에서 최대 id 값  찾기
                var maxObj = null;
                if (this.$data.todoItems.length > 0) {
                    maxObj = this.$data.todoItems.reduce(function (previtem, nextitem) {
                        return previtem.id > nextitem.id ? previtem : nextitem;
                    });
                    // maxObj === { id: 4, todo: "잠실 야구장", done: false }
                }
                else {
                    maxObj === { id: 0, todo: "", done: false }
                }

                var obj = {
                    id: maxObj.id + 1,
                    todo: newTodoItem,
                    done: false
                }

                // this.$data.todoItems 에 obj를 추가하시오. 
                //this.$data.todoItems[this.$data.todoItems.length] = obj;
                this.$set(this.$data.todoItems, this.$data.todoItems.length, obj);
            },
        },
        components: {
            "TodoHeader": TodoHeader,
            "TodoFooter": TodoFooter,
            "TodoList": TodoList,
            "TodoInput": TodoInput,
        },
    }
</script>