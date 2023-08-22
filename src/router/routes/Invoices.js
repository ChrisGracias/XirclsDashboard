import { lazy } from 'react'
const Invoices = lazy(() => import('../../views/invoices/Invoices'))


const Invoices_Routes = [
  {
    path: '/invoices',
    element: <Invoices />
  }
]

export default Invoices_Routes