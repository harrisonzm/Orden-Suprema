import styles from './Leaderboard.module.css';

const Leaderboard = () => {
  const assassins = [
    { rank: 1, name: 'El Shinobi', contracts: 130 },
    { rank: 2, name: 'Cero', contracts: 118 },
    { rank: 3, name: 'Chidi', contracts: 105 },
    { rank: 4, name: 'Caine', contracts: 99 },
    { rank: 5, name: 'Vincent Bisset de Gramont', contracts: 93 },
    { rank: 6, name: 'Akoni', contracts: 87 },
    { rank: 7, name: 'Koji Shimazu', contracts: 82 },
    { rank: 8, name: 'Sofia', contracts: 76 },
    { rank: 9, name: 'Cassian', contracts: 71 },
    { rank: 10, name: 'Ares', contracts: 68 }
  ];

  return (
    <section className={styles.leaderboard}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>MEJORES ASESINOS</h1>
            <p className={styles.subtitle}>
              Los más gloriosos de nuestra orden, elegantes, precisos y eficaces,
              listos para cualquier petición.
            </p>
          </div>

          <div className={styles.list}>
            {assassins.map((assassin) => (
              <div 
                key={assassin.rank} 
                className={`${styles.item} ${assassin.rank <= 3 ? styles.topThree : ''}`}
              >
                <div className={styles.rankBadge}>
                  <span className={styles.rankNumber}>{assassin.rank}</span>
                </div>
                
                <div className={styles.name}>
                  {assassin.name}
                </div>
                
                <div className={styles.contracts}>
                  <span className={styles.contractsNumber}>{assassin.contracts}</span>
                  <span className={styles.contractsLabel}>CONTRATOS</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Leaderboard;
