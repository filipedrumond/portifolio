<template>
    <div class="">
        <h1>Pessoa encontrada</h1>
        <h2>{{pessoa.nome}}</h2>
        <div class="">
            <b>Telefone de contato: </b>
            <span>{{pessoa.telefon_contato}}</span>
        </div>
        <div class="">
            <b>Endereço: </b>
            <span>R: {{pessoa.endereco.rua}} - Nº: {{pessoa.endereco.numero}}</span> <br>
            <span><b>Cidade:</b> {{pessoa.endereco.cidade}} - <b>Bairro:</b> {{pessoa.endereco.bairro}}</span>
        </div>
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
                    numero: "",
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
                    self.pessoa = result.body[0];
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

