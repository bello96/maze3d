# 3D迷宫

基于 WebGL 的 3D 迷宫游戏，使用 Three.js 渲染和 Box2D 物理引擎。

## 在线体验

https://maze3d.pages.dev

## 玩法

- **方向键** 或 **H/J/K/L** 控制小球移动
- 找到迷宫出口进入下一关
- 每过一关迷宫尺寸增大，难度递增

## 特性

- Three.js 3D 渲染，砖墙/混凝土地板/金属球纹理
- Box2D 物理引擎驱动小球运动和碰撞
- 固定时间步长物理模拟，跨平台速度一致
- 递归回溯生成迷宫 + 随机打通额外通道增加岔路
- 出口位置随机
- 关卡自动递增，迷宫逐步变大
- 加载进度条

## 本地运行

```bash
# 任选一种方式启动静态服务器
npx serve .
# 或
python3 -m http.server

# 浏览器打开 http://localhost:3000（或对应端口）
```

## 技术栈

- [Three.js](https://threejs.org/) v0.160.0 — 3D 渲染
- [Box2dWeb](https://github.com/nickoala/nickoala.github.io/tree/master/box2dWeb) — 2D 物理引擎
