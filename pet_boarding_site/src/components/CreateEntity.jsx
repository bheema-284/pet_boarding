import { store } from '../Redux/store';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addEntity } from '../Redux/CreateEntity/action';
import axios from 'axios';
import { useEffect, useState } from 'react';
export const CreateEntity = () => {
  console.log(store.getState());
  const dispatch = useDispatch();
  const entitys = useSelector((store) => store.listing.listing);
  const [form, setForm] = useState({
    id: '',
    name: '',
    city: '',
    address: '',
    capacity: '',
    costperday: '',
    verified: '',
    rating: '',
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
         axios.post(`http://localhost:8080/listing`, form)
      .then(() => alert(`Data has been added`))
      .then(() => window.location.reload());
  }

  useEffect(() => {
    getEntity();
  }, []);
  const addEntitys = () => {
    axios
      .post(`http://localhost:8080/listing`, form)
      .then(() => {
        getEntity();
      })
      .then(() => window.location.reload());  
      
  };
  const getEntity = () => {
    axios
      .get('http://localhost:8080/listing')
      .then(({ data }) => {
        dispatch(addEntity(data));
      })
      .catch((er) => {
        console.log(er);
      });
  };
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/listing/${id}`).then(getEntity);
  };
  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          id={'id'}          
          onChange={(e) => handleChange(e)}
          placeholder="Enter a ID"
          required
        />
        <input
          type="text"
          id={'name'}         
          onChange={(e) => handleChange(e)}
          placeholder="Enter a Name"
          required
        />
        <input
          type="text"
          id={'city'}          
          onChange={(e) => handleChange(e)}
          placeholder="Enter a City"
          required
        />
        <input
          type="text"
          id={'address'}          
          onChange={(e) => handleChange(e)}
          placeholder="Enter a Address"
          required
        />
        <input
          type="text"
          id={'capacity'}          
          onChange={(e) => handleChange(e)}
          placeholder="Enter a Capacity"
          required
        />
        <input
          type="text"
          id={'costperday'}         
          onChange={(e) => handleChange(e)}
          placeholder="Enter a Costperday"
          required
        />
        <input
          type="text"
          id={'verified'}         
          onChange={(e) => handleChange(e)}
          placeholder="Enter a Status"
          required
        />
        <input
          type="text"
          id={'rating'}        
          onChange={(e) => handleChange(e)}
          placeholder="Enter a Rating"
          required
        />

        <input type="submit" value={'Save City'} />
      </form>
       <div>
        <div className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>city</th>
              <th>capacity</th>
              <th>costperday</th>
              <th>verified</th>
              <th>rating</th>
            </tr>
          </thead>
        </div>
        {entitys.map((el, i) => {
          return (
            <div className="table" key={i}>
              <>
                <table>
                  <tbody>
                    <tr>
                      <td>{el.id}</td>
                      <td>{el.name}</td>
                      <td>{el.city}</td>
                      <td>{el.capacity}</td>
                      <td>{el.costperday}</td>
                      <td>{el.verified}</td>
                      <td>{el.rating}</td>
                      <td>
                        <button
                          style={{
                            backgroundColor: '#cbd26c',
                            width: '100px',
                          }}>
                          <Link to={`/listing/${el.id}`}>showdata</Link>
                        </button>
                      </td>
                      <td>
                        <button
                          style={{ backgroundColor: '#cbd26c', width: '100px' }}
                          onClick={() => {
                            handleDelete(el.id);
                          }}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            </div>
          );
        })}
      </div>
    </div>
  );
};


// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { nanoid } from 'nanoid';
// import { useParams } from 'react-router-dom';
// export const CreateEntity = () => {
//   const [cArr, setCArr] = useState([]);
//   const [data, setData] = useState({});
//   const [form, setForm] = useState({
//     id: nanoid(),
//     name: '',
//     city: '',
//     address: '',
//     capacity: '',
//     costperday: '',
//     verified: '',
//     rating: '',
//   });

//   const { id } = useParams();

// //   useEffect(() => {
// //     getCountries();
// //     if (id) {
// //       fetchCurrentData();
// //     }
// //   }, []);
//   const fetchCurrentData = () => {
//     axios.get(`http://localhost:8000/listing/${id}`).then((res) => {
//       console.log(res.data);
//       setData({ ...res });
//     });
//   };

//   //   const getCountries = () => {
//   //     axios.get(`http://localhost:8000/countries`).then((res) => {
//   //       setCArr([...res.data]);
//   //       //   console.log(cArr);
//   //     });
//   //   };

//   //   const [text, setText] = useState("");
//   const handleChange = (e) => {
//     const { id, value } = e.target;

//     setForm({ ...form, [id]: value });
//     // console.log(form);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios
//       .post(`http://localhost:8000/listing`, form)
//       .then(() => alert(`${form.city} has been added`))
//       .then(() => window.location.reload());
//   };
//   return (
//     <div>
//       <h1>Add Cities</h1>

//       <form action="" onSubmit={(e) => handleSubmit(e)}>
//         <input
//           type="text"
//           id={'name'}
//           // value={}
//           onChange={(e) => handleChange(e)}
//           placeholder="Enter a Name"
//           required
//         />
//         <input
//           type="text"
//           id={'city'}
//           //   value={text}
//           onChange={(e) => handleChange(e)}
//           placeholder="Enter a City"
//           required
//         />
//         <input
//           type="text"
//           id={'address'}
//           //   value={text}
//           onChange={(e) => handleChange(e)}
//           placeholder="Enter a Address"
//           required
//         />
//         <input
//           type="text"
//           id={'capacity'}
//           //   value={text}
//           onChange={(e) => handleChange(e)}
//           placeholder="Enter a Capacity"
//           required
//         />
//         <input
//           type="text"
//           id={'costperday'}
//           //   value={text}
//           onChange={(e) => handleChange(e)}
//           placeholder="Enter a Costperday"
//           required
//         />
//         <input
//           type="text"
//           id={'verified'}
//           //   value={text}
//           onChange={(e) => handleChange(e)}
//           placeholder="Enter a Status"
//           required
//         />
//         <input
//           type="text"
//           id={'rating'}
//           //   value={text}
//           onChange={(e) => handleChange(e)}
//           placeholder="Enter a Rating"
//           required
//         />

//         <input type="submit" value={'Save City'} />
//       </form>
//     </div>
//   );
// };
