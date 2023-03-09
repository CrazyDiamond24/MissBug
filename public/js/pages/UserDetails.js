import { userService } from "../services/user.service.js"

export default {
    template: `
<section class="user-details" v-if="user">
  <div class="user-profile">
    <img class="user-image" src="https://thumbs.dreamstime.com/b/man-hipster-avatar-cartoon-guy-black-hair-red-glasses-man-hipster-avatar-cartoon-guy-black-hair-red-glasses-flat-223717005.jpg" alt="User Profile Picture">
    <div class="user-info">
      <h5 class="user-title">Web Developer</h5>
      <h3 class="user-username">{{user.fullname}}</h3>
      <h3 class="user-username">{{user.username}}</h3>
      <p class="user-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mauris hendrerit, sagittis velit vel, venenatis nulla. In hac habitasse platea dictumst. Phasellus blandit dolor at sem sagittis bibendum. Sed rutrum tempor mi, nec commodo justo. Pellentesque in massa in diam euismod vulputate. Aliquam at mi nec magna dictum vestibulum ac ut dolor. Sed rhoncus, nisl ac hendrerit luctus, urna nisi fringilla ipsum, eu dictum mi turpis nec mi. Nam ut est volutpat, posuere mi sed, placerat augue. Praesent at eros lacus.</p>
    </div>
  </div>
</section>


    `,
    data() {
        return {
            loggedinUser: userService.getLoggedInUser(),
            user: null
        }
    },
    created() {
        this.loadUser()
    },
    computed: {
        userId() {
            return this.$route.params.userId
        },
        isMyProfile() {
            if (!this.loggedinUser) return false
            return this.loggedinUser._id === this.user._id
        }
    },
    watch: {
        userId() {
            this.loadUser()
        }
    },
    methods: {
        loadUser() {
            userService.get(this.userId)
                .then(user => this.user = user)
        }
    }
}