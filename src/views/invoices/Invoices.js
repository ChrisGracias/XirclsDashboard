/* eslint-disable no-tabs */
import React from 'react'
import { Card, CardBody, Button, Badge } from 'reactstrap'
import { ChevronDown, Info, CheckCircle, Save, Settings, ShoppingCart, Box, Edit, File, MoreVertical } from 'react-feather'
import DataTable from 'react-data-table-component'

// create a component for actions column

const Invoices = () => {

	const Actions = () => {
		return (
			<div className='action-icons d-flex' >
				<div>
					<a href="#">
						<File id='file-icon' style={{height: '15px'}} color='#27c66f'/>
					</a>
				</div>
				<div>
					<a href="#">
						<Edit id='edit-icon' color='#877ef2' style={{height: '15px'}}/>
					</a>
				</div>
				<div>
					<a href="#">
						<MoreVertical id='more-vertical-icon' color='#737080' style={{height: '15px'}}/>
					</a>
				</div>
			</div>
	    )
    }

    const Customer = (props) => {
        return (
            <div className='customer-container'>
                <h6 className='initials'>{props.initials}</h6>{' '}
                <h6>{props.name}</h6>
                <small className='text-muted'>{props.email}</small>
            </div>
        )
    }
    
    const UnpaidAlt = () => {
        return (
            <>
                <Save color='#877ef2' className='unpaid-alt-icon'/>
                <Badge color='' pill className='unpaid-alt'>Unpaid</Badge>
            </>
        )
    }

    const Unpaid = () => {
        return (
            <>
                <Info color='#ea5454' className='unpaid-icon'/>
                <Badge color='' pill className='unpaid'>Unpaid</Badge>
            </>
        )
    }

    const Paid = () => {
        return (
            <>
                <CheckCircle color='#81dca9' className='paid-icon'/>
                <Badge color='' pill className='paid'>Paid</Badge>
            </>
        )
    }

    const columns = [
        {
            name: 'Invoice Id',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'Invoice Date',
            selector: row => row.date,
            sortable: true
        },
        {
            name: 'Customer',
            selector: row => row.customer,
            sortable: true,
            grow: 3
        },
        {
            name: 'Amount',
            selector: row => row.amount,
            sortable: true
        },
        {
            name: 'Status',
            selector: row => row.status
        },
        {
            name: 'Actions',
            selector: row => row.actions
        }

    ]

    const data = [
        {
            id: 'AA-2023-023',
            date: '05-12-2022',
            customer: <Customer
                initials='NH'
                name='Nasser Hussain'
                email='nasser.hussain@rugbyindia.in'
            />,
            amount: '₹2400',
            status: <Unpaid />,
            actions: <Actions />
        }, 
        {
            id: 'AA-2023-022',
            date: '09-11-2022',
            customer: <Customer
                initials='RH'
                name='Rajesh Ghela'
                email='collabortion@dynamocks.com'
            />,
            amount: '₹2949',
            status: <Paid />,
            actions: <Actions />
        }, 
        {
            id: 'AA-2023-021',
            date: '09-11-2022',
            customer: <Customer
                initials='NK'
                name='Nilesh Karnani'
                email='hello@beyours.in'
            />,
            amount: '₹4720',
            status: <Paid />,
            actions: <Actions />
        }, 
        {
            id: 'AA-2023-020',
            date: '09-11-2022',
            customer: <Customer
                initials='NC'
                name='Nikhil Chib'
                email='nikhilchib@gmail.com'
            />,
            amount: '₹2360',
            status: <Paid />,
            actions: <Actions />
        }, 
        {
            id: 'AA-2023-019',
            date: '04-11-2022',
            customer: <Customer
                initials='RS'
                name='Reshma Shelar'
                email='reshma@perlingobal.com'
            />,
            amount: '₹41890',
            status: <Paid />,
            actions: <Actions />
        }, 
        {
            id: 'AA-2023-018',
            date: '14-10-2022',
            customer: <Customer
                initials='PB'
                name='Paras Batra'
                email='paras@leafstudios.com'/>,
            amount: '₹3548',
            status: <UnpaidAlt />,
            actions: <Actions />
        }, 
        {
            id: 'AA-2023-017',
            date: '11-10-2022',
            customer: <Customer
                initials='NH'
                name='Nasser Hussain'
                email='nasser.hussain@rugbyindia.in'
            />,
            amount: '₹6020',
            status: <Paid />,
            actions: <Actions />
        }, 
        {
            id: 'AA-2023-016',
            date: '17-10-2022',
            customer: <Customer
                initials='MS'
                name='Manasi Sheth'
                email='manasi@injawellness.com'/>,
            amount: '₹4407',
            status: <Paid />,
            actions: <Actions />
        }, 
        {
            id: 'AA-2023-015',
            date: '14-10-2022',
            customer: <Customer
                initials='AM'
                name='Ankit Mittal'
                email='ankit.mittal@beardo.in'/>,
            amount: '₹323',
            status: <UnpaidAlt />,
            actions: <Actions />
        }, 
        {
            id: 'AA-2023-014',
            date: '18-09-2022',
            customer: <Customer
                initials='CS'
                name='Chaitanya Sinh'
                email='chait.sinh@alaconcierge.com'/>,
            amount: '₹17700',
            status: <Paid />,
            actions: <Actions />
        }
    ]

    return (
        <div>
            
            <Card>
                <CardBody style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h6>Invoices Dashboard</h6>
                    <Button className='add-invoice' color='primary'>Add Invoice</Button>
                    <a href="#"><Settings color='#877ef2' className='settings-icon'/></a>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <div className="row">
                        <div className='col'>
                            <div className="row" style={{wrap: 'noWrap'}}>
                                <div className="col-2 "><ShoppingCart size={25} color='#877ef2' style={{backgroundColor: '#efecfe'}} className='metrics-icons shopping-cart'/></div>
                                <div className="col">
                                    <h6>0</h6>
                                    <small className='text-muted metrics-subhead'>Orders Today</small>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="row" style={{wrap: 'noWrap'}}>
                                <div className="col-2"><Box size={25} color='#e95355' className='metrics-icons' style={{backgroundColor: '#fdebeb'}}/></div>
                                <div className="col">
                                    <h6>₹0.00</h6>
                                    <small className='text-muted metrics-subhead'>Billing Today</small>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="row" style={{wrap: 'noWrap'}}>
                                <div className="col-2"><ShoppingCart style={{backgroundColor: '#e4f7ed'}} size={25} color='#27c66f' className='metrics-icons'/></div>
                                <div className="col">
                                    <h6>28</h6>
                                    <small className='text-muted metrics-subhead'>All Orders</small>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                        <div className="row" style={{wrap: 'noWrap'}}>
                            <div className="col-2"><h1 className='rupee-symbol' style={{backgroundColor: '#fff3e7', fontSize: '25px'}}>₹</h1></div>
                                <div className="col">
                                    <h6>321407.00</h6>
                                    <small className='text-muted metrics-subhead'>Total Billing</small>
                                </div>
                        </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className='col'>
                            <div className="row" style={{wrap: 'noWrap'}}>
                                <div className="col-2"><Box size={25} color='#e95355' className='metrics-icons' style={{backgroundColor: '#fdebeb'}}/></div>
                                <div className="col">
                                    <h6>₹0.00</h6>
                                    <small className='text-muted metrics-subhead'>Earnings Today</small>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="row" style={{wrap: 'noWrap'}}>
                                <div className="col-2"><ShoppingCart style={{backgroundColor: '#e4f7ed'}} size={25} color='#27c66f' className='metrics-icons'/></div>
                                <div className="col">
                                    <h6>312778.00</h6>
                                    <small className='text-muted metrics-subhead'>Total Earnings</small>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="row" style={{wrap: 'noWrap'}}>
                            <div className="col-2"><h1 className='rupee-symbol' style={{backgroundColor: '#fff3e7', fontSize: '25px'}}>₹</h1></div>
                                <div className="col">
                                    <h6>8629.00</h6>
                                    <small className='text-muted metrics-subhead'>Total Unpaid</small>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="row" style={{wrap: 'noWrap', display: 'none'}}>
                                <div className="col-2"><h1 style={{backgroundColor: '#fff3e7'}} className='rupee-symbol metrics-icons'>₹</h1></div>
                                <div className="col">
                                    <h6>8629.00</h6>
                                    <small className='text-muted metrics-subhead'>Total Unpaid</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>

            <Card>
                <CardBody style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center'}}>

                    <h6>Calendar</h6>
                    <a style={{color: '#5f5974'}} href="#"><ChevronDown/></a>
                    
                </CardBody>
            </Card>

            <Card>
                <CardBody style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                    <h6>No Orders Today</h6>
                </CardBody>
            </Card>

            <DataTable
                responsive
                pagination
                title='Invoices'
                columns={columns}
                data={data}
            />

        </div>
    )
}

export default Invoices