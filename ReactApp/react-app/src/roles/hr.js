// const Hr = ['http://localhost:3001/api/users/jwtVerify', 'http://localhost:3001/api/users/add']
// const Hr = ['http://localhost:3000', 'http://localhost:3000/dashboard']

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  useLocation
} from 'react-router-dom';

// const { _id } = useParams()

let _id;

// , `/getUsers/${_id}`
// , '/getUsers/:_id'
// , '/getUsers/'
// pathname /getUsers/632dbfc7849c2b7cce417896 App.js:75

const Hr = ['/', '/dashboard', '/listInquiries', '/addUsers', '/listUsers', '/getUsers/', '/getUsers/:_id', `/getUsers/${_id}`, '/updateUsers', '/deleteUsers']

export default Hr