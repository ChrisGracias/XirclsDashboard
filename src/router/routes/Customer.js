import { lazy } from 'react'
const Leads = lazy(() => import('../../views/Leads/Leads'))


const Customers_Routes = [
  {
    path: '/merchant/leads',
    element: <Leads />
  }
]

export default Customers_Routes