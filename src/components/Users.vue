<template>
    <div>
        <b-container>
            <b-table striped hover :items="users"></b-table>
        </b-container>
    </div>
</template>

<script>
import axios from 'axios'

const endpoint = 'https://powerful-journey-92355.herokuapp.com/'

export default {
    data() {
        return {
            users: []
        }
    },
    created() {
        axios.get(endpoint + 'api/')
            .then(response => {
                this.users = response.data;
            })
    }
}

</script>
