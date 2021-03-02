<template>
  <transition name="fade" mode="out-in">
    <div :key="objectURL">
      <b-button
        @click="$emit('object-requested')"
        class="button-standard-primary mr-3"
        >{{ $t("new-object") }}</b-button
      >
      <b-button
        :href="objectURL"
        target="_blank"
        class="button-standard-secondary"
        >{{ $t("more-information") }}</b-button
      >
    </div>
  </transition>
</template>

<script>
export default {
  name: "Buttons",
  props: {
    objectURL: String
  }
};
</script>

<style>
.button-standard-primary {
  color: #000;
  background: #fff;
  border: solid 2px #ffffff;
}

.button-standard-primary:hover {
  background: transparent;
  border: solid 2px #ffffff;
}

.button-standard-secondary {
  background: transparent;
  border: solid 2px #ffffff;
}

.button-standard-secondary:hover {
  color: #000;
  background: #fff;
  border: solid 2px #ffffff;
}
</style>