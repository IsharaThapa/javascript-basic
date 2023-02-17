const a = Vue.createApp({
    data(){
        return{
            firstname: 'John',
            lastname: 'Smith',
            email: 'abcdefg@gmail.com',
           gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
      async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            console.log(results)

        //    this.firstname= 'Sam'
        //    this.lastname = 'Smith'
        //    this.email = 'fdea@gmail.com'
        //    this.picture='/assets/images/2.jpg'

            this.firstname= results[0].name.first
            this.lastname = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].                  
            this.picture = results[0].picture.large

        },

    },
})
a.mount('#app')