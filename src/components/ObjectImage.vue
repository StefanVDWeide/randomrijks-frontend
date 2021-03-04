<template>
  <div>
    <transition name="fade" mode="out-in" appear>
      <b-img class="object-image" :src="objectImageURL" :key="objectImageURL" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "ObjectImage",
  props: {
    objectImageURL: String
  }
};
</script>

<style>
.object-image {
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
