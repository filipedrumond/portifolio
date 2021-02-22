<template>
    <button class="facebook" @click="loginWithFacebook()">
        <div class="icon">
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
        </div>
        <div class="text">
            <span>FAÇA LOGIN COM FACEBOOK</span>
        </div>
    </button>
</template>

<script>
export default {
    name: 'loginFacebook',
    data() {
        return {
            teste: '',
        };
    },
    methods: {
        loginWithFacebook: function () {
            let self = this; 
            window.FB.login(
                (response) => {
                    // desestrutura o retorno que vem do login para a variavel response
                    const {
                        authResponse: { accessToken, userID },
                    } = response;
                    // com o usuário logado, busca os campos abaixo com a api do facebook
                    window.FB.api(
                        '/me',
                        { fields: 'name, email, picture' },
                        function (userInfo) {
                            // montando objeto de informações do usuário logado
                            let objUserInfo = {
                                name: userInfo.name,
                                email: userInfo.email,
                                profilePic: userInfo.picture.data.url,
                            };
                            let body = { accessToken, userID, objUserInfo };
                            // fazendo post para a API interna

                            (async () => {
                                let result = {};
                                try {
                                    result = await self.apiFacebookLogin(body);
                                } catch (error) {
                                    self.SimpleAlerts.error({
                                        text: 'Senha Incorreta',
                                    });
                                    return console.log(error);
                                }
                                self.$session.set(
                                    'token',
                                    'Bearer ' + result.body.token
                                );
                                self.$session.set('user', result.body.user);
                                self.$router.push('/home');
                            })();
                        }
                    );
                },
                { scope: 'public_profile, email' }
            );

            return false;
        },
    },

    created: function () {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: '671112640388464',
                cookie: true,
                xfbml: true,
                version: 'v3.1',
            });

            window.FB.AppEvents.logPageView();
            //FBSDKLoaded();
        };
    },
    beforeCreate: function () {
        (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    },
};
</script>
