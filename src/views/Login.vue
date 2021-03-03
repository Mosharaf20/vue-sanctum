<template>
    <div class="d-flex justify-content-center align-items-center" style="height: 500px">
       <div>
           <h2 class="p-2 bg-info text-white rounded">Login</h2>
           <form @submit.prevent="login()" style="width: 500px">
               <div class="form-group">
                   <label for="exampleInputEmail1">Email address</label>
                   <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                   <span class="text-danger text-sm-left" v-if="errors.email">{{errors.email[0]}}</span>

               </div>
               <div class="form-group">
                   <label for="exampleInputPassword1">Password</label>
                   <input v-model="form.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                   <span class="text-danger text-sm-left" v-if="errors.email">{{errors.password[0]}}</span>
               </div>
               <button type="submit" class="btn btn-primary">Submit</button>
           </form>
       </div>
    </div>
</template>

<script>
    import User from "../apis/User";
    export default {
        name: "Login",
        data(){
            return {
                form:{
                    email: '',
                    password: ''
                },
                errors: []
            }
        },
        methods: {
            login(){
                User.login(this.form)
                    .then(()=>{
                        localStorage.setItem('auth','true');
                        this.$root.$emit('loginStatus',true);
                        this.$router.push({name: "dashboard"})
                    })
                    .catch(error=>{
                        if(error.response.status === 422){
                            this.errors = error.response.data.errors;
                        }
                    });
            }
        }
    }
</script>

<style scoped>

</style>