<template>
    <v-row>
        <template v-if="!loading">
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" class="d-flex justify-center">
            <v-img max-height="250" max-width="250" src="@/assets/pikachu.png"></v-img>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" class="d-flex justify-center">
            <span class="p-title">Welcome to Pokédex</span>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" class="d-flex justify-center">
            <p class="p-text center-welcome-text mx-4">
                The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon
                world.
            </p>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" class="d-flex justify-center">
            <v-btn color="error" rounded @click="activeParentModal()">
                Get started
            </v-btn>
        </v-col>
        </template>
        <loader :visible="loading" />
    </v-row>
</template>

<script>
    import Loader from '../../components/generic/Loader'
    export default {
        components: {
            'loader': Loader,
        },
        data: function () {
            return {
                loading: false
            }
        },
        methods: {
            activeParentModal() {
                this.loading = true
                // this.$parent.activeModal()
                setTimeout(() => {
                    this.$router.push({
                        name: 'search'
                    })
                    // this.loading = false
                }, 1400);
            }
        }
    }
</script>

<style>

</style>