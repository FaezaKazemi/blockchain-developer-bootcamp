<template>
<div class="grant">
<navbarRecord />
<div >
  
  <input type="checkbox" id="show" class="show" />
  <label for="show" class="title">Transfer Land<i class="flag left"></i><i class="flag right"></i></label>

 <form action="" class="form" @submit.prevent="onSubmit" >
   <div class="group row">
        <div class="col-6">
            <label for="buyer">Buyer Address</label>
        </div>
        <div class="col-6">
            <input type="text" id="buyer" v-model="buyer" placeholder="" />
        </div>
    </div>
    <div class="group row">
        <div class="col-6">
            <label for="seller">Seller Address</label>
        </div>
        <div class="col-6">
            <input type="text" id="seller" v-model="seller" placeholder="" />
        </div>
    </div>
    <div class="group row">
        <div class="col-6">
            <label for="id">Estate ID</label>
        </div>
        <div class="col-6">
            <input type="text" id="id" v-model="id" placeholder="" />
        </div>
    </div>
    <div class="group row">
        <div class="col-6">
            <label for="name">Seller Name</label>
        </div>
        <div class="col-6">
            <input type="text" id="name" v-model="name" placeholder="" />
        </div>
    </div>

  <input type="submit" class="submit" value="Transfer" />
</form>
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
      buyer: null,
      seller: null,
      id:null,
      name:null,
    };
  },
   methods: {
    onSubmit() {
      let p = {
          buyer: this.buyer,
          seller: this.seller,
          id:this.id,
          name:this.name,
        
        
      };
  
      App.App.transferEstate(p.buyer, p.seller , p.id , p.name);
     
      
      this.buyer = null;
      this.seller = null;
      this.id=null;
      this.name=null;
      
    }
  },
}
</script>

<style>
form{
  width: 80%;
  margin-left:10% ;
  padding-top: 3%;
}
.grant{
    width: 80%;
    margin-left:10% ;
}
html, body, h2 {
    margin: 0;
    padding: 0em;
}

.show {
    display: none;
}

.title,
.form {
    margin: 0 auto;
    border-radius: 2px;
}

.title {
    margin-bottom: 0.5em;
    display: block;
    background: orange;
    font-family: 'Nunito', sans-serif;
    font-size: 22px;
    padding: 1em;
    text-transform: uppercase;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
}

.flag {
    position: absolute;
    top: 7px;
    border-radius: 2px;
    border: 35px solid;
    border-top-color: orange;
    border-bottom-color: orange;
}

.show ~ .title {
    z-index: 2;
    width: 300px;
    position: relative;
    top: 250px;
    left: 0;
    transition:
        width 200ms ease-out,
        top 200ms ease-out;
}

.show ~ .title .flag {
    opacity: 0;
}

.show ~ .title .left {
    left: 0;
    border-right-color: orange;
    border-left-color: transparent;
}

.show ~ .title .right {
    right: 0;
    border-right-color: transparent;
    border-left-color: orange;
}

.show ~ .form {
    opacity: 0;
    transition:
        opacity 200ms linear;
}

.show:checked ~ .title {
    position: relative;
    top: 0;
    width: 500px;
}

.show:checked ~ .title .left {
    opacity: 0.7;
    left: -55px;
    transition:
        opacity 50ms linear 200ms,
        left 50ms linear 200ms;
}

.show:checked ~ .title .right {
    opacity: 0.7;
    right: -55px;
    transition:
        opacity 50ms linear 200ms,
        right 50ms linear 200ms;
}

.show:checked ~ .form {
    opacity: 1;
}

.form {
    width: 500px;
    background: #ddd;
    padding: 2em 0 2em 0;
}

.group,
.group-2 {
    margin: 0 auto;
    width: 80%;
}

.group {
    margin-bottom: 2em;
}

.group:after {
    content: '';
    display: block;
    clear: both;
}

.col-1,
.col-2 {
    float: left;
}

.col-1 {
    width: 40%;
}

.col-1 label {
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    text-shadow: 0.5px 0.5px 0 #fff;
    font-family: 'Nunito', sans-serif;
    text-transform: capitalize;
}

.col-2 {
    width: 60%;
}

.col-2 input {
    width: 100%;
    height: 40px;
    font-family: 'Nunito', sans-serif;
    outline: none;
    border: none;
    border-radius: 20px;
    box-sizing: border-box;
    box-shadow:
        inset 0 0 3px 0 rgba(0,0,0,0.3),
        0.5px 0.5px 0 0 #fff;
    padding: 1em;
    background: rgba(80,80,80,0.1);
}

input[type="submit"] {
    display: block;
    margin: 0 auto;
    width: 30%;
}

.group-2 {
    margin-bottom: 1em;
}

.group-2:after {
    content: '';
    display: block;
    clear: both;
}

.group-2 *:not(a) {
    float: left;
}

.group-2 .checkbox {
    display: none;
}

.group-2 label {
    font-family: 'Nunito', sans-serif;
    font-size: 12px;
    height: 100%;
    cursor: pointer;
    line-height: 22px;
}

.group-2 label a {
    position: relative;
    text-decoration: none;
    color: blue;
}

.group-2 label a:after {
    position: absolute;
    top: 15px;
    left: 50%;
    right: 50%;
    content: '';
    height: 1px;
    background: blue;
    transition:
        left 70ms linear,
        right 70ms linear;
}

.group-2 label a:hover:after {
    left: 0;
    right: 0;
}



.toogle {
    position: relative;
    width: 41px;
    height: 21px;
    border-radius: 10px;
    margin-right: 1em;
    background: #ccc;
    box-shadow:
        inset 0 0 2px 0 rgba(0,0,0,0.5),
        0.5px 0.5px 0 0 #fff;
}

.toogle:before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

.checkbox ~ label .toogle:before {
    position: absolute;
    top: 3px;
    left: 3px;
    transition: left 150ms linear;
}

.checkbox ~ label .toogle {
    background: rgba(200,0,0,0.5);
}

.checkbox ~ label {
    color: rgba(0,0,0,0.4);
    transition: color 100ms linear;
}

.checkbox:checked ~ label .toogle:before {
    position: absolute;
    top: 3px;
    left: 22px;
}

.checkbox:checked ~ label .toogle {
    background: rgba(0,200,0,0.5);
}

.checkbox:checked ~ label {
    color: rgba(0,0,0,1);
}

.submit {
    border: none;
    outline: none;
    position: relative;
    height: 40px;
    color: #fff;
    font-family: 'Nunito', sans-serif;
    text-transform: uppercase;
    border-radius: 2px;
    background: rgba(0,0,0,0.6);
    box-shadow: 0 0 1px 0 #000;
    letter-spacing: 1.5px;
    font-size: 18px;
    transition: background 70ms linear;
}

.submit:hover {
    color: orange;
    background: rgba(0,0,0,1);
}

</style>