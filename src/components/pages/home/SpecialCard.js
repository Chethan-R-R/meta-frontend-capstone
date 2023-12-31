import scooter from '../../../icons_assets/scooter.svg'
export default function Special({dishData}){
    return(
        <article className='special'>
            <img src={dishData.image} alt="" loading="lazy" width="300px" height="230px"/>
            <div>
                <div>
                <h4>{dishData.title}</h4>
                <h6 className='dishprice'>$ {dishData.price}</h6>
            </div>
            <p>{dishData.description}</p>
            <div className='delivery'>
                <h5>Order & Delivery &nbsp;</h5>
                <img src={scooter} alt='delivery scooter' width="25px" height="25px" />
            </div>
            </div>
        </article>
    )
}