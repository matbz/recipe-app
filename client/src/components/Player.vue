<template>
  <div style="height: 100%">
    <div class="pure-g header">
      <div class="pure-u-1-1 header-text">Kategorien</div>
    </div>
    <div class="content2">
      <div class="pure-g add-list">
        <div style="width: 100%; height: 100%">
          <div class="turnover-group">Spieler auswählen:</div>

          <player-item
          v-for="item in members"
          :item = "item"
          :key="item.id"
          >
          </player-item>
        </div>
      </div>
    </div>
    <div class="pure-g footer">
      <button class="pure-u-1-3" @click="$router.go(-1)">
        <div><i class="fa fa-arrow-left footer-icon"></i></div>
        <div class="footer-text">Zurück</div>
      </button>
      <button class="pure-u-1-3 active" @click="goTo('team')">
        <div><i class="fa fa-clone footer-icon"></i></div>
        <div class="footer-text">Kategorien</div>
      </button>
      <button class="pure-u-1-3">
        <div><i class="fa fa-search footer-icon"></i></div>
        <div class="footer-text">Suchen</div>
      </button>
    </div>
    <modal-add-player name='add-player'></modal-add-player>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PlayerItem from './PlayerItem';
import ModalAddPlayer from './ModalAddPlayer';

export default {
  components: {
    PlayerItem,
    ModalAddPlayer
  },
  computed: {
    ...mapGetters([
      'members'
    ])
  },
  methods: {
    goTo(routeName) {
      this.$router.push({ name: routeName });
    },
    addPlayer() {
      this.$modal.show('add-player');
    }
  }
};
</script>

