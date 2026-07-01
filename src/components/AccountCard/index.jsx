import styles from "./AccountCard.module.scss";

export default function AccountCard({
  title,
  accountNumber,
  amount,
  description,
  onViewTransactions,
}) {
  return (
    <section className={styles.account}>
      <div className={styles.accountContentWrapper}>
        <h3 className={styles.accountTitle}>
          {title} ({accountNumber})
        </h3>

        <p className={styles.accountAmount}>{amount}</p>

        <p className={styles.accountAmountDescription}>
          {description}
        </p>
      </div>

      <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
        <button
          className={styles.transactionButton}
          onClick={onViewTransactions}
        >
          View transactions
        </button>
      </div>
    </section>
  );
}