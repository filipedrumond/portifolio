// global api methods
var globalApiMethods = () => {
    return {
        methods: {
            // apiGetPets: function () {
            //     return [];
            // },
            // apiLogin: function (email, password) {
            //     let self = this;
            //     return this.$http.post(self.apiUrl + '/register/auth', {
            //         email,
            //         password,
            //     });
            // },
            // updateUser: function (body, headers, id) {
            //     let self = this;
            //     return this.$http.post(
            //         self.apiUrl + '/register/update_user_data/' + id,
            //         body,
            //         headers
            //     );
            // },
            // apiFacebookLogin: function (body) {
            //     let self = this;
            //     let jsonBody = JSON.stringify(body);
            //     return this.$http.post(
            //         self.apiUrl + '/register/facebook-login',
            //         jsonBody,
            //         {
            //             headers: {
            //                 'Content-Type': 'application/json',
            //             },
            //         }
            //     );
            // },
            // getMyAnimals: function (body, headers) {
            //     let self = this;
            //     return this.$http.get(self.apiUrl + '/pets', headers);
            // },
            // getAnimal: function (id) {
            //     let self = this;
            //     return this.$http.get(self.apiUrl + '/pets/' + id);
            // },
            // registerUser: function (body) {
            //     let self = this;
            //     return this.$http.post(self.apiUrl + '/register', body);
            // },
            // registerPet: function (body, headers) {
            //     let self = this;
            //     return this.$http.post(self.apiUrl + '/pets', body, headers);
            // },
            // updateLocaleRequest: function (body) {
            //     let self = this;
            //     return this.$http.post(
            //         self.apiUrl + '/pets/update_locale',
            //         body
            //     );
            // },
            // updatePet: function (body, headers, id) {
            //     let self = this;
            //     return this.$http.put(
            //         self.apiUrl + '/pets/' + id,
            //         body,
            //         headers
            //     );
            // },
            // deletePetRequest: function (headers, id) {
            //     let self = this;
            //     return this.$http.delete(self.apiUrl + '/pets/' + id, headers);
            // },
            // updatePetPhoto: function (body, headers, id) {
            //     let self = this;
            //     return this.$http.post(
            //         self.apiUrl + '/pets/update_pet_photo/' + id,
            //         body,
            //         headers
            //     );
            // },
        },
        data() {
            return {};
        },
    };
};
module.exports = globalApiMethods();
