const Code = () => {
  return (
    <div className="mockup-code w-full">
      <pre data-prefix="$">
        <code>{`import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DialogContainer from './DialogContainer';

type ProviderContext = {
  openDialog: (option: DialogOption) => void;
  closeDialog: () => void;
  isAnyModalOpen: boolean;
};

const EMPTY_FUNC = () => {};
const DialogContext = React.createContext<ProviderContext>({
  openDialog: EMPTY_FUNC,
  closeDialog: EMPTY_FUNC,
  isAnyModalOpen: false,
});

export const useDialog = () => React.useContext(DialogContext);

export type DialogParams = {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
};

export type DialogOption = Omit<DialogParams, 'open'>;
export type DialogContainerProps = DialogParams & {
  onClose: () => void;
};

const DialogProvider = ({ children }: { children: React.JSX.Element }) => {
  const location = useLocation();
  const dialogsRef = useRef<DialogParams[]>([]);
  const dialogsToUpdate = dialogsRef.current;
  const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);

  useEffect(() => {
    closeDialog();
  }, [location.pathname, location.hash, location.search]); // Close dialog when location changes

  const createDialog = (option: DialogOption) => {
    dialogsRef.current = dialogsToUpdate.map((dialog) => ({
      ...dialog,
      open: false, // Close all existing dialogs
    }));

    const newDialog = { ...option, open: true };
    dialogsRef.current.push(newDialog);
    // Ensure state is updated with the new dialogs
    setDialogs([...dialogsRef.current]);
    setIsAnyModalOpen(true);
  };

  const closeDialog = () => {
    dialogsRef.current = dialogsToUpdate.map((dialog) => ({
      ...dialog,
      open: false,
    }));

    setDialogs([...dialogsRef.current]);
    if (isAnyModalOpen) {
      setIsAnyModalOpen(false);
    }
  };

  const [dialogs, setDialogs] = useState<DialogParams[]>(dialogsRef.current);

  //I replaced useRef with useState because useState is more suitable for managing dynamic state that affects rendering, ensuring isAnyModalOpen accurately represents whether any modal is open.
  const contextValue = {
    openDialog: createDialog,
    closeDialog,
    isAnyModalOpen,
  } as ProviderContext;

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
      {dialogs.map((dialog, i) => {
        const { ...dialogParams } = dialog;

        return <DialogContainer key={i} onClose={closeDialog} {...dialogParams} />;
      })}
    </DialogContext.Provider>
  );
};

export default DialogProvider;
`}</code>
      </pre>
      <pre data-prefix=">" className="text-warning">
        <code>{`import { DialogContainerProps } from "./DialogProvider";

const DialogContainer = (props: DialogContainerProps) => {
  const { children, ...dialogParams } = props;

  return (
    <div className={modal {dialogParams.open ? "modal-open" : ""}}>
      {children}
    </div>
  );
};

export default DialogContainer;
`}</code>
      </pre>
      ; ========================
      <pre>
        <code>{`import Modal, { TModalProps } from '.';

const ModalProvider = ({ children, ...props }: TModalProps) => {
  return <Modal {...props}>{children}</Modal>;
};
export default ModalProvider;
`}</code>
      </pre>
      <pre>
        <code>{`import React from 'react';
import ModalCloseIcon from './ModalCloseIcon';
export type TModalProps = {
  children: React.JSX.Element;
  className?: string;
  hideCloseIcon?: boolean;
  fullWidth?: boolean;
};
const Modal = ({ children, className, hideCloseIcon, fullWidth }: TModalProps) => {
  return (
    <div
      className={{
        fullWidth
          ? 'h-[calc(100vh-80px)] sm:w-[calc(100vw-40px)] w-screen pb-4 pt-10'
          : 'max-h-[calc(100vh-40px)] w-full max-w-xl py-12'
      } max-xs:px-4 xs:px-7 mx-auto bg-cultured-100 overflow-auto rounded-md relative text-left gap-10 {className}}
      data-cy='product-edit-modal'
    >
      {!hideCloseIcon && (
        <div className='w-100 static bg-cultured-100 top-0 z-50'>
          <ModalCloseIcon />
        </div>
      )}
      <div className='mt-4'>{children}</div>
    </div>
  );
};

export default Modal;
`}</code>
      </pre>
      <pre>
        <code>{`<InformationCircleIcon
      className='h-4 w-4 cursor-pointer'
      onClick={() => {
        openDialog({
          children: (
            <ModalProvider
              children={
                <ConfirmationModal
                  hideCancelButton={true}
                  submitButtonName='Ok'
                  content={info}
                  onSubmit={() => {
                    closeDialog();
                  }}
                />
              }
            />
          ),
        });
      }}
    />`}</code>
      </pre>
    </div>
  );
};

export default Code;
