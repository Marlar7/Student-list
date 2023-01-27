<template>
  
<div class="pro">
     <div class=flex>
        <div>
            <h3 @click="showDetail=!showDetail">{{student.Name}}</h3>
        </div>
        <div>
             <span class= "material-icons" @click="deleteProject">delete</span>
             <router-link :to="{name:'EditStudent', params:{id:student.id}}">
                
                  <span class= "material-icons" @click="edit" >edit</span>
    
                 </router-link>
           
        </div>
     
       </div>
      <h4   v-if="showDetail">{{student.Age}}</h4>
   

     
</div>
 
    
</template>
<script>

export default {
    props:['student'],
   
    data(){
        return{
            showDetail:false,
             Api:  'http://localhost:3000/students/'
            
        }
    },
    methods:{
        deleteProject(){
            let deleteRoute=this.Api+this.student.id;
           fetch(deleteRoute,{method:"DELETE"})
           .then(() =>{
                this.$emit("delete",this.student.id)
        })
        .catch((err)=>{
            console.log(err);
        })
        } 
        
    }

}
</script>
<style>
.pro{
    padding:20px;
    background-color : rgb(243, 231, 231);
   
    margin:10px;
   
}
h3{
    cursor:pointer;
    color:indigo
}
.flex{
    display:flex;
    justify-content: space-between;
    align-items: center

}
.material-icons{
    cursor:pointer
}
span:hover{
    color:#777
}
</style>


