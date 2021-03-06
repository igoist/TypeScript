import { dom } from '../../util/';

const { htmlToElement } = dom;

export interface ModalProps {
  title: string;
  content: string;
  okText?: string;
  cancelText?: string;
  onOk?: (e?: MouseEvent) => void;
  onCancel?: (e?: MouseEvent) => void;
  close?: () => void;
  extraNode?: string;
  extraFuncOnDidMount?: () => void;
}

class Modal {
  props: ModalProps;
  mask: HTMLElement;

  constructor(props: ModalProps) {
    this.props = props;
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    let handleIn = () => {
      this.mask.classList.remove('fade-appear');
      this.mask.classList.remove('fade-appear-active');

      this.mask.removeEventListener('animationend', handleIn);
    };
    this.mask.addEventListener('animationend', handleIn);

    this.mask.classList.add('fade-appear');
    this.mask.classList.add('fade-appear-active');

    if (this.props.extraFuncOnDidMount) {
      this.props.extraFuncOnDidMount();
    }
  }

  handleOK = (e: MouseEvent) => {
    const { onOk } = this.props;

    if (onOk) {
      onOk(e);
    }

    this.handleCancel(e);
  }

  handleCancel = (e: MouseEvent) => {
    const { close } = this.props;

    this.mask.classList.add('fade-leave');
    this.mask.classList.add('fade-leave-active');

    let handleOut = () => {
      this.mask.classList.remove('fade-leave');
      this.mask.classList.remove('fade-leave-active');

      document.body.style.overflow = null;
      this.mask.removeEventListener('animationend', handleOut);
      close();
    };

    this.mask.addEventListener('animationend', handleOut);
    this.mask.classList.add('fade-leave');
    this.mask.classList.add('fade-leave-active');
  }

  render() {
    const { title, content, okText, cancelText, extraNode } = this.props;

    let tmpNode: any =  htmlToElement(`
      <div class='top1'>
        <div class='modal-mask'></div>
        <div class='modal-wrap'>
          <div class='modal confirm'>
            <div class='modal-content'>
              <button aria-label='Close' class='modal-close'>
                <span class='modal-close-x'></span>
              </button>
              <div class='modal-body'>
                <div class='confirm-body-wrapper'>
                  <div class='confirm-body'>
                    <i class='icon icon-question-circle'></i>
                    <span class='confirm-title'>${ title }</span>
                    <div class='confirm-content'>
                      ${ content }
                      ${ extraNode ? extraNode : '' }
                    </div>
                    <div class='confirm-btns'>
                      <button class='btn bounce cancel' style='display: ${ cancelText ? '' : 'none' }; margin-right: 12px'>
                        <span>${ cancelText }</span>
                      </button>
                      <button class='btn bounce theme-red-1 ok' style='display: ${ okText ? '' : 'none' };'>
                        <span>${ okText }</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);

    this.mask = tmpNode.querySelector('.modal-mask');
    tmpNode.querySelector('.modal-close').addEventListener('click', this.handleCancel, false);
    tmpNode.querySelector('.btn.cancel').addEventListener('click', this.handleCancel, false);
    tmpNode.querySelector('.btn.ok').addEventListener('click', this.handleOK, false);

    return tmpNode;
  }
}

export default Modal;
export { Modal };
