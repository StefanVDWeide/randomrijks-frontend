import Vue from "vue";
import VueI18n from "vue-i18n";
import VueProgressBar from "vue-progressbar";
import VueGtm from "vue-gtm";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";
import router from "./router";

// Import the individual BootstrapVue components in order to minimize bundle size
import {
  BAlert,
  BRow,
  BCol,
  BLink,
  BButton,
  BImg,
  BNavbar,
  BNavbarToggle,
  BNavbarBrand,
  BCollapse,
  BNavbarNav,
  BNavItem,
  BNavItemDropdown,
  BDropdownItem
} from "bootstrap-vue";

Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.use(VueProgressBar, {
  color: "rgb(255, 255, 255)",
  failedColor: "red",
  height: "3px"
});
Vue.use(VueGtm, {
  id: "GTM-KGFKZFW"
});

const messages = {
  en: {
    heading: "About This Project",
    "image-heading": "Where do the images and data come from?",
    "image-text":
      "The images and data are all retrieved via the public Rijks Museum API",
    "title-heading": "Why are so many titles in Dutch?",
    "title-text":
      "Unfortunately not all titles have been translated to English by the Rijks Museum, understandably so considering the size of their collection.  This means that the Dutch title is used when an English one isn't available. ",
    "description-heading": "Why isn't a description always available?",
    "description-text":
      "Not every object has been given a separate description by the Rijks Museum. Considering the size of their collection this is again understandable.",
    "why-heading": "Why did you create this project?",
    "why-text":
      "While the Rijks Museum is quite large, most of its collection is not readily available to see for the general public. This project allows people to take a deep dive and see objects they might never see otherwise. Also, being that a random object is shown, people are taken out of their normal 'comfort zone' and might discover a new type of art they are interested in.",
    "support-heading": "How can I support this project?",
    "support-text":
      "This project does not generate any income, so any help to pay for the hosting would be appriciated. That being said, the Rijks Museum could use your support more than this project during these times. So please support them before you support this project.",
    home: "Home",
    about: "About",
    "new-object": "New Random Object",
    "more-information": "More Information"
  },
  nl: {
    heading: "Over Dit Project",
    "image-heading": "Waar komen de afbeeldingen en beschrijvingen vandaan?",
    "image-text":
      "De afbeeldingen en informatie worden opgehaald via de openbare Rijks Museum API",
    "title-heading": "Waarom zijn zoveel titles in het Nederlands? - Weg?",
    "title-text":
      "Helaas heeft het Rijks Museum niet alle titels van de objecten naar het Engels vertaald, begrijpelijk gezien de grootte van de collectie. Dit betekent dat er een Nederlandse titel wordt gebruikt als de Engelse niet beschikbaar is",
    "description-heading": "Waarom is er niet altijd een beschrijving?",
    "description-text":
      "Het Rijks Museum heeft niet voor elk object een aparte beschrijving beschikbaar. Gezien de grote van de collectie is ook dit begrijpelijk",
    "why-heading": "Waarom dit project?",
    "why-text":
      "Ondanks dat het Rijks Museum zelf vrij groot is, is het grootste gedeelte van de collectie niet zichtbaar voor het publiek. Dit project geeft mensen de kans om objecten te bekijken die normaal niet te zien zijn. Daarnaast zorgt het willekeurig kiezen/genereren van het object ervoor dat mensen uit hun 'comfort zone' worden gehaald en zo mogelijk nieuwe kunst en interesses te ontdekken ",
    "support-heading": "Hoe kan ik dit project ondersteunen?",
    "support-text":
      "Dit project genereert geen inkomsten, dus alle bijdragen om voor de hosting te betalen worden gewaardeerd. Dat gezegd hebbende, het Rijks Museum kan uw support beter gebruiken dan dit project, zeker in deze tijd. Support dus eerst het museum voordat u dit project support",
    home: "Thuis",
    about: "Over",
    "new-object": "Nieuw Object",
    "more-information": "Meer Informatie"
  }
};

// Create an instance of vue-i18n
const i18n = new VueI18n({
  locale: "en",
  messages
});

// Register the individual BootstrapVue components
Vue.component("b-alert", BAlert);
Vue.component("b-row", BRow);
Vue.component("b-col", BCol);
Vue.component("b-link", BLink);
Vue.component("b-button", BButton);
Vue.component("b-img", BImg);
Vue.component("b-navbar", BNavbar);
Vue.component("b-navbar-toggle", BNavbarToggle);
Vue.component("b-navbar-brand", BNavbarBrand);
Vue.component("b-collapse", BCollapse);
Vue.component("b-navbar-nav", BNavbarNav);
Vue.component("b-nav-item", BNavItem);
Vue.component("b-nav-item-dropdown", BNavItemDropdown);
Vue.component("b-dropdown-item", BDropdownItem);

new Vue({
  router,
  render: h => h(App),
  i18n
}).$mount("#app");
