<template>
  <div id="edit-comment">
    
    <textarea v-if="isEditing==true" class="box1" id="comment-input" v-model="myedit" placeholder="Max 200 characters"></textarea>
    
    <i @click="isEditing=true" v-if="isOwned && !isEditing" class="far fa-edit"></i>
    <button v-if="isEditing==true" @click="editAComment">Ok</button>  
   <button v-if="isEditing==true" @click="isEditing=false">Cancel</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
    name:"edit-comment",
    props:{
        commentObject:{
            type: Object,
            required:true
        }
    },
    data() {
        return {
            myedit:"",
            isEditing:false,
            isOwned:this.commentObject.userId==cookies.get("user")

        };
    },
    methods:{
        editAComment: function(){
            axios.request({
                method:"patch",
                url:"https://tweeterest.ml/api/comments",
                headers:{
                    "content-type":"application/json",
                    "X-Api-Key":"FdFMryx4Lk56j3ASVQD8Yw6FlMPVtI2oFBxUBYygBHW56"
                },
                data:{
                    loginToken:cookies.get("session"),
                    commentId:this.commentObject.commentId,
                    content:this.myedit
                }
            }).then(response=>{
                cookies.set("myedit",response);
                console.log(response)
            }).catch(error => {
          console.log(error);
        });
        }

    }
};
</script>

<style lang="sass" scoped>
</style>