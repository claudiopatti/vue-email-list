const { createApp } = Vue

    createApp({
        data() {
        return {
            message: 'Hello Vue!',
            emails: [
                
            ],
            email : '',
        }
    },
    created () {
        console.log(this.emails)
            
        for (let i = 0; i < 10; i++) {
            axios 
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((resp) => {
                    // this.email = resp.data.response;
                    this.emails.push(resp.data.response);
                    // this.email = '';
                    console.log(resp.data.response);
                })
        }
            console.log(this.emails)
        }
    }).mount('#app')

