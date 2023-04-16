import { useParams } from "react-router-dom"
import { useEffect } from "react";

const Stock = (props) => {

    const params = useParams();
    const symbol = params.symbol;
    let dataArr = props.scocksData;

    // eslint-disable-next-line
    useEffect(()=>{console.log(dataArr) },[])

    function display() {
        for (let i = 0; i < dataArr.length; i++) {
            if (dataArr[i].symbol === symbol) {
                return (
                    <main className="stock">
                        <h1>{dataArr[i].name} ({dataArr[i].symbol})</h1>
                        <table><tbody>
                            <tr>
                                <td>Last Price </td>
                                <td>{dataArr[i].lastPrice}</td>
                            </tr>
                            <tr>
                                <td>Change</td>
                                <td>{Math.round(dataArr[i].change*100)/100}</td>
                            </tr>
                            <tr>
                                <td>High</td>
                                <td>{dataArr[i].high}</td>
                            </tr>
                            <tr>
                                <td>Low</td>
                                <td>{dataArr[i].low}</td>
                            </tr>
                            <tr>
                                <td>Open</td>
                                <td>{dataArr[i].open}</td>
                            </tr>
                            </tbody>
                        </table>
                    </main>
                )
            }
        }
    }

    return (
        <div>
            {display()}
        </div>
    );
}

export default Stock;