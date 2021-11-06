import {keyframes} from "@emotion/react";

export const ROUTES = {
  main: '/',
  pawnshop: '/pawnshop',
  trading: '/trading',
  usa: '/usa',
  contacts: '/contacts',

  notFound: '/not-found',
}

export const MEDIA_SIZES = {
  desktop: 1260,
  tablet: 991,
  miniTablet: 768,
}

export const LINK_ROUTES = {

  contacts: {
    number: '0673673300',
    numberBeauty: '+380 (67) 367 33 00',
  },

  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/pr_autocredit',
    youtube: 'https://www.youtube.com/',
    telegram: 'https://t.me/',
    viber: `viber://add?number=0673673300`,
    wa: `https://wa.me/0673673300`,
  }
}

export const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;