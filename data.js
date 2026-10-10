/* StudySmart content catalogue.
   Add chapters by appending objects to STUDYSMART_DATA.
   Keep IDs unique. Use only content you created, licensed, or are permitted to publish. */
window.STUDYSMART_DATA = [
  {
    id:"general-math-fractions", board:"General", classLevel:5, subject:"Mathematics",
    title:{en:"Understanding Fractions",mr:"अपूर्णांक समजून घेऊया"},
    summary:{en:"Learn what fractions represent, how to read them, and how to compare simple fractions.",mr:"अपूर्णांक म्हणजे काय, ते कसे वाचायचे आणि सोप्या अपूर्णांकांची तुलना कशी करायची हे शिका."},
    level:"Free", icon:"➗", updated:"Starter sample",
    notes:{
      en:{overview:"A fraction represents equal parts of a whole. It is written as a/b, where a is the numerator and b is the denominator. The denominator cannot be zero.",
        points:["The numerator tells how many parts are being considered.","The denominator tells how many equal parts make the whole.","For fractions with the same denominator, the fraction with the larger numerator is larger.","Equivalent fractions name the same amount, for example 1/2 = 2/4."],
        example:"A pizza is divided into 4 equal slices. If you eat 1 slice, you ate 1/4 of the pizza.",
        questions:[{q:"In 3/5, what is the denominator?",options:["3","5","8"],answer:1,explanation:"The denominator is the bottom number: 5."},{q:"Which fraction is equivalent to 1/2?",options:["2/3","2/4","3/4"],answer:1,explanation:"Multiplying the numerator and denominator of 1/2 by 2 gives 2/4."},{q:"Which is larger: 2/7 or 5/7?",options:["2/7","5/7","They are equal"],answer:1,explanation:"The denominators are equal, so compare numerators. 5 is larger than 2."}]},
      mr:{overview:"अपूर्णांक हा पूर्ण वस्तूच्या समान भागांपैकी किती भाग घेतले आहेत हे दाखवतो. तो a/b असा लिहितात. येथे a हा अंश आणि b हा छेद असतो. छेद शून्य असू शकत नाही.",
        points:["अंश म्हणजे घेतलेल्या भागांची संख्या.","छेद म्हणजे पूर्ण वस्तूचे केलेले समान भाग.","छेद समान असतील, तर मोठा अंश असलेला अपूर्णांक मोठा असतो.","सममूल्य अपूर्णांक वेगवेगळे दिसले तरी समान मूल्य दाखवतात. उदाहरण: 1/2 = 2/4."],
        example:"एक पिझ्झा 4 समान भागांत विभागला. त्यातील 1 भाग खाल्ला, तर खाल्लेला भाग 1/4 आहे.",
        questions:[{q:"3/5 मध्ये छेद कोणता?",options:["3","5","8"],answer:1,explanation:"छेद हा खाली लिहिलेला अंक असतो: 5."},{q:"1/2 चा सममूल्य अपूर्णांक कोणता?",options:["2/3","2/4","3/4"],answer:1,explanation:"1/2 चा अंश आणि छेद दोन्ही 2 ने गुणल्यास 2/4 मिळतो."},{q:"2/7 आणि 5/7 यांपैकी मोठा कोणता?",options:["2/7","5/7","दोन्ही समान"],answer:1,explanation:"छेद समान आहेत. अंश 5 हा 2 पेक्षा मोठा आहे."}]}
    }
  },
  {
    id:"general-science-plants", board:"General", classLevel:6, subject:"Science",
    title:{en:"Parts of a Plant",mr:"वनस्पतीचे भाग"},
    summary:{en:"Explore roots, stems, leaves, flowers, fruits and seeds and learn how each part helps a plant.",mr:"मुळे, खोड, पाने, फुले, फळे आणि बिया यांची ओळख करून प्रत्येक भागाचे कार्य समजून घ्या."},
    level:"Free", icon:"🌱", updated:"Starter sample",
    notes:{
      en:{overview:"Most familiar plants have roots, a stem and leaves. Many plants also produce flowers, fruits and seeds. Each part has a role in the plant's growth and survival.",
        points:["Roots usually anchor the plant and absorb water and minerals from soil.","The stem supports the plant and transports water and food.","Leaves are major sites of photosynthesis in green plants.","Flowers take part in reproduction; fruits often protect seeds."],
        example:"A bean plant has roots that absorb water, a stem that supports the leaves, and leaves that use sunlight to make food.",
        questions:[{q:"Which plant part commonly absorbs water from soil?",options:["Flower","Root","Fruit"],answer:1,explanation:"Roots absorb water and minerals from the soil."},{q:"Which process helps green leaves make food?",options:["Photosynthesis","Evaporation only","Digestion"],answer:0,explanation:"Photosynthesis uses light energy to make sugars from carbon dioxide and water."},{q:"Which part often protects seeds?",options:["Fruit","Root hair only","Stem tip only"],answer:0,explanation:"In many flowering plants, the fruit surrounds and helps protect seeds."}]},
      mr:{overview:"बहुतेक परिचित वनस्पतींना मुळे, खोड आणि पाने असतात. अनेक वनस्पतींना फुले, फळे आणि बियाही येतात. प्रत्येक भाग वनस्पतीच्या वाढीस आणि जगण्यास मदत करतो.",
        points:["मुळे वनस्पतीला जमिनीत आधार देतात आणि पाणी व खनिजे शोषतात.","खोड वनस्पतीला आधार देते आणि पाणी व अन्न वाहून नेण्यास मदत करते.","हिरव्या पानांमध्ये प्रकाशसंश्लेषणाची प्रक्रिया मोठ्या प्रमाणावर होते.","फुले प्रजननात सहभागी होतात; अनेक वनस्पतींमध्ये फळे बियांचे संरक्षण करतात."],
        example:"बीन्सच्या वनस्पतीची मुळे पाणी शोषतात, खोड पानांना आधार देते आणि पाने सूर्यप्रकाशाच्या मदतीने अन्न तयार करतात.",
        questions:[{q:"जमिनीतून पाणी प्रामुख्याने कोणता भाग शोषतो?",options:["फूल","मूळ","फळ"],answer:1,explanation:"मुळे जमिनीतून पाणी आणि खनिजे शोषतात."},{q:"हिरवी पाने अन्न तयार करण्यासाठी कोणती प्रक्रिया वापरतात?",options:["प्रकाशसंश्लेषण","फक्त बाष्पीभवन","पचन"],answer:0,explanation:"प्रकाशसंश्लेषणात प्रकाशाच्या ऊर्जेचा वापर करून अन्न तयार होते."},{q:"अनेक वनस्पतींमध्ये बियांचे संरक्षण कोणता भाग करतो?",options:["फळ","फक्त मूळकेस","फक्त खोडाचे टोक"],answer:0,explanation:"अनेक फुलझाडांमध्ये फळ बियांभोवती असते आणि त्यांचे संरक्षण करते."}]}
    }
  },
  {
    id:"general-english-parts-speech", board:"General", classLevel:7, subject:"English",
    title:{en:"Parts of Speech: A Quick Guide",mr:"Parts of Speech: थोडक्यात मार्गदर्शक"},
    summary:{en:"Review nouns, pronouns, verbs, adjectives and adverbs with short examples.",mr:"Noun, Pronoun, Verb, Adjective आणि Adverb यांची उदाहरणांसह उजळणी करा."},
    level:"Free", icon:"🔤", updated:"Starter sample",
    notes:{
      en:{overview:"Parts of speech describe the jobs that words do in a sentence. A word's role can depend on how it is used in context.",
        points:["Noun: names a person, place, thing or idea — teacher, Pune, book.","Pronoun: replaces a noun — I, you, they.","Verb: expresses an action or state — run, think, is.","Adjective: describes a noun — bright, tall.","Adverb: often describes a verb, adjective or another adverb — quickly, very."],
        example:"In “The bright bird sings sweetly,” bright is an adjective, bird is a noun, sings is a verb and sweetly is an adverb.",
        questions:[{q:"Which word is a verb in “Mira reads daily”?",options:["Mira","reads","daily"],answer:1,explanation:"Reads expresses the action."},{q:"Which word is an adjective in “a tall tree”?",options:["a","tall","tree"],answer:1,explanation:"Tall describes the noun tree."},{q:"Which is a pronoun?",options:["They","Garden","Write"],answer:0,explanation:"They can stand in place of a noun."}]},
      mr:{overview:"Parts of Speech म्हणजे वाक्यात शब्द कोणते काम करतो हे दर्शवणारे प्रकार. शब्दाचा प्रकार तो वाक्यात कसा वापरला आहे यावरही अवलंबून असतो.",
        points:["Noun (नाम): व्यक्ती, ठिकाण, वस्तू किंवा कल्पनेचे नाव — teacher, Pune, book.","Pronoun (सर्वनाम): नामाऐवजी वापरला जाणारा शब्द — I, you, they.","Verb (क्रियापद): कृती किंवा स्थिती दाखवतो — run, think, is.","Adjective (विशेषण): नामाचे वर्णन करतो — bright, tall.","Adverb (क्रियाविशेषण): क्रियापद किंवा विशेषणाबद्दल अधिक माहिती देतो — quickly, very."],
        example:"“The bright bird sings sweetly” या वाक्यात bright हे adjective, bird हे noun, sings हे verb आणि sweetly हे adverb आहे.",
        questions:[{q:"“Mira reads daily” या वाक्यात verb कोणता?",options:["Mira","reads","daily"],answer:1,explanation:"Reads ही कृती दर्शवते."},{q:"“a tall tree” मध्ये adjective कोणता?",options:["a","tall","tree"],answer:1,explanation:"Tall हे tree या नामाचे वर्णन करते."},{q:"Pronoun कोणता?",options:["They","Garden","Write"],answer:0,explanation:"They हा नामाऐवजी वापरला जाणारा शब्द आहे."}]}
    }
  },
  {
    id:"general-computer-cyber-safety", board:"General", classLevel:8, subject:"Computer Studies",
    title:{en:"Staying Safe Online",mr:"इंटरनेटवर सुरक्षित कसे राहावे"},
    summary:{en:"Learn practical habits for protecting accounts, spotting suspicious messages and keeping personal information private.",mr:"खाती सुरक्षित ठेवणे, संशयास्पद संदेश ओळखणे आणि वैयक्तिक माहिती गोपनीय ठेवणे याच्या सवयी शिका."},
    level:"Free", icon:"🛡️", updated:"Starter sample",
    notes:{
      en:{overview:"Online safety means using digital services in ways that reduce risks to your accounts, devices and personal information.",
        points:["Use long, unique passwords and a password manager where possible.","Turn on multi-factor authentication for important accounts.","Do not open unexpected links or attachments; verify the sender through another channel.","Never share passwords or one-time passcodes with someone who contacts you unexpectedly.","Keep devices and apps updated."],
        example:"If a message claims your account will close unless you click a link immediately, visit the official website directly instead of using the link.",
        questions:[{q:"What should you do with an unexpected account-warning link?",options:["Click quickly","Verify it independently","Forward it to everyone"],answer:1,explanation:"Check through the official app or website instead of trusting an unexpected link."},{q:"Should you share a one-time passcode with a caller?",options:["Yes, if they sound official","No","Only on weekends"],answer:1,explanation:"Keep one-time passcodes private."},{q:"Which is a safer password habit?",options:["Reuse one password everywhere","Use unique passwords","Post passwords in a group chat"],answer:1,explanation:"Unique passwords reduce the impact if one service is compromised."}]},
      mr:{overview:"ऑनलाइन सुरक्षित राहणे म्हणजे डिजिटल सेवा वापरताना आपली खाती, उपकरणे आणि वैयक्तिक माहिती यांच्यावरील धोका कमी करणे.",
        points:["लांब आणि प्रत्येक खात्यासाठी वेगळे पासवर्ड वापरा.","महत्त्वाच्या खात्यांवर बहु-घटक प्रमाणीकरण सुरू करा.","अनपेक्षित लिंक किंवा फाइल उघडण्यापूर्वी पाठवणाऱ्याची स्वतंत्रपणे खात्री करा.","अनपेक्षितपणे संपर्क करणाऱ्या व्यक्तीला पासवर्ड किंवा OTP देऊ नका.","मोबाइल, संगणक आणि ॲप्स अद्ययावत ठेवा."],
        example:"एखाद्या संदेशात लिंकवर लगेच क्लिक न केल्यास खाते बंद होईल असे म्हटले असेल, तर त्या लिंकऐवजी अधिकृत वेबसाइट स्वतः उघडा.",
        questions:[{q:"अनपेक्षित खाते-संबंधित लिंक आल्यास काय करावे?",options:["लगेच क्लिक करावे","स्वतंत्रपणे खात्री करावी","सर्वांना पाठवावी"],answer:1,explanation:"अनपेक्षित लिंकवर विश्वास ठेवण्याऐवजी अधिकृत ॲप किंवा वेबसाइट तपासा."},{q:"फोन करणाऱ्याला OTP द्यावा का?",options:["हो, तो अधिकृत वाटत असेल तर","नाही","फक्त रविवारी"],answer:1,explanation:"OTP गोपनीय ठेवा."},{q:"पासवर्डची सुरक्षित सवय कोणती?",options:["सर्वत्र एकच पासवर्ड","प्रत्येक खात्यासाठी वेगळा पासवर्ड","ग्रुप चॅटमध्ये पासवर्ड टाकणे"],answer:1,explanation:"वेगळे पासवर्ड वापरल्याने एका सेवेत समस्या झाल्यास इतर खाती सुरक्षित राहण्यास मदत होते."}]}
    }
  },
  {
    id:"cbse-class-10-science-sample-premium", board:"CBSE", classLevel:10, subject:"Science",
    title:{en:"Sample: Chemical Reactions",mr:"नमुना: रासायनिक अभिक्रिया"},
    summary:{en:"A sample premium chapter card showing how paid resources can be labelled in the catalogue.",mr:"सशुल्क अभ्याससामग्रीला यादीत कसे दाखवता येईल हे दर्शवणारे नमुना प्रकरण."},
    level:"Premium", icon:"🧪", updated:"Demo only",
    notes:{
      en:{overview:"This is a layout demonstration, not a complete or officially verified chapter. Replace it with original, checked notes before publishing.",points:["Identify reactants and products.","Balance equations by conserving the number of atoms.","Add appropriate reaction types and examples after checking the relevant syllabus."],example:"Demo example: 2H₂ + O₂ → 2H₂O is balanced because each side contains four hydrogen atoms and two oxygen atoms.",questions:[{q:"What must be conserved when balancing a chemical equation?",options:["Number of atoms of each element","Font size","Page count"],answer:0,explanation:"A balanced equation has the same number of atoms of each element on both sides."}]},
      mr:{overview:"हे संपूर्ण किंवा अधिकृतरीत्या पडताळलेले प्रकरण नाही; सशुल्क सामग्री कशी दाखवता येईल यासाठीचा नमुना आहे. प्रकाशित करण्यापूर्वी स्वतःच्या, तपासलेल्या नोट्सने बदला.",points:["अभिकारके आणि उत्पादने ओळखा.","प्रत्येक मूलद्रव्याच्या अणूंची संख्या समान ठेवून समीकरण संतुलित करा.","अभ्यासक्रम तपासून अभिक्रियांचे प्रकार आणि उदाहरणे जोडा."],example:"नमुना: 2H₂ + O₂ → 2H₂O हे संतुलित समीकरण आहे; दोन्ही बाजूंना हायड्रोजनचे चार आणि ऑक्सिजनचे दोन अणू आहेत.",questions:[{q:"रासायनिक समीकरण संतुलित करताना काय समान ठेवले पाहिजे?",options:["प्रत्येक मूलद्रव्याच्या अणूंची संख्या","फॉन्टचा आकार","पानांची संख्या"],answer:0,explanation:"संतुलित समीकरणात दोन्ही बाजूंना प्रत्येक मूलद्रव्याच्या अणूंची संख्या समान असते."}]}
    }
  }
];
