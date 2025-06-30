/**
 * 消息显示类型
 */
export type MessageType = 'success' | 'error' | 'warning' | 'info';

/**
 * 消息显示类
 * 用于在页面上显示各种类型的消息
 */
export class MessageDisplay {
  private messageElement: HTMLElement | null;
  private hideTimeout: number | null = null;

  constructor(elementId: string = 'message') {
    this.messageElement = document.getElementById(elementId);
  }

  /**
   * 显示消息
   * @param message 消息内容
   * @param type 消息类型
   * @param duration 显示持续时间（毫秒），0表示不自动隐藏
   */
  show(message: string, type: MessageType = 'info', duration: number = 5000): void {
    if (!this.messageElement) {
      console.warn('消息显示元素未found');
      return;
    }

    // 清除之前的定时器
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }

    // 设置消息内容和样式
    this.messageElement.textContent = message;
    this.messageElement.className = `message ${type}`;
    this.messageElement.style.display = 'block';

    // 添加淡入动画
    this.messageElement.style.opacity = '0';
    setTimeout(() => {
      if (this.messageElement) {
        this.messageElement.style.opacity = '1';
      }
    }, 10);

    // 自动隐藏消息
    if (duration > 0) {
      this.hideTimeout = window.setTimeout(() => {
        this.hide();
      }, duration);
    }
  }

  /**
   * 隐藏消息
   */
  hide(): void {
    if (!this.messageElement) return;

    // 添加淡出动画
    this.messageElement.style.opacity = '0';

    setTimeout(() => {
      if (this.messageElement) {
        this.messageElement.style.display = 'none';
        this.messageElement.className = 'message';
        this.messageElement.textContent = '';
      }
    }, 300);

    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }

  /**
   * 显示成功消息
   * @param message 消息内容
   * @param duration 显示持续时间
   */
  success(message: string, duration?: number): void {
    this.show(message, 'success', duration);
  }

  /**
   * 显示错误消息
   * @param message 消息内容
   * @param duration 显示持续时间
   */
  error(message: string, duration?: number): void {
    this.show(message, 'error', duration);
  }

  /**
   * 显示警告消息
   * @param message 消息内容
   * @param duration 显示持续时间
   */
  warning(message: string, duration?: number): void {
    this.show(message, 'warning', duration);
  }

  /**
   * 显示信息消息
   * @param message 消息内容
   * @param duration 显示持续时间
   */
  info(message: string, duration?: number): void {
    this.show(message, 'info', duration);
  }
}
