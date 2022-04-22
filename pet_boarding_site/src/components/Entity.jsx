import { useDispatch, useSelector } from 'react-redux';
import { addEntity } from '../Redux/CreateEntity/action';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
const [data, setData] = useState("");
export const Entity = () => {
  const dispatch = useDispatch();
  //const entitys = useSelector((store) => store.listing.listing);
    const { id } = useParams();

    useEffect(() => {
     getEntity();
      if (id) {
        fetchCurrentData();
      }
    }, []);
    const fetchCurrentData = () => {
      axios.get(`http://localhost:8080/listing/${id}`).then((res) => {
        console.log(res.data);
        setData({ ...res });
      });
    };
    const getEntity = () => {
    axios
      .get(`http://localhost:8080/listing/${id}`)
      .then(({ data }) => {
        dispatch(addEntity(data));
      })
      .catch((er) => {
        console.log(er);
      });
  };  
  return (
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
      {data.map((el, i) => {
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
                  </tr>
                </tbody>
              </table>
            </>
          </div>
        );
      })}
    </div>
  );
};
