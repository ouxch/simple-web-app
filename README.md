# 简单网页应用项目模板

一个开箱即用的前端项目模板，专为开发简单网页应用而设计，不使用 React 等复杂框架。

## 🚀 项目特性

- ✅ **TypeScript 支持** - 使用 TypeScript 作为主要开发语言，同时支持 JavaScript
- ✅ **ES6+ 模块化** - 支持现代 JavaScript 的 import/export 语法
- ✅ **Parcel 打包** - 零配置的快速打包工具，支持热更新
- ✅ **代码规范** - 集成 ESLint 和 Prettier 进行代码格式化和规范检查
- ✅ **现代化开发** - 支持最新的 Web 标准和最佳实践

## 📁 项目结构

```
project-root/
├── src/                    # 源代码目录
│   ├── index.html         # HTML 入口文件
│   ├── styles/            # 样式文件
│   │   └── main.css      # 主样式文件
│   └── scripts/           # JavaScript/TypeScript 文件
│       ├── main.ts       # TypeScript 主入口
│       ├── modules/      # 功能模块
│       │   ├── counter.ts
│       │   └── message.ts
│       └── utils/        # 工具函数
│           └── helpers.ts
├── dist/                  # 构建输出目录（自动生成）
├── .parcel-cache/        # Parcel 缓存目录（自动生成）
├── package.json          # 项目配置和依赖
├── tsconfig.json         # TypeScript 配置
├── .eslintrc.js          # ESLint 配置
├── .prettierrc.js        # Prettier 配置
├── .gitignore           # Git 忽略文件
└── README.md            # 项目说明文档
```

## 🛠️ 快速开始

### 1. 安装依赖

使用 npm：

```bash
npm install
```

或使用 yarn：

```bash
yarn install
```

### 2. 开发模式

启动开发服务器（支持热更新）：

```bash
npm run dev
# 或
yarn dev
```

这将会：

- 启动开发服务器
- 自动打开浏览器
- 监听文件变化并自动刷新

### 3. 构建生产版本

```bash
npm run build
# 或
yarn build
```

构建后的文件将输出到 `dist/` 目录。

### 4. 预览构建结果

```bash
npm run preview
# 或
yarn preview
```

## 📜 可用脚本

| 脚本         | 描述                     |
| ------------ | ------------------------ |
| `dev`        | 启动开发服务器           |
| `build`      | 构建生产版本             |
| `preview`    | 预览构建结果             |
| `clean`      | 清理构建文件和缓存       |
| `lint`       | 运行 ESLint 检查代码     |
| `lint:fix`   | 自动修复 ESLint 问题     |
| `format`     | 使用 Prettier 格式化代码 |
| `type-check` | 运行 TypeScript 类型检查 |

## 🔧 配置说明

### TypeScript 配置 (tsconfig.json)

项目配置了现代的 TypeScript 设置：

- 目标版本：ES2020
- 模块系统：ESNext
- 支持 JavaScript 文件
- 严格模式开启
- 支持路径别名 (`@/*` 指向 `src/*`)

### ESLint 配置 (.eslintrc.js)

集成了以下规则：

- TypeScript 推荐规则
- Prettier 兼容性
- 浏览器和 Node.js 环境支持
- 自定义规则优化

### Prettier 配置 (.prettierrc.js)

代码格式化设置：

- 2 空格缩进
- 使用单引号
- 行尾分号
- 行宽 80 字符
- LF 换行符

## 🎯 使用建议

### 添加新功能模块

1. 在 `src/scripts/modules/` 中创建新的 `.ts` 文件
2. 使用 ES6 模块语法导出功能
3. 在 `main.ts` 中导入并使用

示例：

```typescript
// src/scripts/modules/myModule.ts
export class MyModule {
  doSomething(): void {
    console.log('Hello from MyModule!');
  }
}

// src/scripts/main.ts
import { MyModule } from './modules/myModule';

const myModule = new MyModule();
myModule.doSomething();
```

### 添加样式

1. 在 `src/styles/` 中创建新的 CSS 文件
2. 在 `main.css` 中使用 `@import` 导入
3. 或直接在 HTML 文件中链接

### 添加资源文件

将图片、字体等资源文件放在 `src/` 目录下的相应文件夹中，Parcel 会自动处理这些资源。

## 🔗 技术栈

- **构建工具**: [Parcel](https://parceljs.org/)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **代码规范**: [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- **包管理**: npm/yarn

## 📝 开发注意事项

1. **类型安全**: 充分利用 TypeScript 的类型系统，为函数参数和返回值添加类型注解
2. **模块化**: 将功能拆分到不同的模块中，保持代码组织清晰
3. **代码规范**: 提交前运行 `npm run lint` 和 `npm run format` 确保代码规范
4. **浏览器兼容性**: 项目默认支持现代浏览器，如需支持旧版浏览器，请调整 TypeScript 和 Parcel 配置

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目使用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

---

**愉快地开发吧！** 🎉
