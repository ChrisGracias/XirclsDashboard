import React, { useState } from 'react'
import { Card, CardBody, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Row, Col } from 'reactstrap'

const M_Dashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [discountType, setDiscountType] = useState('Discount')
  const [value, setValue] = useState('')
  const [commission, setCommission] = useState('')
  const [discounts, setDiscounts] = useState([])

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleDiscountTypeChange = (type) => {
    setDiscountType(type)
  }

  const handleValueChange = (event) => {
    setValue(event.target.value)
  }

  const handleCommissionChange = (event) => {
    setCommission(event.target.value)
  }

  const handleAddDiscount = () => {
    const newDiscount = {
      discountType,
      value,
      commission
    }
    setDiscounts([...discounts, newDiscount])
    setValue('')
    setCommission('')
  }

  const handleDeleteDiscount = (index) => {
    const updatedDiscounts = [...discounts]
    updatedDiscounts.splice(index, 1)
    setDiscounts(updatedDiscounts)
  }

  return (
    <>
      <Card>
        <CardBody>
          <h4>Merchant Dashboard</h4>
        </CardBody>
      </Card>
      <Card>
      <h5 className="p-2">Discount Settings</h5>
        <CardBody className="d-flex align-items-center gap-2">
          
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className="mr-3">
            <DropdownToggle caret color="primary">
              {discountType}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => handleDiscountTypeChange('Discount')}>
                Discount
              </DropdownItem>
              <DropdownItem onClick={() => handleDiscountTypeChange('Flat')}>
                Flat
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Input
            type="text"
            placeholder="Value"
            value={value}
            onChange={handleValueChange}
            className="mr-3"
          />
          <Input
            type="text"
            placeholder="Commission"
            value={commission}
            onChange={handleCommissionChange}
          />
          <button className="btn btn-primary" onClick={handleAddDiscount}>
            Add
          </button>
        </CardBody>
      </Card>
      <Row>
        {discounts.map((discount, index) => (
          <Col md={6} lg={4} key={index}>
            <Card className="mt-3">
              <CardBody>
                <h5>{discount.discountType}</h5>
                <p>Value: {discount.value}</p>
                <p>Commission: {discount.commission}</p>
                <button className="btn btn-danger" onClick={() => handleDeleteDiscount(index)}>
                  Delete
                </button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default M_Dashboard
