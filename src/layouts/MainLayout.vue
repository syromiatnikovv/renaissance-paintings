<template>
  <div class="app-layout">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/app/Header'
import Main from '@/components/app/Main'
import Footer from '@/components/app/Footer'

export default {
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="scss">
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
