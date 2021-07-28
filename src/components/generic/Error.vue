<template>
        <v-col v-if="visible" cols="12" xs="12" sm="12" md="12" lg="12" xl="12" class="d-flex justify-center align-center flex-column">
            <span class="p-title">Uh-oh!</span>
            <span class="p-text center-welcome-text py-4">
                You look lost on your journey!
            </span>
            <v-btn color="error" rounded @click="$router.push({name:'Home'})">
                Go back home
            </v-btn>
        </v-col>
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
        name: 'content-error',
        components: {
        },
        data: function () {
            return {
                loading: false
            }
        },
        methods: {
        }
    }
</script>

<style>

</style>