# Taipei-bike-spotter

## 簡介

Taipei-bike-spotter 是一個用於顯示台北市 YouBike 站點即時資訊的小作品。
此專案利用台北市 YouBike 公開 API，讓使用者能夠方便地查詢各個站點的車輛數量與站點資訊。此應用程式具備簡潔的使用者介面與即時更新功能，適合日常通勤與騎行愛好者使用。

## 功能

1. **即時站點資訊顯示**：顯示台北市所有 YouBike 站點的即時資訊，包括可借車輛數與可停空位數。
2. **城市搜尋輸入**：使用者可以透過搜尋輸入框來快速查詢特定站點資訊。
3. **行政區勾選**：使用者可以透過勾選不同的行政區來篩選顯示的站點。
4. **動態路由**：應用程式的頁面切換會根據點擊不同的頁眉連結來進行。

## 技術棧

- **前端框架**：React.js, Next.js
- **地圖 API**：台北市 YouBike 公開 API
- **版本控制**：Git, GitHub
- **設計工具**：Figma

## 安裝與使用

### 先決條件

- Node.js
- npm 或 yarn

### 安裝步驟

1. 克隆此存儲庫至本地
    ```bash
    git clone https://github.com/HSU0201/Taipei-bike-spotter.git
    ```

2. 進入專案目錄
    ```bash
    cd Taipei-bike-spotter
    ```

3. 安裝相依套件
    ```bash
    npm install
    ```

4. 啟動開發伺服器
    ```bash
    npm run dev
    ```

5. 在瀏覽器中開啟 http://localhost:3000 來查看應用程式

## 專案結構

```plaintext
Taipei-bike-spotter/
├── .github/              # GitHub 配置文件
├── .vscode/              # VS Code 配置文件
├── components/           # React 組件
├── data/                 # 資料處理
├── pages/                # Next.js 頁面
├── public/               # 靜態資源文件夾
├── styles/               # CSS 樣式
├── .eslintrc.json        # ESLint 配置文件
├── .gitignore            # Git 忽略文件
├── .prettierignore       # Prettier 忽略文件
├── .prettierrc.json      # Prettier 配置文件
├── jsconfig.json         # JavaScript 配置文件
├── next.config.js        # Next.js 配置文件
├── package-lock.json     # npm 鎖定文件
├── package.json          # 專案描述文件
└── README.md             # 專案說明文件
