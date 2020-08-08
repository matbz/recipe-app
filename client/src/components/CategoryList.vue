<template>
  <div>
    <div class="pure-g" :class="header">
      <div class="pure-u-1-1 header-text">KATEGORIEN</div>
    </div>
    <div :class="content2" v-on:scroll.passive="handleScroll($event)">
      <div class="categories">
        <category
          v-for="item in categories"
          :item = "item"
          :key="item.id"
          >
        </category>
      </div>
    </div>
    <div class="pure-g" :class="footer">
      <button class="pure-u-1-3" @click="gback()">
        <div><i class="fa fa-arrow-left footer-icon thin"></i></div>
        <div class="footer-text">Zurück</div>
      </button>
      <button class="pure-u-1-3 active" @click="goToCategories()">
        <div><i class="fa fa-clone footer-icon"></i></div>
        <div class="footer-text">Kategorien</div>
      </button>
      <button class="pure-u-1-3" @click="goTo('search')">
        <div><i class="fa fa-search footer-icon thin"></i></div>
        <div class="footer-text">Suchen</div>
      </button>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import { mapGetters } from 'vuex';
import Category from './Category';

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
  components: {
    Category
  },
  computed: {
    ...mapGetters([
      'categories',
      'scrollCategory'
    ]),
    content2() {
      return isDesktop() ? 'content2d' : 'content2';
    },
    header() {
      return isDesktop() ? 'headerd' : 'header';
    },
    footer() {
      return isDesktop() ? 'footerd' : 'footer';
    }
  },
  methods: {
    gback() {
      this.deleteR();
      this.$router.back();
    },
    goTo(routeName) {
      this.deleteR();
      this.$router.push({ name: routeName });
    },
    deleteR() {
      localStorage.setItem('scroll', 0);
      localStorage.setItem('recipe', null);
      this.$store.dispatch('setwe', 0);
    },
    goToCategories() {
      localStorage.setItem('recipe', null);
      this.$store.dispatch('setwe', 0);
      this.$router.push({ name: 'categories' });
    },
    handleScroll(e) {
      this.$store.dispatch('setScrollCategory', e.target.scrollTop);
    }
  },
  mounted() {
    const container = this.$el.querySelector('.content2');
    container.scrollTop = this.scrollCategory;
  },
  created() {
    const recid = localStorage.getItem('recipe');
    if (recid > 0) {
      window.location = `https://rezepte.matbz.com/recipe/${recid}`;
    }

    this.$store.dispatch('setScrollSearch', 0);
    this.$store.dispatch('setScrollRecipe', 0);
    this.$store.dispatch('setSearchString', '');
  }
};
</script>

