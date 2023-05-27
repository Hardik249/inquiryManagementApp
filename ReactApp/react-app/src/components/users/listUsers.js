import axios from 'axios';
import Sidebar from '../sidebar';
import { useState, useEffect, useCallback } from 'react';
import Buttons from '../buttons';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams
} from 'react-router-dom';
import { useTable } from "react-table";
import VerifyJwtSession from '../verifyJwtSession'
import ReactPaginate from 'react-paginate';
import GetUsers from './getUsers';
import DeleteUsers from './deleteUsers';
import Popup from './Popup';

const ListUsers = (props) => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(0);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState(null);
  // const [page, setPage]=useState(1);
  let [page, setPage]=useState(1);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(20);
  // const { page } = useParams(); // get the 'page' router param
  const p = parseInt(page, 10); // comes in as a string, convert to int
  const [totalResults, setTotalResults] = useState(0)
  // const currentPage= 1
  // const totalPages= props.contacts / 6
  console.log('list useParams', useParams())


  useEffect(() => {
    fetch(`http://localhost:3001/api/users/list/${page}`, {
      headers:{
        Authorization:sessionStorage.getItem("item_key")
      }
    })  
    .then(res => {
      console.log('res',res)
      return res.json()
    })
    .then(
      (result) => {
        // console.log('result', result)
        console.log('result.data.docs', result.data.docs)
        console.log('result.data.totalDocs', result.data.totalDocs)
        const users = result.data.docs
        setItems(users)
        const totalDocs = result.data.totalDocs
        setItem(totalDocs)
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log('error', error)
        return error
        // return setError(error)
      }
    )

    // return response
    // return setItem(response)
  }, [])
  
  const u=localStorage.getItem("user");
  console.log('l-u',u)

  const handlePrevClick = () => {
    console.log("Previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7”&page=${this.state.page - 1}&pageSize=20`;
    // let url = 'http://localhost:3001/api/users/list/2'
    let url = `http://localhost:3001/api/users/list/${page}`
    let data =  fetch(url, {
      headers:{
        Authorization:sessionStorage.getItem("item_key")
      }
    })  
    .then(res => {
      console.log('res',res)
      res.json()
    })
    .then(
      (result) => {
        console.log('result', result)
        console.log('result.data.docs', result.data.docs)
        console.log('result.data.totalDocs', result.data.totalDocs)
        const users = result.data.docs
        setPage(page-1)
        setItems(users)
        console.log('page',page)
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log('error', error)
        return error
        // return setError(error)
      }
    );
  }

  const handleNextClick = async() => {
    console.log("Next");
    console.log("Next item",item);
    if (page + 1 > Math.ceil(item / 20)) {
    }
    else {
        // let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=20`;
        // let url = 'http://localhost:3001/api/users/list/2'
        let url = `http://localhost:3001/api/users/list/${page}`
        let data = fetch(url, {
          headers:{
            Authorization:sessionStorage.getItem("item_key")
          }
        })  
        .then(res => res.json())
        .then(
          (result) => {
            // console.log('result', result)

            // console.log('result.data.docs', result.data.docs)
            // console.log('result.data.totalDocs', result.data.totalDocs)
            const users = result.data.docs
            setPage(page+1)
            setItems(users)
            console.log('page',page)
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log('error', error)
            return error
            // return setError(error)
          }
        );
    }
  }

  return (
    <div className='ListUsers'>
      <div className='conatiner'>
        <div className='row'>
          <Sidebar className='col-sm-2'/>
          <div className='col-sm-10 '>
              <ol className='text-center'>
                <table>
                  <thead>
                    <tr>
                      <th>_id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Contact</th>
                      {u=="Sales"?"":<th>Buttons</th>}
                    </tr>
                    </thead>
                </table>
                {items.map(item => (
                  <li key={item._id}>
                    <table>
                      <tbody>
                        <tr>
                          <td>{item._id}</td>
                          <td>{item.name}</td> 
                          <td>{item.email}</td> 
                          <td>{item.contact}</td> {/*${item._id}*/}
                          {u=="Sales"?"":<td><Buttons  />
                            <Link to={`/getUsers/${item._id}`}  className="btn btn-link">
                              <i className="material-icons">edit</i>
                              
                                <Routes>
                                  <Route path={`/getUsers/:_id`} element={<GetUsers />} />
                                </Routes>  
                              
                            </Link>
                            </td>
                          } 
                        </tr>
                      </tbody>
                    </table>
                  </li>
                ))}
              </ol>
              <div className="card-footer clearfix">
                <Link to='/addUsers'>
              {u=="Sales"?"":
                  <button type="button" className="btn btn-primary float-end"><i className="fas fa-plus"></i>Add user</button>
              }
                </Link>
              </div>
            {/*<p>{item}</p>*/}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    </div>
  ); 
};

export {ListUsers};

