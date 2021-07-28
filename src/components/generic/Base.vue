<template>
    <div class="p-background d-flex align-center">
        <wellcome />
        <loader :visible="loading" />
    </div>
</template>

<script>
    import Wellcome from '../home/Welcome'
    import Loader from './Loader'
    export default {
        name:'Base',
        components: {
            'wellcome': Wellcome,
            'loader': Loader,
        },
        data: function(){
            return{
                loading:false
            }
        },
        methods:{
            activeModal(){
                this.loading = !this.loading
            }
        }
    }
</script>

<style>

</style>