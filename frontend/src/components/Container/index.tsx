import "./index.css";
import { Header } from "../Header";
import { NotificationButton } from "../NotificationButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { Sale } from "../../models/sale";

export function Container() {
  
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [sales, setSales] = useState<Sale[]>([])

  const [startDate, setStartDate] = useState(min);
  const [endDate, setEndDate] = useState(max);



  useEffect(()=> {

    const dmin = startDate.toISOString().slice(0,10);
    console.log(dmin);
    const dmax = endDate.toISOString().slice(0,10);
    console.log(dmax)


    axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`).then(res => setSales(res.data.content));
  },[startDate, endDate])

  return (
    <>
      <Header />
      <section className="main">
        <div className="container">
          <h1>Vendas</h1>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => {
              setStartDate(date);
              console.log(startDate);
            }}
            className="initDate"
            withPortal
          />
          <DatePicker
            selected={endDate}
            onChange={(date: Date) => {
              setEndDate(date);
              console.log(endDate);
            }}
            className="initDate"
            withPortal
          />
          <div>
            <table className="dsmeta-sales-table">
              <thead>
                <tr>
                  <th className="show992">ID</th>
                  <th className="show576">Data</th>
                  <th>Vendedor</th>
                  <th className="show992">Visitas</th>
                  <th className="show992">Vendas</th>
                  <th>Total</th>
                  <th>Notificar</th>
                </tr>
              </thead>
              <tbody>
                {sales.map((sale) => {
                  return(
                    <tr key={sale.id}>
                      <td className="show992">{sale.id}</td>
                      <td className="show576">{sale.date}</td>
                      <td>{sale.sellerName}</td>
                      <td className="show992">{sale.visited}</td>
                      <td className="show992">{sale.deals}</td>
                      <td>R$ {sale.amount}</td>
                      <td>
                        <NotificationButton saleId={sale.id}/>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
