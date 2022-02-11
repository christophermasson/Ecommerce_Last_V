import {
  Navbar,
  Container,
  FormControl,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 60 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Ecommerce</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 400 }}
            placeholder="Search a product"
            className="m-auto"
          />
        </Navbar.Text>
        <Dropdown alignRight>
          <Dropdown.Toggle variant="success">
            <FaShoppingCart color="white" fontSize="20px" />
            <Badge>{10}</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ minWidth: 370 }}>
            <span style={{ padding: 10 }}>Cart is Empty!</span>
            <Link to="/store">About</Link>{" "}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
