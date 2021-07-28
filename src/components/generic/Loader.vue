<template>
    <div class="p-background loading d-flex align-center justify-center" v-if="visible">
        <v-img max-height="90" max-width="90" src="@/assets/loader.png"></v-img> <br>
        <!-- <v-btn @click="visible = false"></v-btn> -->
    </div>
</template>

<script>
    export default {
        props: {
            visible: {
                type: Boolean,
                required: true,
                default: false,
            },
        },
        name: 'loader',
        data: function () {
            return {
                
            }
        }
    }
</script>

<style>

</style>