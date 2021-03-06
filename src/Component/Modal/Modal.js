import React from "react";

const Modal = props => {
  return (
    <div
      class="modal fade"
      id={props.id}
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {props.title}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">{props.body}</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              value={props.btnYes}
              onClick={props.onYesClick}
            >
              Yes
            </button>
            <button
              type="button"
              class="btn btn-primary"
              value={props.btnNo}
              onClick={props.onNoClick}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
