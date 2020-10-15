<template>
  <div>
    <p>Email</p>
    <input type="text" id="email-input" v-model="email"/>
    <p>username</p>
    <input type="text" id ="email-input" v-model="username"/>
    <p>password</p>
    <input type="password" id="email-input" v-model="password" />
    <p>bio</p>
    <textarea type="text" id ="email-input" v-model="bio"/>
    <p>birthday</p>
    <input type="text" id="email-input" v-model="birthdate" />
    <h2 @click="signupUser">sign-up</h2>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "signup-form",
  data() {
      return {
          email: "",
          username:"",
          password:"",
          bio:"",
          birthdate:""
      }
  },
  methods:{
      signupUser: function (){
          axios.request({
              method:"post",
              url: "https://tweeterest.ml/api/users",
              headers: {
                  "Content-Type":"application/json",
                  "X-Api-Key":"FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
              },
              data:{
                  email:this.email,
                  password:this.password,
                  username:this.username,
                  bio:this.bio,
                  birthdate:this.birthdate
              }
          }).then((response)=>{
              console.log(response)
              //write logic to ensure token was sent
              
              this.$router.push("/")

          }).catch((error)=>{
              console.log(error)
          })
      }
  },
};
</script>

<style lang="sass" scoped>
</style>