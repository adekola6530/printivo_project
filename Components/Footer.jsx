import React from 'react'
import styles from '../Components/PrintivoHead.module.css'

const Footer = () => {
  return (
    <div>
        <div className={styles.footerbg}>
            <div className='row'>
                <div className='col-3'>
                    <h3>Printivo</h3>
                    <ul className={styles.foot}>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Track Order</li>
                        <li>Printivo Promise</li>
                        <li>Printivo Blog</li>
                        <li>Career</li>
                    </ul>

                </div>
                <div className='col-3'>
                    <h3>Help and Information</h3>
                    <ul className={styles.foot}>
                        <li>Paper Quality</li>
                        <li>Privacy Quality</li>
                        <li>Terms and Conditions</li>
                        <li>Font Licenses</li>
                        <li>Shipping and Delivery</li>
                    </ul>

                </div>
                <div className='col-3'>
                    <h3>Make Money</h3>
                    <ul className={styles.foot}>
                        <li>Refer a friend & earn N1,000</li>
                        <li>Become a Reseller</li>
                        <li>Sell your Designs</li>
                        <li>Merch Store</li>
                    </ul>

                </div>
                <div className='col-3'>
                    <h3>Follow Us</h3>
                    <ul className={styles.foot}>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                    </ul>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Footer