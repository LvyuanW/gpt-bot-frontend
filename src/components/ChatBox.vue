<template>
  <v-card ref="box" class="chat-card" title="Card title" variant="outlined" loading>
    <v-virtual-scroll id="scroll" :items="chatContent" height="1050">
      <template v-slot:default="{ item }">

        <v-text-field v-if="item.role == 'assistant'" density="compact" class="text-field" variant="plain"
          prepend-icon="mdi-robot-dead-outline">{{
            item.content }}</v-text-field>

        <v-text-field v-if="item.role == 'user'" density="compact" class="text-field" variant="plain"
          prepend-icon="mdi-account-circle-outline">{{
            item.content }}</v-text-field>

      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { useResizeObserver } from "@vueuse/core";

const props = defineProps({
  chatContent: Array
});

const boxWidth = ref(Number)

const box = ref();

useResizeObserver(box, (entries) => {
  const entry = entries[0]
  const { width, height } = entry.contentRect
  console.log(`width: ${width}, height: ${height}`)
  console.log(`${width}px`)
  boxWidth.value = width
})

watch(props.chatContent, (newData, oldData) => {
  document.getElementById('scroll').scrollTop = document.getElementById('scroll').scrollHeight
})
</script>

<style scss scoped>
.chat-card {
  width: 1600px;
  margin-top: 30px;
  padding-top: 10px;
  max-height: 1150px;
}

.text-field {
  margin-left: 40px;
  margin-right: 40px;
  min-width: 280px;
  margin-top: 5px;
}
</style>