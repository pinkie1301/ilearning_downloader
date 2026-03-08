# 中原 iLearning 2.0 頁面體驗增強

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Greasy Fork](https://img.shields.io/badge/Greasy%20Fork-安裝腳本-brightgreen)](https://update.greasyfork.org/scripts/529037/%E4%B8%AD%E5%8E%9FiLearning%2020%20%E9%A0%81%E9%9D%A2%E9%AB%94%E9%A9%97%E5%A2%9E%E5%BC%B7.user.js)

一個 Tampermonkey / iOS Safari Userscript Manager 使用者腳本，為 [中原大學 iLearning 2.0](https://ilearning.cycu.edu.tw/) 平台提供以下功能：

- 📂 **課程內容分類側欄**：依種類（講義、作業、公告⋯）摺疊分類課程段落，快速定位
- ⬇️ **批次 ZIP 下載**：勾選多個課程檔案，打包成 `{課程名稱}_教材打包.zip` 一次下載
- 📄 **PDF 直接開啟**：PDF 教材頁右下角按鈕，直接在新分頁開啟原始 PDF
- 🎬 **影片下載**：影片播放頁右下角按鈕，直接下載 MP4 課程影片

> **相容性**：支援桌面版 Chrome / Firefox / Edge（Tampermonkey），以及 **iOS Safari**（搭配 [Userscripts](https://apps.apple.com/app/userscripts/id1463298887) 或 [Stay](https://apps.apple.com/app/stay-for-safari/id1591620171) App）

---

## 安裝方式

### 桌面瀏覽器（Tampermonkey）

1. 安裝瀏覽器擴充功能 [Tampermonkey](https://www.tampermonkey.net/)
2. 點擊下方連結安裝腳本：
   👉 **[點此從 Greasy Fork 安裝](https://update.greasyfork.org/scripts/529037/%E4%B8%AD%E5%8E%9FiLearning%2020%20%E9%A0%81%E9%9D%A2%E9%AB%94%E9%A9%97%E5%A2%9E%E5%BC%B7.user.js)**
3. 在彈出頁面點擊「安裝」即完成

### iOS Safari

1. 從 App Store 安裝 [Userscripts](https://apps.apple.com/app/userscripts/id1463298887)（免費）或 [Stay](https://apps.apple.com/app/stay-for-safari/id1591620171)
2. 前往 Safari → 設定 → 擴充功能 → 啟用對應的擴充功能
3. 開啟擴充功能 App，手動匯入 `ilearning_downloader.js` 腳本檔案
   - 或點擊以上 Greasy Fork 安裝連結（部分 App 支援直接安裝）
4. 重新整理 iLearning 頁面即生效

---

## 使用方式

### 批次下載課程檔案（ZIP）

| 步驟 | 說明 |
|------|------|
| 1 | 進入 iLearning 課程頁面 |
| 2 | 點擊右下角的 **⬇ 下載** 藍色圓形按鈕 |
| 3 | 在彈出的檔案選擇面板中，勾選想要下載的檔案 |
| 4 | 點擊「**下載所選**」，即會打包成 ZIP 下載 |

![批次下載示意](https://i.imgur.com/placeholder.png)
> *ZIP 檔案名稱格式：`{課程名稱}_教材打包.zip`*

### 開啟 PDF 教材

1. 點進任意 PDF 教材頁面（iLearning 內嵌的 PDF 閱讀器）
2. 點擊右下角 **⬇ PDF** 橘色圓形按鈕
3. 即可在新分頁直接開啟原始 PDF

### 下載課程影片

1. 點進任意影片播放頁面
2. 點擊右下角 **⬇ 影片** 藍色圓形按鈕
3. 瀏覽器或 iOS 會直接下載 MP4 影片檔案

---

## 腳本來源

- **原始腳本發布於 [Greasy Fork](https://greasyfork.org/zh-TW/scripts/529037)**
- 作者：[pinkie1301](https://github.com/pinkie1301)
- 授權：[MIT License](./LICENSE)

如有問題或建議，歡迎開 [Issue](https://github.com/pinkie1301/ilearning_downloader/issues) 或發 Pull Request。

---

## 常見問題

**Q：iOS Safari 下載 ZIP 後打不開？**  
A：iOS 內建「檔案」App 支援 ZIP 解壓縮，長按 ZIP 檔案選「解壓縮」即可。

**Q：按鈕沒有出現？**  
A：請確認已啟用擴充功能，並重新整理頁面。若仍無效，檢查擴充功能 App 中腳本是否已啟用且 match 規則包含 `ilearning.cycu.edu.tw`。

**Q：影片下載按鈕出現但點了沒反應？**  
A：部分課程影片受限制無法直接下載。桌面版可搭配瀏覽器開發者工具檢視實際影片來源。
