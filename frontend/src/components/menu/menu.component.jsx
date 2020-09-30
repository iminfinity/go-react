import React from "react";
import "./menu.styles.scss";

import { IonList, IonItem, IonLabel, IonIcon } from "@ionic/react";
import {
  bookOutline,
  addCircleOutline,
  cutOutline,
  trash,
} from "ionicons/icons";
const Menu = ({ setPageFromMenu }) => {
  return (
    <IonList>
      <IonItem>
        <IonIcon icon={bookOutline} />
        <IonLabel onClick={() => setPageFromMenu("get")}>Get</IonLabel>
      </IonItem>
      <IonItem>
        <IonIcon icon={addCircleOutline} />
        <IonLabel onClick={() => setPageFromMenu("post")}>Post</IonLabel>
      </IonItem>
      <IonItem>
        <IonIcon icon={cutOutline} />
        <IonLabel onClick={() => setPageFromMenu("Put")}>Put</IonLabel>
      </IonItem>
      <IonItem>
        <IonIcon icon={trash} />
        <IonLabel onClick={() => setPageFromMenu("delete")}>Delete</IonLabel>
      </IonItem>
    </IonList>
  );
};

export default Menu;
