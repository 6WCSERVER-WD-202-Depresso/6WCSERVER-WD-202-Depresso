<template>
  <div class="about">
      <br>
      <div class="container my-5">
        <div class="section-title">
                <h2><router-link class="nav-link" to="/about" aria-current="page" style="text-decoration: none; color: black;margin-top: 50px;">ABOUT US</router-link></h2>
        </div>
  
        <div class="row my-5">
            <div class="col ">
                <div class="aboutInfo">
                    <h3 style="color: #574542;">Serving with Pride and Working with Passion</h3>
                    <br>
                    <p>Depresso is a one-of-a-kind coffee shop in Pampanga. We are not only a spot where you may stop in for a cup of coffee in the morning (even though you are welcome to do so), but also a place where you can sit and enjoy that custom-made cup of coffee. If you need to work, we have a special seating space set out for you. We offer a soft-seating area in front of a stone fire place that is ideal for your tired mind and body if you need to rest. Our fully educated baristas prepare a delightful selection of coffee. From conventional coffee to house-made speciality beverages, we have it all. All of our sauces and syrups are created in-house using only natural ingredients (no chemicals or preservatives), providing the best taste and health. You can finish your coffee with one of our delectable sweet desserts prepared by our own baker. At Depresso, we look forward to serve you!</p>
                    <p>In 2014, we made the decision to open The Depresso and pursue our passion. We both recognized that one of our fundamental principles would be sustainable charity as our designs and business ideas took shape.</p>
                </div>
            </div>
            
            <div class="col">
                <img src="../assets/b2.jpg" class="img-fluid" style="border-radius: 25px;">
            </div>
        </div>
  
        <div class="row my-5 justify-content-center" id="missVis">
          <div class="col-4">
            <div class="mission" id="mission">
              <h3 style="color: #574542;">Mission</h3>
              <p>To deliver the Depresso taste, we serve with enthusiasm and perform with commitment.</p>
  
            </div>
          </div>
  
          <div class="col-4 ">
            <div class="vision" id="vision">
              <h3 style="color: #574542;">Vision</h3>
              <p>To be the world's leading coffee roaster and purveyor of gourmet coffees and food service goods by focusing on the values of honesty, quality, service, and partnership.</p>
            </div>
          </div>
        </div>
  
      </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      title:'About Us'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*================ ABOUT US ===============*/
.about{
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

/*MISSION AND VISION*/
#missVis{
    text-align: center;
}

#mission, #vision{
    width: 85%;
    padding: 10px;
}

#mission{
    border: 1px solid #966107;
    box-shadow: 5px 5px 5px #433533;
    height: 100%;
    float: right;
    border-radius: 25px;
}

#vision{
    border: 1px solid #966107;
    box-shadow: 5px 5px 5px #433533;
    border-radius: 25px;
}

/*IMAGE*/
.img-fluid{
    max-width: 100%;
    height: auto;
}
</style>
