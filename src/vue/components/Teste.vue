<template>
    <div>
        maybe i'm here
        {{ prato }}
    </div>
</template>

<script>
export default {
    name: 'teste',
    data() {
        return {
            identidade: {},
        };
    },
    props: ['prato'],
    created: function () {},
    methods: {
        print: () => {
            console.log('dddd');
        },
    },
};
</script>
