<template>
    <div class="create">
        <div class="registration-form">
            <br><br><br>
            <router-link class="appointment-btn scrollto pull-right" to="/view" style="text-decoration: none; margin-right: 51px; background-color:#433533;">View Orders</router-link>
            <form @submit.prevent="handleSubmitForm">
                <h3 class="text-center">Order Form</h3>
                <hr>
                <h5 class="text-center">Personal Information</h5>
                <br>
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_fname">First Name *</label>
                            <input id="form_fname" type="text" name="fname" class="form-control" data-error="Firstname is required." v-model="student.fname" required>
                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_surname">Last Name *</label>
                            <input id="form_surname" type="text" name="surname" class="form-control" data-error="Lastname is required." v-model="student.surname" required>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center" >
                    <div class="col-md-6">
                        <div class="form-group" >
                            <label for="form_phoneNum">Phone Number *</label>
                            <input id="form_phoneNum" type="text" name="phoneNum" class="form-control" data-error="Phone Number is required." v-model="student.phoneNum" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_email">Email *</label>
                            <input id="form_email" type="text" name="email" class="form-control" data-error="Email is required." v-model="student.email" required>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="form-group" >
                            <label for="birthday">Birthday *</label>
                            <input type="date" id="birthday" name="birthday" class="form-control" data-error="Birthday is required." v-model="student.birthday" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_gender">Gender *</label>
                            <input id="form_gender" type="text" name="gender" class="form-control" data-error="Gender is required."  v-model="student.gender" required>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Delivery Address *</label>
                            <textarea type="text" class="form-control" data-error="Please specify your delivery address." v-model="student.address" required rows="3"></textarea>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_city">City *</label>
                            <input id="form_city" type="text" name="city" class="form-control" data-error="City is required." v-model="student.city" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_zip">ZIP Code*</label>
                            <input id="form_zip" type="text" name="zip" class="form-control" data-error="ZIP Code is required." v-model="student.zip" required>
                        </div>
                    </div>
                </div>
                <hr>
                <h5 class="text-center">Order</h5>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="form-group" >
                            <label for="form_coffee">Coffee *</label>
                            <select id="form_coffee" name="coffee" class="form-select"  data-error="Please specify your coffee." aria-label="Default select example" v-model="student.coffee" required>
                                <option selected>Coffee</option>
                                <option value="Cappucino">Cappucino</option>
                                <option value="Americano">Americano</option>
                                <option value="Espresso">Espresso</option>
                                <option value="Macchiato">Macchiato</option>
                                <option value="Mocha">Mocha</option>
                                <option value="Coffee Latte">Coffee Latte</option>
                                <option value="Piccolo Latte">Piccolo Latte</option>
                                <option value="Ristretto">Ristretto</option>
                                <option value="Affogato">Affogato</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="quantity">Quantity *</label>
                            <input type="number" id="quantity" name="quantity" min="1" max="99" class="form-control"  data-error="Please specify the quantity of your order." v-model="student.quantity" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group" >
                            <label for="form_size">Size *</label>
                            <select id="form_size" name="size" class="form-select"  data-error="Please specify the size of your order." aria-label="Default select example" v-model="student.size" required>
                                <option selected>Size</option>
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="form-group" >
                            <label for="form_payment">Type of Payment *</label>
                            <select id="form_payment" name="payment" class="form-select"  data-error="Please specify your type of payment." aria-label="Default select example" v-model="student.payment" required>
                                <option selected>Payment</option>
                                <option value="Cash on Delivery">Cash on Delivery</option>
                                <option value="GCash">GCash</option>
                                <option value="Bank">Bank</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <button class="btn btn-light btn-block create-account" style=" background-color:#433533; color:white;">Check Out</button>
                </div>
            </form>
            <br>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                student: {
                   name: '',
                   email: '',
                   phone: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-student';
                
                axios.post(apiURL, this.student).then(() => {
                  this.$router.push('/view')
                  this.student = {
                    name: '',
                    email: '',
                    phone: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>

<style scoped>
.create{
    background-image: url(../assets/menu-bg.jpg);
    height: 100vh;
    overflow-x:hidden;
}
        h3{
            margin-top: -40px;
            text-align: center;
        }

        .registration-form form{
            border: 1px solid black;
            background: rgba(230,196,151);
            max-width:600px;
            margin: auto;
            padding: 50px 50px;
            border-radius: 30px;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.075);
        }

        .registration-form .create-account{
            border-radius: 30px;
            padding: 10px 20px;
            font-size: 18px;
            font-weight: bold;
            border: none;
            margin-top: 20px;
        }



        @media (max-width: 576px) {
            .registration-form form{
                padding: 50px 20px;
            }

            .registration-form .form-icon{
                width: 70px;
                height: 70px;
                font-size: 30px;
                line-height: 70px;
            }
        }
</style>