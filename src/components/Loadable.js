import { lazy } from 'react';

const Main = lazy(() => import(/* webpackChunkName: "MainChunk" */ '../containers/Main/Main'));

export default {
  Main,
}