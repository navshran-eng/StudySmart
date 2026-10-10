(() => {
  "use strict";
  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
  const state = { lang: localStorage.getItem("studysmart-language") || "en", board:"all", classLevel:"all", subject:"all", query:"" };
  const translations = {
    en:{
      tagline:"Learn better. Study smarter.",premium:"Premium",heroEyebrow:"YOUR LEARNING SPACE",heroTitle:"Make every chapter easier.",heroText:"Find notes, key questions, answers and practice quizzes — all in one place.",explore:"Explore classes",point1:"Class 1–12",point2:"Multiple boards",point3:"English & Marathi",strip1Title:"Chapter-wise",strip1Sub:"Organised learning",strip2Title:"Practice",strip2Sub:"Check your understanding",strip3Title:"Bilingual",strip3Sub:"English and Marathi UI",learningLibrary:"LEARNING LIBRARY",findResources:"Find your study resources",libraryText:"Choose your board and class, then open a chapter.",searchLabel:"Search notes or chapters",searchPlaceholder:"Try “fractions” or “plants”",boardLabel:"Board",allBoards:"All boards",classLabel:"Class",allClasses:"All classes",subjectLabel:"Subject",allSubjects:"All subjects",clearFilters:"Clear filters",noResults:"No matching chapters found",noResultsText:"Try another search or clear your filters.",contentNoteTitle:"About the library",contentNoteText:"This starter version contains sample learning content. More verified chapters can be added in data.js over time.",simpleSteps:"SIMPLE STEPS",studyFlowTitle:"A better way to revise",step1Title:"Choose your chapter",step1Text:"Filter by board, class and subject to find the right topic.",step2Title:"Learn the concept",step2Text:"Read a concise summary, key points and revision notes.",step3Title:"Test yourself",step3Text:"Answer practice questions and check your score.",premiumLearning:"PREMIUM LEARNING",premiumTitle:"More practice. More confidence.",premiumText:"Plan future premium packs with detailed solutions, printable worksheets and extra mock tests.",premiumBenefit1:"Detailed step-by-step solutions",premiumBenefit2:"Printable revision packs",premiumBenefit3:"Extra practice tests",premiumNote:"Premium checkout is not connected in this demo. Do not collect payments until you set up a secure payment provider and publish clear terms.",premiumPack:"StudySmart Plus",premiumPackText:"A future add-on for learners who want extra practice.",comingSoon:"Coming soon",notifyInterest:"Register interest",noPayment:"No payment is taken on this website.",stayUpdated:"Help us build a better library",stayUpdatedText:"Tell us which class or subject you want next.",suggestTopic:"Suggest a topic",browseNotes:"Browse notes",footerText:"Made for curious learners. Keep learning, one chapter at a time.",footerDisclaimer:"Independent learning resource; not affiliated with any education board.",chapter:"Class",openChapter:"Open chapter",free:"Free",paid:"Premium",noContent:"Content is being prepared for this chapter.",overview:"Chapter overview",keyPoints:"Key points",example:"Example",practiceQuiz:"Practice quiz",checkAnswers:"Check answers",downloadPrint:"Print / Save as PDF",premiumLocked:"This is a premium demo card. The full content and payment system have not been enabled yet.",premiumDemoTitle:"Premium preview",premiumDemoBody:"This sample is marked Premium to demonstrate the interface. No payment is accepted. Add complete original content and connect a secure payment provider before selling anything.",quizScore:"Your score",quizSelect:"Choose an answer for each question first.",correct:"Correct",incorrect:"Not quite",interestTitle:"Help shape StudySmart",interestBody:"Which class and subject should we add next? Send your suggestion through your preferred contact channel once you publish contact details.",suggestTitle:"Suggest a topic",suggestBody:"Write a class and subject (for example, Class 9 — Mathematics).",send:"Prepare suggestion",cancel:"Cancel",copySuggestion:"Copy suggestion",classWord:"Class",boardGeneral:"General / board-neutral",questions:"questions",resources:"resources",results:"Showing",all:"All"
    },
    mr:{
      tagline:"चांगले शिका. हुशारीने अभ्यास करा.",premium:"प्रीमियम",heroEyebrow:"तुमची अभ्यासाची जागा",heroTitle:"प्रत्येक धडा सोपा बनवा.",heroText:"नोट्स, महत्त्वाचे प्रश्न, उत्तरे आणि सराव प्रश्नमंजुषा — सर्व एकाच ठिकाणी.",explore:"वर्ग पाहा",point1:"इयत्ता 1–12",point2:"अनेक बोर्ड",point3:"इंग्रजी आणि मराठी",strip1Title:"धड्यानुसार",strip1Sub:"व्यवस्थित अभ्यास",strip2Title:"सराव",strip2Sub:"तुमची समज तपासा",strip3Title:"द्विभाषिक",strip3Sub:"इंग्रजी आणि मराठी इंटरफेस",learningLibrary:"अभ्यास साहित्य",findResources:"तुमचे अभ्यास साहित्य शोधा",libraryText:"बोर्ड आणि वर्ग निवडा, मग धडा उघडा.",searchLabel:"नोट्स किंवा धडे शोधा",searchPlaceholder:"उदा. अपूर्णांक किंवा वनस्पती",boardLabel:"बोर्ड",allBoards:"सर्व बोर्ड",classLabel:"वर्ग",allClasses:"सर्व वर्ग",subjectLabel:"विषय",allSubjects:"सर्व विषय",clearFilters:"फिल्टर काढा",noResults:"जुळणारे धडे सापडले नाहीत",noResultsText:"दुसरा शब्द शोधा किंवा फिल्टर काढा.",contentNoteTitle:"अभ्यास साहित्याबद्दल",contentNoteText:"या सुरुवातीच्या आवृत्तीत काही नमुना सामग्री आहे. data.js मध्ये पुढे पडताळलेले धडे जोडता येतील.",simpleSteps:"सोप्या पायऱ्या",studyFlowTitle:"उजळणी करण्याची चांगली पद्धत",step1Title:"धडा निवडा",step1Text:"योग्य विषय शोधण्यासाठी बोर्ड, वर्ग आणि विषय निवडा.",step2Title:"संकल्पना समजून घ्या",step2Text:"थोडक्यात सारांश, महत्त्वाचे मुद्दे आणि उजळणी नोट्स वाचा.",step3Title:"स्वतःची चाचणी घ्या",step3Text:"सराव प्रश्न सोडवा आणि गुण तपासा.",premiumLearning:"प्रीमियम अभ्यास",premiumTitle:"अधिक सराव. अधिक आत्मविश्वास.",premiumText:"सविस्तर उत्तरे, प्रिंट करता येणाऱ्या वर्कशीट्स आणि अतिरिक्त चाचण्यांसाठी पुढे प्रीमियम पॅक तयार करा.",premiumBenefit1:"पायरी-पायरीने सविस्तर उत्तरे",premiumBenefit2:"प्रिंट करता येणारे उजळणी पॅक",premiumBenefit3:"अतिरिक्त सराव चाचण्या",premiumNote:"या डेमोमध्ये पेमेंट सुविधा जोडलेली नाही. सुरक्षित पेमेंट सेवा आणि स्पष्ट अटी तयार होईपर्यंत पैसे स्वीकारू नका.",premiumPack:"StudySmart Plus",premiumPackText:"अधिक सरावासाठी भविष्यातील अतिरिक्त पॅक.",comingSoon:"लवकरच",notifyInterest:"रस नोंदवा",noPayment:"या वेबसाइटवर कोणतेही पेमेंट घेतले जात नाही.",stayUpdated:"अधिक चांगले अभ्यास साहित्य तयार करण्यात मदत करा",stayUpdatedText:"पुढे कोणता वर्ग किंवा विषय हवा ते सांगा.",suggestTopic:"विषय सुचवा",browseNotes:"नोट्स पाहा",footerText:"जिज्ञासू विद्यार्थ्यांसाठी. प्रत्येक धड्यासोबत शिकत राहा.",footerDisclaimer:"स्वतंत्र अभ्यास साधन; कोणत्याही शिक्षण मंडळाशी संलग्न नाही.",chapter:"इयत्ता",openChapter:"धडा उघडा",free:"मोफत",paid:"प्रीमियम",noContent:"या धड्याची सामग्री तयार होत आहे.",overview:"धड्याचा आढावा",keyPoints:"महत्त्वाचे मुद्दे",example:"उदाहरण",practiceQuiz:"सराव प्रश्नमंजुषा",checkAnswers:"उत्तरे तपासा",downloadPrint:"प्रिंट / PDF म्हणून जतन करा",premiumLocked:"हा प्रीमियम नमुना आहे. पूर्ण सामग्री आणि पेमेंट प्रणाली अजून सुरू केलेली नाही.",premiumDemoTitle:"प्रीमियम नमुना",premiumDemoBody:"इंटरफेस दाखवण्यासाठी हा नमुना प्रीमियम म्हणून चिन्हांकित केला आहे. पेमेंट घेतले जात नाही. विक्री सुरू करण्यापूर्वी स्वतःची संपूर्ण सामग्री जोडा आणि सुरक्षित पेमेंट सेवा जोडा.",quizScore:"तुमचे गुण",quizSelect:"आधी प्रत्येक प्रश्नाचे उत्तर निवडा.",correct:"बरोबर",incorrect:"पुन्हा प्रयत्न करा",interestTitle:"StudySmart अधिक चांगले बनवा",interestBody:"पुढे कोणता वर्ग आणि विषय जोडावा? वेबसाइटवर संपर्क माहिती दिल्यानंतर तुमची सूचना पाठवा.",suggestTitle:"विषय सुचवा",suggestBody:"वर्ग आणि विषय लिहा (उदा. इयत्ता 9 — गणित).",send:"सूचना तयार करा",cancel:"रद्द करा",copySuggestion:"सूचना कॉपी करा",classWord:"इयत्ता",boardGeneral:"सर्वसाधारण",questions:"प्रश्न",resources:"साहित्य",results:"दाखवत आहे",all:"सर्व"
    }
  };
  const t = key => (translations[state.lang] && translations[state.lang][key]) || translations.en[key] || key;
  const content = item => item[state.lang] || item.en || item;
  const subjectsFallback = ["Mathematics","Science","English","Marathi","Hindi","Social Studies","History","Geography","Physics","Chemistry","Biology","Computer Studies","Economics","Civics"];
  const boardName = b => b==="General" ? t("boardGeneral") : b;
  const className = n => `${t("classWord")} ${n}`;
  function initControls(){
    const classSelect=$("#classSelect");
    for(let n=1;n<=12;n++){const op=document.createElement("option");op.value=String(n);op.textContent=className(n);classSelect.append(op);}
    const allSubjects=[...new Set([...subjectsFallback,...window.STUDYSMART_DATA.map(x=>x.subject)])].sort();
    allSubjects.forEach(s=>{const op=document.createElement("option");op.value=s;op.textContent=s;$("#subjectSelect").append(op);});
    $("#languageSelect").value=state.lang;
  }
  function applyTranslations(){
    document.documentElement.lang=state.lang==="mr"?"mr":"en";
    $$("[data-i18n]").forEach(el=>{const val=t(el.dataset.i18n);if(val)el.textContent=val;});
    $$("[data-i18n-placeholder]").forEach(el=>{el.placeholder=t(el.dataset.i18nPlaceholder);});
    const classSelect=$("#classSelect"), selected=classSelect.value;
    [...classSelect.options].forEach(op=>{if(op.value!=="all")op.textContent=className(op.value);});
    classSelect.options[0].textContent=t("allClasses"); if(selected)classSelect.value=selected;
    const b=$("#boardSelect");b.options[0].textContent=t("allBoards");b.options[b.options.length-1].textContent=t("boardGeneral");
    const s=$("#subjectSelect");s.options[0].textContent=t("allSubjects");
    render();
  }
  function getFiltered(){
    const q=state.query.trim().toLocaleLowerCase();
    return window.STUDYSMART_DATA.filter(item=>{
      if(state.board!=="all"&&item.board!==state.board)return false;
      if(state.classLevel!=="all"&&String(item.classLevel)!==state.classLevel)return false;
      if(state.subject!=="all"&&item.subject!==state.subject)return false;
      if(!q)return true;
      const title=content(item.title), summary=content(item.summary), notes=content(item.notes||{}); 
      const hay=[item.board,item.subject,item.title.en,item.title.mr,item.summary.en,item.summary.mr,notes.overview].filter(Boolean).join(" ").toLocaleLowerCase();
      return hay.includes(q);
    });
  }
  function escapeHtml(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
  function render(){
    const items=getFiltered();const grid=$("#resourceGrid");grid.innerHTML="";
    $("#resultCount").textContent=`${t("results")} ${items.length} ${t("resources")}`;
    $("#emptyState").classList.toggle("hidden",items.length>0);
    items.forEach(item=>{
      const title=content(item.title), summary=content(item.summary);
      const card=document.createElement("article");card.className="resource-card";
      card.innerHTML=`<div class="card-top"><span class="subject-icon">${escapeHtml(item.icon||"📘")}</span><div class="chip-row"><span class="chip">${escapeHtml(boardName(item.board))}</span><span class="chip">${escapeHtml(className(item.classLevel))}</span><span class="chip ${item.level==="Premium"?"premium":""}">${item.level==="Premium"?"👑 "+t("paid"):"✓ "+t("free")}</span></div></div>
        <h3>${escapeHtml(title)}</h3><p>${escapeHtml(summary)}</p><div class="card-bottom"><small>${escapeHtml(item.subject)} · ${item.notes?.[state.lang]?.questions?.length||item.notes?.en?.questions?.length||0} ${t("questions")}</small><button type="button" class="open-card" data-open="${escapeHtml(item.id)}">${t("openChapter")} →</button></div>`;
      grid.append(card);
    });
    $$("[data-open]").forEach(btn=>btn.addEventListener("click",()=>openChapter(btn.dataset.open)));
  }
  function openChapter(id){
    const item=window.STUDYSMART_DATA.find(x=>x.id===id);if(!item)return;
    if(item.level==="Premium"){showMessage(t("premiumDemoTitle"),t("premiumDemoBody"));return;}
    const title=content(item.title), notes=content(item.notes||{});
    $("#dialogMeta").textContent=`${boardName(item.board)} · ${className(item.classLevel)} · ${item.subject}`;
    $("#dialogTitle").textContent=title;
    const body=$("#dialogBody");
    body.innerHTML=`<h3>${t("overview")}</h3><p>${escapeHtml(notes.overview||t("noContent"))}</p>
      <h3>${t("keyPoints")}</h3><ul>${(notes.points||[]).map(p=>`<li>${escapeHtml(p)}</li>`).join("")}</ul>
      ${notes.example?`<div class="note-callout"><strong>${t("example")}:</strong> ${escapeHtml(notes.example)}</div>`:""}
      <h3>${t("practiceQuiz")}</h3><form id="quizForm">${(notes.questions||[]).map((q,i)=>`<fieldset class="quiz-question" data-question="${i}"><p>${i+1}. ${escapeHtml(q.q)}</p>${q.options.map((opt,j)=>`<label class="quiz-option"><input type="radio" name="q${i}" value="${j}"> <span>${escapeHtml(opt)}</span></label>`).join("")}</fieldset>`).join("")}<button class="button button-primary" type="submit">${t("checkAnswers")}</button></form><div id="quizFeedback" aria-live="polite"></div>
      <div class="dialog-actions"><button class="button button-outline" type="button" id="printNotes">${t("downloadPrint")}</button></div>`;
    $("#chapterDialog").showModal();
    $("#quizForm").addEventListener("submit",ev=>{
      ev.preventDefault();const questions=notes.questions||[];let score=0,missing=false;
      questions.forEach((q,i)=>{const picked=$(`input[name="q${i}"]:checked`,ev.currentTarget);if(!picked){missing=true;return;}if(Number(picked.value)===q.answer)score++;});
      if(missing){$("#quizFeedback").className="note-callout";$("#quizFeedback").textContent=t("quizSelect");return;}
      $("#quizFeedback").className="quiz-result";
      $("#quizFeedback").innerHTML=`${t("quizScore")}: ${score}/${questions.length}<ol>${questions.map((q,i)=>`<li>${scoreText(q,i)} — ${escapeHtml(q.explanation||"")}</li>`).join("")}</ol>`;
      function scoreText(q,i){const picked=$(`input[name="q${i}"]:checked`,ev.currentTarget);return Number(picked.value)===q.answer?t("correct"):t("incorrect");}
    });
    $("#printNotes").addEventListener("click",()=>window.print());
  }
  function showMessage(title,body){
    $("#messageTitle").textContent=title;$("#messageBody").textContent=body;$("#messageDialog").showModal();
  }
  function showSuggestion(){
    $("#messageTitle").textContent=t("suggestTitle");
    $("#messageBody").innerHTML=`<p>${t("suggestBody")}</p><label for="suggestInput" class="sr-only">Suggestion</label><input id="suggestInput" class="suggest-input" style="width:100%;padding:12px;border:1px solid #dfe5ef;border-radius:10px" maxlength="140" placeholder="${state.lang==="mr"?"उदा. इयत्ता 9 — गणित":"e.g. Class 9 — Mathematics"}"><div class="dialog-actions"><button class="button button-outline" id="cancelSuggestion" type="button">${t("cancel")}</button><button class="button button-primary" id="copySuggestion" type="button">${t("copySuggestion")}</button></div>`;
    $("#messageDialog").showModal();
    $("#cancelSuggestion").addEventListener("click",()=>$("#messageDialog").close());
    $("#copySuggestion").addEventListener("click",async()=>{
      const value=$("#suggestInput").value.trim();if(!value){$("#suggestInput").focus();return;}
      try{await navigator.clipboard.writeText(`StudySmart topic suggestion: ${value}`);$("#messageBody").innerHTML=`<p>${state.lang==="mr"?"सूचना कॉपी झाली. आता ती तुमच्या संपर्क माध्यमातून पाठवा.":"Suggestion copied. You can now send it through your contact channel."}</p>`;}
      catch{ $("#messageBody").innerHTML=`<p>${escapeHtml(value)}</p><p>${state.lang==="mr"?"वरील मजकूर कॉपी करा.":"Copy the text above."}</p>`;}
    });
  }
  function resetFilters(){state.board="all";state.classLevel="all";state.subject="all";state.query="";$("#boardSelect").value="all";$("#classSelect").value="all";$("#subjectSelect").value="all";$("#searchInput").value="";render();}
  $("#languageSelect").addEventListener("change",e=>{state.lang=e.target.value;localStorage.setItem("studysmart-language",state.lang);applyTranslations();});
  $("#boardSelect").addEventListener("change",e=>{state.board=e.target.value;render();});
  $("#classSelect").addEventListener("change",e=>{state.classLevel=e.target.value;render();});
  $("#subjectSelect").addEventListener("change",e=>{state.subject=e.target.value;render();});
  $("#searchInput").addEventListener("input",e=>{state.query=e.target.value;render();});
  $("#clearFilters").addEventListener("click",resetFilters);
  $("#closeDialog").addEventListener("click",()=>$("#chapterDialog").close());
  $("#closeMessage").addEventListener("click",()=>$("#messageDialog").close());
  $("#premiumButton").addEventListener("click",()=>showMessage(t("interestTitle"),t("interestBody")));
  $("#suggestButton").addEventListener("click",showSuggestion);
  $("#year").textContent=new Date().getFullYear();
  initControls();applyTranslations();
})();
