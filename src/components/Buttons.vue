<template>
  <transition name="fade" mode="out-in">
    <div :key="objectURL">
      <b-button @click="clickHandler" class="button-standard-primary mr-3">{{
        $t("new-object")
      }}</b-button>
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
  },
  methods: {
    clickHandler() {
      this.$emit("object-requested");
      this.$gtm.trackEvent({
        event: "object_requested"
      });
    }
  }
};
</script>

<style>
.button-standard-primary {
  font-size: 0.8rem !important;
  color: #000;
  background: #fff;
  border: solid 2px #ffffff;
}

@media (min-width: 576px) {
  .button-standard-primary {
    font-size: 1rem !important;
  }
}

.button-standard-primary:hover {
  background: transparent;
  border: solid 2px #ffffff;
}

.button-standard-secondary {
  font-size: 0.8rem !important;
  background: transparent;
  border: solid 2px #ffffff;
}

@media (min-width: 576px) {
  .button-standard-secondary {
    font-size: 1rem !important;
  }
}

.button-standard-secondary:hover {
  color: #000;
  background: #fff;
  border: solid 2px #ffffff;
}
</style>
