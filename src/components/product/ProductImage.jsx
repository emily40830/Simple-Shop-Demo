import styled from "styled-components";

const ProductImage = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  padding-top: 133%;
`;

export default ProductImage;
