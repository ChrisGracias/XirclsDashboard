import { React, useContext } from 'react'
import CardMedal from '../ui-element/CardMedal'
import { Col, Row, Card, CardBody } from 'reactstrap'
import StatsCard from '../ui-element/Static'
import StatsVertical from '../../@core/components/widgets/stats/StatsVertical'
import { Circle, Send, Settings, Wind } from 'react-feather'
import logo from '@src/assets/images/dashboard/Infiniti_strategy.png'
import ProfitLineChart from '../ui-element/ProfitChart'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import RevenueReport from '../ui-element/RevenueReport'


const Affiliate = () => {
    const context = useContext(ThemeColors)
    // const { colors } = useContext(ThemeColors)
    

    return (
        <>
            <Card>
                <CardBody>
                    <h4>Affiliates</h4>
                </CardBody>
            </Card>
            <Row>
                        <Col xl='3' sm='6'>
                        <Card>
                <CardBody>
                    <h3>Merchant Name : </h3>
                    <h4>Type :  </h4>
                    <h4>Value :  </h4>
                    <h4>Commission :  </h4>
                    <button className='btn btn-primary'>Activate Link</button>
                </CardBody>
            </Card>
                        </Col>
                        <Col xl='3' sm='6'>
                        <Card>
                <CardBody >
                    <h3>Merchant Name : </h3>
                    <h4>Type :  </h4>
                    <h4>Value :  </h4>
                    <h4>Commission :  </h4>
                    <button className='btn btn-primary'>Activate Link</button>
                </CardBody>
            </Card>
                        </Col>
                        <Col xl='3' sm='6'>
                        <Card>
                <CardBody >
                    <h3>Merchant Name : </h3>
                    <h4>Type :  </h4>
                    <h4>Value :  </h4>
                    <h4>Commission :  </h4>
                    <button className='btn btn-primary'>Activate Link</button>
                </CardBody>
            </Card>
                        </Col>
                        <Col xl='3' sm='6'>
                        <Card>
                <CardBody >
                    <h3>Merchant Name : </h3>
                    <h4>Type :  </h4>
                    <h4>Value :  </h4>
                    <h4>Commission :  </h4>
                    <button className='btn btn-primary'>Activate Link</button>
                </CardBody>
            </Card>
                        </Col>
                        <Col xl='3' sm='6'>
                        <Card>
                <CardBody >
                    <h3>Merchant Name : </h3>
                    <h4>Type :  </h4>
                    <h4>Value :  </h4>
                    <h4>Commission :  </h4>
                    <button className='btn btn-primary'>Activate Link</button>
                </CardBody>
            </Card>
                        </Col>
                    </Row>
            
        </>
    )
}

export default Affiliate