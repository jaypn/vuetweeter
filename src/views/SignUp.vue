<template>
    <div>
        <router-link to="/login"></router-link>
<h1>Sign up page</h1>
<signup-form />
    </div>
</template>

<script>
import SignupForm from "../components/SignUpForm.vue"

    export default {
        name: "signup-page",
        components: {
            SignupForm,
        }
    }
</script>

<style lang="sass" scoped>

</style>