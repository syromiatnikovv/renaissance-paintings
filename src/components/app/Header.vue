<template>
  <header class="header">
    <Wrapper class="header__wrapper">
      <Logo />
      <MainMenu class="header__main-menu" />

      <Spacer />

      <SearchInput />
    </Wrapper>
  </header>
</template>

<script>
import Wrapper from '@/components/Wrapper'
import Logo from '@/components/Logo'
import MainMenu from '@/components/MainMenu'
import Spacer from '@/components/Spacer'
import SearchInput from '@/components/SearchInput'

export default {
  components: {
    Wrapper,
    Logo,
    MainMenu,
    Spacer,
    SearchInput
  }
}
</script>

<style lang="scss">
.header {
  background: #f6f3f3;
  padding: 24px 0;
  border-bottom: 1px solid #e1e1e1;

  &__wrapper {
    display: flex;
  }

  &__main-menu {
    margin-left: 24px;
  }
}
</style>
