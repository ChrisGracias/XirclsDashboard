import React, { useEffect, useState } from 'react'
import { Card, CardBody, Button } from 'reactstrap'

const Reviews = () => {
  const [data, setData] = useState([])
  const [reviewsCount, setReviewsCount] = useState(0) // Initialize reviewsCount as 0
  const [filter, setFilter] = useState('all') // Initialize filter as 'all'
  const ownerShopName = 'testteststore30' // Replace with the owner's shop name

  useEffect(() => {
    const headers = {
      'Shop-Name': ownerShopName
    }

    fetch('http://nocens.serveo.net', { headers })
      .then(response => response.json())
      .then(jsonData => {
        setData(jsonData)
        console.log('Fetched data:', jsonData)
        console.log('Number of reviews:', jsonData.length)
        setReviewsCount(jsonData.length)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  const handleFilter = value => {
    setFilter(value)
  }

  const handleToggleState = reviewId => {
    const updatedData = data.map(item => {
      if (item.id === reviewId) {
        return {
          ...item,
          state: !item.state
        }
      }
      return item
    })
  
    setData(updatedData)
  
    const review = updatedData.find(review => review.id === reviewId) // Use updatedData instead of data
    if (!review) {
      return
    }
  
    const myHeaders = new Headers()
    myHeaders.append("Cookie", "csrftoken=jJGHcnMuNKlv1Nhqfygrnrm3EpirazAa")
  
    const raw = JSON.stringify({
      toggle: true
    })
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }
  
    fetch(`http://nocens.serveo.net/review/authorize/${review.id}/`, requestOptions)
      .then(response => response.json())
      .then(updatedReview => {
        const updatedData = data.map(item => {
          if (item.id === updatedReview.id) {
            return updatedReview
          }
          return item
        })
  
        setData(updatedData)
      })
      .catch(error => console.log('error', error))
  }
  
  const filteredReviews = data.filter(review => {
    if (filter === 'published') {
      return review.shopName === ownerShopName && review.state
    } else if (filter === 'unpublished') {
      return review.shopName === ownerShopName && !review.state
    }
    return review.shopName === ownerShopName
  })

  return (
    <>
      <Card>
        <CardBody>
          <h4>Reviews</h4>
          <p className="mt-2">Number of Reviews: {reviewsCount}</p>
        </CardBody>
      </Card>

      <div>
        <Button
          color="primary"
          onClick={() => handleFilter('all')}
          active={filter === 'all'}
          className="m-2"
        >
          All Reviews
        </Button>
        <Button
          color="primary"
          onClick={() => handleFilter('published')}
          active={filter === 'published'}
          className="m-2"
        >
          Published Reviews
        </Button>
        <Button
          color="primary"
          onClick={() => handleFilter('unpublished')}
          active={filter === 'unpublished'}
          className='m-2'
        >
          Unpublished Reviews
        </Button>
      </div>

      {filteredReviews.length > 0 && (
        <div className="rounded-lg shadow-lg mt-2">
          <div className="table-responsive">
            <table className="min-w-full table-auto ">
              <thead>
                <tr>
                
                  <th className="py-2 px-2 bg-gray-200 text-gray-700 font-semibold">Rating</th>
                  <th className="py-2 px-2 bg-gray-200 text-gray-700 font-semibold">Customer Name</th>
                  <th className="py-2 px-2 bg-gray-200 text-gray-700 font-semibold">Email</th>
                  <th className="py-2 px-2 bg-gray-200 text-gray-700 font-semibold">Review</th>
                  <th className="py-2 px-2 bg-gray-200 text-gray-700 font-semibold">Product ID</th>
                  <th className="py-2 px-2 bg-gray-200 text-gray-700 font-semibold">Shop Name</th>
                  <th className="py-2 px-2 bg-gray-200 text-gray-700 font-semibold">Status</th>
                  
                </tr>
                
              </thead>
            
              <tbody>
                {filteredReviews.map(review => (
                  <tr key={review.id}>
                    <td className="py-2 px-2">
                      <div className="flex flex-row items-center">
                        {[...Array(review.rating)].map((_, index) => (
                          <svg
                            key={index}
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g transform="translate(0 -1028.4)">
                              <path
                                d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z"
                                fill="#f39c12"
                              />
                              <path
                                d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z"
                                fill="#f1c40f"
                              />
                            </g>
                          </svg>
                        ))}
                      </div>
                    </td>
                    <td className="py-2 px-2">{review.custName}</td>
                    <td className="py-2 px-2">{review.email}</td>
                    <td className="py-2 px-2">{review.review}</td>
                    <td className="py-2 px-2">{review.prod}</td>
                    <td className="py-2 px-2">{review.shopName}</td>
                    <td className="py-2 px-2">
                    
  <Button
    color={review.state ? 'danger' : 'success'}
    size="sm"
    onClick={() => handleToggleState(review.id)}
  >
    {review.state ? 'Unpublish' : 'Publish'}
  </Button>
</td>

                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  )
}

export default Reviews
