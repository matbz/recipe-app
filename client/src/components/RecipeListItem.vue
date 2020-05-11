<template>
  <div class="pure-u-1 rlitem" @click="goToRecipe(item.id)">
    <div class="rlimg" :style="{ backgroundImage: 'url(' + item.imgpath + ')' }"></div>
    <div>{{item.name}}</div>
  </div>
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
