<template>
  <div class="contact">
      <br>
        <div class="container my-5">
            <div class="center">
            
                <div class="contactBG">
                <div class="contactContent">
                    <div class="contactSection">
                        <div class="contactTitle">
                            <h1>Contact Us</h1>
                            <p>Feel free to drop a message</p>
                        </div>

                        <form>
                            <div class="contactForm">
                                <div class="name">
                                    <input name="name" id="name" placeholder="Name">
                                </div>

                                <div class="email">
                                    <input name="email" id="email" placeholder="E-mail">
                                </div>

                                <div class="subject">
                                    <input name="subject" id="subject" placeholder="Subject">
                                </div>

                                <div class="message">
                                    <textarea name="message" id="message">Message</textarea>
                                </div>
                            </div>

                            <div class="submit">
                                <input type="submit" value="Submit">
                            </div>
                        </form>
                    </div>
                    
                    <br>
                    <br>

                    <div class="infoSection">
                        <h1>Looking forward to serve you soon!</h1>

                        <div class="infoContent">
                            <p>Address</p>
                            <h4>#1 Holy Angel St, Angeles, 2009 Pampanga</h4>

                            <br>

                            <p>Phone</p>
                            <h4>0991-234-56789</h4>

                            <br>

                            <p>E-mail</p>
                            <h4>depresso2014@gmail.com</h4>

                            <br>

                            <p>Socials</p>
                            <div class="socials">
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
                </div>
            </div>
        </div> 
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      title:'contact'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


/*CONTACT */

/*================ CONTACT ===============*/
.contact{
    background: linear-gradient(180deg, rgba(230,196,151,1) 0%, rgba(230,196,151,1) 41%, rgba(227,193,149,1) 43%, rgba(173,137,101,1) 85%, rgba(120,73,43,1) 100%);
    min-height: 100vh;
    overflow-x:hidden;
}
.contactBG{
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto; 
    text-align: center;
    padding: 1px 0px;
}

.contactSection{
    margin-top: 40px;
    background-color:#f6ecec;
    width: 400px;
    border-radius: 10px;
    text-align: center;
    padding: 1px;
    box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}


.contactTitle h1{
    text-align: center;
    margin-top: 20px;
    padding: 5px;
    font-size: 35px;
}

.contactTitle p{
    text-align: center;
    font-size: 20px;
}

/*FORM*/
form{
    padding: 10px 0px;
    
}

.contactForm{
    padding: 0px 30px;
    text-align: left;
}


.contactForm input, .contactForm textarea{
    background-color: #f6ecec;
    border: none;
    border-bottom: solid 1px #d1cece;
    margin-top: 40px;
    width: 90%;
    font-size: 18px;
}

.contactForm textarea{
    margin-top: 30px;
    display: block;
    height: 80px;
    width: 90%;
    font-family: var(--body-font);
    color: gray;
}

.submit input{
    display: block;
    background-color: #433533;
    width: 90px;
    height: 35px;
    border-radius: 50px;
    border: 0px;
    color: white;
    font-size: 16px;
    letter-spacing: 0.5px;
    margin-left: 25px;
    margin-top: 15px;
}

/*INFO SECTION*/
.infoSection{
    position: absolute;
    text-align: left;
    margin-top: -565px;
    margin-left: 480px;
}

.infoSection h1{
    font-size: 50px;
    color: #433533;
}

.infoContent{
    color: black;
    margin-top: 20px;
    font-size: large;
}

.infoContent h4{
    margin-top: -10px;
    font-size: 20px;
}

.infoContent a{
    color: black;
    text-decoration: none;
}
.socials{
    margin-left: -15px;
}
.footer-social a{
    margin-left: 15px;
}
.footer-social a:hover{
    color: #B68734;
}

</style>
