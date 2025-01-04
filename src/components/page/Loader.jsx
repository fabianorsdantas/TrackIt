import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <Container>
      <ThreeDots 
        height="80" 
        width="80" 
        color="#126BA5" 
        ariaLabel="three-dots-loading" 
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
`;
