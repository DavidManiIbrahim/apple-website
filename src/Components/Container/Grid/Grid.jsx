import './Grid.css'

const Grid = () => {
    return(
        <>
        <div className="container">
        <div className="ipad-pro">
             <h1 className='ipad-pro-header'>
            iPad pro
            </h1>
            <h2 className='ipad-pro-txt'>Unbelievably thin. Incredibly powerful</h2>
            <button className='ipad-pro-btn'>Learn More</button>
        </div>
        <div className="pro">
            <h2 className='pro-txt'>Two sizes. Faster chip. Does it all.</h2>
            <button className='pro-btn'>Learn More</button>
        </div>
        <div className="macbook-pro">
            <h1 className='macbook-pro-header'>Macbook Pro</h1>
            <h2 className='macbook-pro-txt'>Mind-blowing. Head-turning</h2>
            <button className='macbook-pro-btn'>Learn More</button>
        </div>
        <div className="ipad">
        <h1 className='ipad-header'>iPad</h1>
        <h2 className='ipad-txt'>Loveable. Drawable. Magical</h2>
        <button className='ipad-btn'>Learn More</button>
        </div>
        </div>
        </>
    );
}

export default Grid