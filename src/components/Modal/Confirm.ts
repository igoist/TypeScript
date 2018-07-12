import { ModalProps, Modal } from './Modal';

export interface ConfirmProps extends ModalProps {}

function Confirm(config: ConfirmProps) {
  let div = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    destroy();
  }

  function destroy() {
    if (div.parentNode) {
      div.parentNode.removeChild(div);
    }
    if (config.onCancel) {
      config.onCancel();
    }
  }

  function render(props: ConfirmProps) {
    let tmpModal = new Modal(props);
    div.appendChild(tmpModal.render());
    tmpModal.componentDidMount();
  }

  config.close = close;
  render(config);
}

export default Confirm;
export { Confirm };
