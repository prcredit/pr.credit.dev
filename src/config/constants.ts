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
  system: 'https://s-forex.io',
  wallet: 'https://s-wallet.ai',
  token: 'https://sn-token.io',
  pharmaceutical: 'https://s-pharmaceutical.io',
  ipo: 'https://s-ipo.io',
  cabinet: 'https://backoffice.s-group.io/personal-office',

  walletCabinet: 'https://pay.s-wallet.ai/cabinet',
  signIn: 'https://backoffice.s-group.io/sign_in',
  signUp: 'https://backoffice.s-group.io/sign_up',

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