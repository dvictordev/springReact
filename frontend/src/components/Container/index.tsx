import "./index.css";
import { Header } from "../Header";
import DatePicker from "react-datepicker";
import vector from "../../assets/Vector.svg";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export function Container() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
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
                <tr>
                  <td className="show992">#341</td>
                  <td className="show576">08/07/2022</td>
                  <td>Anakin</td>
                  <td className="show992">15</td>
                  <td className="show992">11</td>
                  <td>R$ 55300.00</td>
                  <td>
                    <div className="dsmeta-red-btn-container">
                      <div className="dsmeta-red-btn">
                        <img src={vector} alt="Notificar" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="show992">#341</td>
                  <td className="show576">08/07/2022</td>
                  <td>Anakin</td>
                  <td className="show992">15</td>
                  <td className="show992">11</td>
                  <td>R$ 55300.00</td>
                  <td>
                    <div className="dsmeta-red-btn-container">
                      <div className="dsmeta-red-btn">
                        <img src={vector} alt="Notificar" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="show992">#341</td>
                  <td className="show576">08/07/2022</td>
                  <td>Anakin</td>
                  <td className="show992">15</td>
                  <td className="show992">11</td>
                  <td>R$ 55300.00</td>
                  <td>
                    <div className="dsmeta-red-btn-container">
                      <div className="dsmeta-red-btn">
                        <img src={vector} alt="Notificar" />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
