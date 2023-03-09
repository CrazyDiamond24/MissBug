import { showErrorMsg } from "../services/event-bus.service.js"
import { userService } from "../services/user.service.js"

export default {
    template:`
    <div class="login-signup-modal">
      <section class="login-signup">
        <h3>Login/Signup</h3>
        <form @submit.prevent="login">
          <h2>Already a memeber?</h2>
          <input type="text" v-model="credentials.username" placeholder="Username" />
          <input type="password" v-model="credentials.password" placeholder="Password" />
          <button>Login</button>
        </form>
        <hr />
        <form @submit.prevent="signup">
          <h2>Create new account</h2>
          <input type="text" v-model="signupInfo.fullname" placeholder="Full name" />
          <input type="text" v-model="signupInfo.username" placeholder="Username" />
          <input type="password" v-model="signupInfo.password" placeholder="Password" />
          <button>Signup</button>
        </form>
      </section>
    </div>
    `,
     data() {
        return {
            credentials: {
                username: '',
                password: ''
            },
            signupInfo: {
                fullname: '',
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            userService.login(this.credentials)
                .then(user => {
                    this.$emit('onChangeLoginStatus')
                })
                .catch(err => {
                    console.log('Cannot login', err)
                    showErrorMsg(`Cannot login`)
                })
        },
        signup() {
            userService.signup(this.signupInfo)
                .then(user => {
                    this.$emit('onChangeLoginStatus')
                })
                .catch(err => {
                    console.log('Cannot signup', err)
                    showErrorMsg(`Cannot signup`)
                })
        },
    }

}

