<template>
  <div>
    <div class="pure-g" :class="header">
    <div class="search">
        <div class="input-icons">
            <i class="fa fa-search icon"></i>
            <i class="fa fa-times icon2" v-if="this.searchString !== ''" @click="clear"></i>
            <input autocomplete="off"
                   @keyup.enter="searchAndClose($event)"
                   @keyup="searchAction()"
                   v-model="msearchString"
                   autocorrect="off"
                   autocapitalize="off"
                   spellcheck="false"
                   class="input-field"
                   type="text"
                   placeholder="Suche nach Zutaten, Rezepte, usw.">

        </div>
  </div>
    </div>
    <div :class="content2" v-on:scroll.passive="handleScroll($event)">
      <div class="pure-g add-list">
        <div style="width: 100%; height: 100%">
          <div v-if="recipeList.length > 0" class="pure-u-1 stext">{{this.recipeList.length}} Treffer</div>
          <div v-if="recipeList.length === 0" class="searchText">
            <p>Mindestens 3 Zeichen.</p>
            <p>Trenne die Suchbegriffe mit einem Leerzeichen oder Komma.</p>
          </div>
          <div v-else class="recipes">
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
    <div class="pure-g" :class="footer">
      <button class="pure-u-1-3" @click="$router.back()">
        <div><i class="fa fa-arrow-left footer-icon thin"></i></div>
        <div class="footer-text">Zurück</div>
      </button>
      <button class="pure-u-1-3" @click="goTo('categories')">
        <div><i class="fa fa-clone footer-icon"></i></div>
        <div class="footer-text">Kategorien</div>
      </button>
      <button class="pure-u-1-3 active" @click="goTo('search')">
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
    RecipeListItem
  },
  // beforeRouteEnter(to, from, next) {
  //   if (store.getters.recipesFull.length === 0) {
  //     store.dispatch('getRecipesFull').then(res => next());
  //   } else {
  //     next();
  //   }
  // },
  data() {
    return {
      recipeList: [],
      msearchString: '',
      foundRecipeIds: []
    };
  },
  computed: {
    ...mapGetters([
      'recipes',
      'steps',
      'ingredients',
      'ingredientGroups',
      'recipesFull',
      'searchString',
      'scrollSearch'
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
     goTo(routeName) {
      this.$router.push({ name: routeName });
    },
    searchAction() {
      this.$store.dispatch('setSearchString', this.msearchString);

      this.search();
    },
    search() {
      this.foundRecipeIds = [];

      let keywords = this.searchString.split(/[\s, ]+/);
      keywords = keywords.map(e => e.toLowerCase());
      keywords = keywords.filter(e => e.length > 2);

      if (keywords.length < 1) {
        this.recipeList = [];
        return;
      }

      let filtered = [];
      let currentid = 0;
      this.recipesFull.forEach(rf => {
        const filteredStrings = [];

        if (currentid !== rf.id) {
          currentid = rf.id;

          filtered = this.recipesFull.filter(f => f.id === currentid);

          filtered.forEach(ff => {
            Object.keys(ff).forEach(key => {
              const value = ff[key];

              if (typeof value === 'string' || value instanceof String) {
                if (filteredStrings.includes(value.toLowerCase()) === false) {
                  filteredStrings.push(value.toLowerCase());
                }
              }
            });
          });

          let hit = null;

          keywords.forEach(k => {
            if (filteredStrings.some(x => x.includes(k) === true)) {
              if (hit !== false) hit = true;
            } else {
              hit = false;
            }
          });

          if (hit === true) this.foundRecipeIds.push(currentid);
        }
      });

      this.recipeList = this.recipes.filter(rec => this.foundRecipeIds.includes(rec.id));
    },
    searchAndClose(e) {
      this.searchAction();
      this.search();
      e.target.blur();
    },
    clear() {
      this.msearchString = '';
      this.$store.dispatch('setSearchString', '');
      this.search();
    },
    handleScroll(e) {
      this.$store.dispatch('setScrollSearch', e.target.scrollTop);
    }
  },
  created() {
    this.$store.dispatch('getRecipesFull');

    this.msearchString = this.searchString;
    this.search();
    this.$store.dispatch('setScrollRecipe', 0);
    this.$store.dispatch('setScrollCategory', 0);
  },
  mounted() {
    const container = this.$el.querySelector('.content2');
    container.scrollTop = this.scrollSearch;
  }
};
</script>

