<template>
  <footer class="footer">
    <Wrapper class="footer__wrapper">
      <Logo />
      <MainMenu class="footer__main-menu" />

      <Spacer />
      <Contacts />
    </Wrapper>
  </footer>
</template>

<script>
import Wrapper from '@/components/Wrapper'
import Logo from '@/components/Logo'
import MainMenu from '@/components/MainMenu'
import Spacer from '@/components/Spacer'
import Contacts from '@/components/Contacts'

export default {
  components: {
    Wrapper,
    Logo,
    MainMenu,
    Spacer,
    Contacts
  }
}
</script>

<style lang="scss">
.footer {
  background: #eceaea;
  padding: 24px 0;

  &__wrapper {
    display: flex;
  }

  &__main-menu {
    margin-left: 24px;

    .main-menu__link {
      color: #555;
    }
  }
}
</style>
