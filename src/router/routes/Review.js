import { lazy } from 'react'
const Reviews = lazy(() => import('../../views/Reviews/Reviews'))


const Reviews_Routes = [
  {
    path: '/reviews',
    element: <Reviews />
  }
]

export default Reviews_Routes