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


const Dashboard = () => {
    const context = useContext(ThemeColors)
    // const { colors } = useContext(ThemeColors)
    

    return (
        <>
            <Card>
                <CardBody>
                    <h4>Dashboard</h4>
                </CardBody>
            </Card>
            <Row className='match-height'>
                <Col xl='4' md='6' xs='12'>
                    <CardMedal />
                </Col>
                <Col xl='8' md='6' xs='12'>
                    <StatsCard cols={{ xl: '3', sm: '6' }} />
                </Col>
            </Row>
            <Row className='match-height'>
                <Col xl='8' md='12'>
                    <Row className='match-height'>
                        <Col xl='3' md='6'>
                            <Card>
                                <CardBody>
                                    <h4>CAC</h4>
                                    <h2>0.00</h2>
                                    <RevenueReport primary={context.colors.primary.main} warning={context.colors.warning.main} />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl='3' md='6'>
                            <ProfitLineChart info={context.colors.info.main} />
                        </Col>
                        <Col xl='6' md='6'>
                            <Card>
                                <CardBody style={{ height: `200px`}}>
                                    <h4>Earnings</h4>
                                    <h5><span>₹</span></h5>
                                </CardBody> 
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl='3' sm='6'>
                            <StatsVertical icon={<Wind size={21} />} color='info' statTitle='Invite a Business' stats="" className="Business" />
                        </Col>
                        <Col xl='3' sm='6'>
                            <StatsVertical icon={<Circle size={21} />} color='danger' statTitle='My Inner XIRCLS' stats="" className="XIRCLS" />
                        </Col>
                        <Col xl='3' sm='6'>
                            <StatsVertical icon={<Settings size={21} />} color='danger' statTitle='Campaign Settings' stats="" className="Settings" />
                        </Col>
                        <Col xl='3' sm='6'>
                            <StatsVertical icon={<Send size={21} />} color='danger' statTitle='My Offers' stats="" className="Offers" />
                        </Col>
                    </Row>
                    
                </Col>
                <Col xl='4' sm='12'>
                    <Card>
                        <CardBody>
                            <h4 style={{ lineHeight: `1.5rem`, marginBottom: `1rem`}}>Current Campaign</h4>
                            <Row>
                                <Col sm='7'>
                                    <p className="card-text font-small-3">Product - Infiniti</p>
                                    <p className="card-text font-small-3">Active -  Forever Free Plan</p>
                                    <p className="card-text font-small-3">Start Date - </p>
                                </Col>
                                <Col sm='5'>
                                    <Row>
                                        <Col xl='12' className='d-flex justify-content-center align-items-center'>
                                            <img style={{ width: `100px`}} src={logo}></img>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl='12'>
                                    <p className="card-text font-small-3"><b>Plan Amount: --</b></p>
                                    <p className="card-text font-small-3"><b>Spent: --</b></p>
                                    <p className="card-text font-small-3"><b>Balance: --</b></p>
                                </Col>
                            </Row>
                            <br />
                            <Row className="row d-flex justify-content-center align-items-center">
                                <Col sm='7' className='d-flex justify-content-start align-items-center'>

                                    <h5>
                                        Status:  <span className="badge bg-danger"> Inactive</span>  
                                    </h5>

                                </Col>
                                <Col sm='5' className='d-flex justify-content-center align-items-center'>
                                    <a href="/merchant/strategy/1/"><button type="button" style={{ display: `inline`, padding: `0.786rem 1rem`, backgroundColor: `#28c76f !important`, border: `none`}} className="btn btn-primary waves-effect waves-float waves-light">Renew/ Upgrade</button></a>

                                </Col>
                                                
                            </Row>
                            
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm='12'>
                    <Card>
                        <CardBody style={{ height: `235px`}}>
                            <h4>News Feed</h4>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Dashboard 