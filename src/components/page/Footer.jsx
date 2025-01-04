import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

export default function Footer() {
  const location = useLocation();

  return (
    <StyledFooter>
      <Button to="/habits" isActive={location.pathname === "/habits"}>
        <CalendarMonthIcon />
        <span>Hábitos</span>
      </Button>
      <TodayButton to="/today" isActive={location.pathname === "/today"}>
        <EventAvailableIcon />
        <span>Hoje</span>
      </TodayButton>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100vw;
  height: 65px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  left: 0;
  bottom: 0;

  background: #fff;
`;

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1; /* Faz os botões ocuparem todo o espaço disponível */
  height: 100%; /* Ocupa toda a altura do rodapé */

  background-color: ${(props) => (props.isActive ? "#52b6ff" : "#fff")};
  color: ${(props) => (props.isActive ? "#fff" : "#52b6ff")};
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;

  border: none; /* Remove bordas desnecessárias */
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#4aa0e0" : "#f0f8ff")};
    color: ${(props) => (props.isActive ? "#fff" : "#52b6ff")};
  }

  &:not(:last-child) {
    border-right: 1px solid #52b6ff; /* Adiciona uma borda entre os botões */
  }

  & > svg {
    margin-right: 8px; /* Espaço entre o ícone e o texto */
  }
`;

const TodayButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > svg {
    margin-bottom: 5px; /* Espaço entre o ícone e o texto "Hoje" */
  }
`;
