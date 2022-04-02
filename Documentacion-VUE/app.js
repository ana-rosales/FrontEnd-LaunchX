const app = Vue.createApp({
    data(){
        return{
            /* No regresa otra cosa que objeto JSON */
            nombre: 'Ana',
            apellido: 'Rosales',
            email: 'anapaula161103@gmail.com',
            genero: 'female',
            foto: 'https://i.pinimg.com/236x/07/0c/13/070c138d4e26d86388e40f5fe332ada3.jpg'
        }
    },
    /* Esto es como un constructor en POO */
    methods: {
        async cambiarUsuario(){
            /* await espera que la acción a continuación  */
            /* se ejecute y retiene las acciones próximas */
            const res = await fetch('https://randomuser.me/api');
            const { results } = await res.json();

            //console.log(results);

    /* Aquí se modifican los valores del JSON */
            this.nombre = results[0].name.first
            this.apellido = results[0].name.last
            this.email = results[0].email
            this.genero = results[0].gender
            this.foto = results[0].picture.large
        }
    }
})

app.mount('#app');