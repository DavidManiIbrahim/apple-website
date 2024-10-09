import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="content">
                    <ul>
                        <li className='head'>Explore </li>
                        <li>Mac</li>
                        <li>iPad</li>
                        <li>iPhone</li>
                    </ul>
                    <ul>
                        <li className='head'>Account</li>
                        <li>Manage Your Apple Account</li>
                        <li>iCloud.com</li>
                    </ul>
                    <ul>
                        <li className='head'>Apple Values</li>
                        <li>Privacy</li>
                    </ul>
                    <ul>
                        <li className='head'>About Apple</li>
                        <li>Newsroom</li>
                        <li>Apple Leadership</li>
                        <li>Career Opportunities</li>
                        <li>Investors</li>
                        <li>Ethics &amp; Compliance</li>

                    </ul>
                </div>
                    <div className="end">
                    <span className='retail'><u>Find a retailer</u> near you</span>
                    <br />
                    <hr />
                        <p className='copyright'>Copyright &copy; 2024 Apple Inc. All rights reserved.    
                              <span>Terms of Use | Site Map</span> 
                         <p className='region'>Nigeria</p></p>
                        
                        
                    </div>

            </footer>
        </>
    );

}

export default Footer