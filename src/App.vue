<script setup>
import Counter from './components/Counter.vue'
import axios from 'axios'
app.post('http://localhost:3000/compiler', {
  fileName: 'Counter.vue',
  fileJSON: {
    "tag": "div",
    "class" : ["app"],
    "children": [
        {
            "tag": "h1",
            "props": {
                "title": "String"
            },
            "class": ["app__title"],
        },
        {
            "tag": "h2",
            "states":{
                "count": 0
            }
        },
        {
            "tag": "h3",
            "computed": {
                "doubleCount": "count.value * 2"
            }
        },
        {
            "tag": "button",
            "events": {
                "click": {
                    "handleClick": "count.value * 2 "
                }
            }
        }
    ]
}
})
</script>

<template>
  <div>
    <Counter title="this is component Counter"></Counter>
  </div>
</template>
 
<style scoped>
 
</style>
