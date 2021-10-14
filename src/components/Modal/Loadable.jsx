import { lazy } from 'react';

const Round1 = lazy(() => import(/* webpackChunkName: "Round1ModalChunk" */ './components/Round1'));

export default {
    Round1,
}