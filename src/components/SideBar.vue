<template>
  <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click=openSideBar>
    <div v-click-outside="closeSideBar">
      <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>
        <template v-slot:append>
          <v-btn icon="mdi-chevron-left" variant="text" @click.stop=closeSideBar></v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" to="/home"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="My Account" value="account" to="/about"></v-list-item>
        <v-list-item prepend-icon="mdi-chat" title="Chat" value="chat" to="/chat"></v-list-item>
      </v-list>

    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(true);
const rail = ref(true);

const openSideBar = () => {
  rail.value = false
};
const closeSideBar = () => {
  rail.value = true
};
</script>