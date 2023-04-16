import { Link } from "react-router-dom";

export default function Stocks(props) {

  function stockChange(stock) {
    let change = Math.round(stock.change * 100) / 100;
    if (change < 0) {
      return (
        <td class="red">
          {Math.round(change*stock.open)/100 + ' ('+ change +'%)'}
        </td>
      )
    }
    else if (change>0){
      return (
        <td className='green'>
          {Math.round(change*stock.open)/100 + ' ('+ change +'%)'}
        </td>
      )
    }
  }

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
                {/* <td>{Math.round(stock.change * 100) / 100}</td> */}
                {stockChange(stock)}
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

