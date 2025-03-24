import './TransactionHistory.css'
const TransactionHistory = ({ items }) => {
  return (
    <table className='tableHistory'>
      <thead className='headTable'>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className='bodyTable'>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          )
        }
        )
            }
        </tbody>
    </table>)
      }



export default TransactionHistory;