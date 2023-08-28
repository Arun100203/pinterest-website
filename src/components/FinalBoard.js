import React from 'react';
import '../styles/final_board_styles.css';
import Pin from './Pin.js';
import Modal from './Modal.js';

class FinalBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pins: [],
            show_modal: false
        }
    }

    add_pin = pinDetails => {
        this.setState(_state => {
            const new_pins = [
                ..._state.pins
            ]

            new_pins.push(
                <Pin pinDetails={pinDetails} key={_state.pins.length} />
            )

            return {
                pins: new_pins,
                show_modal: false
            }
        });
    }

    render() {
        return (
            <div>
                <div className="navigation_bar">
                <div onClick={() => this.setState({ show_modal: true })} className="pint_mock_icon_container add_pin">
                            <img src="./images/add.png" alt="pinterest_website" className="pint_mock_icon" />
                        
                    </div>
                    <div className="pint_mock_icon_container add_pin">
                        <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className="centered-link">
                            <img src="./images/Pinterest-logo.png" alt="pinterest_website" className="pint_mock_icon" />
                        </a>
                    </div>
                    <div  className="pint_mock_icon_container add_pin">
                    <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer" className="centered-link">
                        <img src="./images/pexels-logo.png" alt="pexels_website" className="pint_mock_icon" />
                        </a>
                    </div>
                    <div  className="pint_mock_icon_container add_pin">
                    <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="centered-link">
                        <img src="./images/whatsapp-logoo.webp" alt="share on whatsapp" className="pint_mock_icon" />
                        </a>
                    </div>
                    <div  className="pint_mock_icon_container add_pin">
                    <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer" className="centered-link">
                        <img src="./images/instagram-logo.png" alt="share on instagram" className="pint_mock_icon" />
                        </a>
                    </div>
                    <div  className="pint_mock_icon_container add_pin">
                    <a href="https://in.pinterest.com/login/" target="_blank" rel="noopener noreferrer" className="centered-link">
                        <img src="./images/user-login.png" alt="login account" className="pint_mock_icon" />
                        </a>
                    </div>

                   <div className="copyrights">@copyrights : <br></br>
                   Arunkumar.V</div>

                </div>

                <div className="pin_container">
                    {this.state.pins}
                </div>

                <div onClick={event => event.target.className === 'add_pin_modal' ? this.setState({ show_modal: false }) : null}
                    className="add_pin_modal_container"
                >
                    {
                        this.state.show_modal ?
                            <Modal add_pin={this.add_pin} /> : null
                    }
                </div>
            </div >
        )
    }
}

export default FinalBoard;
