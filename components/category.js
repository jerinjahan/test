import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Dropdown } from 'react-bootstrap';
export default function  Category() {
 return (
  <>
  <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Category
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/">Shirt</Dropdown.Item>
    <Dropdown.Item href="/">Pant</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

 
  </>
 )
}