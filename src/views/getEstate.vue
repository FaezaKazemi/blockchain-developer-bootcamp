<template>
<div class="grant">
 <navbarRecord />
 <div >
    <div>
        <form @submit.prevent="onSubmit">
                 <div class="form-group">
    <label for="exampleInputEmail1">Estate Owner address</label>
    <input type="text" class="form-control" id="estateOwner"  name="estateOwner" v-model="estateOwner" aria-describedby="emailHelp" placeholder="Enter Land Owner Address">
  </div>
  
  <button type="submit" class="btn btn-warning">Get Estate</button>
</form>
<br>
<div class="card" style="width:80%; margin-left:10% ; padding-top: 3%" >
    <div class="card-body" >
      <h3 class="card-title" style="font-family: cursive;">Estate details</h3><hr>
      <p class="card-text" > Estate ID :   {{this.e[0]}}</p>
      <p class="card-text">land Owner Name :  {{this.e[1]}}</p>
      <p class="card-text">Location :  {{this.e[2]}}</p>
      <p class="card-text">Cost :  {{this.e[3]}}</p>
      <p class="card-text">Estate Length :   {{this.e[4]}}</p>
      <p class="card-text">Estate Width:   {{this.e[5]}}</p>
      <p class="card-text">Estate area:   {{this.e[6]}}</p>
      
     
      
    
  </div>
  <br>
  
  
  
</div>
</div>

</div>
</div>
</template>

<script>
import navbarRecord from "../component/navbar";

import App from "../index";
export default {
 
components:{
    navbarRecord:navbarRecord,
 
  },
    data() {
    return {
      estateOwner:null,
    
      
      e:{}
    };
  },
   
     methods:{
      async onSubmit(){
    
     console.log(this.estateOwner);
     this.e= await App.App.getEstate(this.estateOwner);
     console.log(this.e);
      
      this.estateOwner=null;
     
     }
      
    } 
  
}
</script>

<style>
form{
  width: 80%;
  margin-left:10% ;
  padding-top: 3%;
  margin-top: 0%;
  
}
.grant{
    width: 80%;
    margin-left:10% ;
   
}
.card-text{
  font-size: 20px;
  margin: 10px; 
  font-family: cursive;
  text-align: left;
}
.card{
   /* height: 800px; */
  background-color: #cccccc;
}
</style>