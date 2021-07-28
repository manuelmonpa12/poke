<template>
    <div class="p-background d-flex pt-12 overflow-hidden">
        <v-row>
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12"
                class="d-flex justify-space-between flex-column align-center">
                <div class="content-search">
                    <v-text-field clearable v-model="search" solo label="Search" prepend-inner-icon="mdi-magnify">
                    </v-text-field>
                    <!-- <content-list :visible="!contentError" :data="items" :search="search"  /> -->
                    <!-- {{visibleError}}
                    {{filterData.length}} -->
                    <v-row>
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" v-if="!visibleError"
                            class="d-flex justify-start align-center flex-column scroll-list">
                            <v-data-table disable-pagination hide-default-header hide-default-footer :headers="headers"
                                :items="filterData" class="elevation-1 full-width">
                                <template v-slot:item.name="{ item }">
                                    <div class="d-flex justify-space-between align-center">
                                        <span v-on:click="setDetail(item.name)">{{item.name}}</span>
                                        <v-btn v-if="!item.star" icon color="grey lighten-1" @click="item.star = 1">
                                            <v-icon>
                                                mdi-star
                                            </v-icon>
                                        </v-btn>
                                        <v-btn v-else icon color="yellow darken-3" @click="item.star = 0">
                                            <v-icon>
                                                mdi-star
                                            </v-icon>
                                        </v-btn>
                                    </div>
                                </template>
                            </v-data-table>
                            <content-detail :visible="visibleDetail" :data="itemsDetail" />
                        </v-col>
                        <content-error :visible="visibleError" />
                    </v-row>
                </div>
                <v-footer style="position: fixed;bottom: 0;" padless v-if="!visibleError"
                    class="full-width mt-2 d-flex justify-center">
                    <v-col cols="6" xs="6" sm="6" md="6" lg="3" xl="3"
                        class="d-flex justify-center align-center flex-column">
                        <v-btn block color="error" rounded @click="allData()">
                            <v-icon left>
                                mdi-format-list-bulleted-square
                            </v-icon>
                            All
                        </v-btn>
                    </v-col>
                    <v-col cols="6" xs="6" sm="6" md="6" lg="3" xl="3"
                        class="d-flex justify-center align-center flex-column">
                        <v-btn block rounded @click="filterFav = true" color="#BFBFBF">
                            <v-icon left color="white">
                                mdi-star
                            </v-icon>
                            <b style="color:white">Favorites</b>
                        </v-btn>
                    </v-col>
                </v-footer>
            </v-col>
        </v-row>
        <loader :visible="loading" />
    </div>
</template>

<script>
    import ContentError from '../../components/generic/Error'
    import contentDetail from '../../components/generic/Detail'
    import Loader from '../../components/generic/Loader'
    export default {
        name: 'Search',
        components: {
            'loader': Loader,
            'content-error': ContentError,
            'content-detail': contentDetail,
        },
        data: function () {
            return {
                search: null,
                visibleDetail: false,
                visibleError: false,
                filterFav: false,
                loading: false,
                items: [],
                itemsDetail: [],
                headers: [{
                    align: 'start',
                    value: 'name',
                }, ],
            }
        },
        watch: {
            search() {
                if (this.filterData.length >= 1) {
                    this.visibleError = false
                }
            }
        },
        computed: {
            filterData() {
                let result = this.items
                if (this.search != null && this.search != "") {
                    result = result.filter(word => word.name.includes(this.search.toLowerCase()) == true)
                }
                if (this.filterFav) {
                    result = result.filter(word => word.star == true)
                }
                if (Array.isArray(result)) {
                    if (result.length < 1) {
                        this.visibleError = true
                    } else {
                        this.visibleError = false
                    }
                }
                return result
            }
        },
        methods: {
            activeModal() {
                this.loading = !this.loading
            },
            closeDetail() {
                this.visibleDetail = false
            },
            getPokemon() {
                this.items = []
                axios.get('https://pokeapi.co/api/v2/pokemon')
                    .then((response) => {
                        if (response.data.count >= 1) {
                            this.items = response.data.results.map(e => {
                                return {
                                    name: e.name,
                                    star: 0
                                }
                            })
                            this.visibleError = false
                        } else {
                            this.visibleError = true
                        }
                    })
                    .catch((error) => {})
                    .finally(() => {});
            },
            allData(){
                this.search = null
                this.filterFav = false
            },
            setDetail(name) {
                this.itemsDetail = []
                axios.get('https://pokeapi.co/api/v2/pokemon/' + name)
                    .then((response) => {
                        if (response.data) {
                            this.itemsDetail = response.data
                            this.itemsDetail['typeArray'] = []
                            response.data.types.forEach(element => {
                                this.itemsDetail.typeArray.push(element.type.name)
                            });
                            this.visibleDetail = true
                        }
                    })
                    .catch((error) => {})
                    .finally(() => {});
            },
        },
        mounted() {
            this.getPokemon()
        }
    }
</script>

<style>

</style>