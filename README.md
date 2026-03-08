# 中原 iLearning 2.0 頁面體驗增強

一個 Tampermonkey / iOS Safari Userscript Manager 使用者腳本，為 [中原大學 iLearning 2.0](https://ilearning.cycu.edu.tw/) 平台新增以下功能：

| 功能 | 適用頁面 | 
|------|----------|
| 📂 **課程內容分類側欄** | 課程主頁 | 
| 🟢 **批次 ZIP 下載** | 課程主頁 |
| 🟠 **PDF 直接開啟** | PDF 教材頁 |
| 🟣 **課程影片下載** | 影片播放頁 |

> **相容性**：支援桌面版 Chrome / Firefox / Edge（Tampermonkey），以及 **iOS Safari 15+**（搭配 [Userscripts](https://apps.apple.com/app/userscripts/id1463298887)

---

## 安裝方式

### 桌面瀏覽器（Tampermonkey）

1. 安裝瀏覽器擴充功能 [Tampermonkey](https://www.tampermonkey.net/)
2. Chrome 管理擴充功能選單開啟「允許使用者指令碼」
2. 匯入腳本
3. 重新整理 iLearning 頁面即生效

### iOS Safari

1. 從 App Store 安裝 [Userscripts](https://apps.apple.com/app/userscripts/id1463298887)（免費）
2. 前往 Safari 啟用對應的擴充功能
3. 從 iOS 檔案應用程式開啟 Userscript 資料夾，手動匯入 `ilearning_downloader.js` 腳本檔案
4. 重新整理 iLearning 頁面即生效

---

## 使用方式

### 📂 課程內容分類側欄（自動啟用）

進入任意課程主頁後，腳本會自動在原有課程列表旁注入分類側欄，將週次或單元內容依種類（講義、作業、影片、公告等）折疊分組，方便快速定位所需內容。

### 🟢 批次下載課程檔案（ZIP）

| 步驟 | 說明 |
|------|------|
| 1 | 進入 iLearning 課程主頁 |
| 2 | 點擊右下角的 **綠色** 圓形按鈕（下載箭頭 + 「下載」標籤） |
| 3 | 在彈出的檔案選擇面板中，勾選想要下載的檔案 |
| 4 | 點擊「**下載所選**」，即會打包成 ZIP 下載 |

> 檔案名稱格式：`{課程名稱}_教材打包.zip`

### 🟠 開啟 PDF 教材

1. 點進任意 PDF 教材頁面（iLearning 內嵌的 PDF 閱讀器）
2. 點擊右下角 **橘紅色** 圓形按鈕（下載箭頭 + 「PDF」標籤）
3. 即可在新分頁直接開啟原始 PDF，跳過內嵌閱讀器限制

### 🟣 下載課程影片

1. 點進任意影片播放頁面
2. 點擊右下角 **紫色** 圓形按鈕（下載箭頭 + 「影片」標籤）
3. 桌面版：直接下載 MP4 影片檔案；iOS：開新分頁後長按影片選「儲存影片」

---

## 腳本來源

- **原始腳本發布於 [Greasy Fork](https://greasyfork.org/zh-TW/scripts/529037)**