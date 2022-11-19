import React from 'react';

const ConfirmationModal = ({title, modalData, successAction, message, closeModal}) => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confiramtion-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                       
                        <label onClick={() => successAction(modalData)} htmlFor="confiramtion-modal" className="btn btn-primary">Delete</label>
                        <button onClick={closeModal} className="btn btn-outline">No</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;