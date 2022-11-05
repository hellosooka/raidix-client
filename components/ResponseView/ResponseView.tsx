import React from "react";
import ModalView from "../ModalView/ModalView";
import { ResponseViewModel } from "./ResponseView.model";
import styles from "./ResponseView.module.css";

export default function ResponseView({
  response,
  responseView,
}: ResponseViewModel) {
  return (
    <div>
      {responseView && (
        <ModalView>
          <span className={styles.title}> Response: </span>
          {response.map((e) => (
            <div key={e.id}>
              <span className={styles.prop}>id: {e.id} </span>
              <span className={styles.prop}>title: {e.title} </span>
              <span className={styles.prop}>weight: {e.weight} </span>
              <span className={styles.prop}>date: {e.date} </span>
              <span className={styles.prop}>Existance: {e.isExist} </span>
              <span className={styles.prop}>Customer: {e.customer} </span>
              <hr />
            </div>
          ))}
        </ModalView>
      )}
    </div>
  );
}
