import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import 'moment/locale/ru';

import './config/api-config';
import { ROUTES } from "./config/constants";
import { MultiLangProvider } from "./context/MultiLang/MultiLang";

import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";

import MainPage from "./scenes/MainPage/MainPage";
import BlockPage from "./scenes/BlockPage/BlockPage";
import TxPage from "./scenes/TxPage/TxPage";
import AddressPage from "./scenes/AddressPage/AddressPage";
import NotFound from "./scenes/NotFound/NotFound";
import Statistic from "./containers/Statistic/Statistic";
import Search from "./containers/Search/Search";


const App = () => {


  return (
    <MultiLangProvider>
      <div className="root__container">
        <div className="content">
          <Header/>
          <Statistic/>
          <Search/>

          <Switch>
            <Route exact path={ROUTES.main} component={MainPage}/>
            <Route exact path={ROUTES.block} component={BlockPage}/>
            <Route exact path={ROUTES.tx} component={TxPage}/>
            <Route exact path={ROUTES.address} component={AddressPage}/>
            <Route path={ROUTES.notFound} component={NotFound}/>

            <Redirect to={ROUTES.notFound}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    </MultiLangProvider>
  );
}

export default App;