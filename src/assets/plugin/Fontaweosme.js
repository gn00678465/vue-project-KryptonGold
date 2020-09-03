import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faMarker,
  faTrashAlt,
  faUserCog,
  faChevronLeft,
  faChevronRight,
  faCog,
  faArrowLeft,
  faMapMarkedAlt, // map-marker-alt
  faWineBottle, // wine-bottle
  faBeer, // beer
  faPrescriptionBottle, // prescription-bottle
  faGlobe, // globe
  faFlag, // flag
  faPercent, // percent
  faCartPlus, // cart-plus
  faInfo,
  faSpinner,
  faPlus,
  faMinus,
  faChevronUp, // chevron-up
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(
  faMarker,
  faTrashAlt,
  faUserCog,
  faChevronLeft,
  faChevronRight,
  faFacebookF,
  faTwitter,
  faGithub,
  faCog,
  faArrowLeft,
  faMapMarkedAlt,
  faWineBottle,
  faBeer,
  faPrescriptionBottle,
  faGlobe,
  faFlag,
  faPercent,
  faCartPlus,
  faInfo,
  faSpinner,
  faPlus,
  faMinus,
  faChevronUp,
);
