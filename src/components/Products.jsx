import React from "react";
import AddProducts from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import {Flex,Grid} from "@chakra-ui/react"


const Products = ({data,handleOnChange,handleSubmit}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  return (
    <Flex>
      <AddProducts handleOnChange={handleOnChange} handleSubmit={handleSubmit}/>
      <Grid>
        <Product data={data} />
      </Grid>
      <Pagination />
    </Flex>
  );
};

export default Products;
