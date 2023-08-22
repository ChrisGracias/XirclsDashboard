import { lazy } from 'react'
import Affiliate from '../../views/Affiliate/Affiliate'
const Dashboard = lazy(() => import('../../views/dashboard/Dashboard'))
import A_Dashboard from '../../views/Affiliate/A_Dashboard'
import M_Dashboard from '../../views/Affiliate/M_Dashboard'


const Dashboard_Routes = [
  {
    path: '/merchant/dashboard',
    element: <Dashboard />
  },
  {
    path: '/merchant/affiliate',
    element: <Affiliate />
  },
  {
    path: '/affiliate/dashboard',
    element: <A_Dashboard />
  },
  {
    path: '/merchant_d',
    element: <M_Dashboard />
  }
  
]

export default Dashboard_Routes