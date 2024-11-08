import React from 'react'
import styles from './pricing.module.css'

type priceDataType ={
    price: string,
    level: string,
    benefit: string[],
    link: ''
}

const priceData:priceDataType[] =[
{
    price: '$ 49',
    level: 'Startup',
    benefit: ['2GB RAM', '20GB SSD Cloud Storage', 'Weekly Backups', 'DDoS Protection', 'Full Root Access', '24/7/365 Tech Support'],
    link: ''
},
{
    price: '$ 99',
    level: 'Standard',
    benefit: ['4GB RAM', '50GB SSD Cloud Storage', 'Weekly Backups', 'DDoS Protection', 'Full Root Access', '24/7/365 Tech Support'],
    link: ''
},
{
    price: '$ 149',
    level: 'Business',
    benefit: ['8GB RAM', '100GB SSD Cloud Storage', 'Weekly Backups', 'DDoS Protection', 'Full Root Access', '24/7/365 Tech Support'],
    link: ''
},
]

const Pricing = () => {
  return (
    <div className={styles.pricing} id='#pricing'>
        <h1>Our Pricing</h1>
        <div className={styles.container}>
            {priceData.map((item, index)=>(
                <div key={index} className={styles.box}>
                    <div className={styles['inner-box']}>
                        <h2>{item.price}</h2>
                        <h3>{item.level}</h3>
                        {item.benefit.map((benefit, idx)=>(
                            <p key={idx}>{benefit}</p>
                        ))}
                    </div>
                    <button className={styles.button}>See Details</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing