
import { TrendingUp, User, Box, DollarSign } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, CardText } from 'reactstrap'
import Avatar from '@components/avatar'

const StatsCard = () => {
  const data = [
    {
      title: '230k',
      subtitle: 'Verified Interactions',
      color: 'light-primary',
      icon: <TrendingUp size={24} />
    },
    {
      title: '8.549k',
      subtitle: 'Total Reach',
      color: 'light-info',
      icon: <User size={24} />
    },
    {
      title: '67%',
      subtitle: 'Conversion',
      color: 'light-danger',
      icon: <Box size={24} />
    },
    {
      title: '100',
      subtitle: 'Clicks',
      color: 'light-success',
      icon: <DollarSign size={24} />
    }
  ]

  return (
    <Card className='card-statistics'>
      <CardHeader>
        <CardTitle tag='h4'>Statistics</CardTitle>
      </CardHeader>
      <CardBody className='statistics-body'>
        <Row>
            {
                data.map((currElem) => {
                    return (
                        <>
                            <div class="col-xl-3 col-sm-6 col-12 mb-2 mb-sm-0">
                                <div class="media d-flex">
                                    <Avatar color={currElem.color} icon={currElem.icon} className='me-2' />
                                    <div className='my-auto'>
                                        <h4 className='fw-bolder mb-0'>{currElem.title}</h4>
                                        <CardText className='font-small-3 mb-0'>{currElem.subtitle}</CardText>
                                    </div>  
                                </div>
                            </div>
                        </>
                    )
                })  
            }
        </Row>
      </CardBody>
    </Card>
  )
}

export default StatsCard
