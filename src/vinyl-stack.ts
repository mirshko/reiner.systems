const GAP = 72;
const S = 320;
const STACK = [1, 0.875, 0.75, 0.625].map((scale, i) => ({
  size: scale * S,
  z: 10 - i,
  y: -i * GAP,
}));

function esc(s: string) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

function cardHTML(
  cover: string,
  artist: string,
  title: string,
  s: (typeof STACK)[number],
) {
  const bg = "#c9c5c0";
  return `<div style="position:absolute;left:50%;bottom:0;width:${s.size}px;height:${s.size}px;z-index:${s.z};transform:translateX(-50%) translateY(${s.y}px)">
    <div style="position:absolute;inset:0;overflow:hidden">
      <div style="position:absolute;inset:0;background:${bg}"></div>
      <img src="/cover_images/${cover}" alt="${esc(artist)} — ${esc(title)}" class="w-full h-full object-cover" draggable="false" style="position:absolute;height:100%;width:100%;inset:0;color:transparent">
    </div>
  </div>`;
}

const list = document.querySelector("[data-vinyl-list]");
const stack = document.querySelector("[data-vinyl-stack]");
if (!list || !stack) throw new Error("missing elements");

const container = stack.querySelector(".relative")!;
const items = [...list.querySelectorAll("li")];

function buildStack(idx: number) {
  let html = "";
  for (let i = 0; i < 4; i++) {
    const si = idx + i;
    const s = STACK[i];
    if (si >= 0 && si < items.length) {
      const c = items[si].dataset;
      html += cardHTML(c.cover ?? "", c.artist ?? "", c.title ?? "", s);
    }
  }
  container.innerHTML = html;
}

list.addEventListener("mouseover", (e) => {
  const li = (e.target as HTMLElement).closest("li");
  if (!li || !li.dataset.cover) return;

  const idx = items.indexOf(li);
  buildStack(idx);
  (stack as HTMLElement).style.display = "";
});

list.addEventListener("mouseout", (e) => {
  const li = (e.target as HTMLElement).closest("li");
  if (!li) return;
  if (e.relatedTarget && li.contains(e.relatedTarget as Node)) return;
  (stack as HTMLElement).style.display = "none";
});
