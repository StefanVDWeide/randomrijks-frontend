<template>
  <section class="page-section">
    <b-row no-gutters>
      <b-col cols="10" lg="6" offset="1" offset-lg="3">
        <h1>{{ $t("heading") }}</h1>
        <div class="mt-4">
          <h2>
            {{ $t("image-heading") }}
          </h2>
          <p>
            {{ $t("image-text") }}
          </p>
        </div>
        <div v-if="$i18n.locale == 'en'" class="mt-4">
          <h2>
            {{ $t("title-heading") }}
          </h2>
          <p>
            {{ $t("title-text") }}
          </p>
        </div>
        <div class="mt-4">
          <h2>
            {{ $t("description-heading") }}
          </h2>
          <p>
            {{ $t("description-text") }}
          </p>
        </div>
        <div class="mt-4">
          <h2>
            {{ $t("why-heading") }}
          </h2>
          <p>
            {{ $t("why-text") }}
          </p>
        </div>
        <div class="mt-4">
          <h2>
            {{ $t("code-heading") }}
          </h2>
          <p>
            {{ $t("code-text") }}
          </p>
          <ul>
            <li>
              <a
                href="https://github.com/StefanVDWeide/randomrijks-frontend"
                target="_blank"
                >Frontend</a
              >
            </li>
            <li>
              <a
                href="https://github.com/StefanVDWeide/randomrijks-backend"
                target="_blank"
                >Backend</a
              >
            </li>
          </ul>
        </div>
        <div id="support-div" class="mt-4">
          <h2>
            {{ $t("support-heading") }}
          </h2>
          <p>
            {{ $t("support-text") }}
          </p>
          <a href="https://www.buymeacoffee.com/stefanvdweide" target="_blank"
            ><img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png"
              alt="Buy Me A Coffee"
              style="height: 60px !important; width: 217px !important"
          /></a>
        </div>
      </b-col>
    </b-row>
  </section>
</template>

<script>
export default {
  name: "About"
};
</script>
