import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

const Footer = () => {
    return (
        <Fragment>
            <footer>
                <div className="para">
                    <p>© 2022 GorkCoder - All Rights Reserved.</p>
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faYoutube} />
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;
