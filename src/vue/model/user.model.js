/**
 * @global model.user
 */
var userModel = {
    file: '',
    photo: '',
    phone: [''],
    address: {
        cep: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '',
        unidade: '',
        ibge: '',
        gia: '',
    },
    accountStatus: false,
    _id: '',
    name: '',
    email: '',
    password: '',
    createdAt: '',
    __v: 0,
};
// userModel = {
//     photo: 'profile-1.jpg',
//     phone: ['997082760'],
//     address: {
//         cep: '01001-000',
//         logradouro: 'Praça da Sé',
//         complemento: 'lado ímpar',
//         bairro: 'Sé',
//         localidade: 'São Paulo',
//         uf: 'SP',
//         unidade: '',
//         ibge: '3550308',
//         gia: '1004',
//     },
//     accountStatus: false,
//     _id: '5eaf1b79e746782dd82c60b0',
//     name: 'Breno Guimarães',
//     email: 'brenoaraujo@outlook.com.br',
//     createdAt: '2020-05-03T19:28:57.455Z',
//     __v: 0,
// };
module.exports = userModel;
