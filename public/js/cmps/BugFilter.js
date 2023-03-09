'use strict'

export default {
  template: `
<section class="bug-filter">
  <span>Filter by title: </span>
  <input @input="setFilterBy" type="text" v-model="filterBy.title">
  <input @input="setFilterBy" type="range" min="1" max="3" v-model="filterBy.severity">
  
  <div class="labels">
    <h3>Labels</h3>
    <label :class="{selected: filterBy.labels.includes('easy')}">
      <input type="checkbox" value="easy" v-model="filterBy.labels"> Easy
    </label>
    <label :class="{selected: filterBy.labels.includes('need-CR')}">
      <input type="checkbox" value="need-CR" v-model="filterBy.labels"> Need-CR
    </label>
    <label :class="{selected: filterBy.labels.includes('dev-branch')}">
      <input type="checkbox" value="dev-branch" v-model="filterBy.labels"> Dev-Branch
    </label>
    <label :class="{selected: filterBy.labels.includes('hard')}">
      <input type="checkbox" value="hard" v-model="filterBy.labels"> Hard
    </label>
    <button class="submit-btn" @click="setFilterBy">Submit</button>
  </div>
</section>

    `,
  data() {
    return {
      filterBy: {
        title: '', page: 0, severity: 1, labels: []
      },
    }
  },
  methods: {
    setFilterBy() {
      this.$emit('setFilterBy', this.filterBy)
    },
  },
}
