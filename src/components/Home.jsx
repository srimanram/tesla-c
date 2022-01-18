import React from "react";
import styled from "styled-components";
import Down from "./Down";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        despr="Order Online for Touchless Delivery"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        backimg="model-s.jpg"
      />
      <Section
        title="Model Y"
        despr="Order Online for Touchless Delivery"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        backimg="model-y.jpg"
      />
      <Section
        title="Model 3"
        despr="Order Online for Touchless Delivery"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        backimg="model-3.jpg"
      />
      <Section
        title="Model x"
        despr="Order Online for Touchless Delivery"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        backimg="model-x.jpg"
      />
      <Section
        title="Accessories"
        leftbtn="Shop now"
        backimg="accessories.jpg"
      />
      <Down />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;
