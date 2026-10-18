// Zaytouna site: language switch, the dekkaneh shelf, recipe-card dialog, WhatsApp basket.

// Replace with the real WhatsApp number (country code, no + or spaces).
const WHATSAPP = "96100000000";

// cm = rough real-world width of the pack, used to scale it on the shelf.
// r = resting tilt on the shelf.
const PRODUCTS = [
  { id: "akawi", img: "p6a", cm: 27, r: -3, cat: "cheese",
    ar: "جبنة عكاوي مبروشة", en: "Shredded Akawi Cheese", nAr: "٩٠٠ غ", nEn: "900 g",
    dAr: "عكاوي مبروشة جاهزة للمناقيش، الفطاير والكنافة.", dEn: "Shredded Akawi, ready for manakish, pies and knefeh.",
    cAr: "رشّها مباشرة من الكيس عالعجينة واخبز. بتدوب وبتمطّ متل ما لازم.", cEn: "Sprinkle straight from the bag onto the dough and bake. It melts and stretches the way it should.",
    wAr: "منقوشة جبنة الصبح، مع كبّاية شاي.", wEn: "A morning cheese manousheh, with a glass of tea." },
  { id: "kibbeh", img: "p2", cm: 30, r: 2, cat: "kibbeh",
    ar: "كبّة لبنانية", en: "Lebanese Kibbeh", nAr: "١٢ قطعة", nEn: "12 pieces",
    dAr: "أقراص كبّة محشية لحمة وبصل وصنوبر، مسكّرة عالإيد وحدة وحدة.", dEn: "Kibbeh shells stuffed with meat, onion and pine nuts, closed by hand one by one.",
    cAr: "اقليها مجلّدة بزيت سخن ٦ إلى ٨ دقايق لتصير دهبية، أو بالإير فراير ٢٠٠ درجة ١٥ دقيقة.", cEn: "Deep-fry from frozen in hot oil for 6 to 8 minutes until golden, or air-fry at 200°C for 15 minutes.",
    wAr: "لبن بخيار، ورقة نعنع، وحامض.", wEn: "Laban with cucumber, fresh mint and a squeeze of lemon." },
  { id: "shishbarak", img: "p1", cm: 30, r: -1.5, cat: "pastry",
    ar: "شيش برك", en: "Shish Barak", nAr: "٢٨ قطعة", nEn: "28 pieces",
    dAr: "عجينة رقيقة محشية لحمة متبّلة، مطويّة متل ما كانت تطويها ستّي.", dEn: "Thin dough filled with spiced meat, folded the way Teta used to fold it.",
    cAr: "حمّرها بالفرن ١٨٠ درجة ١٥ دقيقة، وبعدين طبّخها بصلصة اللبن ١٠ دقايق.", cEn: "Brown in the oven at 180°C for 15 minutes, then simmer in yogurt sauce for 10 minutes.",
    wAr: "صلصة لبن بالتوم والكزبرة، ورشّة نعنع يابس.", wEn: "Garlic and coriander yogurt sauce, and a pinch of dried mint." },
  { id: "mozzarella", img: "p6b", cm: 17, r: 4, cat: "cheese",
    ar: "موزاريلا مبروشة", en: "Shredded Mozzarella", nAr: "٢٠٠ غ", nEn: "200 g",
    dAr: "موزاريلا مبروشة للبيتزا والمناقيش والمعكرونة بالفرن.", dEn: "Shredded mozzarella for pizza, manakish and baked pasta.",
    cAr: "استعملها متل ما هي، ما بدها تذويب.", cEn: "Use as is, no thawing needed.",
    wAr: "بيتزا البيت يوم الأحد.", wEn: "Homemade Sunday pizza." },

  { id: "samb-meat", img: "p9", cm: 25, r: -2, cat: "pastry",
    ar: "سمبوسك لحمة", en: "Sambousek Meat", nAr: "٨ قطع", nEn: "8 pieces",
    dAr: "سمبوسك محشي لحمة وبصل وصنوبر، مقرّص عالطرف بالإيد.", dEn: "Sambousek filled with meat, onion and pine nuts, crimped along the edge by hand.",
    cAr: "اقليه مجلّد ٣ إلى ٤ دقايق، أو بالفرن ٢٠٠ درجة ١٥ دقيقة.", cEn: "Fry from frozen for 3 to 4 minutes, or bake at 200°C for 15 minutes.",
    wAr: "صحن مازة، ومع الكبّة طبعاً.", wEn: "A mezze spread, next to the kibbeh of course." },
  { id: "samb-cheese", img: "p4", cm: 25, r: 2.5, cat: "pastry",
    ar: "فطاير الجبنة", en: "Sambousek Cheese", nAr: "٨ قطع", nEn: "8 pieces",
    dAr: "فطاير محشية جبنة بتمطّ، ورشّة حبّة البركة.", dEn: "Pastries filled with stretchy cheese and a sprinkle of nigella seeds.",
    cAr: "اقليها مجلّدة ٣ دقايق، أو بالإير فراير ١٨٠ درجة ١٢ دقيقة.", cEn: "Fry from frozen for 3 minutes, or air-fry at 180°C for 12 minutes.",
    wAr: "زيتون، خيار، وشاي بالنعنع.", wEn: "Olives, cucumbers and mint tea." },
  { id: "rolls", img: "p8", cm: 25, r: -1, cat: "pastry",
    ar: "رقاقات بالجبنة", en: "Cheese Rolls", nAr: "١٠ قطع", nEn: "10 pieces",
    dAr: "أصابع عجينة رقيقة ملفوفة عالجبنة، مقرمشة برّا وذايبة جوّا.", dEn: "Thin pastry rolled around cheese, crisp outside and melting inside.",
    cAr: "اقليها مجلّدة ٢ إلى ٣ دقايق لتصير دهبية.", cEn: "Fry from frozen for 2 to 3 minutes until golden.",
    wAr: "أوّل صحن بيخلص عالسفرة.", wEn: "The first plate to disappear from the table." },
  { id: "shrimp", img: "p3", cm: 23, r: 3, cat: "sea",
    ar: "قريدس مقرمش", en: "Crispy Shrimp", nAr: "٢٠٠ غ", nEn: "200 g",
    dAr: "قريدس ملفوف بطبقة مقرمشة، جاهز للقلي.", dEn: "Shrimp in a crisp coating, ready to fry.",
    cAr: "اقليه مجلّد بزيت سخن ٣ إلى ٤ دقايق.", cEn: "Fry from frozen in hot oil for 3 to 4 minutes.",
    wAr: "طرطور، حامض، وشوية بقدونس.", wEn: "Tarator, lemon and a little parsley." },

  { id: "saniyeh", img: "p7", cm: 33, r: -1.5, cat: "oven",
    ar: "كبّة بالصينية", en: "Kibbeh bil Saniyeh", nAr: "٥٠٠ غ", nEn: "500 g",
    dAr: "طبقتين كبّة وبينهن حشوة لحمة وصنوبر، مقطّعة ومزيّنة باللوز متل صينية العيد.", dEn: "Two layers of kibbeh around a meat and pine-nut filling, scored and topped with almonds like a holiday tray.",
    cAr: "بالفرن ١٩٠ درجة ٣٠ إلى ٣٥ دقيقة، ورشّة زيت زيتون عالوجّ قبل ما تفوت.", cEn: "Bake at 190°C for 30 to 35 minutes, with a drizzle of olive oil on top before it goes in.",
    wAr: "لبن، سلطة فتّوش، وصحن زيتون.", wEn: "Laban, a fattoush salad and a plate of olives." },
  { id: "soufle", img: "p5", cm: 24, r: 2, cat: "oven",
    ar: "بطاطا سوفليه", en: "Batata Soufflé", nAr: "٣٠٠ غ", nEn: "300 g",
    dAr: "بطاطا مهروسة ناعمة وحشوة لحمة، والوجّ مقمّر بالفرن.", dEn: "Smooth mashed potato over a spiced meat filling, with a golden top.",
    cAr: "بالفرن ١٨٠ درجة ٢٥ إلى ٣٠ دقيقة لحتى يحمرّ الوجّ.", cEn: "Bake at 180°C for 25 to 30 minutes until the top turns golden.",
    wAr: "سلطة خضرا، وعيلة جوعانة.", wEn: "A green salad and a hungry family." }
];

const SHELVES = [
  ["akawi", "kibbeh", "shishbarak", "mozzarella"],
  ["samb-meat", "samb-cheese", "rolls", "shrimp"],
  ["saniyeh", "soufle", "__note"]
];

const CATS = [
  { id: "all", ar: "الكلّ", en: "Everything" },
  { id: "pastry", ar: "معجّنات", en: "Pastries" },
  { id: "kibbeh", ar: "كبّة", en: "Kibbeh" },
  { id: "oven", ar: "صواني الفرن", en: "Oven trays" },
  { id: "cheese", ar: "أجبان", en: "Cheese" },
  { id: "sea", ar: "بحري", en: "Seafood" }
];
// kibbeh bil saniyeh is kibbeh too
const extraCats = { saniyeh: ["kibbeh"] };

const $ = (s, el = document) => el.querySelector(s);
const byId = Object.fromEntries(PRODUCTS.map(p => [p.id, p]));
let lang = "ar";
try { lang = localStorage.getItem("zt-lang") || "ar"; } catch (e) {}
const urlLang = new URLSearchParams(location.search).get("lang");
if (urlLang === "ar" || urlLang === "en") lang = urlLang;

const t = (p, k) => p[k + (lang === "ar" ? "Ar" : "En")] ?? p[lang];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ---------- language ---------- */
function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
  $("#langBtn").textContent = l === "ar" ? "English" : "عربي";
  document.title = l === "ar" ? "زيتونة | أكل بيتي لبناني" : "Zaytouna | Lebanese Homemade Food";
  try { localStorage.setItem("zt-lang", l); } catch (e) {}
  renderChips();
  renderShelves();
  renderBasket();
}
$("#langBtn").addEventListener("click", () => setLang(lang === "ar" ? "en" : "ar"));

/* ---------- filters + shelves ---------- */
let filter = "all";
function renderChips() {
  $("#chips").innerHTML = CATS.map(c =>
    `<button class="chip" type="button" data-cat="${c.id}" aria-pressed="${c.id === filter}">${esc(c[lang])}</button>`
  ).join("");
}
$("#chips").addEventListener("click", e => {
  const b = e.target.closest(".chip");
  if (!b) return;
  filter = b.dataset.cat;
  renderChips();
  applyFilter();
});
function applyFilter() {
  document.querySelectorAll(".item").forEach(el => {
    const p = byId[el.dataset.id];
    const cats = [p.cat, ...(extraCats[p.id] || [])];
    el.classList.toggle("dim", filter !== "all" && !cats.includes(filter));
  });
}

// On phones each shelf is split into planks of two so nothing needs side-scrolling.
const mobile = matchMedia("(max-width: 760px)");
function shelfRows() {
  if (!mobile.matches) return SHELVES;
  const rows = [];
  SHELVES.forEach(r => {
    const ids = r.filter(id => id !== "__note");
    for (let i = 0; i < ids.length; i += 2) rows.push(ids.slice(i, i + 2));
  });
  return rows;
}
mobile.addEventListener("change", () => renderShelves());

function renderShelves() {
  $("#shelves").innerHTML = shelfRows().map(row => `
    <div class="shelf-scroll"><div class="shelf">
      ${row.map((id, i) => {
        if (id === "__note") return `<div class="shelf-note">
            <img src="assets/brand/sprig-herb.svg" alt="">
            ${lang === "ar" ? "وفي أطباق جديدة<br>عم تنطبخ!" : "More dishes<br>on the stove!"}</div>`;
        const p = byId[id];
        const tr = (i % 2 ? 4 : -4) + "deg";
        return `<button class="item" type="button" data-id="${p.id}" style="--w:${p.cm};--r:${p.r}deg;--tr:${tr}" aria-label="${esc(p[lang])}">
            <img src="assets/img/${p.img}.webp" alt="${esc(p[lang])}" loading="lazy">
            <span class="tag">${esc(p[lang])}<small>${esc(t(p, "n"))}</small></span>
          </button>`;
      }).join("")}
    </div></div>`).join("");
  applyFilter();
}
$("#shelves").addEventListener("click", e => {
  const b = e.target.closest(".item");
  if (b) openProduct(b.dataset.id);
});

/* ---------- product dialog ---------- */
const pd = $("#pd");
let current = null, qty = 1;
function openProduct(id) {
  current = byId[id]; qty = 1;
  $("#pdImg").src = `assets/img/${current.img}.webp`;
  $("#pdImg").alt = current[lang];
  $("#pdName").textContent = current[lang];
  $("#pdAlt").textContent = lang === "ar" ? current.en : current.ar;
  $("#pdMeta").textContent = t(current, "n");
  $("#pdDesc").textContent = t(current, "d");
  $("#pdCook").textContent = t(current, "c");
  $("#pdWith").textContent = t(current, "w");
  $("#qVal").textContent = qty;
  pd.showModal();
}
$("#qMinus").onclick = () => { qty = Math.max(1, qty - 1); $("#qVal").textContent = qty; };
$("#qPlus").onclick = () => { qty = Math.min(20, qty + 1); $("#qVal").textContent = qty; };
$("#addBtn").onclick = () => { addToBasket(current.id, qty); pd.close(); };

document.querySelectorAll("dialog").forEach(d => {
  d.addEventListener("click", e => { if (e.target === d || e.target.closest("[data-close]")) d.close(); });
});

/* ---------- basket ---------- */
let basket = {};
try { basket = JSON.parse(localStorage.getItem("zt-basket") || "{}"); } catch (e) {}
function saveBasket() { try { localStorage.setItem("zt-basket", JSON.stringify(basket)); } catch (e) {} }
function addToBasket(id, n) {
  basket[id] = (basket[id] || 0) + n;
  saveBasket(); renderBasket();
  const b = $("#basketBtn");
  b.animate([{ transform: "scale(1)" }, { transform: "scale(1.12)" }, { transform: "scale(1)" }], { duration: 350 });
}
function renderBasket() {
  const ids = Object.keys(basket).filter(id => byId[id] && basket[id] > 0);
  const count = ids.reduce((s, id) => s + basket[id], 0);
  $("#basketCount").textContent = count;
  $("#basketBtn").classList.toggle("show", count > 0);
  $("#basketList").innerHTML = ids.length ? ids.map(id => `
    <li><img src="assets/img/${byId[id].img}.webp" alt="">
      <span class="nm">${esc(byId[id][lang])}<br><small>&times; ${basket[id]}</small></span>
      <button class="rm" type="button" data-rm="${id}">${lang === "ar" ? "شيل" : "Remove"}</button></li>`).join("")
    : `<li>${lang === "ar" ? "السلّة فاضية." : "Your basket is empty."}</li>`;
}
$("#basketList").addEventListener("click", e => {
  const id = e.target.dataset.rm;
  if (!id) return;
  delete basket[id]; saveBasket(); renderBasket();
});
$("#basketBtn").onclick = () => { renderBasket(); $("#bd").showModal(); };
$("#sendWa").onclick = () => {
  const ids = Object.keys(basket).filter(id => byId[id]);
  if (!ids.length) return;
  const name = $("#cName").value.trim(), area = $("#cArea").value.trim();
  const lines = lang === "ar"
    ? ["مرحبا زيتونة، بدّي اطلب:", ...ids.map(id => `- ${byId[id].ar} × ${basket[id]}`), name && `الاسم: ${name}`, area && `العنوان: ${area}`]
    : ["Hi Zaytouna, I'd like to order:", ...ids.map(id => `- ${byId[id].en} x ${basket[id]}`), name && `Name: ${name}`, area && `Address: ${area}`];
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.filter(Boolean).join("\n"))}`, "_blank", "noopener");
};

setLang(lang);
