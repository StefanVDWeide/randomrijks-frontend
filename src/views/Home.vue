<template>
  <section class="page-section">
    <b-alert v-model="apiError" variant="danger" dismissible>
      {{ this.apiErrorMessage }}
    </b-alert>
    <b-row>
      <b-col cols="12" lg="7" class="d-flex align-items-center">
        <ObjectImage :objectImageURL="imageLoadedURL"></ObjectImage>
      </b-col>
      <b-col cols="12" lg="5" class="justify-content-center align-items-center">
        <ObjectDescription
          :objectTitle="objectData.object_title"
          :objectPrincipalMaker="objectData.object_principalMaker"
          :objectPresentingDate="objectData.object_presentingDate"
          :objectPlaqueDescriptionDutch="
            objectData.object_plaqueDescriptionDutch
          "
          :objectPlaqueDescriptionEnglish="
            objectData.object_plaqueDescriptionEnglish
          "
          :objectColors="objectData.object_colors"
        ></ObjectDescription>
        <Buttons
          v-if="imageLoadedURL"
          v-on:object-requested="retrieveObjectData($i18n.locale)"
          :objectURL="objectData.object_url"
        ></Buttons>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import Axios from "@/axios";
import ObjectDescription from "@/components/ObjectDescription.vue";
import ObjectImage from "@/components/ObjectImage.vue";
import Buttons from "@/components/Buttons.vue";

export default {
  name: "Home",
  components: {
    ObjectDescription,
    ObjectImage,
    Buttons
  },
  data() {
    return {
      apiError: false,
      apiErrorMessage: "",
      objectData: {},
      imageLoadedURL: ""
    };
  },
  mounted() {
    this.retrieveObjectData(this.$i18n.locale);
  },
  methods: {
    retrieveObjectData(language) {
      this.$Progress.start();
      const url = `/get/random-object/${language}`;
      return new Promise((resolve, reject) => {
        Axios()
          .get(url)
          .then(response => {
            if (response.status == "error") {
              this.apiError == true;
              this.apiErrorMessage == response.message;
            } else {
              this.processData(response.data.data);
            }
            resolve(response);
          })
          .catch(error => {
            this.$Progress.fail();
            console.log(error);
            reject(error);
          });
      });
    },
    processData(data) {
      // Preload the image to cache it and thus ensure smooth transitions
      const newImage = new Image();
      newImage.onload = () => {
        // Set both the image data and object data at the same time
        // to trigger the animation simultaniously
        this.imageLoadedURL = data.object_image_url;
        this.objectData = data;
        this.$Progress.finish();
      };
      // Set the source of the image object to force the loading to start
      // before rendering it on the DOM
      newImage.src = data.object_image_url;
    }
  }
};
</script>
