import React, { useState, useEffect } from "react";
import { CatList } from "./CatList";
import { ProductItem } from "./ProductItem";
import { Grid } from "@mui/material";
import axios from "axios";

export const ProductList = () => {
  const [data, setData] = useState([]);
  const [selectCat, setSelectCat] = useState("jewelery");

  const getData = async () => {
    const result = await axios.get(
      `https://fakestoreapi.com/products/category/${selectCat}`
    );
    setData(result.data);
  };

  const handleSelectedCat= (cat)=>{
    setSelectCat(cat)

  }

  useEffect(() => {
    getData();
  }, [selectCat]);

  return (
    <React.Fragment>
      <Grid container spacing={2} align="center">
        <Grid item xs={12}>
          <CatList handleSelectedCat={handleSelectedCat} />
        </Grid>
        {data.map((item) => (
          <ProductItem item={item} />
        ))}
      </Grid>
    </React.Fragment>
  );
};
