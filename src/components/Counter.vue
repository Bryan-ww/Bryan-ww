<template>
    <div>
        <h1>{{title}}</h1>
        <h2>{{ count }}</h2>
        <h3>{{ doubleCount }}</h3>
        <button @click="handleClick">Increment</button>
    </div>
</template>

<script setup>
import { ref ,computed} from "vue" 

const count = ref(0)

const props = defineProps({
    title:String
})

const handleClick = () => {
    count.value++
}

const doubleCount = computed(() => count.value * 2)

</script>

<style lang="less" scoped>

</style>