import React from "react";
import "./menu.styles.scss";

import { IonList, IonItem, IonLabel, IonIcon } from "@ionic/react";
import {
  bookOutline,
  addCircleOutline,
  cutOutline,
  trash,
} from "ionicons/icons";
const Menu = ({ setPageFromMenu, hideMenu }) => {
  const setPageAndHideMenu = (page) => {
    setPageFromMenu(page);
    hideMenu();
  };
  return (
    <IonList>
      <IonItem>
        <IonIcon icon={bookOutline} />
        <IonLabel onClick={() => setPageAndHideMenu("get")}>Get</IonLabel>
      </IonItem>
      <IonItem>
        <IonIcon icon={addCircleOutline} />
        <IonLabel onClick={() => setPageAndHideMenu("post")}>Post</IonLabel>
      </IonItem>
      <IonItem>
        <IonIcon icon={cutOutline} />
        <IonLabel onClick={() => setPageAndHideMenu("put")}>Put</IonLabel>
      </IonItem>
      <IonItem>
        <IonIcon icon={trash} />
        <IonLabel onClick={() => setPageAndHideMenu("delete")}>Delete</IonLabel>
      </IonItem>
    </IonList>
  );
};

export default Menu;
