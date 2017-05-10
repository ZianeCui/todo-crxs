<template>
    <div>
        <vue-input></vue-input>
        <todo-item></todo-item>
        <foot></foot>
    </div>
</template>


<script>
import vueInput from './components/input.vue';
import todoItem from './components/todo_item.vue';
import foot from './components/foot.vue';

export default {
    components: {
        vueInput,
        todoItem,
        foot
    },
    data() {
        return {}
    },
    methods() {

    }
}
</script>
