<script>
import Jobs from './components/Jobs.vue'
import Profile from './components/Profile.vue'
import SendMessage from './components/SendMsg.vue'
import Header from './components/Header.vue'
export default {
  components: {
    Header,
    Profile,
    SendMessage,
    Jobs
  }
}
</script>

<template>
  <div>
    <Header />
    <Profile />
    <SendMessage to:martinfeineis/>
    <Jobs />
  </div>
</template>