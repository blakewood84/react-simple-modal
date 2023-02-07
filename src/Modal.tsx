import { ReactElement } from "react";
import { createPortal } from "react-dom";

function ModalContainer({ onCloseCallback }: { onCloseCallback: Function }) {
  return (
    <div
      className="modal-backdrop"
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,.6)",
        backdropFilter: "blur(11.5px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="modal-container"
        style={{
          border: "1px solid grey",
          backgroundColor: "black",
          width: "200px",
          height: "200px",
          borderRadius: "7px",
          position: "relative",
        }}
      >
        <div
          className="modal-content"
          style={{ padding: "25px 10px 10px 10px" }}
        >
          Modal Party
        </div>
        <div
          className="modal-close-icon"
          onClick={() => onCloseCallback()}
          style={{
            cursor: "pointer",
            position: "absolute",
            top: 10,
            right: 10,
            borderRadius: "50%",
            height: "25px",
            width: "25px",
            border: "1px solid grey",
            display: "flex",
            justifyContent: "center",
          }}
        >
          X
        </div>
      </div>
    </div>
  );
}

export default function Modal({
  children,
  onCloseCallback,
}: {
  children?: ReactElement;
  onCloseCallback: Function;
}) {
  return createPortal(
    <ModalContainer onCloseCallback={onCloseCallback}></ModalContainer>,
    document.getElementById("modal") as HTMLElement
  );
}
