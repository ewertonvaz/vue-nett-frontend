import { mapGetters } from 'vuex'

export const authComputed = {
  ...mapGetters(['loggedIn', 'loggedUser'])
}

export const eventComputed = {
  ...mapGetters(['lastEvent'])
}