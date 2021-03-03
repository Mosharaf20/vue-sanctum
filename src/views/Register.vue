<template>
    <div class="d-flex justify-content-center align-items-center" style="height: 600px">
        <div>
            <h2 class="p-2 bg-info text-white rounded">Register</h2>
            <form @submit.prevent="register()" style="width: 500px">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input v-model="form.name" type="text" class="form-control" id="username"  placeholder="Enter username">
                    <div v-if="errors.name" class="text-danger">
                       {{errors.name[0]}}
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    <div v-if="errors.email" class="text-danger">
                        {{errors.email[0]}}
                    </div>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input v-model="form.password" type="password" class="form-control" id="password" placeholder="Enter Password">
                    <div v-if="errors.name" class="text-danger">
                        {{errors.password[0]}}
                    </div>
                </div>
                <div class="form-group">
                    <label for="retype-password">Re-type Password</label>
                    <input v-model="form.password_confirmation" type="password" class="form-control" id="retype-password" placeholder="Re-type Password">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
    import User from "../apis/User";
    export default {
        name: "Register",
        data(){
            return {
                form: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                },
                errors: [],
            }
        },
        methods: {
            register(){
                User.register(this.form)
                    .then(()=>{
                        this.$router.push({name: "login"})
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