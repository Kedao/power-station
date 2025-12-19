# 电站位置获取方法指引页

这是一个基于 Next.js 和 Tailwind CSS 构建的静态页面，用于指导运营商上报充电桩位置。

## 快速开始

1.  **安装依赖**:
    ```bash
    npm install
    ```

2.  **本地开发**:
    ```bash
    npm run dev
    ```
    打开浏览器访问 `http://localhost:3000`。

3.  **构建生产版本**:
    ```bash
    npm run build
    ```
    构建产物位于 `out/` 目录（已配置为静态导出）。

## 图片替换

请将以下图片放入 `public/images/` 目录：

1.  `tutorial-step-1.jpg` - 步骤一教程图片（高德地图长按位置）
2.  `tutorial-step-2.jpg` - 步骤二教程图片（复制链接）

## 部署

本项目已配置为静态导出，可直接部署到 Vercel 或任何静态托管服务。

- **Vercel**: 导入 Git 仓库，框架预设选择 Next.js，构建命令默认即可。
