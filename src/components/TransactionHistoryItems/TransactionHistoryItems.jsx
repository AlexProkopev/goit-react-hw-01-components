import css from "./TransactionHistory.module.css"

export const TransactionHistoryItems = ({ id, type, amount, currency }) => {
    return (
        <tr key={id} className={css.table}>
            <td className={css.item}>{type}</td>
            <td className={css.item}>{amount}</td>
            <td className={css.item}>{currency}</td>
        </tr>
    )
}