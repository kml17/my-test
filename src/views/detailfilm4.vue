<template>
  <div sm="12">
    <b-col sm="12" style="float: right;">
      <router-link to="/detail" data-toggle="tooltip"><b-button variant="primary" style="float: left;">List Detail</b-button></router-link>
      <h3 style="color: red">Related Another Movie's</h3>
      <b-card border-variant="dark"
              header-bg-variant="dark"
              header-text-variant="white"
              align="left">
        <p class="card-text">{{ film5.opening_crawl }}</p>
        <div slot="header">
          <h3>{{ film5.title }}</h3>
          <b-row sm="6" style="float: left">
            <p>Director:</p>
          </b-row>
          <b-row sm="6" style="margin-left: 8rem">
            <p>{{ film5.director }}</p>
          </b-row>
          <b-row sm="6" style="float: left">
            <p>Producer:</p>
          </b-row>
          <b-row sm="6" style="margin-left: 8rem">
            <p>{{ film5.producer}}</p>
          </b-row>
          <b-row sm="6" style="float: left">
            <p>Release Date:</p>
          </b-row>
          <b-row sm="6" style="margin-left: 8rem">
            <p>{{ film5.release_date }}</p>
          </b-row>
        </div>
      </b-card>
    </b-col>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'detailfilm',
  axios,
  data: () => {
    return {
      height: '',
      hair_color: '',
      skin_color: '',
      eye_color: '',
      birth_year: '',
      gender: '',
      film5: [],
      title: '',
      director: '',
      producer: '',
      release_date: '',
      opening_crawl: ''
    }
  },
  methods: {
    getfilm5: function () {
      let self = this
      axios.post('https://swapi.co/api/films/1', {
      }).then(function (response) {
        console.log(response.data)
        if (response.data.length !== 0) {
          self.film5 = response.data
          console.log(self.film5)
        } else {
          console.log('gagal')
        }
      })
    }
  },
  created () {
    this.getfilm5()
  }
}
</script>
