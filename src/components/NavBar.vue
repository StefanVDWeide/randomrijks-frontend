<template>
  <b-navbar type="light" fixed>
    <b-navbar-brand class="nav-item-text" to="/">Random Rijks</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="navbar-link" to="/">{{ $t("home") }}</b-nav-item>
        <b-nav-item class="navbar-link" to="/about">{{
          $t("about")
        }}</b-nav-item>
        <b-nav-item-dropdown class="nav-item-text" right no-caret>
          <template #button-content>
            <span class="nav-item-text">{{ locale.toUpperCase() }}</span>
          </template>
          <b-dropdown-item @click="switchLocale('en')">EN</b-dropdown-item>
          <b-dropdown-item @click="switchLocale('nl')">NL</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      locale: "en"
    };
  },
  methods: {
    switchLocale(val) {
      this.$i18n.locale = val;
      this.locale = val;
    }
  }
};
</script>

<style scoped>
.navbar-brand.logo {
  color: #fff;
}

.nav-link {
  color: #fff !important;
}

.nav-item-text {
  color: #fff !important;
}
</style>
