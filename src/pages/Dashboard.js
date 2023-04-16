import { Link } from "react-router-dom";

export default function Stocks(props) {

  // function stockChange(){
  //   return(
  //     <>
  //     </>
  //   )
  // }

  return (
    <main className="dashboard">
      <h1>Most Active Stocks</h1>
      <table >
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {props.stocks.map((stock, idx) => {
            return (
              <tr key={idx}>
                <td><Link to={`/stocks/${stock.symbol}`} ><h2>{stock.name}</h2></Link></td>
                <td>{stock.lastPrice}</td>
                <td>{Math.round(stock.change * 100) / 100}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

