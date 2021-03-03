<template>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Welcome Dashboard</h1>
            <p class="lead" v-if="user">
                <b>{{user.name}}</b><br>
                {{user.email}}
            </p>
        </div>
    </div>
</template>

<script>
    import User from "../apis/User"
    export default {
        name: "Dashboard",
        data() {
            return {
                user: null
            }
        },

        mounted() {
            User.auth().then(response=>{
                this.user = response.data;
                console.log(response)
            })
        }
    }
</script>

<style scoped>

</style>