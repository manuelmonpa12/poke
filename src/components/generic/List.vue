<template>

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
            search: {
                type: [String, Number]
            }
        },
        name: 'content-error',
        components: {
            'content-error': ContentError,
            'content-detail': contentDetail,
        },
        data: function () {
            return {
                visibleDetail: false,
                visibleError: false,
                loading: false,
                items: [],
                headers: [{
                    align: 'start',
                    value: 'name',
                }, ],

            }
        },
        computed: {
            filterData() {
                debugger
                let result = this.data
                if (this.search != null) {
                    result = result.filter(word => word.name.includes(this.search))
                }
                if (Array.isArray(result)) {
                    if (result.length < 1) {debugger
                        this.visibleError = true
                    }
                }
                return result
            }
        },
        methods: {
            activeParentModal() {
                this.$parent.activeModal()
            },
            setDetail(name) {
                this.items = []
                axios
                    .get('https://pokeapi.co/api/v2/pokemon/' + name)
                    .then((response) => {
                        if (response.data) {
                            this.items = response.data
                            this.visibleDetail = true
                        }
                    })
                    .catch((error) => {})
                    .finally(() => {});
            },
            closeDetail() {
                this.visibleDetail = false
            }
        }
    }
</script>

<style>

</style>