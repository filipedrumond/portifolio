<template>
    <div class="d-flex">
        <div class="arvore">
            <img src="assets/img/pinheiro.png" alt="" srcset="">
            <div class="" v-for="(contato, index) in contatos" :key="`contato-${index}`">
                <treeFruit :index="index" :contato="contato"></treeFruit>
            </div>
        </div>
        <div class="w-50">
            <pre>{{contatos}}</pre>
        </div>
    </div>
</template>

<script>
import treeFruit from './components/treeFruit';
export default {
    name: 'linkTree',
    components: {
        treeFruit,
    },
    data() {
        return {
            contatos:[
                {
                    type:'twitter',
                    icon: 'fa-twitter',
                    src:'https://twitter.com/filipe_dru'
                },
                {
                    type:'twitter',
                    icon: 'fa-twitter',
                    src:'https://twitter.com/filipe_dru'
                },
                {
                    type:'twitter',
                    icon: 'fa-twitter',
                    src:'https://twitter.com/filipe_dru'
                },
                {
                    type:'twitter',
                    icon: 'fa-twitter',
                    src:'https://twitter.com/filipe_dru'
                },
                {
                    type:'twitter',
                    icon: 'fa-twitter',
                    src:'https://twitter.com/filipe_dru'
                },
            ]
        };
    },
    created: function () {},
};
</script>
<style lang="scss">
    .arvore{
        position: relative;
    }
</style>