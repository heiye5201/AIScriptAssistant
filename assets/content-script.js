console.log("AI Assistant Content Script Loaded");

const IFRAME_ID = "ai-assistant-app-container";
const TOGGLE_BUTTON_ID = "ai-assistant-toggle-button";

let isPanelVisible = false;
let iframeEl = null;
let hasAutoCenteredOnce = false;

function ensureIframe() {
  if (iframeEl) return iframeEl;

  iframeEl = document.createElement("iframe");
  iframeEl.id = IFRAME_ID;
  iframeEl.allow = "clipboard-write";
  iframeEl.style.display = "none";
  iframeEl.src = chrome.runtime.getURL("index.html");
  document.body.appendChild(iframeEl);

  return iframeEl;
}

function getOrCreateToggleButton() {
  let button = document.getElementById(TOGGLE_BUTTON_ID);
  if (button) return button;

  button = document.createElement("button");
  button.id = TOGGLE_BUTTON_ID;
  button.type = "button";
  button.title = "AI 生成脚本";

  const icon = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;">
      <path d="M16 8.5V5.5C16 4.39543 15.1046 3.5 14 3.5H10C8.89543 3.5 8 4.39543 8 5.5V8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 12.5H15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M19 10.5H5C3.89543 10.5 3 11.3954 3 12.5V16.5C3 17.6046 3.89543 18.5 5 18.5H19C20.1046 18.5 21 17.6046 21 16.5V12.5C21 11.3954 20.1046 10.5 19 10.5Z" stroke="currentColor" stroke-width="2"/>
    </svg>
  `;

  const text = document.createElement("span");
  text.innerText = "AI 生成脚本";

  button.innerHTML = icon;
  button.appendChild(text);

  button.addEventListener("click", () => {
    const iframe = ensureIframe();

    isPanelVisible = !isPanelVisible;
    iframe.style.display = isPanelVisible ? "block" : "none";

    if (!isPanelVisible) return;

    try {
      iframe.contentWindow?.postMessage({ type: "eo-ai-assistant-visible" }, "*");
    } catch {
      // ignore
    }

    if (!hasAutoCenteredOnce) {
      iframe.style.width = "1000px";
      iframe.style.height = "700px";
      const rect = iframe.getBoundingClientRect();
      iframe.style.left = `${(window.innerWidth - rect.width) / 2}px`;
      iframe.style.top = `${(window.innerHeight - rect.height) / 2}px`;
      hasAutoCenteredOnce = true;
    }
  });

  return button;
}

function ensureButtonPlacement() {
  const button = getOrCreateToggleButton();

  // Prefer the original Eolink header position if it exists
  const header = document.querySelector("header.eo-ng-codebox-header");
  if (header) {
    button.classList.remove("ai-assistant-floating");
    if (button.parentElement !== header) header.appendChild(button);
    ensureIframe();
    return;
  }

  // Fallback: float the button so it also works on other deployments/domains
  button.classList.add("ai-assistant-floating");
  if (button.parentElement !== document.body) document.body.appendChild(button);
  ensureIframe();
}

let dragState = {
  isDragging: false,
  initialMouseOffsetX: 0,
  initialMouseOffsetY: 0,
};

function handleDragMove(event) {
  if (!dragState.isDragging || !iframeEl) return;
  iframeEl.style.left = `${event.clientX - dragState.initialMouseOffsetX}px`;
  iframeEl.style.top = `${event.clientY - dragState.initialMouseOffsetY}px`;
}

function handleDragEnd() {
  dragState.isDragging = false;
  document.body.classList.remove("ai-assistant-dragging");
  window.removeEventListener("mousemove", handleDragMove, true);
  window.removeEventListener("mouseup", handleDragEnd, true);
}

const resizeCursorMap = {
  top: "ns-resize",
  bottom: "ns-resize",
  left: "ew-resize",
  right: "ew-resize",
  "top-left": "nwse-resize",
  "bottom-right": "nwse-resize",
  "top-right": "nesw-resize",
  "bottom-left": "nwse-resize",
};

let resizeState = {
  isResizing: false,
  initialX: 0,
  initialY: 0,
  initialWidth: 0,
  initialHeight: 0,
  initialLeft: 0,
  initialTop: 0,
  direction: "",
};

let resizeTimer;
function handleResizeMove(event) {
  if (!resizeState.isResizing || !iframeEl) return;

  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const deltaX = event.screenX - resizeState.initialX;
    const deltaY = event.screenY - resizeState.initialY;

    if (resizeState.direction.includes("right")) {
      const width = resizeState.initialWidth + deltaX;
      iframeEl.style.width = `${Math.max(width, 500)}px`;
    }

    if (resizeState.direction.includes("bottom")) {
      const height = resizeState.initialHeight + deltaY;
      iframeEl.style.height = `${Math.max(height, 300)}px`;
    }

    if (resizeState.direction.includes("left")) {
      const width = resizeState.initialWidth - deltaX;
      const clampedWidth = Math.max(width, 500);
      const dx = resizeState.initialWidth - clampedWidth;
      iframeEl.style.width = `${clampedWidth}px`;
      iframeEl.style.left = `${resizeState.initialLeft + dx}px`;
    }

    if (resizeState.direction.includes("top")) {
      const height = resizeState.initialHeight - deltaY;
      const clampedHeight = Math.max(height, 300);
      const dy = resizeState.initialHeight - clampedHeight;
      iframeEl.style.height = `${clampedHeight}px`;
      iframeEl.style.top = `${resizeState.initialTop + dy}px`;
    }
  }, 16);
}

function handleResizeEnd() {
  resizeState.isResizing = false;
  document.body.classList.remove("ai-assistant-resizing");
  document.body.style.cursor = "auto";
  window.removeEventListener("mousemove", handleResizeMove, true);
  window.removeEventListener("mouseup", handleResizeEnd, true);
}

window.addEventListener("message", (event) => {
  if (!iframeEl || event.source !== iframeEl.contentWindow) return;
  const { type } = event.data || {};

  if (type === "drag-start") {
    const { clientX, clientY } = event.data;
    document.body.classList.add("ai-assistant-dragging");
    dragState = {
      isDragging: true,
      initialMouseOffsetX: clientX,
      initialMouseOffsetY: clientY,
    };
    window.addEventListener("mousemove", handleDragMove, true);
    window.addEventListener("mouseup", handleDragEnd, true);
    return;
  }

  if (type === "close-panel") {
    isPanelVisible = false;
    iframeEl.style.display = "none";
    return;
  }

  if (type === "resize-start") {
    const { screenX, screenY, direction } = event.data;
    resizeState = {
      isResizing: true,
      initialX: screenX,
      initialY: screenY,
      initialWidth: iframeEl.offsetWidth,
      initialHeight: iframeEl.offsetHeight,
      initialLeft: iframeEl.offsetLeft,
      initialTop: iframeEl.offsetTop,
      direction,
    };
    document.body.classList.add("ai-assistant-resizing");
    document.body.style.cursor = resizeCursorMap[direction] || "auto";
    window.addEventListener("mousemove", handleResizeMove, true);
    window.addEventListener("mouseup", handleResizeEnd, true);
  }
});

const observer = new MutationObserver(() => ensureButtonPlacement());
observer.observe(document.body, { childList: true, subtree: true });
ensureButtonPlacement();
