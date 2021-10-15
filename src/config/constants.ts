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
    facebookEn: 'https://www.facebook.com/SGroup.en',
    instagramEn: 'https://www.instagram.com/SGroup_en',
    youtubeEn: 'https://www.youtube.com/channel/UCjMumEGncMkciO9txuG1Cjg',
    telegramEn: 'https://t.me/SGroup_en',

    facebookRu: 'https://www.facebook.com/SGroup.ru',
    instagramRu: 'https://www.instagram.com/SGroup_ru',
    youtubeRu: 'https://www.youtube.com/channel/UCjMumEGncMkciO9txuG1Cjg',
    telegramRu: 'https://t.me/SGroup_ru',
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