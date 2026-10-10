(() => {
  const data = window.STUDYSMART_DATA || {};
  const app = document.getElementById("app");
  const body = document.body;
  const params = new URLSearchParams(location.search);
  let lang = localStorage.getItem("studysmart-language") || "en";
  const $ = (s, root=document) => root.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const title = (obj, field) => lang === "mr" ? (obj[field+"_mr"] || obj[field] || "") : (obj[field] || "");
  const subjectsFor = (n) => Object.entries(data[String(n)]?.subjects || {});
  const classUrl = n => `class-${n}.html`;
  const subjectUrl = (n,s) => `subject.html?class=${n}&subject=${encodeURIComponent(s)}`;
  const chapterUrl = (n,s,c) => `chapter.html?class=${n}&subject=${encodeURIComponent(s)}&chapter=${encodeURIComponent(c)}`;
  const backHome = `<div class="breadcrumbs"><a href="index.html">${lang==="mr"?"मुख्यपृष्ठ":"Home"}</a> / `;
  const labels = {
    class: n => lang==="mr" ? `इयत्ता ${n}` : `Class ${n}`,
    subjects: lang==="mr" ? "विषय निवडा" : "Choose a subject",
    chapters: lang==="mr" ? "अभ्यास घटक" : "Study topics",
    open: lang==="mr" ? "अभ्यास सुरू करा →" : "Open notes →",
    summary: lang==="mr" ? "सोप्या भाषेत समजून घ्या" : "Understand the concept",
    key: lang==="mr" ? "महत्त्वाचे मुद्दे" : "Key points",
    practice: lang==="mr" ? "सराव प्रश्न" : "Practice questions",
    answers: lang==="mr" ? "उत्तर पाहण्यासाठी उघडा" : "Open to reveal answer",
    textbook: lang==="mr" ? "अधिकृत पाठ्यपुस्तक तपासा ↗" : "Check official textbook ↗",
    note: lang==="mr" ? "अभ्याससूचना" : "Study note",
    notice: lang==="mr" ? "हे पूरक, मूळ अभ्यास टिपण आहे. धड्यांची अचूक नावे आणि अभ्यासक्रमासाठी सध्याचे बालभारती पाठ्यपुस्तक व शाळेच्या सूचना तपासा." : "These are original supplementary notes. Verify exact chapter names and syllabus against the current prescribed textbook and your school's instructions."
  };
  function updateToggle(){
    const b=$("#languageToggle");
    if(b){b.textContent=lang==="mr"?"English":"मराठी"; b.onclick=()=>{lang=lang==="en"?"mr":"en";localStorage.setItem("studysmart-language",lang);render();};}
  }
  function headerFoot(){
    const y=$("#year"); if(y)y.textContent=new Date().getFullYear();
  }
  function renderHome(){
    $("#classGrid").innerHTML = Object.keys(data).map(n=>`<a class="class-card" href="${classUrl(n)}" data-class-card="${n}">
      <div class="class-top"><span class="class-num">${n}</span><span class="class-icon">${Number(n)<=5?"🌱":Number(n)<=10?"📘":"🎓"}</span></div>
      <h3>${labels.class(n)}</h3><p>${Number(n)<=5?(lang==="mr"?"प्राथमिक विभाग":"Primary level"):Number(n)<=10?(lang==="mr"?"माध्यमिक विभाग":"Secondary level"):(lang==="mr"?"उच्च माध्यमिक विभाग":"Higher secondary")}</p>
      <span class="arrow">${lang==="mr"?"विषय पहा →":"Explore subjects →"}</span></a>`).join("");
    const search=$("#classSearch");
    if(search){search.oninput=()=>{const q=search.value.toLowerCase().trim();document.querySelectorAll("[data-class-card]").forEach(card=>card.hidden=!(`class ${card.dataset.classCard} इयत्ता ${card.dataset.classCard}`.toLowerCase().includes(q)));};}
  }
  function renderClass(){
    const n=body.dataset.class || params.get("class") || "1";
    const info=data[String(n)];
    if(!info){app.innerHTML='<div class="empty">Class not found. <a href="index.html">Return home</a></div>';return;}
    app.innerHTML=`<section class="page-hero">${backHome}${labels.class(n)}</div><span class="eyebrow">MAHARASHTRA STATE BOARD</span><h1>${labels.class(n)} ${lang==="mr"?"अभ्यास साहित्य":"study resources"}</h1><p>${lang==="mr"?"विषय निवडा आणि संकल्पना, महत्त्वाचे मुद्दे व सराव प्रश्नांचा अभ्यास करा.":"Choose a subject to study key concepts, important points, and practice questions."}</p></section>
    <div class="section-head"><div><span class="eyebrow">${lang==="mr"?"तुमचा अभ्यास":"YOUR LEARNING PATH"}</span><h2>${labels.subjects}</h2><p>${lang==="mr"?"प्रत्येक विषयात उपलब्ध अभ्यास घटक उघडा.":"Open a subject to view available study topics."}</p></div></div>
    <div class="subject-grid">${subjectsFor(n).map(([s,obj],i)=>`<article class="subject-card"><span class="subject-symbol">${["➗","🔬","🔤","📝","🌍"][i%5]}</span><h2>${lang==="mr"?(obj.label_mr||s):s}</h2><p>${obj.chapters.length} ${lang==="mr"?"अभ्यास घटक":"study topic(s) available"}</p><a class="button primary" href="${subjectUrl(n,s)}">${labels.open}</a></article>`).join("")}</div>
    <div class="disclaimer"><strong>${labels.note}</strong><p>${labels.notice}</p></div>`;
  }
  function renderSubject(){
    const n=params.get("class")||"1", s=params.get("subject")||"Mathematics";
    const subj=data[String(n)]?.subjects?.[s];
    if(!subj){app.innerHTML='<div class="empty">Subject not found. <a href="index.html">Return home</a></div>';return;}
    app.innerHTML=`<section class="page-hero">${backHome}<a href="${classUrl(n)}">${labels.class(n)}</a> / ${esc(lang==="mr"?(subj.label_mr||s):s)}</div><span class="eyebrow">${labels.class(n).toUpperCase()}</span><h1>${esc(lang==="mr"?(subj.label_mr||s):s)}</h1><p>${lang==="mr"?"या विषयातील अभ्यास घटक निवडा.":"Select a study topic to read the notes and practise."}</p></section>
    <div class="section-head"><div><span class="eyebrow">${lang==="mr"?"वाचा आणि सराव करा":"READ & PRACTISE"}</span><h2>${labels.chapters}</h2></div></div>
    <div class="chapter-list">${subj.chapters.map((c,i)=>`<article class="chapter-card"><span class="tag">${lang==="mr"?"अभ्यास घटक":"TOPIC"} ${i+1}</span><h2>${esc(title(c,"title"))}</h2><p>${esc(title(c,"summary")).slice(0,155)}${title(c,"summary").length>155?"…":""}</p><a class="button primary" href="${chapterUrl(n,s,c.id)}">${labels.open}</a></article>`).join("")}</div>
    <div class="disclaimer"><strong>${labels.note}</strong><p>${labels.notice}</p></div>`;
  }
  function renderChapter(){
    const n=params.get("class")||"1", s=params.get("subject")||"Mathematics", cid=params.get("chapter")||"";
    const subj=data[String(n)]?.subjects?.[s];
    const ch=subj?.chapters?.find(c=>c.id===cid);
    if(!ch){app.innerHTML='<div class="empty">Study topic not found. <a href="index.html">Return home</a></div>';return;}
    const points=lang==="mr"?ch.points_mr:ch.points;
    const qs=lang==="mr"?ch.questions_mr:ch.questions;
    app.innerHTML=`<section class="page-hero">${backHome}<a href="${classUrl(n)}">${labels.class(n)}</a> / <a href="${subjectUrl(n,s)}">${esc(lang==="mr"?(subj.label_mr||s):s)}</a> / ${esc(title(ch,"title"))}</div><span class="eyebrow">${labels.class(n)} • ${esc(lang==="mr"?(subj.label_mr||s):s)}</span><h1>${esc(title(ch,"title"))}</h1><p>${lang==="mr"?"संकल्पना समजून घ्या, मुख्य मुद्दे वाचा आणि स्वतःची तयारी तपासा.":"Understand the idea, review key points, and check your learning."}</p></section>
    <div class="note-layout"><article class="note-main"><span class="pill">${labels.summary}</span><h2>${lang==="mr"?"संकल्पना":"Concept summary"}</h2><p>${esc(title(ch,"summary"))}</p><h2>${labels.key}</h2><ul>${(points||[]).map(p=>`<li>${esc(p)}</li>`).join("")}</ul><hr style="border:0;border-top:1px solid var(--line);margin:24px 0"><h2>${labels.practice}</h2>${(qs||[]).map((q,i)=>`<details class="question"><summary>${i+1}. ${esc(q[0])}</summary><p><strong>${lang==="mr"?"उत्तर":"Answer"}:</strong> ${esc(q[1])}</p></details>`).join("")}</article>
    <aside class="note-side"><div class="side-card"><h3>🧠 ${lang==="mr"?"अभ्यासाची पद्धत":"Study method"}</h3><ol><li>${lang==="mr"?"एकदा संपूर्ण टिपण वाचा.":"Read the notes once."}</li><li>${lang==="mr"?"पुस्तक बंद करून मुख्य मुद्दे आठवा.":"Recall key points without looking."}</li><li>${lang==="mr"?"प्रश्न सोडवा आणि उत्तर तपासा.":"Answer the questions and check."}</li></ol></div><div class="side-card"><h3>📗 ${lang==="mr"?"पाठ्यपुस्तक":"Textbook"}</h3><p style="font-size:12px;color:var(--muted)">${lang==="mr"?"अचूक अभ्यासक्रम आणि धड्यांसाठी अधिकृत पुस्तक वापरा.":"Use the prescribed textbook for exact syllabus coverage."}</p><a class="button secondary" href="https://ebooks.eprescribed textbook.in/ebook.aspx" target="_blank" rel="noopener">${labels.textbook}</a></div></aside></div>
    <div class="disclaimer"><strong>${labels.note}</strong><p>${labels.notice}</p></div>`;
  }
  function render(){
    updateToggle();headerFoot();
    const page=body.dataset.page;
    if(page==="home")renderHome(); else if(page==="class")renderClass(); else if(page==="subject")renderSubject(); else if(page==="chapter")renderChapter();
    updateToggle();
  }
  render();
})();