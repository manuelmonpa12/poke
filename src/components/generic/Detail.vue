<template>
    <v-dialog v-model="visible" width="500">
        <template>
            <v-card class="mx-auto overflow-hidden" max-width="500">
                <v-img class="white--text align-end" height="200px" src="@/assets/fondo.png"></v-img>
                <div v-if="data.sprites" style="position: absolute;top: 0;height:200px;width: inherit;margin: 0px 30%;">
                    <v-img :src="data.sprites.front_default" height="250px" width="200px"></v-img>
                </div>
                <v-card-text class="text--primary">
                    <v-simple-table>
                        <template v-slot:default>
                            <tbody>
                                <tr>
                                    <td><b>Name:</b> {{data.name}}</td>
                                </tr>
                                <tr>
                                    <td><b>Weight:</b> {{data.weight}}</td>
                                </tr>
                                <tr>
                                    <td><b>Height:</b> {{data.height}}</td>
                                </tr>
                                <tr>
                                    <td><b>Types:</b> poison</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card-text>
                <v-card-actions class="d-flex justify-space-between">
                    <v-btn color="error" rounded v-clipboard:copy="data.name" v-clipboard:success="onCopy"
                        v-clipboard:error="onError">
                        Share to my friends
                    </v-btn>
                    <!-- <v-btn v-if="!item.star" icon color="grey lighten-1" @click="item.star = 1">
                        <v-icon>
                            mdi-star
                        </v-icon>
                    </v-btn> -->
                    <v-btn icon color="yellow darken-3" @click="item.star = 0">
                        <v-icon>
                            mdi-star
                        </v-icon>
                    </v-btn>
                </v-card-actions>
                <v-btn icon @click="closeDetail()" style="position: absolute;top: 0;right:0">
                    <v-icon color="white">
                        mdi-close-circle
                    </v-icon>
                </v-btn>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
    export default {
        props: {
            visible: {
                type: Boolean,
                required: true,
                default: false,
            },
            data: {
                type: [Array, Object]
            },
        },
        name: 'Detail',
        data: function () {
            return {
                items: []
            }
        },
        computed: {
            sharedData() {
                let result = {
                    name: this.data.name,
                    types: []
                }
                if (Array.isArray(this.data.types)) {
                    this.data.types.forEach(element => {
                        result.types.push(element.type.name)
                    });
                }
                console.log(result)
                return result
            }
        },
        methods: {
            closeDetail() {
                this.$parent.closeDetail()
            },
            onCopy: function (e) {
                alert('Acabas de copiar el siguiente texto en el portapapeles: ' + e.text)
            },
            onError: function (e) {
                alert('No se pudo copiar el texto al portapapeles')
                console.log(e);
            }
        },
        mounted() {}
    }
</script>

<style>

</style>