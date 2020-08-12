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
);
