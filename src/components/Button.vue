<template>
  <button
    type="button"
    class="button"
    :class="loading ? 'button_loading' : ''"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    loading: Boolean
  }
}
</script>

<style lang="scss">
@import '../scss/variables.scss';

.button {
  position: relative;
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

  &::after {
    content: '';
    animation: spin 500ms linear infinite;
    position: absolute;
    top: calc(50% - 0.5rem);
    left: calc(50% - 0.5rem);
    width: 1rem;
    height: 1rem;
    border: 2px solid #fff;
    border-top-color: transparent;
    border-left-color: transparent;
    border-radius: 50%;
    opacity: 0;
  }

  &_loading {
    color: transparent;

    &::before {
      display: none;
    }

    &::after {
      opacity: 1;
    }
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
