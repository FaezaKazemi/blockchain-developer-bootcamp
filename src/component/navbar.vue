<template>
  <div class="record">
         <nav class="navbar navbar-expand-lg  navbar-dark bg-dark ">
              <div class="container-fluid">
                
                <button
                  class="navbar-toggler"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <router-link class="nav-link" class-active="active" to="/"><i class="fa fa-home">Home</i></router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" class-active="active" to="/add"><i>Register Estate</i></router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" class-active="active" to="/estate"><i>Get Estate</i></router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" class-active="active" to="/transfer"><i>Transfer Estate</i></router-link>
                    </li>
          
                    <li class="nav-item">
                      <router-link class="nav-link" class-active="active" to="/search"><i>ID of Estate</i></router-link>
                    </li>
                    
                    <li class="nav-item">
                      <router-link class="nav-link" class-active="active" to="/about"><i>About</i></router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.record{
  width: 80%;
  margin-left: 10%;
  margin-top:16px ;    
}
.nav-item{
  color: black;
	font-size: 15px;
	height: auto;
	padding: 0 15px;
}
</style>