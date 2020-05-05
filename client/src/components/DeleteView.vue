<template>
  <div style="height: 100%">
    <div class="pure-g header">
      <div class="pure-u-1-3 header-cancel">
      </div>
      <div class="pure-u-1-3 header-text">Team-Roulette</div>
      <div class="pure-u-1-3 header-logout">
      </div>
    </div>
    <div class="content2">
      <div class="pure-g add-list">
        <div style="width: 100%; height: 100%">
          <div class="turnover-group">Spieler auswählen:</div>

          <delete-item
          v-for="item in members"
          :item = "item"
          :key="item.id"
          >
          </delete-item>
        </div>
      </div>
    </div>
    <div class="pure-g footer">
      <button class="pure-u-1-2" @click="$router.go(-1)">
        <div><i class="fa fa-arrow-left footer-icon"></i></div>
        <div class="footer-text">Zurück</div>
      </button>
      <button class="pure-u-1-2" @click="deletePlayers()">
        <div><i class="fa fa-trash footer-icon"></i></div>
        <div class="footer-text">Spieler Löschen</div>
      </button>
    </div>
    <modal-add-player name='add-player'></modal-add-player>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DeleteItem from './DeleteItem';
import ModalAddPlayer from './ModalAddPlayer';


export default {
  components: {
    DeleteItem,
    ModalAddPlayer
  },
  computed: {
    ...mapGetters([
      'members',
      'selectedMembers'
    ])
  },
  methods: {
    async deletePlayers() {
      if (this.selectedMembers.length === 0) {
        this.$toasted.show('Bitte Spieler auswählen.');
        return;
      }

      await this.$store.dispatch('deleteMembers', this.selectedMembers);
      await this.$store.dispatch('getMembers');
      this.$toasted.success('Spieler gelöscht.');
      this.$router.go(-1);
    }
  },
  created() {
    this.$store.dispatch('initSelectedMembers');
  }
};
</script>

