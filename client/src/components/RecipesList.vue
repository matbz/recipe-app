<template>
  <div>
    <div class="pure-g header">
      <div class="pure-u-1-1 header-text">{{ this.categories[this.id - 1].name.toUpperCase() }}</div>
    </div>
    <div class="content2" v-on:scroll.passive="handleScroll($event)">
      <div class="pure-g add-list">
        <div style="width: 100%; height: 100%">
          <div v-if="recipeList.length === 0" class="turnover-group2">Keine Rezepte vorhanden</div>
          <div class="recipes">
              <recipe-list-item
              v-for="item in recipeList"
              :item = "item"
              :key="item.id"
              >

              </recipe-list-item>
          </div>
        </div>
      </div>
    </div>
    <div class="pure-g footer">
      <button class="pure-u-1-3" @click="$router.back()">
        <div><i class="fa fa-arrow-left footer-icon thin"></i></div>
        <div class="footer-text">Zurück</div>
      </button>
      <button class="pure-u-1-3 active" @click="goTo('categories')">
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
import RecipeListItem from './RecipeListItem';

export default {
  components: {
    RecipeListItem
  },
  props: [
    'id'
  ],
  beforeRouteEnter(to, from, next) {
    if (store.getters.recipes.length === 0) {
      store.dispatch('load').then(res => next());
    } else {
      next();
    }
  },
  computed: {
    ...mapGetters([
      'categories',
      'recipes',
      'scrollRecipe'
    ]),
    recipeList() {
      return this.recipes.filter(e => e.recipecategory_id === Number(this.id));
    }
  },
  methods: {
     goTo(routeName) {
      this.$router.push({ name: routeName });
    },
    handleScroll(e) {
      this.$store.dispatch('setScrollRecipe', e.target.scrollTop);
    }
  },
  mounted() {
    const container = this.$el.querySelector('.content2');
    container.scrollTop = this.scrollRecipe;
  }
};
</script>

