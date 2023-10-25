import { TransactionHistoryItems } from "components/TransactionHistoryItems/TransactionHistoryItems"
import css from "../TransactionHistoryItems/TransactionHistory.module.css"

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.tableHead}>
  <thead>
    <tr className={css.tableTr}>
      <th className={css.tableHeader}>Type</th>
      <th className={css.tableHeader}>Amount</th>
      <th className={css.tableHeader}>Currency</th>
    </tr>
  </thead>

            <tbody className={css.tableBody}>
                {items.map(({ id, type, amount, currency }) => {
                    return <TransactionHistoryItems
                        key={id}
                        id={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                    />
                 })}
  </tbody>
</table>
    )
}