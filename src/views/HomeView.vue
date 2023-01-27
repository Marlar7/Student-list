<template>

  <div class="home">
    <h1>Student Detail</h1>
    <div v-for="student in students" :key="student.id">
    <SinglePost :student="student " @delete="deleteProject"></SinglePost>
      
    </div>
  </div>
</template>

<script>


import SinglePost from '../components/singlePost'
export default {
  name: 'HomeView',
  components: {
    SinglePost,
    
  },
  data(){
    return{
      students:[]
    }
  },
  methods:{
    deleteProject(id){
      this.students=this.students.filter(student =>{
        return student.id !=id;
      })
    }
  },
  mounted(){
    fetch('http://localhost:3000/students')
    .then((response) => {
      return response.json()
    })
    .then((datas)=>{
      console.log(this.students=datas)
    })
    .catch(()=>{

    })
  }
}
</script>
