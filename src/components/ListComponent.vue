<template>
    <div class="container-fluid">
        <div class="col-md-12">
            <br><br><br>
            <table class="table table-bordered table-striped justify-content-center">
                <thead class="thead-light">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Birthday</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>ZIP Code</th>
                        <th>Ordered Coffee</th>
                        <th>Quantity</th>
                        <th>Size</th>
                        <th>Mode of Payment</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="student in Students" :key="student._id">
                        <td>{{ student.fname }}</td>
                        <td>{{ student.surname }}</td>
                        <td>{{ student.phoneNum }}</td>
                        <td>{{ student.email }}</td>
                        <td>{{ student.birthday }}</td>
                        <td>{{ student.gender }}</td>
                        <td>{{ student.address }}</td>
                        <td>{{ student.city }}</td>
                        <td>{{ student.zip }}</td>
                        <td>{{ student.coffee }}</td>
                        <td>{{ student.quantity }}</td>
                        <td>{{ student.size }}</td>
                        <td>{{ student.payment }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: student._id }}" class="btn btn-success">Edit
                            </router-link>
                            <button @click.prevent="deleteStudent(student._id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                Students: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.Students = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteStudent(id){
                let apiURL = `http://localhost:4000/api/delete-student/${id}`;
                let indexOfArrayItem = this.Students.findIndex(i => i._id === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Students.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>
<style>
    .btn-success {
        margin-right: 10px;
    }
    .thead-light tr th{
        color: white;
    }

</style>