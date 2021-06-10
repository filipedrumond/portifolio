<template>
    <div class="">
        {{pessoa}}
    </div>
</template>

<script>
// var component = require("./components/Component")
export default {
    name: 'Pessoa',
    data() {
        return {
            pessoa: {
                id: "",
                id_related: "",
                nome : "",
                telefon_contato: "",
                endereco: {
                    rua: "",
                    cep: "",
                    bairro: "",
                    cidade: ""
                }
            }
        };
    },
    created: function () {
        this.load();
    },
    methods:{
        load: function() {
            let self = this;
            (async () => {
                try {
                    let result = await self.getPessoa(self.$route.params.id);
                    self.pessoa = result.body;
                } catch (error) {
                    self.SimpleAlerts.error({ text: 'Algo deu errado' });
                    return console.log(error);
                }
            })();
        },
    },
    components: {},
};
</script>
<style lang="scss"></style>

