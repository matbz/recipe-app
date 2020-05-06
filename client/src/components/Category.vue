<template>
  <div class="category" @click="goToRecipes(item.id)">
    <h1>{{ item.name }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: [
    'item'
  ],
  computed: {
    ...mapGetters([

    ])
  },
  methods: {
    goToRecipes(id) {
      this.$router.push({ name: 'recipes', params: { id: id } });
    }
  }
};
</script>
