<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter()

    const goDiscussion = () => {
        router.push({name:'discussions'})
    }
</script>

<template>
    <h1>Login Page</h1>
    <button type="button" @click="goDiscussion">Go to discussion</button> <br><br>
    <router-link :to="{name: 'register'}">Register</router-link> &nbsp;&nbsp; 
    <router-link :to="{name: 'reset_pwd'}">Reset Password</router-link>
</template>

<style scoped>

</style>