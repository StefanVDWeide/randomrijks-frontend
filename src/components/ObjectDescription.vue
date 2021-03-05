<template>
  <transition name="fade" mode="out-in" appear>
    <div class="text-div" :key="objectTitle">
      <div>
        <h1>{{ objectTitle }}</h1>
        <h2>{{ objectPrincipalMaker }}</h2>
        <h2>{{ objectPresentingDate }}</h2>
      </div>
      <div class="description-div mt-3">
        <p v-if="$i18n.locale == 'nl'">
          {{ objectPlaqueDescriptionDutch }}
        </p>
        <p v-if="$i18n.locale == 'en'">
          {{ objectPlaqueDescriptionEnglish }}
        </p>
      </div>
      <div
        v-if="objectColors.length"
        class="d-xl-flex justify-content-xl-start color-div py-1 my-4"
      >
        <ul
          class="list-inline d-xl-flex justify-content-xl-center align-items-xl-center color-list"
        >
          <li
            v-for="color in objectColors"
            :key="color.index"
            class="list-inline-item"
          >
            <div class="color-background-div">
              <div
                class="color-1-div"
                :style="{ backgroundColor: color.hex }"
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ObjectDescription",
  props: {
    objectTitle: String,
    objectPrincipalMaker: String,
    objectPresentingDate: String,
    objectlongTitle: String,
    objectPlaqueDescriptionDutch: String,
    objectPlaqueDescriptionEnglish: String,
    objectColors: {
      type: Array,
      default: () => []
    },
    objectURL: String
  }
};
</script>

<style>
.text-div {
  margin-top: 2.5rem;
}

@media (min-width: 992px) {
  .text-div {
    margin-top: 5rem;
  }
}

.color-1-div {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 5px;
}

.color-list {
  margin-bottom: 0px;
}

.color-background-div {
  background-color: #fff;
  padding: 0.25rem;
  border-radius: 5px;
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
