<template>
  <div class="category" @click="goToRecipes(item.id)">
    <img class="cat_img" :src="imgsrc">
    <h1>{{ item.name.toUpperCase() }}</h1>
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

    ]),
    imgsrc() {
      return `../../../static/${this.item.id}.svg`;
    }
  },
  methods: {
    goToRecipes(id) {
      this.$router.push({ name: 'recipes', params: { id: id } });
    }
  }
};
</script>
