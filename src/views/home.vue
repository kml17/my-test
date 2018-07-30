<template>
  <div sm="12" class="home">
    <h4>{{ users.name }}</h4>
    <b-card bg-variant="dark" text-variant="white" title="">
      <b-row>
        <b-container fluid class="p-8 bg-dark">
          <b-row>
            <b-col>
              <div>
                <b-card img-alt="Image"
                        border-variant="white"
                        img-top
                        tag="article"
                        bg-variant="dark"
                        style="max-width: 13rem; margin-left: 15px; margin-top: 20px"
                        class="mb-2">
                  <img src="../assets/image2.png" style="margin: 65px;"/>
                </b-card>
              </div>
            </b-col>
            <b-card img-alt="Image"
                    border-variant="dark"
                    img-top
                    tag="article"
                    bg-variant="dark"
                    style="max-width: 13rem;margin-right: 55rem;"
                    class="mb-2">
              <b-row sm="6" style="float: left">
                <p>Height :</p>
              </b-row>
              <b-row sm="6" style="margin-left: 8rem">
                <p>{{ users.height }}</p>
              </b-row>
              <b-row sm="6" style="float: left">
                <p>Mass:</p>
              </b-row>
              <b-row sm="6" style="margin-left: 8rem">
                <p>{{ users.hair_color }}</p>
              </b-row>
              <b-row sm="6" style="float: left">
                <p>Hair Color:</p>
              </b-row>
              <b-row sm="6" style="margin-left: 8rem">
                <p>{{ users.skin_color }}</p>
              </b-row>
              <b-row sm="6" style="float: left">
                <p>Skin Color:</p>
              </b-row>
              <b-row sm="6" style="margin-left: 8rem">
                <p>{{ users.eye_color }}</p>
              </b-row>
              <b-row sm="6" style="float: left">
                <p>Birth Year:</p>
              </b-row>
              <b-row sm="6" style="margin-left: 8rem">
                <p>{{ users.birth_year }}</p>
              </b-row>
              <b-row sm="6" style="float: left">
                <p>Gender:</p>
              </b-row>
              <b-row sm="6" style="margin-left: 8rem">
                <p>{{ users.gender }}</p>
              </b-row>
              </b-card>
          </b-row>
        </b-container>
      </b-row>
    </b-card>
    <br>
    <div sm="12">
    <b-col sm="8" style="float: left;">
      <b-row>
      <h3 style="color: red">{{ users.name}} Movie's</h3>
        <router-link to="/detail"><h5 style="margin-left: 25rem">See More</h5></router-link>
      </b-row>
      <b-card-group deck class="mb-4">
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
      </b-card-group>
    </b-col>
      <b-col sm="4" style="float: right;">
        <h3 style="color: red">Related Another Movie's</h3>
          <b-card border-variant="dark"
                  header-bg-variant="dark"
                  header-text-variant="white"
                  align="left">
            <p class="card-text">{{ substr(film5.opening_crawl) }}....<router-link to="/detailfilm"><h5 style="float: right; margin-right: 10rem;">See More</h5></router-link></p>

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
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
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
