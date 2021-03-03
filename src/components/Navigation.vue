<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="#">Laravel Sanctum</a>
                <ul class="navbar-nav mt-2 mt-lg-0 ml-auto">
                    <li class="nav-item active" v-if="!isLoggedIn">
                        <router-link to="/login" class="nav-link">Login </router-link>
                    </li>

                    <li v-if="!isLoggedIn" class="nav-item active">
                        <router-link to="/register" class="nav-link">Register</router-link>
                    </li>
                    <li v-if="isLoggedIn" class="nav-item active">
                        <router-link class="nav-link" to="/">Dashboard</router-link>
                    </li>
                    <li v-if="isLoggedIn" class="nav-item active">
                        <a @click.prevent="logOut" href="" class="nav-link">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    import User from "../apis/User";
    export default {
        name: "Navigation",
        data() {
            return {
                isLoggedIn: false,
            }
        },

        mounted(){
          this.$root.$on('loginStatus',()=>{
              this.isLoggedIn = true;
          });
          this.isLoggedIn = !!localStorage.getItem('auth')
        },

        methods: {
            logOut(){
                User.logOut().then(()=>{
                    this.isLoggedIn = false;
                    localStorage.removeItem('auth');
                    this.$router.push({name: 'login'})
                })
            }
        }
    }
</script>

<style scoped>

</style>