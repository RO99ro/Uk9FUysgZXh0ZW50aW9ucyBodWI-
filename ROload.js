!(function (e) {
  "use strict";
  const i =
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDA5LjA4IDQwOS4wOCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNmZmY7CiAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOwogICAgICAgIHN0cm9rZS13aWR0aDogMTVweDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBjbGlwLXBhdGg6IHVybCgjY2xpcHBhdGgpOwogICAgICB9CiAgICA8L3N0eWxlPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwcGF0aCI+CiAgICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iNy41IiB5PSI3LjUiIHdpZHRoPSIzOTQuMDgiIGhlaWdodD0iMzk0LjA4IiByeD0iMjkuNjIiIHJ5PSIyOS42MiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj4KICAgIDxnPgogICAgICA8ZyBjbGFzcz0iY2xzLTIiPgogICAgICAgIDxnPgogICAgICAgICAgPHJlY3QgY2xhc3M9ImNscy0xIiB4PSIxMjUuMjYiIHk9IjI0Ny4yIiB3aWR0aD0iNzkuMjgiIGhlaWdodD0iMTU0LjM4Ii8+CiAgICAgICAgICA8cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjcuNSIgeT0iMjQ3LjIiIHdpZHRoPSIzOS42NCIgaGVpZ2h0PSIxNTQuMzgiLz4KICAgICAgICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iNDcuMTQiIHk9IjI0Ny4yIiB3aWR0aD0iNzguMTEiIGhlaWdodD0iMTU0LjM4Ii8+CiAgICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMDQuNTQsNy41SDM3Ljg4Yy0xNi43OCwwLTMwLjM4LDEzLjYtMzAuMzgsMzAuMzh2OTUuNjFoMTk3LjA0VjcuNVoiLz4KICAgICAgICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMjg0LjM5IiB5PSIyNDcuMiIgd2lkdGg9IjgyLjU3IiBoZWlnaHQ9IjE1NC4zOCIvPgogICAgICAgICAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjIwNC41NCAxMzMuNDkgNy41IDEzMy40OSA3LjUgMjQ3LjIgNDcuMTQgMjQ3LjIgMTI1LjI2IDI0Ny4yIDIwNC41NCAyNDcuMiAyODQuMzkgMjQ3LjIgMzY2Ljk2IDI0Ny4yIDQwMS41OCAyNDcuMiA0MDEuNTggMjQ2Ljk4IDIwNC41NCAyNDYuOTggMjA0LjU0IDEzMy40OSIvPgogICAgICAgICAgPHJlY3QgY2xhc3M9ImNscy0xIiB4PSIzNjYuOTYiIHk9IjI0Ny4yIiB3aWR0aD0iMzQuNjIiIGhlaWdodD0iMTU0LjM4Ii8+CiAgICAgICAgICA8cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjIwNC41NCIgeT0iMjQ3LjIiIHdpZHRoPSI3OS44NSIgaGVpZ2h0PSIxNTQuMzgiLz4KICAgICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIwNC41NCw3LjV2MjM5LjQ4aDE5Ny4wNFYzNy44OGMwLTE2Ljc4LTEzLjYtMzAuMzgtMzAuMzgtMzAuMzhoLTE2Ni42NVoiLz4KICAgICAgICA8L2c+CiAgICAgIDwvZz4KICAgICAgPHJlY3QgY2xhc3M9ImNscy0xIiB4PSI3LjUiIHk9IjcuNSIgd2lkdGg9IjM5NC4wOCIgaGVpZ2h0PSIzOTQuMDgiIHJ4PSIyOS42MiIgcnk9IjI5LjYyIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=";
  if (!e.extensions.unsandboxed)
    throw new Error("ROload must run unsandboxed!");
  const t = e.vm.renderer;
  e.extensions.register(
    new (class {
      constructor() {
        ((this.visible = !1),
          (this.x = 0),
          (this.y = 0),
          (this.size = 50),
          (this.color = "#00aaff"),
          (this.effect = 0),
          (this.style = "style1"),
          (this.spinnerElement = null),
          (this.styleSheetElement = null),
          (this.speed = 1),
          (this.borderWidth = 6),
          (this.animationType = "spin"),
          (this.timerId = null),
          this._createStyles(),
          this._createSpinner());
      }
      _createStyles() {
        if (this.styleSheetElement) return;
        const e = document.createElement("style");
        ((e.id = "ro-loading-styles"),
          (e.textContent =
            "\n                @keyframes ro-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n                @keyframes ro-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }\n                @keyframes ro-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }\n                @keyframes ro-fade { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }\n                @keyframes ro-flip { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }\n                @keyframes ro-wiggle { 0%, 100% { transform: rotate(-5deg); } 50% { transform: rotate(5deg); } }\n                @keyframes ro-grow { from { transform: scale(0); } to { transform: scale(1); } }\n                @keyframes ro-shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }\n                @keyframes ro-elastic { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.3) rotate(10deg); } }\n                @keyframes ro-fill { from { width: 0%; } to { width: 100%; } }\n                @keyframes ro-shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }\n                @keyframes ro-slide { from { transform: translateX(-100%); } to { transform: translateX(100%); } }\n                @keyframes ro-dot-bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }\n                @keyframes ro-line-pulse { 0%, 100% { opacity: 1; transform: scaleY(1); } 50% { opacity: 0.4; transform: scaleY(0.7); } }\n                \n                .ro-hidden { display: none !important; }\n                .ro-animate-spin { animation: ro-spin var(--speed, 1s) linear infinite; }\n                .ro-animate-pulse { animation: ro-pulse var(--speed, 1s) linear infinite; }\n                .ro-animate-bounce { animation: ro-bounce var(--speed, 1s) linear infinite; }\n                .ro-animate-fade { animation: ro-fade var(--speed, 1s) linear infinite; }\n                .ro-animate-flip { animation: ro-flip var(--speed, 1s) linear infinite; }\n                .ro-animate-wiggle { animation: ro-wiggle var(--speed, 1s) linear infinite; }\n                .ro-animate-grow { animation: ro-grow var(--speed, 1s) linear infinite; }\n                .ro-animate-shake { animation: ro-shake var(--speed, 1s) linear infinite; }\n                .ro-animate-elastic { animation: ro-elastic var(--speed, 1s) linear infinite; }\n                .ro-animate-fill { animation: ro-fill var(--speed, 1s) linear forwards; }\n                .ro-animate-shimmer { animation: ro-shimmer var(--speed, 1s) linear infinite; }\n                .ro-animate-slide { animation: ro-slide var(--speed, 1s) linear infinite; }\n            "),
          document.head.appendChild(e),
          (this.styleSheetElement = e));
      }
      _createSpinner() {
        if (this.spinnerElement) return;
        const e = document.createElement("div");
        ((e.id = "ro-loading-spinner"),
          (e.style.pointerEvents = "none"),
          (e.style.zIndex = "9999"),
          (e.style.display = "none"),
          (e.style.position = "absolute"),
          (e.style.willChange = "transform, opacity"),
          t.addOverlay(e, "scale-centered"),
          (this.spinnerElement = e),
          this._updateSpinner());
      }
      _scratchToPixel(e, i) {
        const s = t._canvas;
        if (!s) return { pixelX: e, pixelY: -i };
        const r = s.getBoundingClientRect();
        return { pixelX: e * (r.width / 480), pixelY: -i * (r.height / 360) };
      }
      _updateSpinner() {
        if (!this.spinnerElement) return;
        const { pixelX: e, pixelY: i } = this._scratchToPixel(this.x, this.y);
        let t = `\n                position: absolute;\n                left: ${e}px;\n                top: ${i}px;\n                z-index: 9999;\n                display: ${this.visible ? "block" : "none"};\n                filter: hue-rotate(${this.effect}deg);\n                --speed: ${this.speed}s;\n            `;
        [
          "ro-animate-spin",
          "ro-animate-pulse",
          "ro-animate-bounce",
          "ro-animate-fade",
          "ro-animate-flip",
          "ro-animate-wiggle",
          "ro-animate-grow",
          "ro-animate-shake",
          "ro-animate-elastic",
          "ro-animate-fill",
          "ro-animate-shimmer",
          "ro-animate-slide",
        ].forEach((e) => this.spinnerElement.classList.remove(e));
        let s = "",
          r = "";
        switch (this.style) {
          case "style1":
            ((s = `width: ${this.size}px; height: ${this.size}px; border: ${this.borderWidth}px solid rgba(0,0,0,0.1); border-top: ${this.borderWidth}px solid ${this.color}; border-radius: 50%;`),
              this.spinnerElement.classList.add(
                `ro-animate-${this.animationType}`,
              ));
            break;
          case "style2":
            ((s = `width: ${this.size}px; height: ${this.size}px; border: ${this.borderWidth}px dotted ${this.color}; border-radius: 50%;`),
              this.spinnerElement.classList.add(
                `ro-animate-${this.animationType}`,
              ));
            break;
          case "style3":
            ((s = `width: ${this.size}px; height: ${this.size}px; border: ${this.borderWidth}px double ${this.color}; border-radius: 50%;`),
              this.spinnerElement.classList.add(
                `ro-animate-${this.animationType}`,
              ));
            break;
          case "style4":
            ((s = `width: ${this.size}px; height: ${this.size}px; background: conic-gradient(${this.color}, transparent); border-radius: 50%;`),
              this.spinnerElement.classList.add(
                `ro-animate-${this.animationType}`,
              ));
            break;
          case "style5":
            ((s = `width: ${this.size}px; height: ${this.size}px; border: ${this.borderWidth}px solid ${this.color}; border-radius: 15%;`),
              this.spinnerElement.classList.add(
                `ro-animate-${this.animationType}`,
              ));
            break;
          case "style6":
            ((s = `width: ${this.size}px; height: ${this.size}px; background: ${this.color}; clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);`),
              this.spinnerElement.classList.add(
                `ro-animate-${this.animationType}`,
              ));
            break;
          case "style7":
            ((s = `width: ${1.5 * this.size}px; height: ${this.size / 3}px; display: flex; justify-content: space-between; align-items: center;`),
              (r = this._createDotAnimation()));
            break;
          case "style8":
            ((s = `width: ${3 * this.size}px; height: ${2 * this.borderWidth}px; background: rgba(0,0,0,0.1); border-radius: ${this.borderWidth}px; overflow: hidden; position: relative;`),
              (r = this._createProgressBarAnimation()));
            break;
          case "style9":
            ((s = `width: ${this.size}px; height: ${this.size}px; border: ${this.borderWidth}px dashed ${this.color}; border-radius: 50%;`),
              this.spinnerElement.classList.add(
                `ro-animate-${this.animationType}`,
              ));
            break;
          case "style10":
            ((s = `width: ${this.size}px; height: ${this.size}px; border: ${this.borderWidth}px solid ${this.color}; border-radius: 50%; box-shadow: 0 0 ${2 * this.borderWidth}px ${this.color};`),
              this.spinnerElement.classList.add(
                `ro-animate-${this.animationType}`,
              ));
            break;
          case "style11":
            ((s = `width: ${this.size}px; height: ${this.size}px; border: ${this.borderWidth}px solid ${this.color}; border-radius: 50%; border-left-color: transparent;`),
              this.spinnerElement.classList.add(
                `ro-animate-${this.animationType}`,
              ));
            break;
          case "style12":
            ((s = `width: ${this.size}px; height: ${this.size}px; background: linear-gradient(45deg, ${this.color}, transparent); border-radius: 50%;`),
              this.spinnerElement.classList.add(
                `ro-animate-${this.animationType}`,
              ));
            break;
          case "style13":
            ((s = `width: ${2 * this.size}px; height: ${this.borderWidth}px; background: ${this.color}; border-radius: ${this.borderWidth}px;`),
              this.spinnerElement.classList.add(
                `ro-animate-${this.animationType}`,
              ));
            break;
          case "style14":
            ((s = `width: ${this.size}px; height: ${this.size}px; background: radial-gradient(circle, ${this.color} 0%, transparent 70%); border-radius: 50%;`),
              this.spinnerElement.classList.add(
                `ro-animate-${this.animationType}`,
              ));
            break;
          case "style15":
            ((s = `width: ${this.size}px; height: ${this.size}px; border: ${this.borderWidth}px solid transparent; border-top-color: ${this.color}; border-radius: 50%;`),
              (r = `<div style="position: absolute; top: 50%; left: 50%; width: ${0.6 * this.size}px; height: ${0.6 * this.size}px; border: ${this.borderWidth}px solid ${this.color}; border-radius: 50%; transform: translate(-50%, -50%);"></div>`),
              this.spinnerElement.classList.add(
                `ro-animate-${this.animationType}`,
              ));
            break;
          case "style16":
            ((s = `width: ${this.size}px; height: ${this.size}px; background: repeating-conic-gradient(${this.color} 0% 10%, transparent 10% 20%); border-radius: 50%;`),
              this.spinnerElement.classList.add(
                `ro-animate-${this.animationType}`,
              ));
            break;
          case "style17":
            ((s = `width: ${this.size}px; height: ${this.size}px; border: ${this.borderWidth}px solid ${this.color}; border-radius: 50%;`),
              (r = `<div style="position: absolute; top: 50%; left: 50%; width: ${0.6 * this.size}px; height: ${0.6 * this.size}px; border: ${this.borderWidth}px solid ${this.color}; border-radius: 50%; transform: translate(-50%, -50%);"></div>`),
              this.spinnerElement.classList.add(
                `ro-animate-${this.animationType}`,
              ));
            break;
          case "style18":
            ((s = `width: ${this.size}px; height: ${this.size}px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 3px;`),
              (r = `\n                        <div style="background: ${this.color}; border-radius: 3px;"></div>\n                        <div style="background: ${this.color}; border-radius: 3px;"></div>\n                        <div style="background: ${this.color}; border-radius: 3px;"></div>\n                        <div style="background: ${this.color}; border-radius: 3px;"></div>\n                    `),
              this.spinnerElement.classList.add(
                `ro-animate-${this.animationType}`,
              ));
            break;
          case "style19":
            ((s = `width: ${1.2 * this.size}px; height: ${this.size}px; display: flex; flex-direction: column; justify-content: space-between; align-items: center;`),
              (r = this._createLineAnimation()));
            break;
          case "style20":
            ((s = `width: ${this.size}px; height: ${this.size}px; border: ${this.borderWidth}px solid ${this.color}; border-radius: 50%;`),
              (r = `<div style="position: absolute; top: 50%; left: 50%; width: ${0.7 * this.size}px; height: ${0.7 * this.size}px; border: ${this.borderWidth}px solid ${this.color}; border-radius: 50%; transform: translate(-50%, -50%);"></div>`),
              this.spinnerElement.classList.add(
                `ro-animate-${this.animationType}`,
              ));
            break;
        }
        ((this.spinnerElement.style.cssText = t + s),
          (this.spinnerElement.innerHTML = r));
      }
      _createDotAnimation() {
        const e = 0.2 * this.speed,
          i = 0.4 * this.speed;
        return `\n                <div style="width: ${this.size / 3}px; height: ${this.size / 3}px; background: ${this.color}; border-radius: 50%; animation: ro-dot-bounce ${this.speed}s infinite ease-in-out both;"></div>\n                <div style="width: ${this.size / 3}px; height: ${this.size / 3}px; background: ${this.color}; border-radius: 50%; animation: ro-dot-bounce ${this.speed}s infinite ease-in-out both ${e}s;"></div>\n                <div style="width: ${this.size / 3}px; height: ${this.size / 3}px; background: ${this.color}; border-radius: 50%; animation: ro-dot-bounce ${this.speed}s infinite ease-in-out both ${i}s;"></div>\n            `;
      }
      _createProgressBarAnimation() {
        return "fill" === this.animationType
          ? `<div style="width: 0%; height: 100%; background: ${this.color}; animation: ro-fill ${this.speed}s linear forwards;"></div>`
          : "shimmer" === this.animationType
            ? `<div style="width: 100%; height: 100%; background: repeating-linear-gradient(45deg, ${this.color}, ${this.color} 10px, transparent 10px, transparent 20px); background-size: 200% 100%; animation: ro-shimmer ${this.speed}s linear infinite;"></div>`
            : "slide" === this.animationType
              ? `<div style="width: 30%; height: 100%; background: ${this.color}; animation: ro-slide ${this.speed}s linear infinite;"></div>`
              : `<div style="width: 50%; height: 100%; background: ${this.color};"></div>`;
      }
      _createLineAnimation() {
        const e = 0.2 * this.speed,
          i = 0.4 * this.speed;
        return `\n                <div style="width: 100%; height: ${this.borderWidth}px; background: ${this.color}; border-radius: ${this.borderWidth / 2}px; animation: ro-line-pulse ${this.speed}s ease-in-out infinite;"></div>\n                <div style="width: 100%; height: ${this.borderWidth}px; background: ${this.color}; border-radius: ${this.borderWidth / 2}px; animation: ro-line-pulse ${this.speed}s ease-in-out infinite ${e}s;"></div>\n                <div style="width: 100%; height: ${this.borderWidth}px; background: ${this.color}; border-radius: ${this.borderWidth / 2}px; animation: ro-line-pulse ${this.speed}s ease-in-out infinite ${i}s;"></div>\n            `;
      }
      getInfo() {
        return {
          id: "roload",
          name: "ROload",
          color1: "#f0ad39",
          color2: "#ed8625",
          menuIconURI: i,
          blockIconURI: i,
          blocks: [
            {
              func: "using",
              blockType: e.BlockType.BUTTON,
              text: "How to use?",
            },
            {
              opcode: "showSpinner",
              blockType: e.BlockType.COMMAND,
              text: "show loader",
            },
            {
              opcode: "showSpinnerFor",
              blockType: e.BlockType.COMMAND,
              text: "show loader for [SECONDS] seconds",
              arguments: {
                SECONDS: { type: e.ArgumentType.NUMBER, defaultValue: 2 },
              },
            },
            {
              opcode: "hideSpinner",
              blockType: e.BlockType.COMMAND,
              text: "hide loader",
            },
            {
              opcode: "setStyle",
              blockType: e.BlockType.COMMAND,
              text: "set style to [STYLE]",
              arguments: {
                STYLE: { type: e.ArgumentType.STRING, menu: "styles" },
              },
            },
            {
              opcode: "setAnimation",
              blockType: e.BlockType.COMMAND,
              text: "set animation to [ANIM]",
              arguments: {
                ANIM: { type: e.ArgumentType.STRING, menu: "animations" },
              },
            },
            {
              opcode: "setColor",
              blockType: e.BlockType.COMMAND,
              text: "set color to [COLOR]",
              arguments: {
                COLOR: { type: e.ArgumentType.COLOR, defaultValue: "#ff0000" },
              },
            },
            {
              opcode: "setSize",
              blockType: e.BlockType.COMMAND,
              text: "set size to [SIZE]",
              arguments: {
                SIZE: { type: e.ArgumentType.NUMBER, defaultValue: 50 },
              },
            },
            {
              opcode: "setPosition",
              blockType: e.BlockType.COMMAND,
              text: "set position x: [X] y: [Y]",
              arguments: {
                X: { type: e.ArgumentType.NUMBER, defaultValue: 0 },
                Y: { type: e.ArgumentType.NUMBER, defaultValue: 0 },
              },
            },
            {
              opcode: "setSpeed",
              blockType: e.BlockType.COMMAND,
              text: "set speed to [SPEED]",
              arguments: {
                SPEED: { type: e.ArgumentType.NUMBER, defaultValue: 1 },
              },
            },
            {
              opcode: "setBorderWidth",
              blockType: e.BlockType.COMMAND,
              text: "set border width to [WIDTH]",
              arguments: {
                WIDTH: { type: e.ArgumentType.NUMBER, defaultValue: 6 },
              },
            },
            {
              opcode: "setEffect",
              blockType: e.BlockType.COMMAND,
              text: "set hue effect to [EFFECT]",
              arguments: {
                EFFECT: { type: e.ArgumentType.NUMBER, defaultValue: 0 },
              },
            },
            {
              opcode: "isVisible",
              blockType: e.BlockType.BOOLEAN,
              text: "is loader visible?",
            },
          ],
          menus: {
            styles: {
              acceptReporters: !1,
              items: [
                { text: "Simple Circle", value: "style1" },
                { text: "Dotted Circle", value: "style2" },
                { text: "Double Circle", value: "style3" },
                { text: "Gradient Circle", value: "style4" },
                { text: "Square", value: "style5" },
                { text: "Diamond", value: "style6" },
                { text: "3 Dots", value: "style7" },
                { text: "Progress Bar", value: "style8" },
                { text: "Dashed Circle", value: "style9" },
                { text: "Glowing Circle", value: "style10" },
                { text: "Half Ring", value: "style11" },
                { text: "Radial Fade", value: "style12" },
                { text: "Simple Bar", value: "style13" },
                { text: "Pulse Circle", value: "style14" },
                { text: "Dual Ring", value: "style15" },
                { text: "Conic Spin", value: "style16" },
                { text: "Concentric Rings", value: "style17" },
                { text: "Grid Dots", value: "style18" },
                { text: "Equal Lines", value: "style19" },
                { text: "Pulse Ring", value: "style20" },
              ],
            },
            animations: {
              acceptReporters: !1,
              items: [
                { text: "Spin", value: "spin" },
                { text: "Pulse", value: "pulse" },
                { text: "Bounce", value: "bounce" },
                { text: "Fade", value: "fade" },
                { text: "Flip", value: "flip" },
                { text: "Wiggle", value: "wiggle" },
                { text: "Grow", value: "grow" },
                { text: "Shake", value: "shake" },
                { text: "Elastic", value: "elastic" },
                { text: "Fill (Bar)", value: "fill" },
                { text: "Shimmer (Bar)", value: "shimmer" },
                { text: "Slide", value: "slide" },
              ],
            },
          },
        };
      }
      showSpinner() {
        (this.timerId && (clearTimeout(this.timerId), (this.timerId = null)),
          (this.visible = !0),
          this.spinnerElement.classList.remove("ro-hidden"),
          this._updateSpinner());
      }
      showSpinnerFor(e) {
        const i = Math.max(0.1, Number(e.SECONDS));
        (this.timerId && clearTimeout(this.timerId),
          (this.visible = !0),
          this.spinnerElement.classList.remove("ro-hidden"),
          this._updateSpinner(),
          (this.timerId = setTimeout(() => {
            (this.hideSpinner(), (this.timerId = null));
          }, 1e3 * i)));
      }
      hideSpinner() {
        (this.timerId && (clearTimeout(this.timerId), (this.timerId = null)),
          (this.visible = !1),
          this.spinnerElement.classList.add("ro-hidden"),
          this._updateSpinner());
      }
      setStyle(e) {
        ((this.style = e.STYLE), this._updateSpinner());
      }
      setAnimation(e) {
        ((this.animationType = e.ANIM), this._updateSpinner());
      }
      setColor(e) {
        ((this.color = e.COLOR), this._updateSpinner());
      }
      setSize(e) {
        ((this.size = Math.max(10, Number(e.SIZE))), this._updateSpinner());
      }
      setPosition(e) {
        ((this.x = Number(e.X)), (this.y = Number(e.Y)), this._updateSpinner());
      }
      setSpeed(e) {
        ((this.speed = Math.max(0.1, Number(e.SPEED))), this._updateSpinner());
      }
      setBorderWidth(e) {
        ((this.borderWidth = Math.max(1, Math.min(20, Number(e.WIDTH)))),
          this._updateSpinner());
      }
      setEffect(e) {
        ((this.effect = Number(e.EFFECT)), this._updateSpinner());
      }
      isVisible() {
        return this.visible;
      }
            using() {
        window.open(
          "https://www.youtube.com/@ROESplus?sub_confirmation=1",
          "_blank",
        );
      }
    })(),
  );
})(Scratch);
