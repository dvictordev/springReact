import vector from '../../../public/assets/vector.svg'
import './index.css'
import axios from 'axios'
import {toast } from 'react-toastify'


type Props = {
  saleId: number;
}

function handleClick(id: number){
  axios.get(`http://localhost:8080/sales/${id}/notification`);
  toast.info('SMS enviado com sucesso!')
}

export function NotificationButton({saleId} : Props) {
  return (
      <div onClick={()=> handleClick(saleId)} className="dsmeta-red-btn-container">
        <div className="dsmeta-red-btn">
          <img src={vector} alt="Notificar" />
        </div>
      </div>

  );
}
