<template>
<div>
<h1>Edit Student</h1>
<form @submit.prevent ="addStudent">
        <label>Student Name</label>
        <input type="text" v-model="name">
        <label>Student Age</label>
        <input type="text" v-model="age">
        <button>Update Student</button>
    </form>
</div>

    
</template>
<script>
export default {
    props:["id"],
    data(){
        return{
            name:"",
            age:""

        }
    },
    mounted(){
       fetch('  http://localhost:3000/students/'+ this.id)
        .then((res)=>{
            return res.json()
           
        })
        .then((datas)=>{
            this.name=datas.name
             this.age=datas.age
           
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}


</script>
<style>

</style>


