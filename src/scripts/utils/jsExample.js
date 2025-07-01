/**
 * JavaScript 示例文件
 * 展示如何在 TypeScript 项目中使用 JavaScript 文件
 */

/**
 * 简单的数学工具函数
 */
export const MathUtils = {
  /**
   * 计算两个数的和
   * @param {number} a 第一个数
   * @param {number} b 第二个数
   * @returns {number} 两数之和
   */
  add(a, b) {
    return a + b;
  },

  /**
   * 计算两个数的乘积
   * @param {number} a 第一个数
   * @param {number} b 第二个数
   * @returns {number} 两数之积
   */
  multiply(a, b) {
    return a * b;
  },

  /**
   * 计算数组的平均值
   * @param {number[]} numbers 数字数组
   * @returns {number} 平均值
   */
  average(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      return 0;
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  },

  /**
   * 生成指定范围内的随机整数
   * @param {number} min 最小值
   * @param {number} max 最大值
   * @returns {number} 随机整数
   */
  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

/**
 * DOM 操作工具函数
 */
export const DOMUtils = {
  /**
   * 根据选择器查找元素
   * @param {string} selector CSS 选择器
   * @returns {Element|null} 找到的元素或 null
   */
  $(selector) {
    return document.querySelector(selector);
  },

  /**
   * 根据选择器查找所有元素
   * @param {string} selector CSS 选择器
   * @returns {NodeList} 元素列表
   */
  $$(selector) {
    return document.querySelectorAll(selector);
  },

  /**
   * 创建元素
   * @param {string} tagName 标签名
   * @param {Object} attributes 属性对象
   * @param {string} textContent 文本内容
   * @returns {Element} 创建的元素
   */
  createElement(tagName, attributes = {}, textContent = '') {
    const element = document.createElement(tagName);

    // 设置属性
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key]);
    });

    // 设置文本内容
    if (textContent) {
      element.textContent = textContent;
    }

    return element;
  },

  /**
   * 添加事件监听器
   * @param {Element} element 目标元素
   * @param {string} event 事件类型
   * @param {Function} handler 事件处理函数
   */
  addEvent(element, event, handler) {
    if (element && typeof handler === 'function') {
      element.addEventListener(event, handler);
    }
  },

  /**
   * 移除事件监听器
   * @param {Element} element 目标元素
   * @param {string} event 事件类型
   * @param {Function} handler 事件处理函数
   */
  removeEvent(element, event, handler) {
    if (element && typeof handler === 'function') {
      element.removeEventListener(event, handler);
    }
  },
};

/**
 * 本地存储工具（示例 - 在实际项目中根据需要使用）
 */
export const StorageUtils = {
  /**
   * 保存数据到 localStorage
   * @param {string} key 键名
   * @param {any} value 值
   */
  save(key, value) {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.warn('保存到本地存储失败:', error);
    }
  },

  /**
   * 从 localStorage 读取数据
   * @param {string} key 键名
   * @param {any} defaultValue 默认值
   * @returns {any} 读取的数据
   */
  load(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn('从本地存储读取失败:', error);
      return defaultValue;
    }
  },

  /**
   * 从 localStorage 删除数据
   * @param {string} key 键名
   */
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn('从本地存储删除失败:', error);
    }
  },

  /**
   * 清空 localStorage
   */
  clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.warn('清空本地存储失败:', error);
    }
  },
};
