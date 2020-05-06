<template>
  <div style="height: 100%">
    <div class="pure-g header">
      <div class="pure-u-1-1 header-text">Kategorien</div>
    </div>
    <div class="content2">
      <div class="categories">
        <category
          v-for="item in categories"
          :item = "item"
          :key="item.id"
          >
        </category>
      </div>
    </div>
    <div class="pure-g footer">
      <button class="pure-u-1-3" @click="$router.go(-1)">
        <div><i class="fa fa-arrow-left footer-icon"></i></div>
        <div class="footer-text">Zurück</div>
      </button>
      <button class="pure-u-1-3 active" @click="goTo('categories')">
        <div><i class="fa fa-clone footer-icon"></i></div>
        <div class="footer-text">Kategorien</div>
      </button>
      <button class="pure-u-1-3">
        <div><i class="fa fa-search footer-icon"></i></div>
        <div class="footer-text">Suchen</div>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Category from './Category';

export default {
  components: {
    Category
  },
  computed: {
    ...mapGetters([
      'categories'
    ])
  },
  methods: {
    goTo(routeName) {
      this.$router.push({ name: routeName });
    }
  }
};
</script>

