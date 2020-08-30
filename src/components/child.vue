<template>
    <div>
        子组件展示数据
        <p>{{obj.name}}</p>
        <p>
            数量{{obj.count}}
        </p>
    </div>
</template>
<script>
export default {
    inject:['obj'],
    data(){
        return {

        }
    }
}
</script>