import React, { useState, useEffect, Suspense } from "react";
import "./App.scss";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon,
  IonItem,
} from "@ionic/react";

import { menu, logoGithub } from "ionicons/icons";

import Menu from "./components/menu/menu.component";
import Iminfinity from "./components/iminfinity/iminfinity.component";
import Loading from "./components/loading/loading.component";

import { ReactComponent as GoLogo } from "../src/assets/go.svg";
import { ReactComponent as ReactLogo } from "../src/assets/react-logo.svg";

const Home = React.lazy(() => import("./pages/home/home.component"));
const Get = React.lazy(() => import("./pages/get/get.component"));
const Post = React.lazy(() => import("./pages/post/post.component"));
const Delete = React.lazy(() => import("./pages/delete/delete.component"));
const Put = React.lazy(() => import("./pages/put/put.component"));

function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(true);
  const [right, setRight] = useState("-120%");

  // const [url, setUrl] = useState("http://localhost:8000/posts");
  const [url, setUrl] = useState(
    "https://cors-anywhere.herokuapp.com/https://go-react-rest.herokuapp.com/posts"
  );

  const openSideMenu = () => {
    setMenuOpen((prev) => !prev);
    if (menuOpen) {
      setRight("0");
    } else {
      setRight("-120%");
    }
  };

  const setPageFromMenu = (nextPage) => {
    setPage(nextPage);
  };

  const renderPage = (nextPage) => {
    switch (nextPage) {
      case "get":
        return (
          <Suspense fallback={Loading}>
            <Get url={url} />
          </Suspense>
        );
      case "post":
        return (
          <Suspense fallback={Loading}>
            <Post url={url} />
          </Suspense>
        );
      case "delete":
        return (
          <Suspense fallback={Loading}>
            <Delete url={url} />
          </Suspense>
        );
      case "put":
        return (
          <Suspense fallback={Loading}>
            <Put url={url} />
          </Suspense>
        );
      default:
        return (
          <Suspense fallback={Loading}>
            <Home url={url} />
          </Suspense>
        );
    }
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle onClick={() => setPage("home")}>
            <GoLogo />
            <ReactLogo />
          </IonTitle>
          <IonButtons slot="secondary">
            <IonButton>{page.toUpperCase()}</IonButton>
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton
              color="dark"
              href="https://github.com/iminfinity/go-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IonIcon icon={logoGithub} size="large" />
            </IonButton>
            <IonButton color="dark" onClick={() => openSideMenu()}>
              <IonIcon icon={menu} size="large" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="side-menu" style={{ right: right }}>
          <Menu setPageFromMenu={setPageFromMenu} hideMenu={openSideMenu} />
          <Iminfinity />
        </div>
        <div>{renderPage(page)}</div>
      </IonContent>
    </IonApp>
  );
}

export default App;
