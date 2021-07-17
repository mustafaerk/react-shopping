import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import MyPicture from "../../Constants/img/me.PNG";

function PersonalCard() {
    return (
        <div className="col-xl-3 col-sm-6 mx-auto my-auto">
            <div className="bg-white rounded shadow-sm py-5 px-4"><img src={MyPicture} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">Mustafa ERK</h5><span className="small text-uppercase text-muted">Frontend Developer</span>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item">
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/mustafa-erk-548a32126/" className="social-link">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>

                    <li className="list-inline-item">
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/mustafa-erk-548a32126/" className="social-link">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}



export default PersonalCard;
