'use strict'

import { userService } from '../services/user.service.js'

import LoginSignup from './LoginSignup.js'

export default {
  template: `
  <header>
    <h1>MissBug</h1>
    <section v-if="loggedinUser">
      <RouterLink :to="'/user/' + loggedinUser._id">{{ loggedinUser.fullname }}</RouterLink>
      <button @click="logout">Logout</button>
    </section>
    <section v-else>
      <div>
        <button @click="showModal = 'login'">Login</button>
        <button @click="showModal = 'signup'">Signup</button>
      </div>
      <LoginSignup v-if="showModal" @onChangeLoginStatus="changeLoginStatus" :mode="showModal" />
    </section>
  </header>
    `,
  data() {
    return {
      loggedinUser: userService.getLoggedInUser(),
      showModal: null,
    }
  },
  methods: {
    changeLoginStatus() {
      this.loggedinUser = userService.getLoggedInUser()
      this.showModal = null 
    },
    logout() {
      userService.logout().then(() => {
        this.loggedinUser = null
      })
    },
  },
  components: {
    LoginSignup,
  },
}
