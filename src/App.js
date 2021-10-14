import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import { MultiLangProvider } from "./context/MultiLang/MultiLang";

import Header from "./containers/Header/Header";
import Hero from "./containers/Hero/Hero";
import AboutUs from "./containers/AboutUs/AboutUs";
import Info from "./containers/Info/Info";
import Contacts from "./containers/Contacts/Contacts";
import Team from "./containers/Team/Team";
import Rest from "./containers/Rest/Rest";
import Footer from "./containers/Footer/Footer";
import News from "./containers/News/News";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { ROUTES } from "./config/constants";
import HeroNews from "./containers/HeroNews/HeroNews";


const App = () => {
  return (
    <MultiLangProvider>
      <Switch>
        <Route path={ROUTES.notFound} component={NotFoundPage} />
        <Route exact path={ROUTES.main} component={() => {
          return (
            <>
              <Header />
              <Hero />
              <AboutUs />

              <Info />
              <Team />
              <Rest />
              <Contacts />

              <Footer />
            </>
          )
        }
        } />
        <Route exact path={ROUTES.news} component={() => {
          return (
            <>
              <Header />
              <HeroNews />
              <News />
            </>
          )
        }} />

        <Redirect to={ROUTES.notFound} />
      </Switch>
    </MultiLangProvider>
  );
}

export default App;