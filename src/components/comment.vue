<template>
  <div id="tweet-container">
<i v-if="!isCommenting" @click="isCommenting=true" class="fas fa-comment"></i> 
    <textarea v-if="isCommenting==true" class="box1" id="comment-input" v-model="mycomment" placeholder="Max 200 characters"></textarea>
    
   <button v-if="isCommenting==true" @click="makeAComment">Ok</button>  
   <button v-if="isCommenting==true" @click="isCommenting=false">Cancel</button>  
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
    name:"make-comment",
    props:{
        tweetId:{
            type: Number,
            required:true
        }
    },
    data() {
        return {
            mycomment:"",
            isCommenting:false

        };
    },
    methods:{
        makeAComment: function(){
            console.log(this.tweetId)
            axios.request({
                method:"POST",
                url:"https://tweeterest.ml/api/comments",
                headers:{
                    "content-type":"application/json",
                    "X-Api-Key":"FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
                },
                data:{
                    loginToken:cookies.get("session"),
                    tweetId:this.tweetId,
                    content:this.mycomment
                }
            }).then(response=>{
                cookies.set("mycomment",response);
                console.log(response);
                this.isCommenting=false
            }).catch(error => {
          console.log(error);
        });
        }

    }
};
</script>

<style lang="sass" scoped>
</style>