<template>
  <div class="gallery">
      <br>
        <div class="section-title">
            <h2><router-link class="nav-link" to="/gallery" aria-current="page" style="text-decoration: none; color: black;margin-top: 50px;">GALLERY</router-link></h2>
        </div>
      <br>
      <div class="container">
          
          <img src="../assets/g7.jpg" alt="">
          <img src="../assets/g8.jpeg" alt="">
          <img src="../assets/g1.jpg" alt="">
          <img src="../assets/g2.jpg" alt="">
          <img src="../assets/g3.jpg" alt="">
          <img src="../assets/g4.jpg" alt="">
          <img src="../assets/g5.jpg" alt="">
          <img src="../assets/g6.jpg" alt="">
  
      </div>
      <br>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  data () {
    return {
      title:'Gallery'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gallery{
    background: linear-gradient(0deg, rgba(255,255,255,1) 15%, rgba(219,199,178,1) 63%, rgba(230,196,151,1) 100%, rgba(120,73,43,1) 100%);
    min-height: 100vh;
    overflow-x:hidden;
}
/*SECTION TITLE*/
.section-title h2{
    text-align: center;
}

.section-title h2::after {
    content: "";
    position: relative;
    margin: 10px auto;
    display: block;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #B68734 32%, #433533 72%);
}
/*gallery */
.gallery .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 15px;
}
.gallery .container img {
    width: 100%;
    display: block;
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
    transition: all 100ms ease-out;
}
.gallery .container img:hover {
    transform: scale(1.04);
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
}
</style>
