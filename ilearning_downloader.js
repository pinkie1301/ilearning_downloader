// ==UserScript==
// @name         中原iLearning 2.0 頁面體驗增強
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  在中原iLearning 2.0 課程頁依種類分類課程段落。提供一鍵下載課程檔案的功能、新分頁開啟PDF教材的功能、下載課程影片的功能
// @icon         data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHzzACd78xkoffM3LIH0MD+N9Qcjf/QALof1ICuH9TguivUrOpL2A4nA+gE0k/YnLI/2ODOT9ywAAAAAAAAAACh88wAne/NuKH3z9iyB9NQ/jfUdI4D0AC6H9Y4rh/X5Lor1vjqS9g2JwPoFNZP2rCyP9vczk/fEZJb1AmOV9QYqfvMAJ3zzdCh98/8sgfTgP431HySA9AAuiPWWK4f1/y6K9ck6kvYNicD6BTWT9rYsj/b/M5T3zzt68yI0dfIxLXrzACd883QoffP/LIH04D+N9R8kgPQAL4j1liuH9f8uivXJOpL1DYnA+gU1k/a2LY/2/zOU9880dfJNMnPySSp38gAnfPN0KH7z/yyC9eBAjvYfJID1AC+I9ZYrh/X/Lov1yTuT9g2JwPoFNZP2ti2P9v8zlPfPO3rzPDt68y8uevIAKHzzdCl98P8ugO7iQovtIRt57wAviPWYK4f1/y6L9cs8k/YOf7v6BTST9rcsj/b/M5T3zzt69BU/fPQQRWyrAFV0oHpTa4//R1l1+EJFTKlET2FXMIj0xCuH9f8ui/XnPpX2QUCY9y8wkPbWLI/2/zOU975mjdgedoy3LpKNiB9hXl2ZT0xM/0VCQ/80MjT/Ky00+S1foP0th/P9LIn1/y6M9eoujvbmLI72/y+Q9vQ7mPdpkJ++G3mEnnxqb33QWlxl9UtLUP9BQEP/NTQ3/ygnKf8qMT7TOYHZczKN960vjPXcL4723jCQ9r84lfZhV6b4CHR8jwB9hpwGZmx8PFVaaZlFS1rfOzxF+y8uMf8rKS3/NDI1nVBCNhBMqv8GRZj2GUaa9xtLnvcLxOH8AH+6+QAAAAAAAAAAAG1mXQB+c2MDV1VWIUVER1g3NjmNLSwwtSkoLM00MzaVVFNUHzc2OQDHxcIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAClpaYA4uLiAFZVWAY6Oj0TODY6JFVUVhUFBAkAw8LCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAP//AADhAAAA4QAAACEAAAAhAAAAIQAAACEAAAAgAAAAAAAAAAAAAACAAQAA4B8AAPwfAAD//wAA//8AAA==
// @match        *://ilearning.cycu.edu.tw/*
// @grant        none
// @run-at       document-end
// @require      https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js
// @license MIT
// @downloadURL https://update.greasyfork.org/scripts/529037/%E4%B8%AD%E5%8E%9FiLearning%2020%20%E9%A0%81%E9%9D%A2%E9%AB%94%E9%A9%97%E5%A2%9E%E5%BC%B7.user.js
// @updateURL https://update.greasyfork.org/scripts/529037/%E4%B8%AD%E5%8E%9FiLearning%2020%20%E9%A0%81%E9%9D%A2%E9%AB%94%E9%A9%97%E5%A2%9E%E5%BC%B7.meta.js
// ==/UserScript==

(function () {
    'use strict';

    const config = {
        "討論區": {
            "title": "討論區",
            "logo": "https://ilearning.cycu.edu.tw/theme/image.php/boost_union/forum/1744246650/monologo?filtericon=1"
        },
        "作業": {
            "title": "作業",
            "logo": "https://ilearning.cycu.edu.tw/theme/image.php/boost_union/assign/1744246650/monologo?filtericon=1"
        },
        "檔案": {
            "title": "檔案",
            "logo": "https://ilearning.cycu.edu.tw/theme/image.php/boost_union/resource/1757814017/monologo"
        },
        "PDF Annotation": {
            "title": "PDF檔",
            "logo": "https://ilearning.cycu.edu.tw/theme/image.php/boost_union/pdfannotator/1744246650/monologo?filtericon=1"
        },
        "超級影片": {
            "title": "影片檔",
            "logo": "https://ilearning.cycu.edu.tw/theme/image.php/boost_union/supervideo/1744246650/monologo?filtericon=1"
        },
        "網址": {
            "title": "網址",
            "logo": "https://ilearning.cycu.edu.tw/theme/image.php/boost_union/url/1757814017/monologo?filtericon=1"
        },
        "回饋單": {
            "title": "問卷",
            "logo": "https://ilearning.cycu.edu.tw/theme/image.php/boost_union/feedback/1744246650/monologo?filtericon=1"
        },
        "頁面": {
            "title": "文章",
            "logo": "https://ilearning.cycu.edu.tw/theme/image.php/boost_union/page/1757814017/monologo?filtericon=1"
        }
    };

    const order = ["頁面", "討論區", "作業", "PDF Annotation", "檔案", "超級影片", "網址", "回饋單"];

    // --- 提示視窗管理 ---
    function showToast(message, isError = false) {
        let toast = document.getElementById('dl-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'dl-toast';
            Object.assign(toast.style, {
                position: 'fixed',
                top: '20px',
                right: '20px',
                padding: '12px 20px',
                borderRadius: '8px',
                color: 'white',
                fontSize: '14px',
                zIndex: '10001',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s ease'
            });
            document.body.appendChild(toast);
        }

        toast.style.backgroundColor = isError ? '#f44336' : '#333';
        toast.innerHTML = `<span>${message}</span>`;

        if (isError) {
            const closeBtn = document.createElement('span');
            closeBtn.innerHTML = '✕';
            closeBtn.style.cursor = 'pointer';
            closeBtn.style.fontWeight = 'bold';
            closeBtn.onclick = () => toast.remove();
            toast.appendChild(closeBtn);
        }
        return toast;
    }

    // --- 收集可下載檔案 ---
    function collectDownloadableFiles() {
        const { items } = getItems();
        const fileList = items["檔案"] || [];
        const pdfList = (items["pdfannotator"] || []).concat(items["PDF Annotation"] || []);
        return [...fileList, ...pdfList];
    }

    // --- 核心下載函式 (接受指定檔案清單) ---
    async function downloadFilesAsZip(filesToDownload) {
        if (filesToDownload.length === 0) {
            showToast("沒有選取任何檔案！", true);
            return;
        }

        const zip = new JSZip();
        const btnSelect = document.getElementById('select-download-btn');
        if (btnSelect) btnSelect.disabled = true;

        const total = filesToDownload.length;
        let count = 0;
        const toast = showToast(`準備開始下載 (0/${total})...`);

        try {
            for (const file of filesToDownload) {
                try {
                    let downloadUrl = file.url;

                    // 若為 PDF檔，需先抓取該頁面原始碼，提取隱藏的真實 PDF 網址
                    if (file.modname === "pdfannotator" || file.modname === "PDF Annotation") {
                        const pageRes = await fetch(file.url);
                        const pageText = await pageRes.text();
                        const match = pageText.match(/"fullurl":\s*"([^"]+)"/);
                        if (match) {
                            downloadUrl = match[1].replace(/\\/g, '');
                        } else {
                            throw new Error("無法在頁面中找到真實 PDF 網址");
                        }
                    }

                    // 開始下載真實檔案
                    const response = await fetch(downloadUrl);
                    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
                    const blob = await response.blob();

                    count++;
                    toast.querySelector('span').innerText = `正在打包 (${count}/${total}): ${file.name}`;

                    // --- 檔名處理區塊 ---
                    const safeName = file.name.replace(/[\\/:*?"<>|]/g, '_');
                    const weekNum = file.sectionnumber;
                    const prefix = weekNum === 0 ? "公告 - " : `第${weekNum}週 - `;
                    zip.file(`${prefix}${safeName}.pdf`, blob);

                } catch (err) {
                    console.error(`下載失敗: ${file.name}`, err);
                }
            }

            toast.querySelector('span').innerText = `⚡ 正在生成壓縮檔...`;
            const content = await zip.generateAsync({ type: "blob" });
            const courseName = document.title.split('|')[0].trim();

            const link = document.createElement("a");
            link.href = URL.createObjectURL(content);
            link.download = `${courseName}_教材打包.zip`;
            link.click();

            showToast("✅ 打包完成，開始下載！");
            setTimeout(() => { if (document.getElementById('dl-toast')) document.getElementById('dl-toast').remove(); }, 3000);
        } catch (error) {
            showToast(`❌ 出錯了: ${error.message}`, true);
        } finally {
            if (btnSelect) btnSelect.disabled = false;
        }
    }

    // --- 顯示檔案勾選面板 (位於 toast 區域) ---
    function showFileSelectionPanel() {
        // 移除已存在的面板
        const existing = document.getElementById('dl-toast');
        if (existing) existing.remove();

        const totalFiles = collectDownloadableFiles();
        if (totalFiles.length === 0) {
            showToast("找不到可下載的「檔案」或「PDF檔」！", true);
            return;
        }

        const panel = document.createElement('div');
        panel.id = 'dl-toast';
        Object.assign(panel.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            width: '400px',
            padding: '16px',
            borderRadius: '12px',
            backgroundColor: '#fff',
            color: '#333',
            fontSize: '14px',
            zIndex: '10001',
            boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            transition: 'all 0.3s ease'
        });

        // --- 標題列 ---
        const header = document.createElement('div');
        Object.assign(header.style, {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #eee',
            paddingBottom: '8px'
        });
        header.innerHTML = `<strong style="font-size:16px;">📦 選取要下載的檔案</strong>`;
        const closeBtn = document.createElement('span');
        closeBtn.innerHTML = '✕';
        Object.assign(closeBtn.style, { cursor: 'pointer', fontWeight: 'bold', fontSize: '18px', color: '#999' });
        closeBtn.onmouseover = () => closeBtn.style.color = '#333';
        closeBtn.onmouseout = () => closeBtn.style.color = '#999';
        closeBtn.onclick = () => panel.remove();
        header.appendChild(closeBtn);
        panel.appendChild(header);

        // --- 全選 / 取消全選 + 計數 ---
        const controls = document.createElement('div');
        Object.assign(controls.style, { display: 'flex', gap: '8px', alignItems: 'center' });

        const selectAllBtn = document.createElement('button');
        selectAllBtn.textContent = '全選';
        Object.assign(selectAllBtn.style, { padding: '4px 12px', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#f0f0f0', fontSize: '12px' });

        const deselectAllBtn = document.createElement('button');
        deselectAllBtn.textContent = '取消全選';
        Object.assign(deselectAllBtn.style, { padding: '4px 12px', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#f0f0f0', fontSize: '12px' });

        const countLabel = document.createElement('span');
        countLabel.style.marginLeft = 'auto';
        countLabel.style.fontSize = '12px';
        countLabel.style.color = '#666';

        controls.appendChild(selectAllBtn);
        controls.appendChild(deselectAllBtn);
        controls.appendChild(countLabel);
        panel.appendChild(controls);

        // --- 檔案列表 (可捲動，最多顯示 10 筆) ---
        const listContainer = document.createElement('div');
        const itemHeight = 36;
        const maxVisibleItems = 10;
        Object.assign(listContainer.style, {
            maxHeight: `${itemHeight * maxVisibleItems}px`,
            overflowY: 'auto',
            border: '1px solid #eee',
            borderRadius: '6px',
            padding: '4px'
        });

        const checkboxes = [];

        function updateCount() {
            const checked = checkboxes.filter(cb => cb.checked).length;
            countLabel.textContent = `已選 ${checked} / ${totalFiles.length}`;
        }

        totalFiles.forEach((file, index) => {
            const weekNum = file.sectionnumber;
            const weekLabel = weekNum === 0 ? '公告' : `第${weekNum}週`;

            const row = document.createElement('label');
            Object.assign(row.style, {
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 8px',
                cursor: 'pointer',
                borderBottom: index < totalFiles.length - 1 ? '1px solid #f5f5f5' : 'none',
                lineHeight: '1.4'
            });
            row.onmouseover = () => row.style.backgroundColor = '#f0f8ff';
            row.onmouseout = () => row.style.backgroundColor = '';

            const cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.checked = true;
            cb.dataset.fileIndex = index;
            cb.style.flexShrink = '0';
            cb.style.width = '16px';
            cb.style.height = '16px';
            cb.addEventListener('change', updateCount);
            checkboxes.push(cb);

            const label = document.createElement('span');
            label.style.fontSize = '13px';
            label.style.wordBreak = 'break-all';
            label.innerHTML = `<span style="color:#888;font-size:11px;">[${weekLabel}]</span> ${file.name}`;

            row.appendChild(cb);
            row.appendChild(label);
            listContainer.appendChild(row);
        });

        panel.appendChild(listContainer);
        updateCount();

        // --- 全選 / 取消全選事件 ---
        selectAllBtn.onclick = () => { checkboxes.forEach(cb => cb.checked = true); updateCount(); };
        deselectAllBtn.onclick = () => { checkboxes.forEach(cb => cb.checked = false); updateCount(); };

        // --- 下載按鈕 ---
        const downloadBtn = document.createElement('button');
        downloadBtn.textContent = '下載勾選的檔案';
        Object.assign(downloadBtn.style, {
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold'
        });
        downloadBtn.onmouseover = () => downloadBtn.style.backgroundColor = '#0056b3';
        downloadBtn.onmouseout = () => downloadBtn.style.backgroundColor = '#007bff';
        downloadBtn.onclick = async () => {
            const selected = checkboxes
                .filter(cb => cb.checked)
                .map(cb => totalFiles[parseInt(cb.dataset.fileIndex)]);

            if (selected.length === 0) {
                alert('請至少選取一個檔案！');
                return;
            }

            panel.remove();
            await downloadFilesAsZip(selected);
        };
        panel.appendChild(downloadBtn);

        document.body.appendChild(panel);
    }

    // 按鈕「下載」— 開啟勾選面板
    function createBulkDownloadButton() {
        if (document.getElementById('select-download-btn')) return;

        const selectBtn = document.createElement('button');
        selectBtn.id = 'select-download-btn';
        selectBtn.title = '選取檔案下載 (ZIP)';
        selectBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span style="font-size:10px;font-weight:bold;margin-top:2px;line-height:1;">下載</span>
        `;
        selectBtn.onclick = showFileSelectionPanel;
        Object.assign(selectBtn.style, {
            position: 'fixed',
            bottom: 'max(8rem, calc(env(safe-area-inset-bottom) + 8rem))',
            right: '2rem',
            width: '52px',
            height: '52px',
            backgroundColor: '#16a34a',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0px 4px 12px rgba(22, 163, 74, 0.5)',
            zIndex: '9999',
            gap: '1px'
        });
        document.body.appendChild(selectBtn);
    }

    // --- 原有功能函式 ---

    function extractFullUrl() {
        const scripts = document.scripts;
        for (let script of scripts) {
            const match = script.textContent.match(/"fullurl":\s*"([^"]+)"/);
            if (match) {
                return match[1].replace(/\\/g, ''); // 去除反斜線
            }
        }
        return null;
    }

    function createDownloadButton(fullUrl) {
        const button = document.createElement('button');
        button.id = 'pdf-download-btn';
        button.title = '下載 PDF';
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span style="font-size:10px;font-weight:bold;margin-top:2px;line-height:1;">PDF</span>
        `;
        button.onclick = function () { window.open(fullUrl, '_blank'); };

        Object.assign(button.style, {
            position: 'fixed',
            bottom: 'max(8rem, calc(env(safe-area-inset-bottom) + 8rem))',
            right: '2rem',
            width: '52px',
            height: '52px',
            backgroundColor: '#e8500a',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0px 4px 12px rgba(232, 80, 10, 0.5)',
            zIndex: '9999',
            gap: '1px'
        });

        document.body.appendChild(button);
    }

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    function setCookie(name, value, days = 30) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
    }

    function getMoremenu() {
        const ul = document.querySelector('ul.nav.more-nav.nav-tabs');
        if (ul) {
            const li = document.createElement('li');
            li.className = 'nav-item';
            const a = document.createElement('a');
            a.className = 'nav-link';
            a.setAttribute('role', 'menuitem');
            a.setAttribute('style', 'color:#FF359A !important;');
            a.textContent = '★精簡化';
            a.onclick = showMenu;
            li.appendChild(a);
            ul.appendChild(li);
        }
    }

    function getItems() {
        const result = {};
        const courseIdMatch = window.location.href.match(/course\/view\.php\?id=(\d+)/);
        const courseId = courseIdMatch ? courseIdMatch[1] : null;

        if (!courseId) return { items: {}, sections: [] };

        let sections = [];
        let main_section = {};

        for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);
            if (key.includes(`${courseId}/staticState`)) {
                try {
                    const json = JSON.parse(sessionStorage.getItem(key));
                    if (json) {
                        if (Array.isArray(json.section)) {
                            sections = json.section;
                            for (const sec of json.section) {
                                main_section[sec.id] = sec.parentsectionid || sec.id;
                            }
                        }
                        if (Array.isArray(json.cm)) {
                            for (const item of json.cm) {
                                if (item.modname === "子單元") continue;
                                item.sectionid = main_section[item.sectionid];
                                item.sectionnumber = sections.findIndex(section => section.id === item.sectionid);
                                const mod = item.modname;
                                if (!result[mod]) result[mod] = [];
                                result[mod].push(item);
                            }
                        }
                    }
                } catch (e) { console.error('JSON 解析錯誤:', e); }
            }
        }

        const sortedResult = {};
        for (const mod of order) { if (result[mod]) sortedResult[mod] = result[mod]; }
        for (const mod in result) { if (!sortedResult[mod]) sortedResult[mod] = result[mod]; }

        for (const mod in sortedResult) {
            if (mod === "討論區") {
                sortedResult[mod].sort((a, b) => {
                    if (a.sectionnumber === b.sectionnumber) return b.id - a.id;
                    return b.sectionnumber - a.sectionnumber;
                });
            } else {
                sortedResult[mod].sort((a, b) => b.sectionnumber - a.sectionnumber);
            }
        }
        return { items: sortedResult, sections };
    }

    function showMenu() {
        const original = document.querySelector('ul.weeks');
        const side = document.querySelector('#menuside');

        if (original) {
            original.style.display = 'none';
            const data = getItems();
            const items = data.items;
            const sections = data.sections;
            let container = side || document.createElement('ul');

            if (!side) {
                container.className = 'weeks';
                container.id = 'menuside';
                container.setAttribute('data-for', 'course_sectionlist');
            } else {
                container.innerHTML = "";
            }

            const existingSortContainer = document.getElementById('week-sort-container');
            if (existingSortContainer) existingSortContainer.remove();

            const sortContainer = document.createElement('div');
            sortContainer.id = 'week-sort-container';
            sortContainer.className = 'mb-3';
            sortContainer.innerHTML = `
                <select class="form-select" id="week-sort-order">
                    <option value="desc">降序</option>
                    <option value="asc">升序</option>
                </select>
            `;
            const savedOrder = getCookie('weekSortOrder') || 'desc';
            sortContainer.querySelector('#week-sort-order').value = savedOrder;
            sortContainer.querySelector('#week-sort-order').addEventListener('change', function () {
                setCookie('weekSortOrder', this.value);
                showMenu();
            });

            let sectionNum = 1;
            const currentWeekSection = sections.find(s => s.current);

            for (const modname in items) {
                const section = document.createElement('li');
                section.className = 'section course-section main clearfix';
                section.id = `side-section-${sectionNum}`;

                const weekItems = {};
                for (const item of items[modname]) {
                    if (!weekItems[item.sectionnumber]) weekItems[item.sectionnumber] = [];
                    weekItems[item.sectionnumber].push(item);
                }

                let weekNumbers = Object.keys(weekItems).map(Number);
                const week0 = weekNumbers.includes(0) ? [0] : [];
                const otherWeeks = weekNumbers.filter(w => w !== 0);
                const sortOrder = getCookie('weekSortOrder') || 'asc';

                if (sortOrder === 'asc') otherWeeks.sort((a, b) => a - b);
                else otherWeeks.sort((a, b) => b - a);

                let sortedWeeks = week0.concat(otherWeeks);

                let sectionHTML = `
                <div class="section-item">
                    <div class="course-section-header d-flex">
                        <div class="d-flex align-items-center position-relative">
                            <a role="button" class="btn btn-icon me-3 icons-collapse-expand justify-content-center collapsed" data-toggle="collapse" href="#side-coursecontentcollapse${sectionNum}">
                                <span class="collapsed-icon p-2"><i class="icon fa fa-chevron-right fa-fw"></i></span>
                                <span class="expanded-icon p-2"><i class="icon fa fa-chevron-down fa-fw"></i></span>
                            </a>
                            <h3 class="h4 sectionname mb-0">${config[modname]?.title || modname}</h3>
                        </div>
                    </div>
                    <div id="side-coursecontentcollapse${sectionNum}" class="content collapse">
                        <ul class="section img-text d-block">`;

                for (const week of sortedWeeks) {
                    const weekItemsList = weekItems[week];
                    if (!weekItemsList) continue;
                    let weekTitle = week === 0 ? "公告" : `第${week}週`;
                    let isCurrent = currentWeekSection && currentWeekSection.id == weekItemsList[0].sectionid;

                    sectionHTML += `
                    <li class="activity activity-wrapper">
                        <div class="week-title fw-bold fs-5 mb-2">${weekTitle}${isCurrent ? ' <span class="badge bg-primary">本週</span>' : ''}</div>
                        <div class="${isCurrent ? 'course-content current' : ''}">`;

                    for (const item of weekItemsList) {
                        let logoUrl = config[modname]?.logo;
                        sectionHTML += `
                            <div class="activity-item mb-2">
                                <div class="d-flex align-items-center">
                                    <div class="activity-icon me-2">${logoUrl ? `<img src="${logoUrl}" width="24">` : ''}</div>
                                    <div class="activityname"><a href="${item.url}" class="aalink">${item.name}</a></div>
                                </div>
                            </div>`;
                    }
                    sectionHTML += `</div></li>`;
                }
                sectionHTML += `</ul></div></div>`;
                section.innerHTML = sectionHTML;
                container.appendChild(section);
                sectionNum++;
            }
            original.parentNode.insertBefore(container, original.nextSibling);
            original.parentNode.insertBefore(sortContainer, container);
        }
    }

    function handleVideoPage() {
        const mp4Regex = /https:\/\/[^"]+\.mp4/g;
        const match = document.documentElement.innerHTML.match(mp4Regex);
        if (match && match.length > 0) {
            const mp4Url = match[0];
            const button = document.createElement('button');
            button.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <span style="font-size:10px;font-weight:bold;margin-top:2px;line-height:1;">影片</span>
            `;
            button.onclick = function () {
                const link = document.createElement('a');
                link.href = mp4Url;
                link.download = '';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                if (confirm('停留此頁面將降低下載速率，是否離開此頁面？')) {
                    window.location.href = 'https://ilearning.cycu.edu.tw/my/courses.php';
                }
            };

            Object.assign(button.style, {
                position: 'fixed', bottom: 'max(8rem, calc(env(safe-area-inset-bottom) + 8rem))', right: '2rem',
                width: '52px', height: '52px',
                backgroundColor: '#7c3aed', color: 'white', border: 'none', borderRadius: '50%',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', boxShadow: '0px 4px 12px rgba(124, 58, 237, 0.5)', zIndex: '9999', gap: '1px'
            });
            document.body.appendChild(button);
        }
    }

    function init() {
        const url = window.location.href;
        if (/^https:\/\/ilearning\.cycu\.edu\.tw\/mod\/pdfannotator\//.test(url)) {
            const fullUrl = extractFullUrl();
            if (fullUrl) createDownloadButton(fullUrl);
        } else if (/^https:\/\/ilearning\.cycu\.edu\.tw\/(mod\/supervideo\/|mod\/resource\/)/.test(url)) {
            handleVideoPage();
        } else if (/^https:\/\/ilearning\.cycu\.edu\.tw\/course\//.test(url)) {
            getMoremenu();
            createBulkDownloadButton(); // 進入課程主頁即載入批量下載按鈕
        }
    }

    window.addEventListener('load', init);
})();