import {  BookOpen, Home, User, MessageSquare, Circle } from 'react-feather'

export default [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <Home size={20} />,
    navLink: '/merchant/dashboard'
  },
  {
    header: 'Apps & Pages'
  },
  {
    id: 'leads',
    title: 'Leads',
    icon: <User size={20} />,
    navLink: '/merchant/leads'
  },
  {
    id: 'reviews',
    title: 'Reviews',
    icon: <BookOpen size={20} />,
    navLink: '/reviews'
  },
  {
    id: 'affiliate',
    title: 'Affiliates',
    icon: <Home size={20} />,
    navLink: '/merchant/affiliate'
  },
  {
    id: 'A_Dashboard',
    title: 'Affiliate Dashboard',
    icon: <User size={20} />,
    navLink: '/affiliate/dashboard'

  },
  {
    id: 'affiliate',
    title: 'Merchant Dashboard',
    icon: <Home size={20} />,
    navLink: '/merchant_d'
  }
]
