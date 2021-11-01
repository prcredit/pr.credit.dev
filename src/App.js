import React, {useEffect}  from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import { ROUTES } from "./config/constants";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import MainPage from "./scenes/MainPage/MainPage";
import PawnshopPage from "./scenes/PawnshopPage/PawnshopPage";
import TradingPage from "./scenes/TradingPage/TradingPage";
import UsaPage from "./scenes/UsaPage/UsaPage";
import ContactsPage from "./scenes/ContactsPage/ContactsPage";
import NotFound from "./scenes/NotFound/NotFound";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="root__container">
      <div className="content">
        <Header/>

        <Switch>
          <Route exact path={ROUTES.main} component={MainPage}/>
          <Route exact path={ROUTES.pawnshop} component={PawnshopPage}/>
          <Route exact path={ROUTES.trading} component={TradingPage}/>
          <Route exact path={ROUTES.usa} component={UsaPage}/>
          <Route exact path={ROUTES.contacts} component={ContactsPage}/>
          <Route path={ROUTES.notFound} component={NotFound}/>

          <Redirect to={ROUTES.notFound}/>
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;