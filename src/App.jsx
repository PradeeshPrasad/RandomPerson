
import { useEffect, useState } from 'react'
import './App.css'
import fetchAPI from './fetchAPI'
import { Row,Col,Button } from 'react-bootstrap'

function App() {
  const [randomColor,setRandomColor]=useState(Math.floor(Math.random()*16777215).toString(16))
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * (1 - 30) + 30))
  const fetchData = fetchAPI("https://dummyjson.com/users")
useEffect(()=>{
  myId.style.backgroundColor = "#"+randomColor;
  setRandomNumber(Math.floor(Math.random() * (1 - 30) + 30))
},[randomColor])


  return (
    <>
      <div style={{ height: '100vh' }} className= 'd-flex justify-content-center align-items-center  w-100'>
       <div className='d=flex '>
          <h1 className='text-center'>Random User on Refersh</h1>
          <div id='myId' style={{ width: '700px', height: '600px' }} className=' border rounded-5 mt-5'>
            {
              fetchData&&fetchData.filter(items=>items.id==randomNumber).map(detail=>(
                <Row>
          <Col  className='d-flex flex-column align-items-center justify-content-center mt-5'>
              <img width={200} height={200} style={{borderRadius:'100px'}} className='border border-2 ' src={detail.image} alt="" />
              <h3>{detail.lastName}</h3>
              <p>{detail.gender}</p>
              <div className='row'>
                  <div className='col-6 text-center mb-3'>
                          <h5>Birth Date</h5>
                          <p>{detail.birthDate}</p>
                  </div>
                  <div className='col-6 text-center mb-3'>
                          <h5>Age</h5>
                          <p>{detail.age}</p>
                  </div>
                  <div className='col-6 text-center '>
                          <h5>Weight</h5>
                          <p>{detail.weight}</p>
                  </div>
                  <div className='col-6 text-center '>
                          <h5>Height</h5>
                          <p>{detail.height}</p>
                  </div>
              </div>
              <Button onClick={()=>{setRandomNumber(Math.floor(Math.random()*(1 - 30) + 30)),setRandomColor(Math.floor(Math.random()*16777215).toString(16))}} variant="success">Get New User</Button>
          </Col>
          <Col className='d-flex flex-column    mt-3 '>
              <div className='mb-5'>
                  <h3>Home Address</h3>
                  <h5>{detail.address.address}</h5>
              </div>
              <div className='mb-5'>
                  <h3>Mobile Phone</h3>
                  <h5>{detail.phone}</h5>
              </div>
              <div className='mb-5'>
                  <h3>Company</h3>
                  <h5>{detail.company.name}</h5>
              </div>
              <div className='mb-5'>
                  <h3>Job Title</h3>
                  <h5>{detail.company.title}</h5>
              </div>
              <div className=''>
                  <h3>E-mail</h3>
                  <h5>{detail.email}</h5>
              </div>
          </Col>
        </Row>
              ))
            }
          </div>
       </div>
      </div>
    </>
  )
}

export default App
