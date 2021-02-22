<template>
    <section>
        <div class="content">
            <div class="title">
                <h1>Acessar o coleiraQr</h1>
            </div>
            <form action="" v-on:submit.prevent="loginAction">
                <label for="fname">Usuário </label>
                <input
                    type="text"
                    v-model="usuario"
                    placeholder="filipe@mydog.com"
                    required
                />
                <label for="lname">Senha </label>
                <input
                    type="password"
                    v-model="senha"
                    placeholder="*****"
                    required
                />
                <button class="btn btn-primary" type="submit">
                    LOG IN
                </button>
            </form>
            <div class="options">
                <a class="link-primary" href="/esqueci-minha-senha">
                    Esqueci minha senha
                </a>
                <router-link to="/register" class="link-primary">
                    Não tenho conta
                </router-link>
            </div>
            <separador texto="ou" />
            <div class="social-login">
                <login-facebook></login-facebook>
                <!-- <div class="twitter">
                    <div class="icon">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                    <div class="text">
                        <span>FAÇA LOGIN COM TWITTER</span>
                    </div>
                </div> -->
                <!--<div class="google">
                    <div class="icon">
                        <i class="fa fa-google" aria-hidden="true"></i>
                    </div>
                    <div class="text">
                        <span>FAÇA LOGIN COM GOOGLE</span>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script>
import separador from './components/separador';
import loginFacebook from './components/loginFacebook';

export default {
    name: 'Login',
    data() {
        return {
            usuario: '',
            senha: '',
            result: {},
        };
    },
    methods: {
        goMeusAnimais: function (event) {
            event.preventDefault();

            this.$router.push('meus-animais');
        },
        loginAction: function (event) {
            event.preventDefault();
            let self = this;
            (async () => {
                let result = {};
                try {
                    result = await self.apiLogin(self.usuario, self.senha);
                } catch (error) {
                    self.SimpleAlerts.error({ text: 'Senha Incorreta' });
                    return console.log(error);
                }
                self.$session.set('token', 'Bearer ' + result.body.token);
                self.$session.set('user', result.body.user);
                self.$router.push('/meus-animais');
            })();
        },
    },
    created: function () {},
    mounted: function () {},
    components: { separador, loginFacebook },
};
</script>
