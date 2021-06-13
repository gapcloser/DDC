import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";

import Header from "./components/Header";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";

import { DataProvider } from "./state/DataProvider";
import Details from "./pages/Details";
import ShopDetails from "./pages/ShopDetails";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <DataProvider>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/blog/:blogItem" component={Details} />
        <Route path="/shop/:shopItem" component={ShopDetails} />
      </Switch>
    </DataProvider>
  );
}

export default App;
