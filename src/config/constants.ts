import {keyframes} from "@emotion/react";

export const ROUTES = {
  main: '/',
  block: '/block/:block',
  setBlockRoute: (block: string) => `/block/${block}`,
  tx: '/tx/:tx',
  setTxRoute: (tx: string) => `/tx/${tx}`,
  address: '/address/:address',
  setAddressRoute: (wallet: string) => `/address/${wallet}`,
  notFound: '/not-found',
}

export const MEDIA_SIZES = {
  desktop: 1260,
  tablet: 991,
  miniTablet: 768,
}

export const LINK_ROUTES = {

  contacts: {
    number: '69',
  },

  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    youtube: 'https://www.youtube.com/',
    telegram: 'https://t.me/',
    viber: 'viber://add?number=',
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