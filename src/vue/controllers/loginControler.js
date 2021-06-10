var CryptoJS = require("crypto-js");
var LoginController = () => {
    return {
        methods: {
            apiLogin: function (user, password) {

                let self = this;
                var md5Pass = CryptoJS.MD5(password);

                var url = '?username=' + user;

                if(user.includes('@') && use.includes('.com')){
                    url = '?email=' + user;
                }
                url += '&password=' + md5Pass;

                console.log(self.apiUrl + '/users' + url);

                return this.$http.get(self.apiUrl + '/users' + url);
            },
        },
    };
};
module.exports = LoginController();
