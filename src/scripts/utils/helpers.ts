/**
 * 获取当前时间的问候语
 * @param name 用户名称
 * @returns 问候语字符串
 */
export default function greetUser(name: string): string {
  const hour = new Date().getHours();
  let greeting: string;

  if (hour < 6) {
    greeting = '深夜好';
  } else if (hour < 12) {
    greeting = '早上好';
  } else if (hour < 18) {
    greeting = '下午好';
  } else {
    greeting = '晚上好';
  }

  return `${greeting}，${name}！欢迎使用这个应用。`;
}
