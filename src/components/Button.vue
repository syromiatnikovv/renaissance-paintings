<template>
  <button type="button" class="button">
    <slot />
  </button>
</template>

<style lang="scss">
@import '../scss/variables.scss';

.button {
  display: inline-block;
  min-height: 48px;
  font-weight: 700;
  color: #f4f6f9;
  text-align: center;
  vertical-align: middle;
  padding: 14px 30px;
  border: none;
  background-color: $primary;
  user-select: none;
  transition: background-color 0.15s ease-in-out;
  outline: none;

  &:not(.button_disabled) {
    cursor: pointer;
  }

  &:hover:not(.button_disabled) {
    background-color: #776763;
  }

  &_disabled {
    background-color: #c1b4b1;
  }

  &_done {
    background-color: #5b3a32;
    position: relative;
    padding: 14px 9px 14px 32px;

    &::before {
      content: '';
      position: absolute;
      top: 14px;
      left: 8px;
      height: 18px;
      width: 18px;
      background: url('../assets/icons/check.svg') no-repeat;
    }
  }
}
</style>
