import React, { useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Messenger.css';
import useAuth from '../../../hooks/useAuth';
import messengerImg from '../../../images/messenger.png.crdownload';


const Messenger = () => {
    const [open, setOpen] = useState(false);
    const {user} = useAuth();

    return (
        <div>
            <div onClick={() => setOpen(true)} className="messenger d-flex justify-content-center align-items-center">
                <WhatsAppIcon sx={{color: 'white', fontSize: '50px'}}/>
            </div>

            {open &&
                <div className="contact-modal text-center">
                <div onClick={() => setOpen(false)} className="modal-close d-flex align-items-center">-</div>
                <img className="mt-5 rounded-circle" src={user?.photoURL} alt="" />
                <h4 className="mt-2">{user?.displayName}</h4>
                <h5 className="mt-3 mb-3 text-primary">CONTACT WITH US</h5>
                <div className="row">
                    <div className="col-6">
                        <h4>Whats App</h4>
                        <p>
                            <a className="no-underline" href="tel:+01738308375">+8801738308375</a>
                        </p>
                    </div>
                    <div className="col-6">
                        <h4>Messenger</h4>
                        <a href="https://www.facebook.com" target="_blank">
                            <img src={messengerImg} alt="" className="messenger-img" />
                        </a>
                    </div>
                </div>
            </div>
            }
        </div>
    )
};

export default Messenger;