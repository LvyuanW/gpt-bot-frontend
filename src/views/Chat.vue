<template>
  <v-container class="chat-container">

      <v-row>
        <ChatBox :chatContent="chatContent" class="chat-box"></ChatBox>
      </v-row>

      <v-row>
        <v-text-field @click="console.log(chatContent)" class="text-field" clearable
          prepend-icon="mdi-account-question-outline" variant="outlined" v-model="text2Send"></v-text-field>
        <v-btn class="send-btn" size="x-large" density="comfortable" icon="mdi-arrow-up" @click="testPost"></v-btn>
      </v-row>

  </v-container>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import axios from 'axios';

const text2Send = ref('')

const chatContent = reactive([

])

const test_data = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  timeout: 50000,
  headers: { 'X-Custom-Header': 'foobar' }
});

const testGet = () => {
  test_data.get('/user', {
    params: {
      data: '1'
    }
  })
    .then(function (response) {
      console.log("response");
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // 总是会执行
      console.log('运行完毕');
    });
}

const testPost = () => {

  chatContent.push({
    role: 'user',
    content: text2Send.value
    //直接写数据
  })
  test_data.post('/user', {
    'role': 'user',
    'content': text2Send.value
    //直接写数据
  })
    .then(function (response) {
      chatContent.push({
        role: 'assistant',
        content: response.data
      })
      console.log("response");
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      console.log('运行完毕');
      console.log(chatContent);
    });

  text2Send.value = ''
}

</script>

<style scss scope>
.chat-container {
  padding-top: 40px;
  width: 1600px;
}

.chat-box {
  /* margin-left: 25px;
  margin-right: 25px; */
  margin: 0 auto;
}

.text-field {
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 50px;
}

.send-btn {
  margin-top: 50px;
  height: 100px;
  margin-right: 40px;
  background-color: rgb(43, 116, 226);
}
</style>