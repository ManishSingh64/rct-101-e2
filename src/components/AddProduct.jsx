import React from "react";
// import axios from "axios";
import {
  Modal,
  ModalBody,
  Input,
  Select,
  RadioGroup,
  Radio,
  Button,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";
// import Products from './Products';

const AddProduct = ({handleOnChange,handleSubmit}) => {
  // TODO: Remove below const and instead import them from chakra
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen} >Add Products</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
      {/* <ModalOverlay /> */}
      <ModalCloseButton/>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" type="text" placeholder="title" name="Title" onChange={handleOnChange}/>
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt"></option>
            <option data-cy="add-product-category-pant"></option>
            <option data-cy="add-product-category-jeans"></option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male"></Radio>
            <Radio data-cy="add-product-gender-female"></Radio>
            <Radio data-cy="add-product-gender-unisex"></Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button" onClick={handleSubmit}>Create</Button>
        </ModalBody>
      </Modal>
    
    </>
  );
};

export default AddProduct;
