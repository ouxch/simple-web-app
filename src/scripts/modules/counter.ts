import { MathUtils } from '../utils/jsExample';

/**
 * 计数器类
 * 用于管理点击计数功能
 */
export default class Counter {
  private count: number = 0;

  private maxCount: number = 100;

  constructor(initialCount: number = 0, maxCount: number = 100) {
    this.count = initialCount;
    this.maxCount = maxCount;
  }

  /**
   * 增加计数
   * @returns 返回新的计数值
   */
  increment(): number {
    if (this.count < this.maxCount) {
      this.count = MathUtils.add(this.count, 1);
      // this.count++;
    }
    return this.count;
  }

  /**
   * 减少计数
   * @returns 返回新的计数值
   */
  decrement(): number {
    if (this.count > 0) {
      this.count -= 1;
    }
    return this.count;
  }

  /**
   * 重置计数
   */
  reset(): void {
    this.count = 0;
  }

  /**
   * 获取当前计数
   * @returns 当前计数值
   */
  getValue(): number {
    return this.count;
  }

  /**
   * 设置计数值
   * @param value 要设置的值
   */
  setValue(value: number): void {
    if (value >= 0 && value <= this.maxCount) {
      this.count = value;
    }
  }

  /**
   * 检查是否达到最大值
   * @returns 是否达到最大值
   */
  isMaxReached(): boolean {
    return this.count >= this.maxCount;
  }
}
