import vector from '../../assets/vector.svg'
import './index.css'
import axios from 'axios'


type Props = {
  saleId: number;
}

function handleClick(id: number){
  axios.get(`http://localhost:8080/sales/${id}/notification`);
  console.log('enviado')
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
