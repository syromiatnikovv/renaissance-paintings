<template>
  <input :type="type" :placeholder="placeholder" class="input" />
</template>

<script>
export default {
  props: {
    type: String,
    placeholder: String
  }
}
</script>

<style lang="scss">
@import '../scss/variables.scss';

.input {
  display: block;
  border: 1px solid #e1e1e1;
  background: transparent;
  color: $text-color;
  padding: 14px 16px;
  min-height: 48px;
  transition: border-color 0.15s ease-in-out;
  outline: none;

  &:focus {
    border-color: #b5b5b5;
  }

  &::placeholder {
    color: #9f9f9f;
  }
}
</style>
