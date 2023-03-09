'use strict'
import { userService } from '../services/user.service.js'
export default {
  props: ['bug'],
  template: `<article className="bug-preview">
                <span>🐛</span>
                <h4>{{bug.title}}</h4>
                <span :class='"severity" + bug.severity'>Severity: {{bug.severity}}</span>
                <div class="actions">
                  <router-link :to="'/bug/' + bug._id">Details</router-link>
                  <router-link v-if="isOwner(bug)" :to="'/bug/edit/' + bug._id"> Edit</router-link>
                </div>
                <button v-if="isOwner(bug)" @click="onRemove(bug._id)">X</button>
              </article>`,
  methods: {
    onRemove(bugId) {
      this.$emit('removeBug', bugId)
    },
    isOwner(bug) {
      const user = userService.getLoggedInUser()
      // console.log('Logged in user:', user)
      // console.log(`user admin ${user.isAdmin}`)
      if (!user) return false
      if (user.isAdmin) return true // allow admin user to edit/remove any bug
      if (user._id !== bug.creator._id) return false
      return true
    },
    
  },
}



// 'use strict'
// import { userService } from '../services/user.service.js'
// export default {
//   props: ['bug'],
//   template: `<article className="bug-preview">
//                 <span>🐛</span>
//                 <h4>{{bug.title}}</h4>
//                 <span :class='"severity" + bug.severity'>Severity: {{bug.severity}}</span>
//                 <div class="actions">
//                   <router-link :to="'/bug/' + bug._id">Details</router-link>

//                   <router-link v-if="isOwner(bug)" :to="'/bug/edit/' + bug._id"> Edit</router-link>
//                 </div>
//                 <button v-if="isOwner(bug)" @click="onRemove(bug._id)">X</button>
//               </article>`,
//   methods: {
//     onRemove(bugId) {
//       this.$emit('removeBug', bugId)
//     },
//     isOwner(bug){
//       const user = userService.getLoggedInUser()
//       if (!user) return false
//       if (user._id !== bug.owner._id) return false
//       return true
//   }
// },
// }