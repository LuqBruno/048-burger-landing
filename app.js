/* 048 Burger — prévia demonstrativa. Cardápio e preços: delivery.yooga.app/048-burguer (consulta 17/11/2026). */
(() => {
  const MENU = [
    { id: "mais", nome: "Os mais pedidos", itens: [
      { n: "Pão Carne e Queijo", d: "Pão brioche, hambúrguer 140g e queijo cheddar.", p: 27.00, img: "pao-carne-queijo" },
      { n: "Blenda Salad", d: "Pão brioche, hambúrguer 140g, cheddar fatiado, alface americana, tomate, cebola roxa e molho especial.", p: 34.99, img: "blenda-salad" },
      { n: "Burger Bacon", d: "Pão brioche, hambúrguer 140g, bacon fatiado, cheddar fatiado e barbecue.", p: 34.99, img: "burger-bacon", top: true },
      { n: "Mussarela Crispy", d: "Pão brioche, hambúrguer 140g, cheddar, bacon, mussarela empanada e maionese 48.", p: 45.99, img: "mussarela-crispy" },
    ]},
    { id: "artesanal", nome: "Burger artesanal", itens: [
      { n: "Rubi Classic", d: "Pão brioche, hambúrguer 140g, cheddar fatiado, picles de pepino, cebola roxa, mostarda e ketchup.", p: 32.99, img: "rubi-classic", top: true },
      { n: "Abalone Crispy", d: "Pão brioche, hambúrguer 140g, creme cheddar, cebola crispy e barbecue.", p: 36.99, img: "abalone-crispy" },
      { n: "Jade Frango", d: "Pão brioche, frango empanado, queijo mussarela, alface americana, picles de pepino, molho honey mustard e maionese.", p: 34.99, img: "jade-frango" },
      { n: "Big 48", d: "Pão brioche, 2x hambúrguer 140g, 2x queijo mussarela, bacon, cebola roxa, alface americana e molho especial.", p: 44.99, img: "big-48" },
      { n: "Duplo Barbecue", d: "Pão brioche, 2x hambúrguer 140g, 4x cheddar fatiado, cebola roxa e barbecue defumado.", p: 43.99, img: "duplo-barbecue" },
      { n: "Duplo Bacon Onion", d: "Pão brioche, 2x hambúrguer 140g, cheddar fatiado, bacon, onion rings e barbecue.", p: 46.99, img: "duplo-bacon-onion" },
      { n: "Gouda", d: "Pão brioche, hambúrguer 140g, uma fatia de mussarela, uma de cheddar, bacon, almofadinhas crocantes de queijo gouda empanado, picles, geleia de pimenta artesanal e maionese da casa.", p: 44.99, img: "gouda", top: true },
    ]},
    { id: "x", nome: "X Saladas", itens: [
      { n: "X Salada", d: "Pão, carne 100g, queijo mussarela, apresuntado, milho, ervilha, tomate, alface e maionese.", p: 29.99, img: "x-salada", top: true },
      { n: "X Burger", d: "Pão, 2 carnes 100g, 4 fatias de queijo mussarela, orégano e maionese.", p: 29.99 },
      { n: "X Egg", d: "Pão, carne 100g, ovo, queijo mussarela, apresuntado, milho, ervilha, tomate, alface e maionese.", p: 32.99 },
      { n: "X Bacon", d: "Pão, carne 100g, bacon em cubos, queijo mussarela, apresuntado, milho, ervilha, tomate, alface e maionese.", p: 35.99 },
      { n: "X Frango", d: "Pão, frango grelhado, queijo mussarela, apresuntado, milho, ervilha, tomate, alface e maionese.", p: 30.99 },
      { n: "X Calabresa", d: "Pão, carne 100g, calabresa, queijo mussarela, apresuntado, milho, ervilha, tomate, alface e maionese.", p: 35.99 },
    ]},
    { id: "entradas", nome: "Entradas", itens: [
      { n: "Almofadinha de Queijo Gouda", d: "10 unidades. Acompanha geleia de pimenta.", p: 29.99, img: "almofadinha-gouda" },
      { n: "Onion Rings", d: "Anéis de cebola empanados, 10 unidades.", p: 19.99, img: "onion-rings" },
      { n: "Empanadinhos de Frango", d: "Nuggets, 10 unidades.", p: 19.99, img: "nuggets" },
      { n: "Fritas Pequena 150g", d: "Porção individual.", p: 11.99, img: "fritas-p" },
      { n: "Fritas Média 300g", d: "Adicional de cheddar ou bacon.", p: 20.99, img: "fritas-m" },
      { n: "Fritas Grande 500g", d: "Adicional de cheddar ou bacon.", p: 30.99, img: "fritas-g" },
    ]},
    { id: "bebidas", nome: "Bebidas", drinks: true, itens: [
      { n: "Coca-Cola 1,5L", p: 17.99 }, { n: "Coca-Cola 600ml", p: 9.99 }, { n: "Coca-Cola Zero 600ml", p: 9.99 },
      { n: "Coca-Cola lata", p: 7.50 }, { n: "Coca-Cola Zero lata", p: 7.50 }, { n: "Guaraná 1,5L", p: 16.99 },
      { n: "Guaraná Zero 1,5L", p: 16.99 }, { n: "Guaraná 1L", p: 11.00 }, { n: "Guaraná 600ml", p: 9.99 },
      { n: "Guaraná Zero 600ml", p: 9.99 }, { n: "Guaraná lata", p: 7.50 }, { n: "Guaraná Zero lata", p: 7.50 },
      { n: "Água", p: 5.00 }, { n: "Água com gás", p: 5.00 },
    ]},
  ];
  const BEST = ["Burger Bacon", "Rubi Classic", "Gouda", "X Salada"]; // "Produtos em destaque — Mais pedido" no Yooga
  const GRAM = [
    ["2026-11-12", "DfqBz-lxPCb", "p"], ["2026-11-14", "DfvO3HexBk1", "reel"], ["2026-11-12", "DfqAiYRx_h-", "reel"],
    ["2026-11-08", "Dfft0TnxQoH", "reel"], ["2026-11-06", "DfakGT7xOZw", "reel"], ["2026-10-31", "DfLEodrRw0l", "reel"],
    ["2026-10-23", "De2i2bfxeTj", "reel"], ["2026-10-14", "DefUkjjxZ9k", "p"], ["2026-10-19", "DesN-etRxX2", "reel"],
  ];

  const $ = (s, r = document) => r.querySelector(s);
  const brl = v => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const all = MENU.flatMap(g => g.itens.map(i => ({ ...i, g: g.id })));
  const byName = Object.fromEntries(all.map(i => [i.n, i]));
  const slug = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");

  /* mais pedidos */
  $("[data-best]").innerHTML = BEST.map((n, k) => {
    const i = byName[n];
    return `<article class="best__card">
      <div class="best__img"><img src="img/${i.img}.webp" alt="${i.n}: ${i.d}" width="500" height="500" loading="lazy"></div>
      <span class="best__rank" aria-hidden="true">0${k + 1}</span><span class="best__tag">Mais pedido</span>
      <div class="best__body"><div><h3>${i.n}</h3><span class="price">${brl(i.p)}</span></div>
      <button class="add" type="button" data-add="${i.n}" aria-label="Adicionar ${i.n} à comanda">+</button></div>
    </article>`;
  }).join("");

  /* tabs + menu */
  $("[data-tabs]").innerHTML = MENU.map((g, k) =>
    `<button class="tab" role="tab" type="button" aria-selected="${k === 0}" data-tab="${g.id}">${g.nome}</button>`).join("");
  $("[data-menu]").innerHTML = MENU.map(g => `
    <div class="menu__group" id="cat-${g.id}" role="tabpanel" aria-label="${g.nome}">
      <h3>${g.nome}</h3>
      <div class="menu__grid${g.drinks ? " menu__grid--drinks" : ""}">
        ${g.itens.map(i => g.drinks ? `
          <div class="item item--drink"><div><h4>${i.n}</h4><span class="item__price">${brl(i.p)}</span></div>
          <button class="add" type="button" data-add="${i.n}" aria-label="Adicionar ${i.n} à comanda">+</button></div>` : `
          <div class="item">
            ${i.img ? `<div class="item__img"><img src="img/${i.img}.webp" alt="" width="116" height="116" loading="lazy"></div>`
                    : `<div class="item__img item__img--mark" aria-hidden="true"><span>048</span></div>`}
            <div><h4>${i.n}${BEST.includes(i.n) ? '<span class="gem">Mais pedido</span>' : ""}</h4><p>${i.d}</p><span class="item__price">${brl(i.p)}</span></div>
            <button class="add" type="button" data-add="${i.n}" aria-label="Adicionar ${i.n} à comanda">+</button>
          </div>`).join("")}
      </div>
    </div>`).join("");

  const tabs = [...document.querySelectorAll("[data-tab]")];
  tabs.forEach(t => t.addEventListener("click", () => {
    $(`#cat-${t.dataset.tab}`).scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }));
  const groups = [...document.querySelectorAll(".menu__group")];
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const id = e.target.id.replace("cat-", "");
    tabs.forEach(t => {
      const on = t.dataset.tab === id; t.setAttribute("aria-selected", on);
      if (on) { const bar = t.parentElement; bar.scrollTo({ left: t.offsetLeft - (bar.clientWidth - t.offsetWidth) / 2, behavior: "smooth" }); }
    });
  }), { rootMargin: "-40% 0px -55% 0px" });
  groups.forEach(g => io.observe(g));

  /* instagram */
  const fmt = d => { const [y, m, dd] = d.split("-"); return `${dd}/${m}`; };
  $("[data-gram]").innerHTML = GRAM.map(([d, id, kind]) =>
    `<a href="https://www.instagram.com/048_burger/${kind}/${id}/" target="_blank" rel="noopener" aria-label="Abrir publicação de ${fmt(d)} no Instagram">
      <img src="img/ig-${d}-${id}.webp" alt="" loading="lazy">
      <span>${fmt(d)}</span>${kind === "reel" ? '<b aria-hidden="true">▶</b>' : ""}</a>`).join("");

  /* horário: todos os dias 18h–00h; lojinha off no último domingo do mês (bio do Instagram) */
  const now = () => {
    const p = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false, weekday: "short" })
      .formatToParts(new Date()).reduce((a, x) => (a[x.type] = x.value, a), {});
    return { y: +p.year, m: +p.month, d: +p.day, h: +p.hour % 24, min: +p.minute, wd: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(p.weekday) };
  };
  const t = now();
  const lastSunday = (y, m) => { const last = new Date(Date.UTC(y, m, 0)); return last.getUTCDate() - last.getUTCDay(); };
  const offToday = t.wd === 0 && t.d === lastSunday(t.y, t.m);
  const open = !offToday && t.h >= 18;
  const st = $("[data-status]");
  st.classList.add(open ? "is-open" : "is-closed");
  st.querySelector("b").textContent = open ? "Aberto agora · até 00h" : offToday ? "Hoje: lojinha off" : "Abre hoje às 18h";
  const DAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  $("[data-hours]").innerHTML = [1, 2, 3, 4, 5, 6, 0].map(w =>
    `<li class="${w === t.wd ? "is-today" : ""}"><b>${DAYS[w]}</b>18h–00h${w === t.wd ? '<span class="sr">(hoje)</span>' : ""}</li>`).join("");

  /* comanda */
  const cart = new Map();
  const fab = $("[data-open-comanda]"), panel = $("#comanda"), scrim = $("[data-scrim]");
  const orderNo = "Pedido #048-" + String(Math.floor(100 + Math.random() * 900));
  $("[data-order-no]").textContent = orderNo;
  const total = () => [...cart].reduce((s, [n, q]) => s + byName[n].p * q, 0);
  function render() {
    const count = [...cart.values()].reduce((a, b) => a + b, 0);
    if (count && fab.hidden) { fab.hidden = false; fab.classList.add("is-in"); }
    if (!count) fab.hidden = true;
    $("[data-count]").textContent = count;
    $("[data-total-fab]").textContent = $("[data-total]").textContent = brl(total());
    $("[data-empty]").hidden = count > 0;
    $("[data-send]").disabled = count === 0;
    $("[data-items]").innerHTML = [...cart].map(([n, q]) => `
      <li><span class="nm">${n}</span><span class="pr">${brl(byName[n].p * q)}</span>
      <span class="qty"><button type="button" data-dec="${n}" aria-label="Remover um ${n}">−</button><span>${q}</span><button type="button" data-inc="${n}" aria-label="Adicionar mais um ${n}">+</button></span></li>`).join("");
    $("[data-preview]").hidden = true;
  }
  let lastFocus = null;
  const openPanel = () => { lastFocus = document.activeElement; panel.hidden = scrim.hidden = false; fab.setAttribute("aria-expanded", "true"); $("[data-close-comanda]").focus(); };
  const closePanel = () => { panel.hidden = scrim.hidden = true; fab.setAttribute("aria-expanded", "false"); (lastFocus || fab).focus(); };
  document.addEventListener("click", e => {
    const a = e.target.closest("[data-add]");
    if (a) { const n = a.dataset.add; cart.set(n, (cart.get(n) || 0) + 1); render(); a.classList.remove("is-bump"); void a.offsetWidth; a.classList.add("is-bump"); return; }
    const inc = e.target.closest("[data-inc]"); if (inc) { cart.set(inc.dataset.inc, cart.get(inc.dataset.inc) + 1); render(); return; }
    const dec = e.target.closest("[data-dec]");
    if (dec) { const n = dec.dataset.dec, q = cart.get(n) - 1; q > 0 ? cart.set(n, q) : cart.delete(n); render(); if (!cart.size) $("[data-close-comanda]").focus(); return; }
  });
  fab.addEventListener("click", openPanel);
  $("[data-close-comanda]").addEventListener("click", closePanel);
  scrim.addEventListener("click", closePanel);
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !panel.hidden) closePanel(); });
  $("[data-send]").addEventListener("click", () => {
    const lines = [...cart].map(([n, q]) => `${q}x ${n} — ${brl(byName[n].p * q)}`);
    $("[data-message]").textContent = `Olá, 048! Quero fazer um pedido (${orderNo.replace("Pedido ", "")}):\n\n${lines.join("\n")}\n\nTotal sem entrega: ${brl(total())}\nEntrega ou retirada: \nEndereço: `;
    $("[data-preview]").hidden = false;
  });
  render();

  /* inclinação do hero pelo ponteiro */
  const stage = $("[data-tilt]");
  if (stage && matchMedia("(pointer:fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let raf = 0;
    stage.closest(".hero").addEventListener("pointermove", e => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = stage.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        stage.style.setProperty("--tx", (x * 14).toFixed(1) + "px");
        stage.style.setProperty("--ty", (y * 14).toFixed(1) + "px");
      });
    });
  }
})();
