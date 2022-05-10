<template>
  <div class="menu">
      <br>
        <div class="section-title">
            <h2><router-link class="nav-link" to="/menu" aria-current="page" style="text-decoration: none; color: black;margin-top: 50px;">MENU</router-link></h2>
        </div>

        <div class="container">	
            <br>				
					<div class="row">
						<div class="col-lg-4 my-3">
							<div class="single-menu">
								<div class="title-div justify-content-between d-flex">
									<h4>Cappuccino</h4>
									<p class="price float-right">
										190
									</p>
								</div>
								<p>
									a freshly pulled shot of espresso layered with steamed whole milk and thick rich foam
								</p>								
							</div>
						</div>
						<div class="col-lg-4 my-3">
							<div class="single-menu">
								<div class="title-div justify-content-between d-flex">
									<h4>Americano</h4>
									<p class="price float-right">
										180
									</p>
								</div>
								<p>
									a shot of espresso topped with hot water
								</p>
							</div>
						</div>
						<div class="col-lg-4 my-3">
							<div class="single-menu">
								<div class="title-div justify-content-between d-flex">
									<h4>Espresso</h4>
									<p class="price float-right">
										200
									</p>
								</div>
								<p>
									made from the same beans as coffee but is stronger, thicker, and higher in caffeine
								</p>								
							</div>
						</div>	
						<div class="col-lg-4 my-3">
							<div class="single-menu">
								<div class="title-div justify-content-between d-flex">
									<h4>Macchiato</h4>
									<p class="price float-right">
										210
									</p>
								</div>
								<p>
									an espresso coffee drink, topped with a small amount of foamed or steamed milk
								</p>								
							</div>
						</div>
						<div class="col-lg-4 my-3">
							<div class="single-menu">
								<div class="title-div justify-content-between d-flex">
									<h4>Mocha</h4>
									<p class="price float-right">
										160
									</p>
								</div>
								<p>
									full-bodied espresso combined with bittersweet mocha sauce and steamed milk, and topped with sweetened whipped cream
								</p>								
							</div>
						</div>
						<div class="col-lg-4 my-3">
							<div class="single-menu">
								<div class="title-div justify-content-between d-flex">
									<h4>Coffee Latte</h4>
									<p class="price float-right">
										170
									</p>
								</div>
								<p>
									a shot or two of bold, tasty espresso with fresh, sweet steamed milk over it
								</p>								
							</div>
						</div>
						<div class="col-lg-4 my-3">
							<div class="single-menu">
								<div class="title-div justify-content-between d-flex">
									<h4>Piccolo Latte</h4>
									<p class="price float-right">
										200
									</p>
								</div>
								<p>
									Piccolos are lattes made with less milk
								</p>								
							</div>
						</div>
						<div class="col-lg-4 my-3">
							<div class="single-menu">
								<div class="title-div justify-content-between d-flex">
									<h4>Ristretto</h4>
									<p class="price float-right">
										180
									</p>
								</div>
								<p>
									a short (restricted) shot of espresso
								</p>								
							</div>
						</div>
						<div class="col-lg-4 my-3">
							<div class="single-menu">
								<div class="title-div justify-content-between d-flex">
									<h4>Affogato</h4>
									<p class="price float-right">
										160
									</p>
								</div>
								<p>
									 a classic Italian dessert that features a scoop of vanilla ice cream covered in a warm shot of espresso
								</p>								
							</div>
						</div>															
					</div>
				</div>	
  </div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      title:'Menu'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu{
    background-image: url(../assets/menu-bg.jpg);
    height: 100vh;
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

/*MENU */
.single-menu{
    background-color: white;
    box-shadow: 5px 5px 15px #e2d4bb;
    border-radius: 10px;
    padding: 15px;
    height: 140px;
}


.price{
    font-size: 20px;
    color: #B68734;
    font-weight: 700;
}
</style>
