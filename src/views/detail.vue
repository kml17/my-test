<template>
  <div sm="12" class="home">
      <b-col sm="12">
        <b-row>
          <router-link to="/" data-toggle="tooltip"><b-button variant="primary" style="float: right; margin-left: 18px">Home</b-button></router-link>
          <h3 style="color: red">{{ users.name}} Movie's</h3>
        </b-row>
        <b-card-group deck class="mb-12">
          <router-link to="/detailfilm1" style="color: black;">
          <b-card border-variant="dark"
                  header-bg-variant="dark"
                  header-text-variant="white"
                  align="center">
            <div slot="header">
              <img src="../assets/image1.png"/>
            </div>
            <p class="card-text" style="text-align: left; font-size: 14px"> {{ film1.title }}</p>
            <p style="float: left; font-size: 11px;">Director:</p>
            <p class="card-text" style="text-align: left; font-size: 11px;"> {{ film1.director }}</p>
            <p style="float: left;font-size: 11px;">Release Date:</p>
            <p class="card-text" style="text-align: left; font-size: 11px; float: left;"> {{ film1.release_date }}</p>
          </b-card>
          </router-link>
          <router-link to="/detailfilm2" style="color: black;">
          <b-card border-variant="dark"
                  header-bg-variant="danger"
                  header-text-variant="white"
                  align="center">
            <div slot="header">
              <img src="../assets/image1.png"/>
            </div>
            <p class="card-text" style="text-align: left; font-size: 14px"> {{ film2.title }}</p>
            <p style="float: left; font-size: 11px;">Director:</p>
            <p class="card-text" style="text-align: left; font-size: 11px;"> {{ film2.director }}</p>
            <p style="float: left;font-size: 11px;">Release Date:</p>
            <p class="card-text" style="text-align: left; font-size: 11px; float: left;"> {{ film2.release_date }}</p>
          </b-card>
          </router-link>
          <router-link to="/detailfilm3" style="color: black;">
          <b-card border-variant="dark"
                  header-bg-variant="dark"
                  header-text-variant="white"
                  align="center">
            <div slot="header">
              <img src="../assets/image1.png"/>
            </div>
            <p class="card-text" style="text-align: left; font-size: 14px"> {{ film3.title }}</p>
            <p style="float: left; font-size: 11px;">Director:</p>
            <p class="card-text" style="text-align: left; font-size: 11px;"> {{ film3.director }}</p>
            <p style="float: left;font-size: 11px;">Release Date:</p>
            <p class="card-text" style="text-align: left; font-size: 11px; float: left;"> {{ film3.release_date }}</p>
          </b-card>
          </router-link>
          <router-link to="/detailfilm4" style="color: black;">
          <b-card border-variant="dark"
                  header-bg-variant="danger"
                  header-text-variant="white"
                  align="center">
            <div slot="header">
              <img src="../assets/image1.png"/>
            </div>
            <p class="card-text" style="text-align: left; font-size: 14px"> {{ film4.title }}</p>
            <p style="float: left; font-size: 11px;">Director:</p>
            <p class="card-text" style="text-align: left; font-size: 11px;"> {{ film4.director }}</p>
            <p style="float: left;font-size: 11px;">Release Date:</p>
            <p class="card-text" style="text-align: left; font-size: 11px; float: left;"> {{ film4.release_date }}</p>
          </b-card>
          </router-link>
          <router-link to="/detailfilm" style="color: black;">
            <b-card border-variant="dark"
                    header-bg-variant="dark"
                    header-text-variant="white"
                    align="center">
              <div slot="header">
                <img src="../assets/image1.png"/>
              </div>
              <p class="card-text" style="text-align: left; font-size: 14px"> {{ film5.title }}</p>
              <p style="float: left; font-size: 11px;">Director:</p>
              <p class="card-text" style="text-align: left; font-size: 11px;"> {{ film5.director }}</p>
              <p style="float: left;font-size: 11px;">Release Date:</p>
              <p class="card-text" style="text-align: left; font-size: 11px; float: left;"> {{ film5.release_date }}</p>
            </b-card>
          </router-link>
        </b-card-group>
      </b-col>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'detail',
  axios,
  data: () => {
    return {
      users: [],
      height: '',
      hair_color: '',
      skin_color: '',
      eye_color: '',
      birth_year: '',
      gender: '',
      film: '',
      film1: [],
      film2: [],
      film3: [],
      film4: [],
      film5: [],
      title: '',
      director: '',
      producer: '',
      release_date: '',
      opening_crawl: ''
    }
  },
  methods: {
    getusers: function () {
      // console.log('testgetuser')
      let self = this
      axios.post('https://swapi.co/api/people', {
      }).then(function (response) {
        console.log(response)
        if (response.data.results.length !== 0) {
          self.users = response.data.results[0]
          // console.log(self.users)
        } else {
          // localStorage.removeItem('token')
          // self.$router.push('/pages/login')
          console.log('gagal')
        }
      })
    },
    getfilm1: function () {
      let self = this
      axios.post('https://swapi.co/api/films/2', {
      }).then(function (response) {
        console.log(response.data)
        if (response.data.length !== 0) {
          self.film1 = response.data
          console.log(self.film1)
        } else {
          console.log('gagal')
        }
      })
    },
    getfilm2: function () {
      let self = this
      axios.post('https://swapi.co/api/films/6', {
      }).then(function (response) {
        console.log(response.data)
        if (response.data.length !== 0) {
          self.film2 = response.data
          console.log(self.film2)
        } else {
          console.log('gagal')
        }
      })
    },
    getfilm3: function () {
      let self = this
      axios.post('https://swapi.co/api/films/3', {
      }).then(function (response) {
        console.log(response.data)
        if (response.data.length !== 0) {
          self.film3 = response.data
          console.log(self.film3)
        } else {
          console.log('gagal')
        }
      })
    },
    getfilm4: function () {
      let self = this
      axios.post('https://swapi.co/api/films/1', {
      }).then(function (response) {
        console.log(response.data)
        if (response.data.length !== 0) {
          self.film4 = response.data
          console.log(self.film4)
        } else {
          console.log('gagal')
        }
      })
    },
    getfilm5: function () {
      let self = this
      axios.post('https://swapi.co/api/films/7', {
      }).then(function (response) {
        console.log(response.data)
        if (response.data.length !== 0) {
          self.film5 = response.data
          console.log(self.film5)
        } else {
          console.log('gagal')
        }
      })
    },
    substr (txt) {
      var change = txt.replace(/<[^>]+>/g, '')
      if (change.length >= 180) {
        var teks = change.substr(0, 180)
        return teks
      } else return change
    }
  },
  created () {
    this.getusers()
    this.getfilm1()
    this.getfilm2()
    this.getfilm3()
    this.getfilm4()
    this.getfilm5()
  }
}
</script>
