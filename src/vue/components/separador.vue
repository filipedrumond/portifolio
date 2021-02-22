<template>
    <div :class="!texto ? 'no-text' : 'text' + ` c-separador `">
        <hr />
        <span v-if="texto">{{ texto }}</span>
        <hr />
    </div>
</template>

<script>
export default {
    name: 'separador',
    data() {
        return {
            teste: '',
        };
    },
    props: ['texto'],
    created: function () {},
    methods: {},
};
</script>
