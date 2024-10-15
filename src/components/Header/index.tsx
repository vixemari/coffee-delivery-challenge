import { MapPin, ShoppingCart  } from "phosphor-react";
import { HeaderContainer, Aside } from "./styles.";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img  src={logo} alt="Logo"  height={40} />
      </Link>
      <Aside>
        <div>
        <MapPin size={22} weight="fill" />
        <span>
          Aracaju
        </span>
        </div>
        <Link to="/cart">
          <ShoppingCart size={22} weight="fill" />
        </Link>
      </Aside>
    </HeaderContainer>
  )
}
