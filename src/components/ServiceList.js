import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeService, changeService, changeServiceCancel } from '../actions/actionCreators';
import { EditFilled, DeleteFilled } from '@ant-design/icons';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const itemsActive = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  const handleRemove = id => {
    if (itemsActive.id !== id) {
      dispatch(removeService(id));
    } else {
      dispatch(changeServiceCancel());
      dispatch(removeService(id));
    }
  }

  const handleChange = (o) => {
    const { id, name, price } = o;
    dispatch(changeService(id, name, price));
  };

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <EditFilled className="button" onClick={() => handleChange(o)} />
          <DeleteFilled className="button" onClick={() => handleRemove(o.id)}/>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList;
