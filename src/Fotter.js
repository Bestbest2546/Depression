import React from 'react'
import './footter.css'
import logo from './logo.png'
import logofacebook from './facebook.png'
import logoemail from './email.png'


const Fotter = () => {
    return (
        <div className='containfootter'>
            <div className='leftfootter'>
                <img src={logo} />
            </div>
            <div className='centerfootter'>
                <h3>Contact</h3>
                <div className='face'>
                    <div className='facebook'>
                        <a href="https://www.facebook.com/thetigerteamacademy">
                            <img src={logofacebook} alt="logo facebook" />
                        </a>
                    </div>
                    <div>
                        <p>The Tiger Team Academy</p>
                    </div>
                </div>

                <div className='face'>
                    <div className='facebook'>
                    <a href="https://www.facebook.com/thetigerteamacademy">
                        <img src={logoemail} alt="logo email" />
                    </a>
                    </div>
                    <div>
                        <p>thetigerteamacademy@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='rightfootter'>

            </div>
        </div>
    )
}

export default Fotter