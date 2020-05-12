<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    this.$store.dispatch('getCategories');
    this.$store.dispatch('load');
  }
};
</script>
