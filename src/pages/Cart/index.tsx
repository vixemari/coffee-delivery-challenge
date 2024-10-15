import { Address } from "./components/Address";
import { CartDetails } from "./components/CartDetails";
import { Payment } from "./components/Payment";
import { Row } from "./styles";

export function Cart() {
  return (
    <Row>
      <div>
        <Address />
        <Payment />
      </div>
        <CartDetails />
    </Row>
  );
}
