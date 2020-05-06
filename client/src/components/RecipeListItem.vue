<template>
  <button class="pure-u-1" @click="goToRecipe(item.id)">
    <span class="recipelistitem">{{ item.name }}</span>
  </button>
</template>

<script>
export default {
  props: [
    'item'
  ],
  methods: {
    goToRecipe(id) {
      this.$router.push({ name: 'recipe', params: { id: id } });
    }
  }
};
</script>
