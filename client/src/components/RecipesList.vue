<template>
  <div style="height: 100%">
    <div class="pure-g header">
      <div class="pure-u-1-1 header-text">{{ this.categories[this.id - 1].name }}</div>
    </div>
    <div class="content2">
      <div class="pure-g add-list">
        <div style="width: 100%; height: 100%">
          <div class="turnover-group">Rezept auswählen:</div>

          <recipe-list-item
          v-for="item in recipes"
          :item = "item"
          :key="item.id"
          >

          </recipe-list-item>
        </div>
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
import RecipeListItem from './RecipeListItem';

export default {
  components: {
    RecipeListItem
  },
  props: [
    'id'
  ],
  computed: {
    ...mapGetters([
      'categories',
      'recipes'
    ])
  },
  methods: {
    goTo(routeName) {
      this.$router.push({ name: routeName });
    },
    async getRecipes() {
      await this.$store.dispatch('getRecipes', this.id);
    }
  },
  async created() {
    await this.getRecipes();
  }
};
</script>

