<template>
  <button class="pure-u-1"
          :class="{ selected: item.active }"
          @click="toggle()">
    <span class="fl">{{ item.name }}</span>
    <span v-if="item.active" class="fr payee-text">Anwesend</span>
  </button>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: [
    'item'
  ],
  computed: {
    ...mapGetters([
      'members'
    ])
  },
  methods: {
    async toggle() {
      const member = {
        id: this.item.id,
        name: this.item.name,
        active: !this.item.active
      };

      await this.$store.dispatch('setMember', member);
      this.$store.dispatch('getMembers');
      this.$router.push({ name: 'players' });
    }
  }
};
</script>
