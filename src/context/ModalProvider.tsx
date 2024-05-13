/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { Modal } from "@mui/material";
import { createContext, ReactNode, useMemo, useState } from "react";

export interface ModalContextProps {
  title?: string;
  dialogChildren?: ReactNode;
  closeDialogCallback?: () => void;
  initialWidth?: number;
  initialHeight?: number;
  className?: string;
}

export interface ModalContextValueProps {
  setModalState: (state: ModalContextProps) => void;
  closeModal: () => void;
}
const DailogContextState: any = {
  title: "",
  dialogChildren: null,
  closeDialogCallback: () => {
    /* empty */
  },
  initialWidth: 800,
  initialHeight: 700,
};

export const ModalContext = createContext<ModalContextValueProps>({
  setModalState: () => {
    /* empty */
  },
  closeModal: () => {
    /* empty */
  },
});

interface PropTypes {
  children: ReactNode;
}

const ModalProvider = ({ children }: PropTypes) => {
  // closeDialogCallback is for the "x" close (onClose of dialog) on the dialog.
  const [state, setState] = useState(DailogContextState);
  const [showDialog, setShowDialog] = useState(false);

  const setModalState = (newState: ModalContextProps) => {
    setState(newState);
    setShowDialog(true);
  };

  const closeModal = () => {
    setShowDialog(false);
    if (
      state.closeDialogCallback &&
      typeof state.closeDialogCallback === "function"
    ) {
      state.closeDialogCallback();
    }
  };

  const value = useMemo(() => ({ setModalState, closeModal }), []);

  return (
    <ModalContext.Provider value={value}>
      {children}
      {showDialog && (
        <Modal
          open={showDialog}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="form-modal"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {state.dialogChildren}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
