<template>
  <div class="home">
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
            <li data-bs-target="#myCarousel" data-bs-to-slide="0" class="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/banner2.jpg" class="d-block w-100 h-100" alt="Carouselpic1">
                <div class="container-lg">
                    <p style="font-size: 25px; color: rgb(209, 153, 79); text-shadow: 1px 1px 2px rgb(0, 0, 0);">Welcome to Depresso</p>
                    <h1 style="font-size: 60px; color: rgb(235, 178, 106);">We don’t just make your coffee.<br>We make your day smoothly.</h1>

                </div>
            </div>

            <div class="carousel-item">
              <img src="../assets/banner1.jpg" class="d-block w-100 h-100" alt="Carouselpic2">
                <div class="container-lg">
                    <p style="font-size: 25px; color: rgb(226, 172, 101);">Welcome to Depresso</p>
                    <h1 style="font-size: 60px; color: rgb(240, 205, 160);">We don’t just make your coffee.<br>We make your day smoothly.</h1>

                </div>
            </div>
            
            <div class="carousel-item">
              <img src="../assets/banner3.jpg" class="d-block w-100 h-100" alt="Carouselpic2">
                <div class="container-lg">
                    <p style="font-size: 25px;  color: rgb(226, 172, 101);">Welcome to Depresso</p>
                    <h1 style="font-size: 60px">We don’t just make your coffee.<br>We make your day smoothly.</h1>

                </div>
            </div>
        </div>
      </div>

        <!--======================ABOUT US=============================-->
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
                        </div>
                    </div>
                    
                    <div class="col">
                        <img src="../assets/b1.jpg" class="img-fluid">
                    </div>
                </div>
        </div>
        

        <!--======================MENU/ BEST SELLERS=============================-->
        <div class="bestSellers" style="background-color: #d6a54b; background-size: cover; color: white;">
            <br>
            <div class="section-title">
                <h2><router-link class="nav-link" to="/menu" aria-current="page" style="text-decoration: none; color: white;">BEST SELLERS</router-link></h2>
            </div>

            <div id="cards_landscape_wrap-2" style="margin-top:-80px;">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="../assets/coffee1.jpg" alt="coffee1" />
                                        </div>
                                        <div class="text-container">
                                            <h6>Americano</h6>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="../assets/coffee2.jpg" alt="coffee2" />
                                        </div>
                                        <div class="text-container">                                    
                                            <h6>Espresso</h6>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="../assets/coffee3.jpg" alt="coffee3" />
                                        </div>

                                        <div class="text-container">
                                            <h6>Macchiato</h6>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="../assets/coffee4.jpg" alt="coffee4" />
                                        </div>
                                        <div class="text-container">
                                            <h6>Cappucino</h6>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--======================TEAM=============================-->
        <div class="team">
            <br><br>
            <div class="section-title">
                <h2>MEET OUR TEAM</h2>
            </div>

            <div class="team-boxed">
                <div class="container">
                    <div class="row people justify-content-center">
                        <div class="col-md-6 col-lg-3 item">
                            <div class="box"><img class="rounded-circle" src="../assets/team1.jpg" style="height: 200px;">
                                <h4 class="name">Aaron Ramales</h4>
                                <p class="title">Barista</p>
                                
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 item">
                            <div class="box"><img class="rounded-circle" src="../assets/team3.jpg" style="height: 200px;">
                                <h4 class="name">Francis Maglalang</h4>
                                <p class="title">barista</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 item">
                            <div class="box"><img class="rounded-circle" src="../assets/team4.jpg" style="height: 200px;">
                                <h4 class="name">Louis Galang</h4>
                                <p class="title">Barista</p>
                            </div>
                        </div>
                    </div>
                    <div class="row people justify-content-center" style="margin-top: -100px;">
                        <div class="col-md-6 col-lg-3 item">
                            <div class="box"><img class="rounded-circle" src="../assets/team6.jpg" style="height: 200px;">
                                <h4 class="name">Reden Gopez</h4>
                                <p class="title">Cashier</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 item">
                            <div class="box"><img class="rounded-circle" src="../assets/team2.jpg" style="height: 200px;">
                                <h4 class="name">Raquel Bondoc</h4>
                                <p class="title">Manager</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 item">
                            <div class="box"><img class="rounded-circle" src="../assets/team5.jpg" style="height: 200px;">
                                <h4 class="name">Giewen Pinlac</h4>
                                <p class="title">Cashier</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--======================CONTACT US=============================-->
        <footer class="footer-area section-gap">
            <div class="container-fluid">
                <img src="../assets/footer-bg.jpg" class="d-block w-100 h-100" alt="Carouselpic1">
					<div class="row" style="margin-top: -250px; margin-left:250px; color: white;">
						<div class="col-lg-5 col-md-6 col-sm-6">
							<div class="single-footer-widget">
								<h6 style="color:#b68834;">About Us</h6>
								<p>
									In 2014, we made the decision to open The Depresso and pursue our passion. We both recognized that one of our fundamental principles would be sustainable charity as our designs and business ideas took shape.
								</p>
								<p class="footer-text" style="color:#b68834;">All rights reserved | Depresso</p>								
							</div>
						</div>					
						<div class="col-lg-2 col-md-6 col-sm-6 social-widget" style="margin-left:50px;">
                            <div class="single-footer-widget">
								<h6 style="color:#b68834;">Contact Us</h6>
								<p>0991-234-56789 <br> depresso2014@gmail.com</p>
							</div>
							<div class="single-footer-widget">
								<h6 style="color:#b68834;">Follow Us</h6>
								<p>Let us be social</p>
								<div class="footer-social d-flex align-items-center">
									<a href="#"><i class="bi bi-facebook"></i></a>
									<a href="#"><i class="bi bi-twitter"></i></a>
									<a href="#"><i class="bi bi-dribbble"></i></a>
									<a href="#"><i class="bi bi-instagram"></i></a>
								</div>
							</div>
						</div>							
					</div>
            </div>
		</footer>	
        
      </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");
/*================ HERO SECTION ===============*/
.carousel-item{
    height: 720px;
    background: white;
    color: rgb(255, 255, 255);
}

.carousel-inner .container-lg{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: 250px;
    text-shadow: 1px 1px 2px black;
}

.carousel-inner .container-lg p{
    text-shadow: 2px 2px 2px rgb(0, 0, 0);
}
.carousel-inner .container-lg h1{
    text-shadow: 2px 2px 2px black;
}

/*ABOUT US*/
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

/*IMAGE*/
.img-fluid{
    max-width: 100%;
    height: auto;
}

/*BEST SELLERS*/
.bestSellers .section-title h2{
    text-align: center;
}

.bestSellers .section-title h2::after {
    content: "";
    position: relative;
    margin: 10px auto;
    display: block;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, rgb(136, 122, 52) 32%, #433533 72%);
}
#cards_landscape_wrap-2{
  text-align: center;
}
#cards_landscape_wrap-2 .container{
  padding-top: 80px; 
  padding-bottom: 100px;
}
#cards_landscape_wrap-2 a{
  text-decoration: none;
  outline: none;
}
#cards_landscape_wrap-2 .card-flyer {
  border-radius: 5px;
}
#cards_landscape_wrap-2 .card-flyer .image-box{
  background: #ffffff;
  overflow: hidden;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.50);
  border-radius: 5px;
}
#cards_landscape_wrap-2 .card-flyer .image-box img{
  -webkit-transition:all .9s ease; 
  -moz-transition:all .9s ease; 
  -o-transition:all .9s ease;
  -ms-transition:all .9s ease; 
  width: 100%;
  height: 200px;
}
#cards_landscape_wrap-2 .card-flyer:hover .image-box img{
  opacity: 0.7;
  -webkit-transform:scale(1.15);
  -moz-transform:scale(1.15);
  -ms-transform:scale(1.15);
  -o-transform:scale(1.15);
  transform:scale(1.15);
}
#cards_landscape_wrap-2 .card-flyer .text-box{
  text-align: center;
}
#cards_landscape_wrap-2 .card-flyer .text-box .text-container{
  padding: 30px 18px;
}
#cards_landscape_wrap-2 .card-flyer{
  background: #FFFFFF;
  margin-top: 50px;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.40);
}
#cards_landscape_wrap-2 .card-flyer:hover{
  background: #fff;
  box-shadow: 0px 15px 26px rgba(0, 0, 0, 0.50);
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  margin-top: 50px;
}
#cards_landscape_wrap-2 .card-flyer .text-box h6{
  margin-top: 0px;
  margin-bottom: 4px; 
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Roboto Black', sans-serif;
  letter-spacing: 1px;
  color: #574542;
}

/*TEAM */

.team-boxed {
  color:#313437;;
}

.team-boxed p {
  color:#85857d;
}

.team-boxed h2 {
  font-weight:bold;
  margin-bottom:40px;
  padding-top:40px;
  color:inherit;
}

@media (max-width:767px) {
  .team-boxed h2 {
    margin-bottom:25px;
    padding-top:25px;
    font-size:24px;
  }
}

.team-boxed .intro {
  font-size:16px;
  max-width:500px;
  margin:0 auto;
}

.team-boxed .intro p {
  margin-bottom:0;
}

.team-boxed .people {
  padding:50px 0;
}

.team-boxed .item {
  text-align:center;
}

.team-boxed .item .box {
  text-align:center;
  padding:30px;
  background-color:#fff2d8;
  margin-bottom:30px;
}

.team-boxed .item .name {
  font-weight:bold;
  margin-top:28px;
  margin-bottom:8px;
  color:inherit;
}

.team-boxed .item .title {
  text-transform:uppercase;
  font-weight:bold;
  color:#b68834;
  letter-spacing:2px;
  font-size:13px;
}

/*FOOTER */
.footer-social a{
    margin-left: 7px;
    color: white;
}
.footer-social a:hover{
    color: #b68834;
}

</style>
