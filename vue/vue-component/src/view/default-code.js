const code =
`<template>
    <div class="msg">
        <input v-model = "message">{{message}}
    </div>
</template>
<script>
    export default {
        data () {
            return {
                message:""
            }
        }
    }
</script>
<style>
.msg{
    color:orange;
    font-weight:bold;
}
</style>
`
export default code