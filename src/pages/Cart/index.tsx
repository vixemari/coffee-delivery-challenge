import { Address } from "./components/Address";
import { CartDetails } from "./components/CartDetails";
import { Payment } from "./components/Payment";
import { Row, Col } from "./styles";

export function Cart() {
  return (
    <Row>
      <Col>
        <Address />
        <Payment />
      </Col>
      <Col>
        <CartDetails />
      </Col>
    </Row>
  );
}
