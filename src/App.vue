<template>
  <div>
    <!--==================== HEADER ====================-->
    <header id="header" class="fixed-top">
        <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #433533; color:white;"> 

            <div class="container-lg">
              <router-link class="navbar-brand" to="/">
                  <img src="./assets/logo.png" alt="Depresso Logo" style="width: 50px;">Depresso</router-link>
              <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                  <ul class="navbar-nav mb-2 mb-lg-0">

                        <li class="nav-item mx-2">
                          <router-link class="nav-link" to="/" aria-current="page">Home</router-link>
                        </li>
                        <li class="nav-item mx-2">
                            <router-link class="nav-link" to="/about">About</router-link>
                        </li>
                        <li class="nav-item mx-2">
                          <router-link class="nav-link" to="/menu">Menu</router-link>
                        </li>
                        <li class="nav-item mx-2">
                          <router-link class="nav-link" to="/gallery">Gallery</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="/contact">Contact</router-link>
                        </li>
                    </ul>

                <router-link class="appointment-btn scrollto" to="/create" style="text-decoration: none;">Order Now</router-link>

              </div>
            </div>
          </nav>
    </header>
    <!-- Router view -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*================ HEADER ===============*/

/*NAVBAR*/

/** Appointment Button **/
.appointment-btn {
    margin-left: 25px;
    background: #B68734;
    color: #fff;
    border-radius: 50px;
    padding: 8px 25px;
    white-space: nowrap;
    transition: 0.3s;
    font-size: 14px;
    display: inline-block;
    text-decoration: none;
}
.appointment-btn:hover {
    background: #946b24;
    color: #fff;
}
@media (max-width: 768px) {
    .appointment-btn {
      margin: 0 15px 0 0;
      padding: 6px 18px;
    }
}
</style>