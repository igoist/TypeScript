import { dom } from '../../util/';

const { htmlToElement } = dom;

/**
 * 由于一开始就考虑到多文件上传，于是用到了计数器 counter
 * 当然文件上传进度又是另一回事
 * 后面会将其中 Spin 部分单独拆分，然后可以根据 type 参数进行配置
 */

export interface LoadingProps {
  text: string;
  // type?: string;
}

export default class Loading {
  props: LoadingProps;
  counter: number;
  domNode: any;

  constructor(props: LoadingProps) {
    this.props = props;
    this.counter = 0;
  }

  loadingRequest() {
    this.counter += 1;
    console.log(this.counter);
    this.checkRender();
  }

  finishLoadingRequest() {
    if (this.counter > 0) {
      this.counter -= 1;
    }

    if (this.counter === 0) {
      document.body.classList.remove('body-loading');
      this.domNode.parentNode.removeChild(this.domNode);
      this.domNode = null;
    }
    console.log(this.counter);
  }

  checkRender() {
    if (!this.domNode) {
      console.log('no dom');
      this.render();
    } else {
      console.log('yo dom');
    }
  }

  render() {
    const { text } = this.props;

    let tmpNode: any = htmlToElement(`
      <div class='loading'>
        <div class='bounceball'></div>
        <div class='text-loading'>${ text }</div>
      </div>
    `);

    let div = document.createElement('div');
    div.classList.add('wrap-loading');
    div.appendChild(tmpNode);
    document.body.appendChild(div);
    document.body.classList.add('body-loading');

    this.domNode = div;
  }
}
