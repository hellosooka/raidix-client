import React from "react";
import { ModalViewModel } from "./ModalView.model";
import styles from "./ModalView.module.css";

export default function ModalView({ children }: ModalViewModel) {
	return <div className={styles.modalContainer}> {children} </div>;
}
