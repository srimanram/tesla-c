import React from "react";
import styled from "styled-components";
function Down() {
  return (
    <Footer>
      <a href="https://github.com/srimanram">GitHub</a>
      <a href="https://www.linkedin.com/in/sriman-r-8641a21bb?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVfWKPgZESoeInnPtEO7NrQ%3D%3D">
        Linkedin
      </a>
      <a href="https://mile.twitter.com/sriman1177">Twitter</a>
      <a href="">Developed by sriman ram</a>
    </Footer>
  );
}

export default Down;
const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px;
  text-align: center;
  justify-content: space-between;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: no-wrap;
  }
`;
