<template>
    <div class="pt-5">
        <div v-if="subs && subs.length">
            <div class="card mb-3" v-for="sub of subs" v-bind:key="sub.id">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <svg class="bd-placeholder-img" width="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>{{ sub.name }}</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">{{ sub.name.charAt(0) }}</text></svg>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{{ sub.name }}</h5>
                            <p class="card-text">{{ sub.description }}</p>
                            <router-link :to="{name: 'edit', params: { id: sub.id }}" class="btn btn-sm btn-primary">Edit</router-link>
                            <button class="btn btn-danger btn-sm ml-1" v-on:click="deleteSubscription(subs)">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p  v-if="subs.length == 0">No subscriptions</p>
    </div>
</template>
<script>

import axios from 'axios';
export default {
    data() {
        return {
            subs: []
        }
    },
    created() {
        this.all();
    },
    methods: {
        deleteSubscription: function(subscr) {
            if (confirm('Delete ' + subscr.name)) {
                axios.delete(`https://powerful-journey-92355.herokuapp.com/api/${subscr.id}`)
                    .then( response => {
                        this.all();
                    });
            }
        },
        all: function () {
            axios.get('api/')
                .then( response => {
                    this.subs = response.data
                });
        }
    },
}

</script>
