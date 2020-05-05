<template>
  <button class="pure-u-1"
          :class="{ deleteclass: selected }"
          @click="toggle()">
    <span class="fl">{{ item.name }}</span>
  </button>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: [
    'item'
  ],
  data() {
    return {
      selected: false
    };
  },
  computed: {
    ...mapGetters([
      'members'
    ])
  },
  methods: {
    toggle() {
      if (this.selected) {
        this.$store.dispatch('removeFromSelectedMembers', this.item.id);
      } else {
        this.$store.dispatch('addToSelectedMembers', this.item.id);
      }

      this.selected = !this.selected;
    }
  }
};
</script>
