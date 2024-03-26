// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// const { createApp } = Vue;

// createApp({
//     data() {
//         return {
//             message: 'Il più grande giocatore di tutti',
//             imgMessage: 'https://media-assets.lacucinaitaliana.it/photos/63f8c133a810d73b506c42fb/16:9/w_2560%2Cc_limit/Maradona.jpg'

//         };
//     }
// }).mount('#app'); 
const { createApp } = Vue;
createApp({
    data() {
        return {
            message: 'Il più grande giocatore di tutti i tempi',
            imgMessage: 'https://media-assets.lacucinaitaliana.it/photos/63f8c133a810d73b506c42fb/16:9/w_2560%2Cc_limit/Maradona.jpg'
        };
    },
    methods: {
        changeImage() {
            // Cambia dinamicamente l'URL dell'immagine
            if (this.imgMessage === 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maradona-Mundial_86_con_la_copa.JPG/1200px-Maradona-Mundial_86_con_la_copa.JPG') {
                this.imgMessage = 'https://media-assets.lacucinaitaliana.it/photos/63f8c133a810d73b506c42fb/16:9/w_2560%2Cc_limit/Maradona.jpg'
            } else {
                this.imgMessage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maradona-Mundial_86_con_la_copa.JPG/1200px-Maradona-Mundial_86_con_la_copa.JPG'
            }
        }
    }
}).mount('#app');