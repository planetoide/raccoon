import React from 'react';

const Dialog = (props) => {
    console.log(props);
    const {index, desc, imgUrl} = props;
    return(
        <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{desc}</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        <img src={imgUrl} alt="mapache" className="img-fluid rounded mx-auto d-block" />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn text-light" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialog;