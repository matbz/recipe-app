<template>
  <div :class="container">
    <router-view></router-view>
  </div>
</template>

<script>
function isDesktop() {
  if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  ) {
    return false;
  }
  return true;
}

export default {
  name: 'app',
  computed: {
    container() {
      return isDesktop ? 'containerd' : 'container';
    }
  },
  created() {
    this.$store.dispatch('getCategories');
    this.$store.dispatch('load');
  }
};
</script>
