import moment from "moment";
import React, { useMemo, useState } from "react";
import ProductService from "../../API/ProductService";
import { useFetch } from "../../hooks/useFetch";
import useInput from "../../hooks/useInput";
import ModalView from "../ModalView/ModalView";
import { CreateProductViewModel } from "./CreateProductView.model";
import styles from "./CreateProductView.module.css";

export default function CreateProductView({
  toggleCreateProduct,
}: CreateProductViewModel) {
  const title = useInput("");
  const weight = useInput("");
  const exist = useInput("");
  const date = useInput(moment().format("YYYY-MM-DD"));
  const cusotmer = useInput("");

  const [isTitle, setIsTitle] = useState(false);
  const [isWeight, setIsWeight] = useState(false);
  const [isExist, setIsExist] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);

  const createProduct = () => {
    setIsTitle(title.value.trim() != "");
    setIsWeight(weight.value.trim() != "");
    setIsExist(exist.value.trim().toString() != "");
    setIsCustomer(cusotmer.value.trim() != "");
    if (
      title.value.trim() != "" &&
      weight.value.trim() != "" &&
      exist.value.trim().toString() != "" &&
      cusotmer.value.trim() != ""
    ) {
      toggleCreateProduct((p) => (p = false));
      if (typeof fetching == "function") {
        fetching();
      }
    }
  };

  const [fetching, isLoading, error] = useFetch(async () => {
    const response = await ProductService.createProduct({
      title: `${title.value}`,
      weight: `${weight.value}`,
      isExist: `${exist.value}` == "true",
      date: `${date.value}`,
      customer: `${cusotmer.value}`,
    });
  });

  return (
    <ModalView>
      <div className={styles.closeButtonContainer}>
        <button
          onClick={() => toggleCreateProduct((p) => (p = false))}
          className={styles.closeButton}
        >
          {" "}
          &times;{" "}
        </button>
      </div>
      <div className={styles.titleContainer}>
        <span className={styles.titleText}>Product creation</span>
      </div>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input
          style={isTitle ? { border: "none" } : { border: "1px solid red" }}
          placeholder="title"
          className={styles.input}
          value={title.value}
          onChange={title.onChange}
          name="title"
          type="text"
        />
        <input
          style={isWeight ? { border: "none" } : { border: "1px solid red" }}
          placeholder="weight"
          className={styles.input}
          value={weight.value}
          onChange={weight.onChange}
          name="weight"
          type="text"
        />
        <select
          style={isExist ? { border: "none" } : { border: "1px solid red" }}
          className={styles.input}
          value={exist.value}
          onChange={exist.onChange}
        >
          <option value=""> ??hoose existence </option>
          <option value="true"> true </option>
          <option value="false"> false </option>
        </select>
        <input
          className={styles.input}
          value={date.value}
          onChange={date.onChange}
          name="date"
          type="date"
        />
        <input
          style={isCustomer ? { border: "none" } : { border: "1px solid red" }}
          placeholder="customer"
          className={styles.input}
          value={cusotmer.value}
          onChange={cusotmer.onChange}
          name="customer"
          type="text"
        />
        <button
          className={styles.submitButton}
          onClick={() => createProduct()}
          type="submit"
        >
          Create
        </button>
      </form>
    </ModalView>
  );
}
