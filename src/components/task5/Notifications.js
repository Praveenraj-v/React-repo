import React from "react";
import './Notifications.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBell, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

function Notifications() {
    return (
        <>
            <div className="notifications text-center d-flex flex-column justify-content-center align-items-center">
                <h1 className="mb-4 ">Notifications</h1>
                <div class="toast align-items-center p-2 mb-4 text-bg-primary rounded-0 show fs-5"  aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                            <FontAwesomeIcon icon={faCircleCheck} /> Information Message.
                        </div>
                    </div>
                </div>
                <div class="toast align-items-center p-2 mb-4 text-bg-success rounded-0 show fs-5"  aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                            <FontAwesomeIcon icon={faCircleCheck} /> Success Message.
                        </div>
                    </div>
                </div>
                <div class="toast align-items-center p-2 mb-4 text-bg-warning rounded-0 show fs-5"  aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                        <FontAwesomeIcon icon={faBell} /> Warning Message.
                        </div>
                    </div>
                </div>
                <div class="toast align-items-center p-2 mb-4 text-bg-danger rounded-0 show fs-5"  aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                            <FontAwesomeIcon icon={faCircleExclamation} /> Error Message.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notifications;