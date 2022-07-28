import { shade } from "polished";
import { useContext } from "react";
import ReactSwitch from "react-switch";
import { ThemeContext } from "styled-components";
import { Container } from "./styles";

interface HeaderProps {
  toggleTheme(): void;
}

export default function Header({ toggleTheme }: HeaderProps) {
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container>
      Hello World{" "}
      <ReactSwitch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={16}
        width={40}
        handleDiameter={16}
        offColor={shade(0.16, colors.primary)}
        onColor={colors.secundary}
      />
    </Container>
  );
}
