// ==UserScript==
// @name         TBL Experience
// @namespace    https://github.com/G02m0n1k/TBLE
// @version      3
// @description  Скрипт, который изменяет стиль Twitblit под стиль TBL.
// @author       G02m0n1k
// @license      BSD-3-Clause
// @supportURL   https://t.me/Twitblit_LITE
// @homepageURL  https://twitblit.ru/tb/TBL
// @icon         https://raw.githubusercontent.com/G02m0n1k/Twitblit_LITE/refs/heads/main/readme-images/tbliteico.png
// @updateURL    https://raw.githubusercontent.com/G02m0n1k/TBLE/refs/heads/main/dist/TBLE.user.js
// @downloadURL  https://raw.githubusercontent.com/G02m0n1k/TBLE/refs/heads/main/dist/TBLE.user.js
// @match        https://twitblit.ru/*
// @grant        GM_xmlhttpRequest
// @connect      raw.githubusercontent.com
// @connect      github.com
// ==/UserScript==

// Скрипт, изменяющий стиль как в TBL

// Функция для вставки блоков
function insertBlocks() {
    const container = document.querySelector('div.p-2[style="width: 240px;"]');
    if (container && !container.querySelector('a[href="/aethera"]')) {
        container.insertAdjacentHTML('afterbegin', `
        <div>
            <a href="https://t.me/Twitblit_LITE" class="button-container mb-2 flex items-center justify-between w-full p-4 text-left bg-secondary-button hover:bg-secondary-button-hover">
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 496 512">
                        <g id="ai_fill" fill="none">
                            <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"></path>
                            <path fill="var(--text-color)" d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"></path>
                        </g>
                    </svg>
                    <span>TBL в Telegram</span>
                </div>
            </a>
            <a href="/aethera" class="button-container mb-2 flex items-center justify-between w-full p-4 text-left bg-secondary-button hover:bg-secondary-button-hover">
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <g id="ai_fill" fill="none">
                            <path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z"></path>
                            <path fill="var(--text-color)" d="M9.107 5.448c.598-1.75 3.016-1.803 3.725-.159l.06.16.807 2.36a4 4 0 0 0 2.276 2.411l.217.081 2.36.806c1.75.598 1.803 3.016.16 3.725l-.16.06-2.36.807a4 4 0 0 0-2.412 2.276l-.081.216-.806 2.361c-.598 1.75-3.016 1.803-3.724.16l-.062-.16-.806-2.36a4 4 0 0 0-2.276-2.412l-.216-.081-2.36-.806c-1.751-.598-1.804-3.016-.16-3.724l.16-.062 2.36-.806A4 4 0 0 0 8.22 8.025l.081-.216zM19 2a1 1 0 0 1 .898.56l.048.117.35 1.026 1.027.35a1 1 0 0 1 .118 1.845l-.118.048-1.026.35-.35 1.027a1 1 0 0 1-1.845.117l-.048-.117-.35-1.026-1.027-.35a1 1 0 0 1-.118-1.845l.118-.048 1.026-.35.35-1.027A1 1 0 0 1 19 2"></path>
                        </g>
                    </svg>
                    <span>Arfaus AI</span>
                </div>
            </a>
        </div>
        `);
    }
}

// Функция для добавления кнопки скачивания
function restyleViewer() {
    // Затемняет фон при просмотре фото
    const mask = document.querySelector('.ant-image-preview-mask');
    if (mask) {
        mask.style.background = 'rgba(0, 0, 0, 0.92)';
    }
    // Удаляет кнопки зума для фото
    document.querySelectorAll(`
        .ant-image-preview-operations-operation.ant-image-preview-operations-operation-zoomIn,
        .ant-image-preview-operations-operation.ant-image-preview-operations-operation-zoomOut
    `).forEach(element => element.remove());
    // Добавляет кнопку загрузки фото
    const footer = document.querySelector('.ant-image-preview-operations');
    if (footer && !footer.querySelector('.ant-image-preview-operations-operation-download')) {
        footer.insertAdjacentHTML('beforeend', `
        <div class="ant-image-preview-operations-operation ant-image-preview-operations-operation-download" 
             onclick="(() => {
                // Находим все корневые элементы предпросмотра
                const previewRoots = document.querySelectorAll('.ant-image-preview-root');

                // Ищем тот, который содержит маску
                let targetRoot = null;
                for (const root of previewRoots) {
                    if (root.querySelector('.ant-image-preview-mask')) {
                    targetRoot = root;
                    break;
                    }
                }

                if (!targetRoot) return;

                // Ищем изображение внутри найденного корневого элемента
                const img = targetRoot.querySelector('.ant-image-preview-img');
                if (!img) return;

                const link = document.createElement('a');
                link.href = img.src;
                link.download = img.src.split('/').pop().split('?')[0] || 'image.jpg';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                })()">
          <span role="img" aria-label="download" class="anticon anticon-swap">
            <svg viewBox="0 0 512 512" focusable="false" data-icon="swap" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path>
            </svg>
          </span>
        </div>
        `);
    }
}

// Функция для удаления объектов
function removeR() {
    // Отключает modal
    var modal = document.querySelector('.ant-modal-root.css-1exo4l7');
    if (modal) {
        modal.style.display = 'none';
    }
    
    // Удаляет styleElement
    var styleElement = document.querySelector('style[data-rc-order="append"]');
    if (styleElement) {
        styleElement.remove();
    }

    // Удаляет href у лого
    document.querySelectorAll('a.flex.items-center').forEach(link => {
        link.removeAttribute('href');
    });
    
    // Пытаемся выполнить блоки
    insertBlocks();
    restyleViewer();
}

// Наблюдатель за изменениями в DOM
var observer = new MutationObserver(function(mutations) {
    document.querySelectorAll('div.md\\:hidden.flex.items-center').forEach(el => el.remove());
    document.querySelectorAll('div.absolute.left-0.top-0.bottom-0.w-8.bg-gradient-to-r.from-\\[var\\(--background-color\\)\\].z-10.pointer-events-none, ' +
     'div.absolute.right-0.top-0.bottom-0.w-8.bg-gradient-to-l.from-\\[var\\(--background-color\\)\\].z-10.pointer-events-none')
     .forEach(el => el.remove());
    
    // Проверяет, появился ли header
    mutations.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(node) {
            if (node.nodeName === 'HEADER') {
                removeR();
            }
        });
    });
    
    // Пытается выполнить блоки при любых изменениях
    insertBlocks();
    restyleViewer();
});

// Начинает наблюдение за изменениями в body
var body = document.body;
if (body) {
    observer.observe(body, {
        attributes: true,
        childList: true,
        subtree: true
    });
} else {
    console.error('Body element not found!');
}

// Выполняет прочие функции
removeR();