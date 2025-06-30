import { Counter } from './modules/counter';
import { MessageDisplay } from './modules/message';
import { greetUser } from './utils/helpers';

// 应用程序主类
class App {
  private counter: Counter;
  private messageDisplay: MessageDisplay;

  constructor() {
    this.counter = new Counter();
    this.messageDisplay = new MessageDisplay();
    this.init();
  }

  private init(): void {
    this.setupEventListeners();
    this.displayWelcomeMessage();
  }

  private setupEventListeners(): void {
    const clickBtn = document.getElementById('click-btn') as HTMLButtonElement;

    if (clickBtn) {
      clickBtn.addEventListener('click', () => {
        this.handleButtonClick();
      });
    }
  }

  private handleButtonClick(): void {
    const newCount = this.counter.increment();
    this.updateCounterDisplay(newCount);
    this.showClickMessage(newCount);
  }

  private updateCounterDisplay(count: number): void {
    const counterElement = document.getElementById('counter');
    if (counterElement) {
      counterElement.textContent = `点击次数: ${count}`;
    }
  }

  private showClickMessage(count: number): void {
    let message: string;
    let type: 'success' | 'info';

    if (count === 1) {
      message = '第一次点击！欢迎使用这个应用 🎉';
      type = 'success';
    } else if (count % 5 === 0) {
      message = `太棒了！你已经点击了 ${count} 次 🚀`;
      type = 'success';
    } else {
      message = `继续点击！当前次数: ${count}`;
      type = 'info';
    }

    this.messageDisplay.show(message, type);
  }

  private displayWelcomeMessage(): void {
    const welcomeMsg = greetUser('开发者');
    console.log(welcomeMsg);

    // 显示加载完成消息
    setTimeout(() => {
      this.messageDisplay.show('应用加载完成！点击按钮开始体验', 'info');
    }, 1000);
  }
}

// 当 DOM 加载完成时启动应用
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
