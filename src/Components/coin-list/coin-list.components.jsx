import React from 'react';
import './coin.css';

const Coin = ({ 
    name, 
    symbol, 
    price, 
    marketcap, 
    volume, 
    image, 
    priceChange 
    }) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" className="crypto" />
                    <h1 className="">{name}</h1>
                    <p className="coin-sympbol">{symbol}</p>
                </div>

                <div className='coin-data'>
                    <p className='coin-price'>${price}</p>
                    <p className='coin-volume'>${volume.toLocaleString()}</p>

                    {priceChange < 0 ? (
                        <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                    )}

                    <p className='coin-marketcap'>
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin;
