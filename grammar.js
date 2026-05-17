// JLPT Grammar — N5 (Genki L1-12) + N4 (Genki II L13-20 core)
// Each point: { pattern, romaji, meaning, structure, explanation, examples:[{jp,romaji,en,hi}] }

const GRAMMAR = {
  N5: {
    1: {
      title: "Introductions & Basics",
      points: [
        {
          pattern: "X は Y です",
          romaji: "X wa Y desu",
          meaning: "X is Y",
          structure: "[Topic] は [Description] です",
          explanation: "The fundamental copula. は (wa) marks the topic — what the sentence is about. です is the polite copula 'is/am/are'. Japanese has no plural marking; number is inferred from context. In casual speech both topic and です can be dropped.",
          examples: [
            { jp: "私はアンディです。", romaji: "Watashi wa Andii desu.", en: "I am Andy.", hi: "मैं Andy हूँ।" },
            { jp: "バナナは甘いです。", romaji: "Banana wa amai desu.", en: "Bananas are sweet.", hi: "केले मीठे होते हैं।" }
          ]
        },
        {
          pattern: "〜か",
          romaji: "~ka",
          meaning: "Question marker",
          structure: "[Statement] + か",
          explanation: "Add か to the end of any polite statement to make a yes/no question. Word order stays the same — か acts as a spoken question mark. In casual speech, drop か and use rising intonation instead.",
          examples: [
            { jp: "今日は日曜日ですか。", romaji: "Kyou wa nichiyoubi desu ka?", en: "Is today Sunday?", hi: "क्या आज रविवार है?" },
            { jp: "留学生ですか。", romaji: "Ryuugakusei desu ka?", en: "Are you an international student?", hi: "क्या आप विदेशी छात्र हैं?" }
          ]
        },
        {
          pattern: "Noun A の Noun B",
          romaji: "Noun A no Noun B",
          meaning: "A's B / B of A",
          structure: "[Noun A] の [Noun B]",
          explanation: "の connects two nouns: A modifies B. Used for possession (A's B) or classification (B belonging to category A). The main noun always comes last. Multiple の can be chained.",
          examples: [
            { jp: "私の携帯です。", romaji: "Watashi no keitai desu.", en: "It's my phone.", hi: "यह मेरा फ़ोन है।" },
            { jp: "幼稚園の先生です。", romaji: "Youchien no sensei desu.", en: "She's a kindergarten teacher.", hi: "वह किंडरगार्टन की शिक्षिका हैं।" }
          ]
        },
        {
          pattern: "〜じん (Nationality)",
          romaji: "~jin",
          meaning: "Person from ~ / ~ese / ~ian",
          structure: "[Country] + 人(じん)",
          explanation: "The suffix 人 (jin) attaches to a country name to mean 'a person from that country'. アメリカ人 = American, 日本人 = Japanese, インド人 = Indian. Used with どこの人ですか to ask where someone is from.",
          examples: [
            { jp: "私はインド人です。", romaji: "Watashi wa Indo-jin desu.", en: "I am Indian.", hi: "मैं भारतीय हूँ।" },
            { jp: "どこの人ですか。", romaji: "Doko no hito desu ka?", en: "Where are you from?", hi: "आप कहाँ के हैं?" }
          ]
        }
      ]
    },
    2: {
      title: "Demonstratives & Negatives",
      points: [
        {
          pattern: "これ / それ / あれ / どれ",
          romaji: "Kore / Sore / Are / Dore",
          meaning: "This / That (near you) / That over there / Which one",
          structure: "これ・それ・あれ・どれ + は + [Noun] + です",
          explanation: "Standalone demonstrative pronouns. これ = near speaker, それ = near listener, あれ = far from both, どれ = which one (3+ items). These stand alone — do NOT attach them directly to a noun.",
          examples: [
            { jp: "これは何ですか。", romaji: "Kore wa nan desu ka?", en: "What is this?", hi: "यह क्या है?" },
            { jp: "それはピカチュウです。", romaji: "Sore wa Pikachuu desu.", en: "That is Pikachu.", hi: "वह पिकाचू है।" }
          ]
        },
        {
          pattern: "この / その / あの / どの + Noun",
          romaji: "Kono / Sono / Ano / Dono + Noun",
          meaning: "This / That / That over there / Which [Noun]",
          structure: "この・その・あの・どの + [Noun]",
          explanation: "Demonstrative adjectives — MUST be followed by a noun. Same distance rules as これ/それ/あれ. この本 = this book, どの本 = which book. You cannot say この alone.",
          examples: [
            { jp: "この本はいくらですか。", romaji: "Kono hon wa ikura desu ka?", en: "How much is this book?", hi: "यह किताब कितने की है?" },
            { jp: "あの人はだれですか。", romaji: "Ano hito wa dare desu ka?", en: "Who is that person over there?", hi: "वह (दूर वाला) व्यक्ति कौन है?" }
          ]
        },
        {
          pattern: "ここ / そこ / あそこ / どこ",
          romaji: "Koko / Soko / Asoko / Doko",
          meaning: "Here / There / Over there / Where",
          structure: "[Location word] は [Noun] です / [Location word] に / で [Verb]",
          explanation: "Location pronouns for places. Note: あそこ (asoko) — NOT ako. ここ = where speaker is, そこ = where listener is, あそこ = far from both, どこ = where?",
          examples: [
            { jp: "トイレはどこですか。", romaji: "Toire wa doko desu ka?", en: "Where is the bathroom?", hi: "शौचालय कहाँ है?" },
            { jp: "ここはどこですか。", romaji: "Koko wa doko desu ka?", en: "Where is this place?", hi: "यह जगह कहाँ है?" }
          ]
        },
        {
          pattern: "だれの + Noun",
          romaji: "Dare no + Noun",
          meaning: "Whose [Noun]?",
          structure: "だれ + の + [Noun] + ですか",
          explanation: "Combine だれ (who) with the の possession particle to ask 'whose'. Same の structure from Lesson 1. だれのかばん = whose bag.",
          examples: [
            { jp: "これはだれのかばんですか。", romaji: "Kore wa dare no kaban desu ka?", en: "Whose bag is this?", hi: "यह किसका बैग है?" },
            { jp: "私のです。", romaji: "Watashi no desu.", en: "It's mine.", hi: "यह मेरा है।" }
          ]
        },
        {
          pattern: "〜も",
          romaji: "~mo",
          meaning: "Also / Too",
          structure: "[Topic] も [Description]",
          explanation: "も replaces は to say 'also/too'. With movement particles に/で/へ, add も AFTER the particle (にも, でも) — do not replace the particle.",
          examples: [
            { jp: "バナナは甘いです。りんごも甘いです。", romaji: "Banana wa amai desu. Ringo mo amai desu.", en: "Bananas are sweet. Apples are also sweet.", hi: "केले मीठे हैं। सेब भी मीठे हैं।" },
            { jp: "京都にも行きました。", romaji: "Kyouto ni mo ikimashita.", en: "I went to Kyoto too.", hi: "मैं क्योटो भी गया।" }
          ]
        },
        {
          pattern: "〜じゃないです",
          romaji: "~ja nai desu",
          meaning: "Is not ~ / Am not ~",
          structure: "[Noun / Na-adj] + じゃないです",
          explanation: "Negate a copula sentence: replace です with じゃないです. Formal written equivalent: ではありません (dewa arimasen). じゃないです is far more common in speech.",
          examples: [
            { jp: "今日は月曜日じゃないです。", romaji: "Kyou wa getsuyoubi ja nai desu.", en: "Today is not Monday.", hi: "आज सोमवार नहीं है।" },
            { jp: "私は学生じゃないです。", romaji: "Watashi wa gakusei ja nai desu.", en: "I am not a student.", hi: "मैं छात्र नहीं हूँ।" }
          ]
        },
        {
          pattern: "〜ね / 〜よ",
          romaji: "~ne / ~yo",
          meaning: "Right? / Isn't it? (ね) · I'm telling you! (よ)",
          structure: "[Sentence] + ね or よ",
          explanation: "ね seeks agreement ('right?', 'isn't it?'). よ asserts information the listener probably doesn't know ('I'm telling you!'). Overusing よ can sound pushy; overusing ね can sound clingy.",
          examples: [
            { jp: "この本は高いですね。", romaji: "Kono hon wa takai desu ne.", en: "This book is expensive, isn't it?", hi: "यह किताब महँगी है, है ना?" },
            { jp: "僕のバッグですよ。", romaji: "Boku no baggu desu yo.", en: "It's my bag, I tell you!", hi: "यह मेरा बैग है!" }
          ]
        }
      ]
    },
    3: {
      title: "Polite Verbs & Particles",
      points: [
        {
          pattern: "〜ます / 〜ません",
          romaji: "~masu / ~masen",
          meaning: "Polite present/future: do ~ / do not ~",
          structure: "[Verb stem] + ます (pos.) / ません (neg.)",
          explanation: "Polite verb form. U-verbs: change final U→I sound + ます (飲む→飲み+ます). Ru-verbs: drop る + ます (食べる→食べ+ます). Irregulars: くる→きます, する→します. ます covers habitual and future actions.",
          examples: [
            { jp: "毎日コーヒーを飲みます。", romaji: "Mainichi koohii o nomimasu.", en: "I drink coffee every day.", hi: "मैं हर रोज़ कॉफ़ी पीता हूँ।" },
            { jp: "お酒は飲みません。", romaji: "Osake wa nomimasen.", en: "I don't drink alcohol.", hi: "मैं शराब नहीं पीता।" }
          ]
        },
        {
          pattern: "を / で / に / へ",
          romaji: "o / de / ni / e",
          meaning: "Object / Location of action / Time or Destination / Direction",
          structure: "[Noun] + particle + Verb",
          explanation: "を marks the direct object. で marks where an action happens. に marks specific time (七時に) or movement destination. へ marks direction of movement — interchangeable with movement に.",
          examples: [
            { jp: "コーヒーを飲みます。", romaji: "Koohii o nomimasu.", en: "I drink coffee. (を = object)", hi: "मैं कॉफ़ी पीता हूँ।" },
            { jp: "家でコーヒーを飲みます。", romaji: "Ie de koohii o nomimasu.", en: "I drink coffee at home. (で = location)", hi: "मैं घर पर कॉफ़ी पीता हूँ।" }
          ]
        },
        {
          pattern: "に — When to Use It",
          romaji: "ni — time rules",
          meaning: "Use に for specific (clock/calendar) times; skip for relative times",
          structure: "[Specific time] に | [Relative time: 今日・明日・毎日] — no に",
          explanation: "Rule of thumb: if the time is on a calendar or clock (objective), use に. If it's relative to 'now' (今日, 明日, 毎日, 来週), skip に. Parts of the day (朝, 週末) — に is optional.",
          examples: [
            { jp: "七時にコーヒーを飲みます。", romaji: "Shichi-ji ni koohii o nomimasu.", en: "I drink coffee at 7 o'clock. (に required)", hi: "मैं सात बजे कॉफ़ी पीता हूँ।" },
            { jp: "今日コーヒーを飲みます。", romaji: "Kyou koohii o nomimasu.", en: "I drink coffee today. (no に)", hi: "मैं आज कॉफ़ी पीता हूँ।" }
          ]
        },
        {
          pattern: "〜ませんか",
          romaji: "~masen ka",
          meaning: "Won't you ~? / Would you like to ~?",
          structure: "[Verb stem] + ませんか",
          explanation: "A polite invitation using the negative + か. Literally 'won't you?', but functions like 'Would you like to?'. Softer than a direct request.",
          examples: [
            { jp: "コーヒーを飲みませんか。", romaji: "Koohii o nomimasen ka?", en: "Would you like some coffee?", hi: "क्या आप कॉफ़ी पिएँगे?" },
            { jp: "一緒に勉強しませんか。", romaji: "Issho ni benkyou shimasen ka?", en: "Shall we study together?", hi: "क्या हम साथ पढ़ें?" }
          ]
        },
        {
          pattern: "Frequency Adverbs",
          romaji: "mainichi / yoku / tokidoki / amari / zenzen",
          meaning: "Every day / Often / Sometimes / Not often / Never",
          structure: "[Frequency adverb] + [Verb ます / ません]",
          explanation: "Positive adverbs pair with ます: 毎日 (every day), よく (often), 時々 (sometimes). Negative adverbs MUST pair with ません: あまり (not very often), 全然 (never/not at all). 全然飲みます is ungrammatical.",
          examples: [
            { jp: "よくコーヒーを飲みます。", romaji: "Yoku koohii o nomimasu.", en: "I often drink coffee.", hi: "मैं अक्सर कॉफ़ी पीता हूँ।" },
            { jp: "全然お酒を飲みません。", romaji: "Zenzen osake o nomimasen.", en: "I never drink alcohol.", hi: "मैं बिल्कुल शराब नहीं पीता।" }
          ]
        },
        {
          pattern: "は (wa) — Topic vs. Subject",
          romaji: "wa",
          meaning: "As for ~ / Speaking of ~ (topic marker, not just subject)",
          structure: "[Topic] は [Comment]",
          explanation: "は marks the TOPIC of the sentence — what you're talking about — not just the grammatical subject. It can create contrast: ラーメンは食べません、寿司は食べます = 'I don't eat ramen (but I do eat sushi)'.",
          examples: [
            { jp: "今日は忙しいです。", romaji: "Kyou wa isogashii desu.", en: "As for today, I'm busy.", hi: "आज की बात करें तो मैं व्यस्त हूँ।" },
            { jp: "ラーメンは食べません。寿司は食べます。", romaji: "Raamen wa tabemasen. Sushi wa tabemasu.", en: "I don't eat ramen. (But) I eat sushi.", hi: "रामेन नहीं खाता। सुशी खाता हूँ।" }
          ]
        }
      ]
    },
    4: {
      title: "Existence, Location & Past Tense",
      points: [
        {
          pattern: "あります / います",
          romaji: "Arimasu / Imasu",
          meaning: "There is ~ / I have ~ (inanimate / animate)",
          structure: "[Subject] が あります (inanimate) / います (animate)",
          explanation: "あります for inanimate objects, events, plants. います for animate beings (people, animals). Use が to mark what exists. Subject can be dropped when clear from context.",
          examples: [
            { jp: "コーヒーがあります。", romaji: "Koohii ga arimasu.", en: "There is coffee. / I have coffee.", hi: "कॉफ़ी है।" },
            { jp: "犬がいます。", romaji: "Inu ga imasu.", en: "There is a dog.", hi: "एक कुत्ता है।" }
          ]
        },
        {
          pattern: "X は Y の [Location] です",
          romaji: "X wa Y no [location] desu",
          meaning: "X is [location word] of Y",
          structure: "X は Y の 上/下/前/後ろ/中/隣/近く です",
          explanation: "Location words: 上 ue (on/above), 下 shita (under), 前 mae (in front), 後ろ ushiro (behind), 中 naka (inside), 隣 tonari (next to), 近く chikaku (near). Between two things: AとBの間 (aida).",
          examples: [
            { jp: "犬は家の前です。", romaji: "Inu wa ie no mae desu.", en: "The dog is in front of the house.", hi: "कुत्ता घर के सामने है।" },
            { jp: "本は机の上です。", romaji: "Hon wa tsukue no ue desu.", en: "The book is on the desk.", hi: "किताब मेज़ पर है।" }
          ]
        },
        {
          pattern: "でした / じゃなかったです",
          romaji: "Deshita / Ja nakatta desu",
          meaning: "Was ~ / Was not ~",
          structure: "[Noun/Na-adj] + でした (past +) / じゃなかったです (past −)",
          explanation: "Past tense of the copula です. Affirmative: でした (deshita). Negative: じゃなかったです. Formal written negative: ではありませんでした.",
          examples: [
            { jp: "昨日は土曜日でした。", romaji: "Kinou wa doyoubi deshita.", en: "Yesterday was Saturday.", hi: "कल शनिवार था।" },
            { jp: "雨じゃなかったです。", romaji: "Ame ja nakatta desu.", en: "It was not rain.", hi: "बारिश नहीं थी।" }
          ]
        },
        {
          pattern: "〜ました / 〜ませんでした",
          romaji: "~mashita / ~masen deshita",
          meaning: "Did ~ / Did not ~ (polite past)",
          structure: "[Verb stem] + ました (past +) / ませんでした (past −)",
          explanation: "Polite past tense. Use the same verb stem as ます/ません, just change the ending. ました = did, ませんでした = did not.",
          examples: [
            { jp: "昨日コーヒーを飲みました。", romaji: "Kinou koohii o nomimashita.", en: "Yesterday I drank coffee.", hi: "कल मैंने कॉफ़ी पी।" },
            { jp: "宿題をしませんでした。", romaji: "Shukudai o shimasen deshita.", en: "I did not do homework.", hi: "मैंने होमवर्क नहीं किया।" }
          ]
        },
        {
          pattern: "〜と",
          romaji: "~to",
          meaning: "And (exhaustive) / With (accompaniment)",
          structure: "[Noun A] と [Noun B] | [Person] と [Verb]",
          explanation: "と connects nouns exhaustively ('only A and B, nothing else'). Also means 'with' for accompaniment. Unlike や which implies an incomplete list.",
          examples: [
            { jp: "砂糖とミルクを入れます。", romaji: "Satou to miruku o iremasu.", en: "I put in sugar and milk (only those two).", hi: "मैं चीनी और दूध डालता हूँ।" },
            { jp: "友達と話しました。", romaji: "Tomodachi to hanashimashita.", en: "I talked with a friend.", hi: "मैंने दोस्त से बात की।" }
          ]
        },
        {
          pattern: "〜時間 / 〜分 (Duration)",
          romaji: "~jikan / ~fun/pun",
          meaning: "~ hours / ~ minutes (duration — no particle needed)",
          structure: "[Number] 時間 / [Number] 分 + Verb (no particle)",
          explanation: "Duration nouns take NO particle — they sit directly before the verb. 時間 = hours, 分 = minutes. Add ぐらい/くらい after for approximation ('about ~ hours').",
          examples: [
            { jp: "一時間勉強しました。", romaji: "Ichi-jikan benkyou shimashita.", en: "I studied for one hour.", hi: "मैंने एक घंटा पढ़ाई की।" },
            { jp: "三十分ぐらい歩きました。", romaji: "Sanjuppun gurai arukimashita.", en: "I walked for about 30 minutes.", hi: "मैं लगभग तीस मिनट चला।" }
          ]
        },
        {
          pattern: "たくさん",
          romaji: "takusan",
          meaning: "A lot / Many / Much",
          structure: "たくさん + [Verb] / たくさんの + [Noun]",
          explanation: "Adverb meaning 'a lot' or 'many'. Place before the verb. Add の before a noun. Casual synonym: いっぱい (ippai).",
          examples: [
            { jp: "たくさん食べました。", romaji: "Takusan tabemashita.", en: "I ate a lot.", hi: "मैंने बहुत खाया।" },
            { jp: "たくさんの人が来ました。", romaji: "Takusan no hito ga kimashita.", en: "Many people came.", hi: "बहुत सारे लोग आए।" }
          ]
        }
      ]
    },
    5: {
      title: "Adjectives & Preferences",
      points: [
        {
          pattern: "い-Adjective Conjugation",
          romaji: "I-adjective forms",
          meaning: "Conjugating い-adjectives across tenses",
          structure: "[Stem] + い (pres+) / くない (pres−) / かった (past+) / くなかった (past−)",
          explanation: "I-adjectives end in い. Drop い to get the stem, then add the suffix. Exception: いい (good) uses よ- as stem for all forms except present affirmative: よかった ✓, NOT いかった ✗.",
          examples: [
            { jp: "おいしい / おいしくない / おいしかった / おいしくなかった", romaji: "Oishii / Oishikunai / Oishikatta / Oishikunakatta", en: "Delicious / Not / Was / Was not", hi: "स्वादिष्ट / नहीं / था / नहीं था" },
            { jp: "よかったです！", romaji: "Yokatta desu!", en: "That was great! (いい→よ- irregular)", hi: "बहुत अच्छा था!" }
          ]
        },
        {
          pattern: "な-Adjective Conjugation",
          romaji: "Na-adjective forms",
          meaning: "Conjugating な-adjectives across tenses",
          structure: "[Na-adj] + です / じゃないです / でした / じゃなかったです",
          explanation: "Na-adjectives conjugate like nouns — just change the です ending. Use な only when directly modifying a noun (きれいな町). At sentence-end, drop な. Watch out: きれい and 有名 look like い-adjectives but are Na-adjectives.",
          examples: [
            { jp: "元気です / 元気じゃないです / 元気でした", romaji: "Genki desu / Genki ja nai desu / Genki deshita", en: "Healthy / Not healthy / Was healthy", hi: "स्वस्थ हूँ / नहीं / था" },
            { jp: "きれいな町ですね。", romaji: "Kirei na machi desu ne.", en: "It's a beautiful town, isn't it.", hi: "यह खूबसूरत शहर है, है ना?" }
          ]
        },
        {
          pattern: "〜が好きです / 〜が嫌いです",
          romaji: "~ga suki desu / ~ga kirai desu",
          meaning: "I like ~ / I dislike ~",
          structure: "[Thing] が 好き・嫌い です",
          explanation: "好き and 嫌い are Na-adjectives, not verbs. The thing liked is marked with が (not を). Intensifiers: 大好き (love it), 大嫌い (hate it).",
          examples: [
            { jp: "ロックが好きです。", romaji: "Rokku ga suki desu.", en: "I like rock music.", hi: "मुझे रॉक संगीत पसंद है।" },
            { jp: "トマトが大嫌いです。", romaji: "Tomato ga daikirai desu.", en: "I hate tomatoes.", hi: "मुझे टमाटर से बेहद नफ़रत है।" }
          ]
        },
        {
          pattern: "〜ましょう / 〜ましょうか",
          romaji: "~mashou / ~mashou ka",
          meaning: "Let's ~ / Shall we ~?",
          structure: "[Verb stem] + ましょう / ましょうか",
          explanation: "Change ます→ましょう to suggest doing something together ('Let's...'). Adding か makes it 'Shall we?' or 'Shall I help you?' depending on context.",
          examples: [
            { jp: "行きましょう！", romaji: "Ikimashou!", en: "Let's go!", hi: "चलते हैं!" },
            { jp: "手伝いましょうか？", romaji: "Tetsudaimashou ka?", en: "Shall I help you?", hi: "क्या मैं आपकी मदद करूँ?" }
          ]
        },
        {
          pattern: "〜枚 / 〜人 (Counters)",
          romaji: "~mai / ~nin",
          meaning: "Counter for flat objects / Counter for people",
          structure: "[Number] + 枚 (flat things) / [Number] + 人 (people)",
          explanation: "枚 (mai) for flat thin things (paper, tickets, shirts). 人 (nin) for people. Irregulars for 人: 一人 hitori, 二人 futari. 四人 = yo-nin, NOT yon-nin.",
          examples: [
            { jp: "切符を三枚ください。", romaji: "Kippu o san-mai kudasai.", en: "Please give me three tickets.", hi: "कृपया तीन टिकट दीजिए।" },
            { jp: "男の人が二人います。", romaji: "Otoko no hito ga futari imasu.", en: "There are two men.", hi: "दो पुरुष हैं।" }
          ]
        }
      ]
    },
    6: {
      title: "Te-Form & Requests",
      points: [
        {
          pattern: "て-Form",
          romaji: "Te-form conjugation",
          meaning: "Connective form — base for requests, permission, sequences",
          structure: "U: う/つ/る→って, む/ぬ/ぶ→んで, く→いて, ぐ→いで, す→して | Ru: drop る+て | Irr: くる→きて, する→して, 行く→行って",
          explanation: "Te-form connects verbs and is required for 〜てください, 〜てもいい, 〜てはいけない, 〜ている, etc. The Ta-form (casual past) conjugates identically but て/で becomes た/だ.",
          examples: [
            { jp: "待つ→待って / 飲む→飲んで / 聞く→聞いて", romaji: "Matsu→Matte / Nomu→Nonde / Kiku→Kiite", en: "wait / drink / listen (te-forms)", hi: "इंतज़ार / पीना / सुनना" },
            { jp: "食べる→食べて / する→して / 行く→行って", romaji: "Taberu→Tabete / Suru→Shite / Iku→Itte", en: "eat / do / go (te-forms)", hi: "खाना / करना / जाना" }
          ]
        },
        {
          pattern: "〜てください",
          romaji: "~te kudasai",
          meaning: "Please do ~",
          structure: "[Te-form] + ください",
          explanation: "Polite request — attach ください to the Te-form of any verb.",
          examples: [
            { jp: "待ってください。", romaji: "Matte kudasai.", en: "Please wait.", hi: "कृपया प्रतीक्षा करें।" },
            { jp: "窓を開けてください。", romaji: "Mado o akete kudasai.", en: "Please open the window.", hi: "कृपया खिड़की खोलें।" }
          ]
        },
        {
          pattern: "〜てもいいですか",
          romaji: "~te mo ii desu ka",
          meaning: "May I ~? / Is it okay to ~?",
          structure: "[Te-form] + もいいですか",
          explanation: "Ask for permission. Casual: drop 'desu ka', use rising intonation (座ってもいい？). To give permission: 〜てもいいです. To deny: 〜てはいけません.",
          examples: [
            { jp: "座ってもいいですか。", romaji: "Suwatte mo ii desu ka?", en: "May I sit down?", hi: "क्या मैं बैठ सकता हूँ?" },
            { jp: "写真を撮ってもいいですか。", romaji: "Shashin o totte mo ii desu ka?", en: "May I take a photo?", hi: "क्या मैं फ़ोटो ले सकता हूँ?" }
          ]
        },
        {
          pattern: "〜てはいけません",
          romaji: "~te wa ikemasen",
          meaning: "Must not ~ / You cannot ~",
          structure: "[Te-form] + はいけません",
          explanation: "Formally forbids an action. Strong prohibition — can sound like a posted rule or warning.",
          examples: [
            { jp: "ここで走ってはいけません。", romaji: "Koko de hashitte wa ikemasen.", en: "You must not run here.", hi: "यहाँ दौड़ना मना है।" },
            { jp: "写真を撮ってはいけません。", romaji: "Shashin o totte wa ikemasen.", en: "You must not take photos.", hi: "फ़ोटो लेना मना है।" }
          ]
        },
        {
          pattern: "〜から",
          romaji: "~kara",
          meaning: "Because ~ / Since ~",
          structure: "[Reason] から、[Result]",
          explanation: "The cause/reason comes BEFORE から. Both plain and polite forms can precede から. It links two clauses: reason first, consequence after.",
          examples: [
            { jp: "忙しいですから、行きません。", romaji: "Isogashii desu kara, ikimasen.", en: "Because I'm busy, I won't go.", hi: "व्यस्त हूँ, इसलिए नहीं जाऊँगा।" },
            { jp: "雨ですから、傘を持ってください。", romaji: "Ame desu kara, kasa o motte kudasai.", en: "Because it's raining, please bring an umbrella.", hi: "बारिश है, इसलिए छाता लें।" }
          ]
        }
      ]
    },
    7: {
      title: "Continuous Actions & States",
      points: [
        {
          pattern: "〜ています (ongoing action)",
          romaji: "~te imasu (action in progress)",
          meaning: "Is currently doing ~ (action in progress)",
          structure: "[Te-form] + います",
          explanation: "Expresses an action currently in progress (like English -ing). Past continuous: いました. Applies to action verbs (食べる, 話す, 走る).",
          examples: [
            { jp: "食べています。", romaji: "Tabete imasu.", en: "I am eating.", hi: "मैं खा रहा हूँ।" },
            { jp: "雨が降っています。", romaji: "Ame ga futte imasu.", en: "It is raining.", hi: "बारिश हो रही है।" }
          ]
        },
        {
          pattern: "〜ています (resultant state)",
          romaji: "~te imasu (resultant state)",
          meaning: "Is in the state of having done ~ (result)",
          structure: "[State-change verb Te-form] + います",
          explanation: "With change-of-state verbs, 〜ています expresses the resulting state, not an ongoing process. Key: 知っています (I know) — its negative is 知りません (NOT 知っていません).",
          examples: [
            { jp: "結婚しています。", romaji: "Kekkon shite imasu.", en: "I am married. (state of having married)", hi: "मैं शादीशुदा हूँ।" },
            { jp: "東京に住んでいます。", romaji: "Toukyou ni sunde imasu.", en: "I live in Tokyo. (currently residing)", hi: "मैं टोक्यो में रहता हूँ।" }
          ]
        },
        {
          pattern: "A は B が [Adjective]",
          romaji: "A wa B ga [adjective]",
          meaning: "As for A, B is [adjective]",
          structure: "[Person/Thing A] は [Feature B] が [Adjective] です",
          explanation: "Double topic-subject structure to describe a feature of a person or thing. A is the overall topic; B is the specific feature being described.",
          examples: [
            { jp: "彼女は目が青いです。", romaji: "Kanojo wa me ga aoi desu.", en: "She has blue eyes.", hi: "उसकी आँखें नीली हैं।" },
            { jp: "象は鼻が長いです。", romaji: "Zou wa hana ga nagai desu.", en: "Elephants have long trunks.", hi: "हाथी की सूँड लंबी होती है।" }
          ]
        },
        {
          pattern: "Adj + くて / Noun + で (chaining)",
          romaji: "~kute / ~de",
          meaning: "~ and ~ (connecting descriptions)",
          structure: "I-adj: drop い + くて | Na-adj/Noun: + で",
          explanation: "Chains multiple descriptions into one sentence. I-adj: drop い + くて (いい→よくて). Na-adj/Noun: add で. The final adjective/noun determines the tense.",
          examples: [
            { jp: "安くておいしいです。", romaji: "Yasukute oishii desu.", en: "It's cheap and delicious.", hi: "यह सस्ता और स्वादिष्ट है।" },
            { jp: "学生で、日本語を勉強しています。", romaji: "Gakusei de, Nihongo o benkyou shite imasu.", en: "I'm a student and studying Japanese.", hi: "मैं छात्र हूँ और जापानी पढ़ रहा हूँ।" }
          ]
        }
      ]
    },
    8: {
      title: "Short Forms & Quoted Speech",
      points: [
        {
          pattern: "Short Form (Plain Form)",
          romaji: "Plain / dictionary form",
          meaning: "Casual speech — also required for complex grammar",
          structure: "Verbs: dictionary form | I-adj: drop です | Na-adj/Nouns: + だ (often dropped)",
          explanation: "Plain forms are used with friends/family and are required before と思います, から (casual), んです, etc. In spoken casual conversation, だ is often omitted for Na-adj/Nouns.",
          examples: [
            { jp: "食べる / 寒い / 元気（だ）", romaji: "Taberu / Samui / Genki (da)", en: "Eat / Cold / Healthy — casual forms", hi: "खाना / ठंड / स्वस्थ (अनौपचारिक)" },
            { jp: "明日映画を見る。", romaji: "Ashita eiga o miru.", en: "I'll watch a movie tomorrow. (casual)", hi: "कल फ़िल्म देखूँगा।" }
          ]
        },
        {
          pattern: "〜ない (Nai Form)",
          romaji: "~nai",
          meaning: "Negative plain form (casual negative)",
          structure: "U-verbs: U→A sound + ない (う→わない) | Ru-verbs: drop る + ない | Irr: くる→こない, する→しない",
          explanation: "The plain negative. I-adj: drop い + くない. Na-adj/Noun: + じゃない. Base for 〜ないでください, 〜なかった, 〜ないほうがいい.",
          examples: [
            { jp: "飲まない / 食べない / こない / しない", romaji: "Nomanai / Tabenai / Konai / Shinai", en: "Won't drink / eat / come / do", hi: "नहीं पीऊँगा / खाऊँगा / आऊँगा / करूँगा" },
            { jp: "今日は学校に行かない。", romaji: "Kyou wa gakkou ni ikanai.", en: "I'm not going to school today.", hi: "आज स्कूल नहीं जाऊँगा।" }
          ]
        },
        {
          pattern: "〜と思います",
          romaji: "~to omoimasu",
          meaning: "I think that ~ / I believe that ~",
          structure: "[Short form] + と思います",
          explanation: "Express an opinion. The idea before と must be in plain/short form. For things someone else said: 〜と言っていました.",
          examples: [
            { jp: "明日雨が降ると思います。", romaji: "Ashita ame ga furu to omoimasu.", en: "I think it will rain tomorrow.", hi: "मुझे लगता है कल बारिश होगी।" },
            { jp: "彼女は忙しいと思います。", romaji: "Kanojo wa isogashii to omoimasu.", en: "I think she is busy.", hi: "मुझे लगता है वह व्यस्त है।" }
          ]
        },
        {
          pattern: "〜ないでください",
          romaji: "~nai de kudasai",
          meaning: "Please don't ~",
          structure: "[Nai-form verb] + でください",
          explanation: "Politely asks someone NOT to do something. Use the Nai-form (the base without い).",
          examples: [
            { jp: "写真を撮らないでください。", romaji: "Shashin o toranai de kudasai.", en: "Please don't take photos.", hi: "कृपया फ़ोटो मत लें।" },
            { jp: "遅れないでください。", romaji: "Okurenai de kudasai.", en: "Please don't be late.", hi: "कृपया देर मत करें।" }
          ]
        },
        {
          pattern: "[Dictionary form] + のが好き",
          romaji: "~no ga suki",
          meaning: "Like doing ~ (nominalizing verbs with の)",
          structure: "[Dictionary form] + の + が + [Adjective/Verb]",
          explanation: "の nominalizes a verb — turns it into a noun phrase ('the act of doing X'). Used with が好き, が上手, が下手, が難しい, etc.",
          examples: [
            { jp: "運転するのが好きです。", romaji: "Unten suru no ga suki desu.", en: "I like driving.", hi: "मुझे गाड़ी चलाना पसंद है।" },
            { jp: "日本語を話すのが難しいです。", romaji: "Nihongo o hanasu no ga muzukashii desu.", en: "Speaking Japanese is difficult.", hi: "जापानी बोलना मुश्किल है।" }
          ]
        },
        {
          pattern: "何か / 何も + negative",
          romaji: "Nanika / Nanimo",
          meaning: "Something / Nothing (with negative verb)",
          structure: "Q-word + か (some, positive verb) | Q-word + も (none, negative verb)",
          explanation: "Adding か to a question word = some/any (positive context). Adding も with negative verb = none. Extends to: 誰か/誰も, どこか/どこも, いつか/いつも.",
          examples: [
            { jp: "何か食べますか。", romaji: "Nanika tabemasu ka?", en: "Will you eat something?", hi: "क्या कुछ खाएँगे?" },
            { jp: "何も食べません。", romaji: "Nanimo tabemasen.", en: "I won't eat anything.", hi: "मैं कुछ नहीं खाऊँगा।" }
          ]
        }
      ]
    },
    9: {
      title: "Ta-Form & Informal Past",
      points: [
        {
          pattern: "た-Form (Informal Past)",
          romaji: "Ta-form",
          meaning: "Casual past tense",
          structure: "Same conjugation as Te-form but て/で → た/だ",
          explanation: "Casual past. Conjugates identically to Te-form: う/つ/る→った, む/ぬ/ぶ→んだ, く→いた, ぐ→いだ, す→した. Ru-verbs: drop る+た. Irr: くる→きた, する→した, 行く→行った.",
          examples: [
            { jp: "昨日何を食べた？", romaji: "Kinou nani o tabeta?", en: "What did you eat yesterday? (casual)", hi: "कल क्या खाया?" },
            { jp: "友達と映画を見た。", romaji: "Tomodachi to eiga o mita.", en: "I watched a movie with friends.", hi: "दोस्त के साथ फ़िल्म देखी।" }
          ]
        },
        {
          pattern: "〜なかった",
          romaji: "~nakatta",
          meaning: "Did not ~ (informal past negative)",
          structure: "[Nai-form] drop い + かった",
          explanation: "Informal past negative. Take the Nai-form, drop い, add かった.",
          examples: [
            { jp: "昨日は食べなかった。", romaji: "Kinou wa tabenakatta.", en: "I didn't eat yesterday.", hi: "कल मैंने नहीं खाया।" },
            { jp: "宿題をしなかった。", romaji: "Shukudai o shinakatta.", en: "I didn't do my homework.", hi: "होमवर्क नहीं किया।" }
          ]
        },
        {
          pattern: "Informal past: Adjectives & Nouns",
          romaji: "~katta / ~ja nakatta / ~datta",
          meaning: "Was ~ / Was not ~ (casual past for adj/nouns)",
          structure: "I-adj: stem + かった (aff.) / くなかった (neg.) | Na-adj/Noun: + だった (aff.) / じゃなかった (neg.)",
          explanation: "In casual speech, adjectives and nouns also need informal past forms. おいしかった (was delicious). 元気だった (was well). 学生じゃなかった (wasn't a student).",
          examples: [
            { jp: "映画は楽しかった！", romaji: "Eiga wa tanoshikatta!", en: "The movie was fun!", hi: "फ़िल्म मज़ेदार थी!" },
            { jp: "昨日は元気じゃなかった。", romaji: "Kinou wa genki ja nakatta.", en: "I wasn't well yesterday.", hi: "कल मैं ठीक नहीं था।" }
          ]
        },
        {
          pattern: "[Short form] から (conjunction)",
          romaji: "[Short form] kara",
          meaning: "Because ~ (linking two clauses casually)",
          structure: "[Reason — short form] から、[Result]",
          explanation: "In natural Japanese, から links two clauses causally. The reason comes BEFORE から. Both past and present short forms can precede から.",
          examples: [
            { jp: "もう食べたから、行かない。", romaji: "Mou tabeta kara, ikanai.", en: "Because I already ate, I won't go.", hi: "खाना खा लिया, इसलिए नहीं जाऊँगा।" },
            { jp: "お金がないから、買えない。", romaji: "Okane ga nai kara, kaenai.", en: "Because I have no money, I can't buy it.", hi: "पैसे नहीं हैं, इसलिए नहीं खरीद सकता।" }
          ]
        }
      ]
    },
    10: {
      title: "Comparison & Intentions",
      points: [
        {
          pattern: "A のほうが B より [Adj]",
          romaji: "A no hou ga B yori [adj]",
          meaning: "A is more [adj] than B",
          structure: "[Noun A] のほうが [Noun B] より [Adjective] です",
          explanation: "のほうが marks the winner of the comparison. より marks the standard ('more than'). To ask between two things: どっちのほうが〜ですか.",
          examples: [
            { jp: "長野のほうが福岡より寒いです。", romaji: "Nagano no hou ga Fukuoka yori samui desu.", en: "Nagano is colder than Fukuoka.", hi: "नागानो, फुकुओका से ज़्यादा ठंडा है।" },
            { jp: "どっちのほうが好きですか。", romaji: "Dotchi no hou ga suki desu ka?", en: "Which one do you like more?", hi: "आपको कौन सा ज़्यादा पसंद है?" }
          ]
        },
        {
          pattern: "[Category] の中で〜が一番 [Adj]",
          romaji: "~no naka de ~ ga ichiban [adj]",
          meaning: "~ is the most [adj] in [category]",
          structure: "[Category] の中で [Noun] が 一番 [Adjective] です",
          explanation: "一番 = number one / the most. Use の中で for 'within a category'. Question words: どれ (which item), 何 (what), 誰 (who), どこ (where).",
          examples: [
            { jp: "動物の中で猫が一番かわいいです。", romaji: "Doubutsu no naka de neko ga ichiban kawaii desu.", en: "Among animals, cats are the cutest.", hi: "जानवरों में बिल्ली सबसे प्यारी होती है।" },
            { jp: "クラスの中でだれが一番背が高いですか。", romaji: "Kurasu no naka de dare ga ichiban se ga takai desu ka?", en: "Who is tallest in the class?", hi: "क्लास में सबसे लंबा कौन है?" }
          ]
        },
        {
          pattern: "〜つもりです",
          romaji: "~tsumori desu",
          meaning: "I intend to ~ / I plan to ~",
          structure: "[Dictionary form] + つもりです (pos.) | [Nai-form] + つもりです (neg.)",
          explanation: "Expresses firm intention or plan. Positive: dictionary form + つもりです. Negative: Nai-form + つもりです ('don't intend to').",
          examples: [
            { jp: "来年日本に行くつもりです。", romaji: "Rainen Nihon ni iku tsumori desu.", en: "I intend to go to Japan next year.", hi: "मैं अगले साल जापान जाने का इरादा रखता हूँ।" },
            { jp: "肉は食べないつもりです。", romaji: "Niku wa tabenai tsumori desu.", en: "I don't plan to eat meat.", hi: "मैं माँस नहीं खाने का इरादा रखता हूँ।" }
          ]
        },
        {
          pattern: "Question word + か / も",
          romaji: "Q-word + ka / mo",
          meaning: "Some~/Any~ (positive) / No~/None (with negative verb)",
          structure: "[Q-word] + か + positive verb | [Q-word] + も + negative verb",
          explanation: "Adding か = some/any (positive context). Adding も with negative verb = none. Directional particles slot between word and か/も: どこかに, どこにも. Applies to: だれか/だれも, どこか/どこも.",
          examples: [
            { jp: "どこかに行きますか。", romaji: "Dokoka ni ikimasu ka?", en: "Are you going somewhere?", hi: "क्या आप कहीं जा रहे हैं?" },
            { jp: "どこにも行きません。", romaji: "Doko ni mo ikimasen.", en: "I'm not going anywhere.", hi: "मैं कहीं नहीं जा रहा।" }
          ]
        }
      ]
    },
    11: {
      title: "Desires & Experiences",
      points: [
        {
          pattern: "〜たいです / 〜たくないです",
          romaji: "~tai desu / ~takunai desu",
          meaning: "Want to ~ / Don't want to ~",
          structure: "[Verb stem] + たいです / たくないです",
          explanation: "Expresses personal desire. たい acts like an I-adjective. Object can be marked with を or が. Important: only state YOUR OWN desires directly — for others, quote them (〜と言っていました).",
          examples: [
            { jp: "日本に行きたいです。", romaji: "Nihon ni ikitai desu.", en: "I want to go to Japan.", hi: "मैं जापान जाना चाहता हूँ।" },
            { jp: "今は働きたくないです。", romaji: "Ima wa hatarakitakunai desu.", en: "I don't want to work right now.", hi: "अभी काम नहीं करना चाहता।" }
          ]
        },
        {
          pattern: "〜たり〜たりします",
          romaji: "~tari ~tari shimasu",
          meaning: "Do things like ~ and ~ (non-exhaustive list of actions)",
          structure: "[Ta-form] り、[Ta-form] り します",
          explanation: "Lists representative actions without implying a complete sequence ('doing things like A and B, among others'). The final します determines the tense.",
          examples: [
            { jp: "週末は買い物したり、映画を見たりします。", romaji: "Shuumatsu wa kaimono shitari, eiga o mitari shimasu.", en: "On weekends I do things like shopping and watching movies.", hi: "सप्ताहांत में खरीदारी और फ़िल्म देखना जैसे काम करता हूँ।" },
            { jp: "音楽を聞いたり、本を読んだりします。", romaji: "Ongaku o kiitari, hon o yondari shimasu.", en: "I listen to music and read books (among other things).", hi: "संगीत सुनता हूँ, किताबें पढ़ता हूँ, वगैरह।" }
          ]
        },
        {
          pattern: "〜たことがあります",
          romaji: "~ta koto ga arimasu",
          meaning: "Have done ~ before / Have the experience of ~",
          structure: "[Ta-form verb] + ことがあります",
          explanation: "Expresses that you have experience of having done something. Negative: 〜たことがありません (have never done). Use Ta-form (casual past), not formal past.",
          examples: [
            { jp: "寿司を食べたことがあります。", romaji: "Sushi o tabeta koto ga arimasu.", en: "I have eaten sushi before.", hi: "मैंने पहले सुशी खाई है।" },
            { jp: "富士山に登ったことがありますか。", romaji: "Fujisan ni nobotta koto ga arimasu ka?", en: "Have you ever climbed Mt. Fuji?", hi: "क्या आपने कभी माउंट फ़ुजी चढ़ा है?" }
          ]
        },
        {
          pattern: "〜や〜（など）",
          romaji: "~ya ~(nado)",
          meaning: "~ and ~ (among other things) — non-exhaustive list",
          structure: "[Noun A] や [Noun B] （など）",
          explanation: "や lists nouns non-exhaustively, implying there are more items. Unlike と (exhaustive). など (nado = etc.) can optionally follow.",
          examples: [
            { jp: "果物や野菜を食べます。", romaji: "Kudamono ya yasai o tabemasu.", en: "I eat fruit and vegetables (among others).", hi: "मैं फल और सब्ज़ियाँ वगैरह खाता हूँ।" },
            { jp: "本やマンガなどが好きです。", romaji: "Hon ya manga nado ga suki desu.", en: "I like things like books and manga, etc.", hi: "मुझे किताबें और मंगा वगैरह पसंद हैं।" }
          ]
        }
      ]
    },
    12: {
      title: "Explanation, Advice & Probability",
      points: [
        {
          pattern: "〜んです / 〜んですか",
          romaji: "~n desu / ~n desu ka",
          meaning: "The thing is ~ / It's that ~ (contextual explanation)",
          structure: "[Short form verb/I-adj] + んです | [Na-adj/Noun] + なんです",
          explanation: "〜んです signals the statement is directly relevant to the current situation — providing context or inviting explanation. Very common in natural spoken Japanese. Casual: 〜んだ.",
          examples: [
            { jp: "飲みすぎたんです。", romaji: "Nomi sugita n desu.", en: "The thing is, I drank too much.", hi: "असल में, मैंने बहुत पी ली।" },
            { jp: "どうしたんですか？", romaji: "Doushita n desu ka?", en: "What happened? / What's going on?", hi: "क्या हुआ?" }
          ]
        },
        {
          pattern: "〜すぎる",
          romaji: "~sugiru",
          meaning: "Too much ~ / Excessively ~",
          structure: "[Verb stem / I-adj stem / Na-adj] + すぎる",
          explanation: "Expresses excess. Verb: verb stem + すぎる (食べすぎる). I-adj: drop い + すぎる (高すぎる). Na-adj: base + すぎる (静かすぎる). すぎる conjugates like a Ru-verb.",
          examples: [
            { jp: "食べすぎました。", romaji: "Tabesugimashita.", en: "I ate too much.", hi: "मैंने बहुत ज़्यादा खाया।" },
            { jp: "この映画は長すぎます。", romaji: "Kono eiga wa nagasugimasu.", en: "This movie is too long.", hi: "यह फ़िल्म बहुत लंबी है।" }
          ]
        },
        {
          pattern: "〜ほうがいいです",
          romaji: "~hou ga ii desu",
          meaning: "You had better ~ / It is better to ~",
          structure: "[Ta-form] + ほうがいいです (do it) | [Nai-form] + ほうがいいです (don't)",
          explanation: "Gives strong advice. Positive (you should): Ta-form + ほうがいい. Negative (you shouldn't): Nai-form + ほうがいい. Can sound bossy — use with care.",
          examples: [
            { jp: "早く寝たほうがいいです。", romaji: "Hayaku neta hou ga ii desu.", en: "You had better sleep early.", hi: "जल्दी सोना बेहतर है।" },
            { jp: "甘いものを食べないほうがいいです。", romaji: "Amai mono o tabenai hou ga ii desu.", en: "You had better not eat sweets.", hi: "मीठा न खाना बेहतर है।" }
          ]
        },
        {
          pattern: "〜でしょう / 〜だろう",
          romaji: "~deshou / ~darou",
          meaning: "Probably ~ / I guess ~ (probability or seeking agreement)",
          structure: "[Short form] + でしょう | Na-adj/Noun: base + でしょう (no だ/な before)",
          explanation: "Flat intonation = 'probably'. Rising intonation = 'right? / isn't it?'. Casual: だろう. Do NOT use だ before でしょう with Na-adj/Nouns.",
          examples: [
            { jp: "明日は雨でしょう。", romaji: "Ashita wa ame deshou.", en: "It will probably rain tomorrow.", hi: "कल शायद बारिश होगी।" },
            { jp: "今日は土曜日でしょう？", romaji: "Kyou wa doyoubi deshou?", en: "Today is Saturday, right?", hi: "आज शनिवार है, है ना?" }
          ]
        }
      ]
    }
  },
  N4: {
    1: {
      title: "Lesson 13 — Potential, Reasons & Appearance",
      points: [
        {
          pattern: "Potential form",
          romaji: "Godan: u→e+る / Ichidan: drop る+られる / する→できる / くる→こられる",
          meaning: "Can ~ / Be able to ~",
          structure: "Godan: change final u-vowel → e-vowel + る | Ichidan: drop る + られる",
          explanation: "The potential form expresses ability or possibility. Godan verbs change the final u-sound to the e-sound row and add る (e.g. 書く→書ける). Ichidan verbs drop る and add られる (e.g. 食べる→食べられる). する→できる and くる→こられる are irregular. With potential verbs, the object can take either を or が (が is very common).",
          examples: [
            { jp: "漢字が読めます。", romaji: "Kanji ga yomemasu.", en: "I can read kanji.", hi: "मैं कांजी पढ़ सकता हूँ।" },
            { jp: "この料理が食べられません。", romaji: "Kono ryouri ga taberaremasen.", en: "I cannot eat this dish.", hi: "मैं यह खाना नहीं खा सकता।" },
            { jp: "日本語で話せますか。", romaji: "Nihongo de hanasemasu ka?", en: "Can you speak in Japanese?", hi: "क्या आप जापानी में बात कर सकते हैं?" }
          ]
        },
        {
          pattern: "〜し、〜し、〜",
          romaji: "~shi, ~shi, ~",
          meaning: "~ and ~, and (so) ~ / Multiple reasons",
          structure: "[Short form] + し、[Short form] + し、[conclusion]",
          explanation: "Used to list multiple reasons or facts supporting a conclusion. Each clause ends in し. The final clause states the outcome or opinion. All preceding clauses use short form. な-adjectives and nouns use だし in plain speech.",
          examples: [
            { jp: "安いし、おいしいし、このレストランが好きです。", romaji: "Yasui shi, oishii shi, kono resutoran ga suki desu.", en: "It's cheap and delicious, so I like this restaurant.", hi: "सस्ता भी है, स्वादिष्ट भी है, इसलिए मुझे यह रेस्तराँ पसंद है।" },
            { jp: "頭がいいし、優しいし、彼女は完璧です。", romaji: "Atama ga ii shi, yasashii shi, kanojo wa kanpeki desu.", en: "She's smart and kind, so she's perfect.", hi: "वह होशियार भी है, दयालु भी है — वह परिपूर्ण है।" }
          ]
        },
        {
          pattern: "〜そうです (appearance)",
          romaji: "~sou desu",
          meaning: "Looks ~ / Seems ~",
          structure: "い-adj: drop い + そうです | な-adj: drop な + そうです",
          explanation: "Attach そうです to the stem of an adjective to say something looks or seems a certain way based on direct visual impression. Exceptions: いい→よさそう (not いそう), ない→なさそう (not なそう). This is different from the hearsay そうです (Lesson 17) which attaches to the full short form.",
          examples: [
            { jp: "このケーキはおいしそうです。", romaji: "Kono keeki wa oishisou desu.", en: "This cake looks delicious.", hi: "यह केक स्वादिष्ट लग रहा है।" },
            { jp: "彼女は元気そうです。", romaji: "Kanojo wa genkisou desu.", en: "She looks energetic.", hi: "वह स्वस्थ लग रही है।" },
            { jp: "雨が降りそうです。", romaji: "Ame ga furisou desu.", en: "It looks like it's going to rain.", hi: "लगता है बारिश होने वाली है।" }
          ]
        },
        {
          pattern: "〜てみる",
          romaji: "~te miru",
          meaning: "Try doing ~ / Do ~ and see",
          structure: "[Te-form] + みる",
          explanation: "Attach みる to the te-form to express trying something out or doing it to see what happens. It conveys experimentation or testing — not just an attempt, but doing it to see the result. Conjugates like any Ichidan verb.",
          examples: [
            { jp: "この料理を食べてみました。", romaji: "Kono ryouri wo tabete mimashita.", en: "I tried eating this dish.", hi: "मैंने यह खाना चखकर देखा।" },
            { jp: "電話してみてください。", romaji: "Denwa shite mite kudasai.", en: "Please try calling.", hi: "कृपया फ़ोन करके देखिए।" }
          ]
        },
        {
          pattern: "〜なら",
          romaji: "~nara",
          meaning: "If it's ~ / As for ~ / Speaking of ~",
          structure: "[Noun / Short form] + なら",
          explanation: "なら is a scope-limiting conditional: it sets a topic or premise ('if we're talking about X, ...') and responds to what was just mentioned. Unlike たら (time-sequence) or と (inevitable), なら focuses on the topic at hand. It often implies the speaker learned about the topic from context.",
          examples: [
            { jp: "日本に行くなら、京都がいいですよ。", romaji: "Nihon ni iku nara, Kyouto ga ii desu yo.", en: "If you're going to Japan, Kyoto is great.", hi: "अगर जापान जाना है, तो क्योटो जाइए।" },
            { jp: "安いなら、買います。", romaji: "Yasui nara, kaimasu.", en: "If it's cheap, I'll buy it.", hi: "अगर सस्ता है, तो खरीदूँगा।" }
          ]
        },
        {
          pattern: "[Period] に [Number] 回",
          romaji: "[period] ni [number] kai",
          meaning: "~ times per ~ / [frequency]",
          structure: "[Time period] + に + [Number] + 回(かい)",
          explanation: "Express how many times something happens within a given time period. に marks the time period; 回 is the counter for 'times'. Examples: 週に三回 (three times a week), 一日に一回 (once a day).",
          examples: [
            { jp: "週に三回、ジムに行きます。", romaji: "Shuu ni san-kai, jimu ni ikimasu.", en: "I go to the gym three times a week.", hi: "मैं हफ्ते में तीन बार जिम जाता हूँ।" },
            { jp: "一ヶ月に一回、映画を見ます。", romaji: "Ikkagetsu ni ikkai, eiga wo mimasu.", en: "I watch a movie once a month.", hi: "मैं महीने में एक बार फिल्म देखता हूँ।" }
          ]
        }
      ]
    },
    2: {
      title: "Lesson 14 — Desires, Possibility & Advice",
      points: [
        {
          pattern: "〜がほしい",
          romaji: "~ga hoshii",
          meaning: "I want ~ (a thing)",
          structure: "[Noun] + が + ほしい",
          explanation: "ほしい (want) is an い-adjective meaning 'wanted / desired'. It takes が to mark the desired object. Only used for the speaker's own desires in direct statements; for third-person desire use ほしがっている. Not used for wanting to do an action (use 〜たい for that).",
          examples: [
            { jp: "新しいパソコンがほしいです。", romaji: "Atarashii pasokon ga hoshii desu.", en: "I want a new computer.", hi: "मुझे नया कंप्यूटर चाहिए।" },
            { jp: "何がほしいですか。", romaji: "Nani ga hoshii desu ka?", en: "What do you want?", hi: "आपको क्या चाहिए?" }
          ]
        },
        {
          pattern: "〜をほしがっている",
          romaji: "~wo hoshigatteiru",
          meaning: "He/She wants ~ (third person)",
          structure: "[Noun] + を + ほしがっている",
          explanation: "To describe a third person's desire for an object, use ほしがっている (the -がる suffix converts an emotional adjective to observable behavior, then put in ている for ongoing state). The object takes を instead of が. This is for things, not actions.",
          examples: [
            { jp: "弟は新しいゲームをほしがっています。", romaji: "Otouto wa atarashii geemu wo hoshigatteimasu.", en: "My younger brother wants a new game.", hi: "मेरे छोटे भाई को नया गेम चाहिए।" },
            { jp: "彼女は車をほしがっているようです。", romaji: "Kanojo wa kuruma wo hoshigatteiru you desu.", en: "She seems to want a car.", hi: "लगता है उसे कार चाहिए।" }
          ]
        },
        {
          pattern: "〜かもしれない",
          romaji: "~kamoshirenai",
          meaning: "~ might / ~ maybe / It's possible that ~",
          structure: "[Short form] + かもしれない (な-adj/noun present: drop だ before かも)",
          explanation: "Express possibility at roughly 50% confidence — 'might be' or 'maybe'. Attaches to the short form of verbs, adjectives, and nouns. For な-adjectives and nouns in the present affirmative, drop だ before かもしれない. The polite form is かもしれません.",
          examples: [
            { jp: "明日は雨かもしれません。", romaji: "Ashita wa ame kamoshiremasen.", en: "It might rain tomorrow.", hi: "कल बारिश हो सकती है।" },
            { jp: "彼は学生かもしれない。", romaji: "Kare wa gakusei kamoshirenai.", en: "He might be a student.", hi: "वह शायद छात्र है।" },
            { jp: "試験に合格できないかもしれません。", romaji: "Shiken ni goukaku dekinai kamoshiremasen.", en: "I might not be able to pass the exam.", hi: "शायद मैं परीक्षा पास न कर सकूँ।" }
          ]
        },
        {
          pattern: "〜たらどうですか",
          romaji: "~tara dou desu ka",
          meaning: "Why don't you ~? / How about doing ~?",
          structure: "[Verb た-form] + らどうですか",
          explanation: "A mild way to give advice or make a suggestion. Take the past (た) form of a verb and add らどうですか. More direct alternatives include 〜たほうがいい. This pattern is soft and non-imposing — suitable for friends and equals.",
          examples: [
            { jp: "病院に行ったらどうですか。", romaji: "Byouin ni ittara dou desu ka?", en: "Why don't you go to the hospital?", hi: "अस्पताल क्यों नहीं जाते?" },
            { jp: "少し休んだらどうですか。", romaji: "Sukoshi yasundara dou desu ka?", en: "How about resting a bit?", hi: "थोड़ा आराम क्यों नहीं करते?" }
          ]
        },
        {
          pattern: "〜も (as many as) / 〜しか〜ない (only)",
          romaji: "~mo / ~shika~nai",
          meaning: "As many as ~ / Only ~ (emphasis)",
          structure: "[Number+counter] + も + positive | [Number+counter] + しか + negative verb",
          explanation: "Use も after a large number to express surprise ('as many as X!'). Use しか with a negative verb to emphasize a small/insufficient quantity ('only X, and that's not enough'). Both are for emphasis — も highlights abundance, しか highlights scarcity or insufficiency.",
          examples: [
            { jp: "昨日、五時間も勉強しました。", romaji: "Kinou, go-jikan mo benkyou shimashita.", en: "I studied as many as five hours yesterday!", hi: "कल मैंने पाँच घंटे तक पढ़ाई की!" },
            { jp: "お金が百円しかありません。", romaji: "Okane ga hyaku-en shika arimasen.", en: "I only have 100 yen.", hi: "मेरे पास सिर्फ 100 येन हैं।" }
          ]
        }
      ]
    },
    3: {
      title: "Lesson 15 — Volitional, Preparation & Relative Clauses",
      points: [
        {
          pattern: "Volitional form (〜よう / 〜おう)",
          romaji: "~you / ~ou",
          meaning: "Let's ~ / I think I'll ~ (volitional)",
          structure: "Godan: u → o + う | Ichidan: drop る + よう | する→しよう | くる→こよう",
          explanation: "The volitional form expresses volition, invitation, or intention. Godan verbs change the final u-vowel to o and add う (e.g. 行く→行こう). Ichidan verbs drop る and add よう (e.g. 食べる→食べよう). Used alone = 'let's' or 'I'll'; combined with と思っています = 'I'm thinking of doing X'.",
          examples: [
            { jp: "一緒に行こう！", romaji: "Issho ni ikou!", en: "Let's go together!", hi: "चलो, साथ चलते हैं!" },
            { jp: "もっと勉強しようと思っています。", romaji: "Motto benkyou shiyou to omotteimasu.", en: "I'm thinking of studying more.", hi: "मैंने और पढ़ाई करने का इरादा बना रखा है।" }
          ]
        },
        {
          pattern: "〜ようと思っています",
          romaji: "~you to omotteimasu",
          meaning: "I'm thinking of doing ~ / I intend to ~",
          structure: "[Volitional form] + と思っています",
          explanation: "Combine the volitional form with と思っています to express a firm resolution or ongoing intention. The ている shows the decision is already made and held. Compare with と思います (just now deciding) vs. と思っています (already resolved).",
          examples: [
            { jp: "来年、日本に行こうと思っています。", romaji: "Rainen, Nihon ni ikou to omotteimasu.", en: "I'm thinking of going to Japan next year.", hi: "मैंने अगले साल जापान जाने का इरादा बना रखा है।" },
            { jp: "ダイエットをしようと思っています。", romaji: "Daietto wo shiyou to omotteimasu.", en: "I'm planning to go on a diet.", hi: "मैंने डाइट करने का इरादा बना रखा है।" }
          ]
        },
        {
          pattern: "〜ておく",
          romaji: "~te oku",
          meaning: "Do ~ in advance / Do ~ and leave it that way",
          structure: "[Te-form] + おく",
          explanation: "Attach おく to the te-form to express doing something as preparation for the future, or leaving something in a state intentionally. It conveys deliberate advance action. In casual speech, ておく contracts to 〜とく (e.g. 買っとく).",
          examples: [
            { jp: "試験の前に単語を覚えておきます。", romaji: "Shiken no mae ni tango wo oboete okimasu.", en: "I'll memorize vocabulary in advance before the exam.", hi: "परीक्षा से पहले शब्द याद कर के रखूँगा।" },
            { jp: "窓を開けておいてください。", romaji: "Mado wo akete oite kudasai.", en: "Please leave the window open.", hi: "कृपया खिड़की खुली रहने दीजिए।" }
          ]
        },
        {
          pattern: "Relative clause: [Short form sentence] + [Noun]",
          romaji: "[Short form sentence] + [Noun]",
          meaning: "Noun modified by a clause (who, which, that...)",
          structure: "[Short Form Sentence] + [Noun] (subject inside clause uses が or の — never は)",
          explanation: "Japanese places descriptive clauses directly before the noun they modify, in short form. Where English uses 'who', 'which', 'that', Japanese just puts the full clause before the noun. Inside the relative clause the subject takes が or の (interchangeable) — never は.",
          examples: [
            { jp: "昨日作ったカレーを食べました。", romaji: "Kinou tsukutta karee wo tabemashita.", en: "I ate the curry I made yesterday.", hi: "मैंने कल बनाई हुई करी खाई।" },
            { jp: "結婚している友達が来ます。", romaji: "Kekkon shite iru tomodachi ga kimasu.", en: "My married friend is coming.", hi: "शादीशुदा दोस्त आ रहा है।" },
            { jp: "ペットが飼える家を探しています。", romaji: "Petto ga kaeru ie wo sagashiteimasu.", en: "I'm looking for a house where I can keep pets.", hi: "मैं ऐसा घर ढूँढ रहा हूँ जहाँ पालतू रख सकें।" }
          ]
        }
      ]
    },
    4: {
      title: "Lesson 16 — Favors, Requests, Hopes & Apologies",
      points: [
        {
          pattern: "〜てあげる / 〜てくれる / 〜てもらう",
          romaji: "~te ageru / ~te kureru / ~te morau",
          meaning: "Do for someone / Someone does for me / I get someone to do for me",
          structure: "[Te-form] + あげる (outward) | くれる (inward to me) | もらう (I receive/requested)",
          explanation: "These three giving/receiving verbs extend to actions. あげる = I do an action for someone else (favor goes outward). くれる = someone does an action for me or my group unprompted (favor comes inward). もらう = I receive an action done for me, implying I initiated the request. Mixing these up reverses the meaning of the favor.",
          examples: [
            { jp: "友達に昼ごはんを作ってあげました。", romaji: "Tomodachi ni hirugohan wo tsukutte agemashita.", en: "I made lunch for my friend.", hi: "मैंने अपने दोस्त के लिए दोपहर का खाना बनाया।" },
            { jp: "お母さんがお弁当を作ってくれた。", romaji: "Okaasan ga obentou wo tsukutte kureta.", en: "My mom made a bento box for me.", hi: "मम्मी ने मेरे लिए बेंतो बना दिया।" },
            { jp: "先生に説明してもらいました。", romaji: "Sensei ni setsumei shite moraimashita.", en: "I had the teacher explain it to me.", hi: "मैंने शिक्षक से समझवाया।" }
          ]
        },
        {
          pattern: "〜てくれない？ / 〜てくれませんか / 〜ていただけませんか",
          romaji: "~te kurenai? / ~te kuremasen ka / ~te itadakemasen ka",
          meaning: "Can you ~? (casual) / Would you ~? (polite) / Could you please ~? (formal)",
          structure: "[Te-form] + くれない？ (casual) | くれませんか (polite) | いただけませんか (formal)",
          explanation: "A sliding scale of request politeness. くれない？ is casual — for close friends. くれませんか is polite — for peers and coworkers. いただけませんか is the most formal — for superiors, customers, or strangers. いただけませんか is the humble potential of もらう, literally 'Could I humbly receive...?'",
          examples: [
            { jp: "手伝ってくれない？", romaji: "Tetsudatte kurenai?", en: "Can you help me?", hi: "मेरी मदद करोगे?" },
            { jp: "手伝ってくれませんか。", romaji: "Tetsudatte kuremasen ka?", en: "Would you help me?", hi: "क्या आप मेरी मदद करेंगे?" },
            { jp: "手伝っていただけませんか。", romaji: "Tetsudatte itadakemasen ka?", en: "Could you please help me?", hi: "क्या आप कृपया मेरी मदद कर सकेंगे?" }
          ]
        },
        {
          pattern: "〜といいですね / 〜といいんですが",
          romaji: "~to ii desu ne / ~to ii n desu ga",
          meaning: "I hope ~ (for others) / I hope ~ (for myself, humble)",
          structure: "[Short Form Present] + といいですね (shared hope) | + といいんですが (personal hope, humble)",
          explanation: "A natural way to say 'I hope X happens.' Literally means 'if X happens, it would be good.' といいですね is for hopes about others or shared hopes. といいんですが adds a trailing が for a softer, more humble personal hope — the が implies hesitation and awareness that it may not come true.",
          examples: [
            { jp: "明日、晴れるといいですね。", romaji: "Ashita, hareru to ii desu ne.", en: "I hope it will be sunny tomorrow.", hi: "आशा है कि कल मौसम साफ रहेगा।" },
            { jp: "大学に入れるといいんですが。", romaji: "Daigaku ni haireru to ii n desu ga.", en: "I hope I can get into university.", hi: "मुझे उम्मीद है कि मैं विश्वविद्यालय में प्रवेश पा सकूँगा।" }
          ]
        },
        {
          pattern: "〜とき",
          romaji: "~toki",
          meaning: "When ~ / At the time of ~",
          structure: "[Short Form] + とき、[Main Clause]",
          explanation: "とき (time) connects a time clause to a main clause. The tense of the verb before とき is critical: present/dictionary form = action A is not yet complete when B happens; past (た) form = action A is already complete when B happens. With adjectives: い-adj attaches directly, な-adj adds な, nouns add の.",
          examples: [
            { jp: "日本に行くとき、かばんを買いました。", romaji: "Nihon ni iku toki, kaban wo kaimashita.", en: "I bought a bag when going to Japan (before arriving).", hi: "जापान जाते वक्त, मैंने एक बैग खरीदा।" },
            { jp: "日本に行ったとき、かばんを買いました。", romaji: "Nihon ni itta toki, kaban wo kaimashita.", en: "I bought a bag when I went to Japan (after arriving).", hi: "जापान पहुँचने पर, मैंने एक बैग खरीदा।" },
            { jp: "子供のとき、よくゲームをしました。", romaji: "Kodomo no toki, yoku geemu wo shimashita.", en: "I often played games as a child.", hi: "बचपन में, मैं अक्सर गेम खेलता था।" }
          ]
        },
        {
          pattern: "〜てすみません / 〜なくてすみません",
          romaji: "~te sumimasen / ~nakute sumimasen",
          meaning: "I'm sorry for doing ~ / I'm sorry for not doing ~",
          structure: "[Te-form] + すみません | [~ない form drop い + くて] + すみません",
          explanation: "Apologize for a specific action using the te-form + すみません (for something you did). To apologize for NOT doing something, build the negative te-form (〜なくて) and add すみません. すみません is more situational/polite than ごめんなさい which is more personal.",
          examples: [
            { jp: "遅く起きてすみません。", romaji: "Osoku okite sumimasen.", en: "I'm sorry for waking up late.", hi: "देर से उठने के लिए माफ़ कीजिए।" },
            { jp: "宿題をしなくてすみません。", romaji: "Shukudai wo shinakute sumimasen.", en: "I'm sorry for not doing the homework.", hi: "होमवर्क न करने के लिए माफ़ कीजिए।" }
          ]
        }
      ]
    },
    5: {
      title: "Lesson 17 — Hearsay, Conditionals & Sequencing",
      points: [
        {
          pattern: "〜そうです (hearsay)",
          romaji: "~sou desu (hearsay)",
          meaning: "I heard that ~ / Apparently ~ / They say ~",
          structure: "[Short Form Sentence] + そうです",
          explanation: "Used to relay information heard from someone else or a source. Attaches to the complete short form — unlike the 'looks like' そうです (§13.3) which attaches to the adjective stem. Key distinction: hearsay そうです keeps い and だ (e.g. おいしいそうです, 好きだそうです); appearance そうです drops them (おいしそうです, 好きそうです).",
          examples: [
            { jp: "食べるそうです。", romaji: "Taberu sou desu.", en: "I heard they'll eat.", hi: "मैंने सुना है कि वे खाएँगे।" },
            { jp: "ニュースによると、明日は雨だそうです。", romaji: "Nyuusu ni yoru to, ashita wa ame da sou desu.", en: "According to the news, it will apparently rain tomorrow.", hi: "समाचार के अनुसार, कल बारिश होगी।" }
          ]
        },
        {
          pattern: "〜って (casual quote)",
          romaji: "~tte",
          meaning: "~ said / ~ (casual reported speech)",
          structure: "[Short form] + って",
          explanation: "In casual spoken Japanese, the quoting particle と (as in とっていました) is shortened to って. It's ubiquitous in conversation. なんて？ = 'What did they say?' and なんだって？ = 'Wait, what?!' (disbelief).",
          examples: [
            { jp: "メアリーさん、今日は忙しいって。", romaji: "Mearii-san, kyou wa isogashii tte.", en: "Mary said she's busy today.", hi: "मेरी कह रही थी, आज वह व्यस्त है।" },
            { jp: "先生が明日テストだって。", romaji: "Sensei ga ashita tesuto da tte.", en: "The teacher said there's a test tomorrow.", hi: "शिक्षक ने कहा कि कल परीक्षा है।" }
          ]
        },
        {
          pattern: "〜たら",
          romaji: "~tara",
          meaning: "If ~ / When ~ (general conditional)",
          structure: "[Short Past — た/だ form] + ら、[Main Clause]",
          explanation: "The most versatile conditional in Japanese. Take the short past form and add ら. Despite using the past form, the meaning can be present, future, or general. It can express true conditionals ('if A happens, B') or temporal sequences ('when A happens, B follows'). More flexible than ～と or ～ば.",
          examples: [
            { jp: "安かったら、買います。", romaji: "Yasukattara, kaimasu.", en: "If it's cheap, I'll buy it.", hi: "अगर सस्ता हुआ, तो खरीद लूँगा।" },
            { jp: "日本に着いたら、電話します。", romaji: "Nihon ni tsuitara, denwa shimasu.", en: "When I arrive in Japan, I'll call.", hi: "जापान पहुँचने पर, मैं फ़ोन करूँगा।" },
            { jp: "元気だったら、来てください。", romaji: "Genki dattara, kite kudasai.", en: "If you're feeling well, please come.", hi: "अगर तबीयत ठीक हो, तो आइए।" }
          ]
        },
        {
          pattern: "〜なくてもいいです",
          romaji: "~nakute mo ii desu",
          meaning: "You don't have to ~ / It's okay not to ~",
          structure: "[~ない form] → drop い + くてもいいです",
          explanation: "Tell someone they are not obligated to do something. Built by combining the negative te-form (〜なくて) with もいい (it's okay). This is the opposite of 〜なければいけません (must do). Compare: 食べなくてもいいです (don't have to eat) vs. 食べなければいけません (must eat).",
          examples: [
            { jp: "食べなくてもいいです。", romaji: "Tabenakute mo ii desu.", en: "You don't have to eat.", hi: "आपको खाने की ज़रूरत नहीं है।" },
            { jp: "心配しなくてもいいですよ。", romaji: "Shinpai shinakute mo ii desu yo.", en: "You don't have to worry.", hi: "चिंता करने की ज़रूरत नहीं है।" }
          ]
        },
        {
          pattern: "〜みたいです",
          romaji: "~mitai desu",
          meaning: "Looks like ~ / Seems like ~ / Resembles ~",
          structure: "[Noun] + みたいです | [Short Form Verb/Adj] + みたいです",
          explanation: "Express resemblance or inference based on indirect clues. Attaches directly to nouns (without だ) or to short forms of verbs. Compare: そうです (§13.3) = direct visual impression; みたいです = inference from reasoning about clues. みたいです is more casual; のようです is its formal equivalent.",
          examples: [
            { jp: "あの人は、犬みたいです。", romaji: "Ano hito wa, inu mitai desu.", en: "That person is like a dog (acts like one).", hi: "वह व्यक्ति कुत्ते जैसा है।" },
            { jp: "雨が降っているみたいです。", romaji: "Ame ga futteiru mitai desu.", en: "It seems like it's raining.", hi: "ऐसा लगता है कि बारिश हो रही है।" }
          ]
        },
        {
          pattern: "〜まえに / 〜てから",
          romaji: "~mae ni / ~te kara",
          meaning: "Before doing ~ / After doing ~",
          structure: "[Dict. form] + まえに | [Te-form] + から",
          explanation: "まえに marks an action that hasn't happened yet at the time of the main action ('before doing B, A'). Always uses the dictionary form regardless of overall tense. てから emphasizes that action B starts only after A is fully complete. Don't confuse 〜てから (after doing) with から meaning 'because'.",
          examples: [
            { jp: "食べる前に、手を洗います。", romaji: "Taberu mae ni, te wo araimasu.", en: "I wash my hands before eating.", hi: "खाने से पहले, मैं हाथ धोता हूँ।" },
            { jp: "勉強してから、遊びに行きます。", romaji: "Benkyou shite kara, asobi ni ikimasu.", en: "After studying, I'll go out to play.", hi: "पढ़ाई करने के बाद, मैं खेलने जाऊँगा।" }
          ]
        }
      ]
    },
    6: {
      title: "Lesson 18 — Transitivity, Completion & Regret",
      points: [
        {
          pattern: "Transitive (〜を) vs. Intransitive (〜が) verbs",
          romaji: "tadoushi (transitive) vs. jidoushi (intransitive)",
          meaning: "X does action on object (を) / X happens by itself (が)",
          structure: "Transitive: Subject が … Object を + verb | Intransitive: Subject が + verb",
          explanation: "Japanese verbs come in transitive/intransitive pairs. Transitive (他動詞) = someone acts on an object (object takes を). Intransitive (自動詞) = something happens by itself (subject takes が). Common pairs: 開ける/開く (open T/I), 閉める/閉まる (close T/I), 消す/消える (turn off/go out T/I). Mixing them is a common error.",
          examples: [
            { jp: "私がドアを開けます。(他)", romaji: "Watashi ga doa wo akemasu. (transitive)", en: "I open the door.", hi: "मैं दरवाज़ा खोलता हूँ।" },
            { jp: "ドアが開きます。(自)", romaji: "Doa ga akimasu. (intransitive)", en: "The door opens (by itself).", hi: "दरवाज़ा खुलता है।" }
          ]
        },
        {
          pattern: "Intransitive te-form + いる (resulting state)",
          romaji: "[intransitive te-form] + iru",
          meaning: "~ is in the state of / ~ has been [done]",
          structure: "[Intransitive verb te-form] + いる / います",
          explanation: "The intransitive te + いる describes a resulting state — the action happened in the past, and that state persists now. Compare: transitive te + いる = action currently in progress ('I am opening the door'); intransitive te + いる = state exists ('the door is open'). This distinction is one of the trickiest in Japanese.",
          examples: [
            { jp: "ドアが開いています。", romaji: "Doa ga aite imasu.", en: "The door is open (resulting state).", hi: "दरवाज़ा खुला है।" },
            { jp: "電気が消えています。", romaji: "Denki ga kiete imasu.", en: "The light is off.", hi: "लाइट बंद है।" },
            { jp: "財布が落ちています。", romaji: "Saifu ga ochite imasu.", en: "A wallet has fallen (is lying on the ground).", hi: "बटुआ गिरा पड़ा है।" }
          ]
        },
        {
          pattern: "〜てしまう",
          romaji: "~te shimau",
          meaning: "End up ~ing / Completely ~ / Unfortunately ~ (regret)",
          structure: "[Te-form] + しまう | casual: 〜てしまう → 〜ちゃう / 〜でしまう → 〜じゃう",
          explanation: "Two meanings depending on context. 1) Completion: an action was done fully, thoroughly, completely ('I finished reading the book'). 2) Regret/accident: something happened that you wish hadn't, or you did something by accident ('I accidentally dropped my phone'). In casual speech, 〜てしまう contracts to 〜ちゃう, 〜でしまう to 〜じゃう.",
          examples: [
            { jp: "本を読んでしまった。", romaji: "Hon wo yonde shimatta.", en: "I finished reading the book (completely).", hi: "मैंने किताब पूरी पढ़ ली।" },
            { jp: "携帯を落としてしまった。", romaji: "Keitai wo otoshite shimatta.", en: "I accidentally dropped my phone.", hi: "मेरा मोबाइल गिर गया (अफ़सोस!)।" }
          ]
        },
        {
          pattern: "〜と (inevitable conditional)",
          romaji: "~to (inevitable)",
          meaning: "If/When ~ then always ~ (natural law / automatic result)",
          structure: "[Short Present Tense verb] + と、[Main Clause]",
          explanation: "〜と is reserved for inevitable, automatic, or natural consequences — situations where 'if A, then B always/immediately happens.' Used for natural laws, directions, instructions, and automatic results. Never use 〜と for wishes, requests, or volitional actions in the main clause. Compare: 〜たら (general), 〜なら (scope), 〜ば (advice), 〜と (inevitable).",
          examples: [
            { jp: "春になると、花が咲く。", romaji: "Haru ni naru to, hana ga saku.", en: "When spring comes, flowers bloom.", hi: "वसंत आते ही, फूल खिलते हैं।" },
            { jp: "このボタンを押すと、ドアが開きます。", romaji: "Kono botan wo osu to, doa ga akimasu.", en: "When you press this button, the door opens.", hi: "इस बटन को दबाने पर, दरवाज़ा खुलता है।" }
          ]
        },
        {
          pattern: "〜ばよかった",
          romaji: "~ba yokatta",
          meaning: "I wish I had ~ / I should have ~",
          structure: "[Verb ba-form] + よかった | [~ない - い + ければ] + よかった",
          explanation: "Express regret over an action not taken (positive: 'I wish I had done X') or one taken (negative: 'I wish I hadn't done X'). Build the ba-form: Godan = u→e+ば, Ichidan = drop る+れば, irregular くる→くれば, する→すれば. For negative regret: take ない, drop い, add ければよかった.",
          examples: [
            { jp: "もっと勉強すればよかった。", romaji: "Motto benkyou sureba yokatta.", en: "I wish I had studied more.", hi: "काश मैं और पढ़ता।" },
            { jp: "あんなに遊ばなければよかった。", romaji: "Anna ni asobanakeba yokatta.", en: "I wish I hadn't played around so much.", hi: "काश मैंने इतना नहीं खेला होता।" }
          ]
        }
      ]
    },
    7: {
      title: "Lesson 19 — Honorifics, Gratitude & Strong Expectation",
      points: [
        {
          pattern: "Honorific verbs — sonkeigo (尊敬語)",
          romaji: "irassharu, meshiagaru, ossharu, kudasaru, etc.",
          meaning: "Elevated forms of verbs — for speaking about superiors",
          structure: "Special verbs (memorize) | General: お + [Masu-stem] + になる",
          explanation: "Honorific verbs (sonkeigo) elevate the subject to show deep respect. Never use about yourself. Special forms: いらっしゃる (be/go/come), めしあがる (eat/drink), おっしゃる (say), くださる (give to me), ご覧になる (see). General honorific: お + masu-stem + になる. Three of these (いらっしゃる, おっしゃる, くださる) have irregular ます forms: る→い before ます.",
          examples: [
            { jp: "先生は何をめしあがりますか。", romaji: "Sensei wa nani wo meshiagarimasu ka?", en: "What will you eat, teacher?", hi: "शिक्षक जी क्या लेंगे (खाने/पीने में)?" },
            { jp: "社長はもうお帰りになりました。", romaji: "Shachou wa mou okaeri ni narimashita.", en: "The president has already gone home.", hi: "अध्यक्ष पहले ही घर चले गए हैं।" }
          ]
        },
        {
          pattern: "お〜ください / ご〜ください",
          romaji: "o~kudasai / go~kudasai",
          meaning: "Please ~ (respectful command)",
          structure: "お + [Masu-stem] + ください (regular verbs) | ご + [Suru-verb base] + ください (suru verbs)",
          explanation: "A much more formal version of 〜てください. Used by staff to customers, juniors to superiors. お is for native Japanese words; ご is for suru-verbs (typically Chinese-origin). Examples: お待ちください (please wait), ご連絡ください (please contact us).",
          examples: [
            { jp: "お待ちください。", romaji: "Omachi kudasai.", en: "Please wait.", hi: "कृपया प्रतीक्षा कीजिए।" },
            { jp: "ご注意ください。", romaji: "Go-chuui kudasai.", en: "Please be careful.", hi: "कृपया सावधान रहिए।" }
          ]
        },
        {
          pattern: "〜てくれてありがとう / 〜てくれてありがとうございます",
          romaji: "~te kurete arigatou / ~te kurete arigatou gozaimasu",
          meaning: "Thank you for doing ~ (specific action)",
          structure: "[Te-form] + くれてありがとう (casual) | + くれてありがとうございます (formal)",
          explanation: "Thank someone for a specific action they did for you. Built on the favor framework: te-form + くれて (someone did it for me) + ありがとう (thanks). The formal version uses ございます. For very formal contexts, swap くれて → くださって (the honorific version).",
          examples: [
            { jp: "手伝ってくれてありがとう。", romaji: "Tetsudatte kurete arigatou.", en: "Thank you for helping me.", hi: "मदद करने के लिए धन्यवाद।" },
            { jp: "教えてくれてありがとうございます。", romaji: "Oshiete kurete arigatou gozaimasu.", en: "Thank you for teaching me.", hi: "समझाने/सिखाने के लिए धन्यवाद।" }
          ]
        },
        {
          pattern: "〜てよかったです",
          romaji: "~te yokatta desu",
          meaning: "I'm glad I did ~ / It was good that ~",
          structure: "[Te-form] + よかったです | [~なくて] + よかったです",
          explanation: "Express satisfaction or relief about something that happened. よかった literally means 'it was good.' Positive: te-form + よかったです ('glad I did X'). Negative: negative te-form (〜なくて) + よかったです ('glad I did NOT do X'). Contrast with 〜ばよかった (§18.5) which expresses regret.",
          examples: [
            { jp: "日本語を勉強してよかったです。", romaji: "Nihongo wo benkyou shite yokatta desu.", en: "I'm glad I studied Japanese.", hi: "मुझे खुशी है कि मैंने जापानी सीखी।" },
            { jp: "そのパーティーに行かなくてよかったです。", romaji: "Sono paatii ni ikanakute yokatta desu.", en: "I'm glad I didn't go to that party.", hi: "अच्छा हुआ कि मैं उस पार्टी में नहीं गया।" }
          ]
        },
        {
          pattern: "〜はずです",
          romaji: "~hazu desu",
          meaning: "~ is supposed to / ~ should be / ~ must be (~99% certainty)",
          structure: "[Short Form] + はずです | な-adj: keep な before はず | Noun: add の before はず",
          explanation: "Use when you are almost entirely certain (~99%) that something is true — based on objective logic, evidence, or knowledge. Translates as 'supposed to be / expected to be / must be.' Past form はずでした = 'was supposed to (but didn't happen).' Compare confidence levels: かもしれない (~50%) → でしょう (~70%) → はずです (~99%).",
          examples: [
            { jp: "今日は雨が降らないはずです。", romaji: "Kyou wa ame ga furanai hazu desu.", en: "It's not supposed to rain today.", hi: "आज बारिश नहीं होनी चाहिए (मुझे यकीन है)।" },
            { jp: "来るはずでしたが、来ませんでした。", romaji: "Kuru hazu deshita ga, kimasen deshita.", en: "He was supposed to come, but didn't.", hi: "आने वाले थे, पर नहीं आए।" }
          ]
        }
      ]
    },
    8: {
      title: "Lesson 20 — Humble Language & Embedded Structures",
      points: [
        {
          pattern: "Humble verbs — kenjōgo (謙譲語)",
          romaji: "oru, mairu, itadaku, itasu, mousu, gozaru, etc.",
          meaning: "Humble forms — lowering yourself to show respect to the listener",
          structure: "Special humble verbs (memorize) | General: お + [Masu-stem] + する / いたします",
          explanation: "Humble language (kenjōgo) lowers your own actions to elevate the listener. Never use about the listener. Special humble verbs: おる (be), まいる (go/come), いただく (eat/drink/receive), いたす (do), もうす (say), ございます (exist, things). General humble formula: お + masu-stem + する/いたします. いたします is more humble than する (since いたす is itself humble).",
          examples: [
            { jp: "田中と申します。", romaji: "Tanaka to moushimasu.", en: "My name is Tanaka (humble introduction).", hi: "मैं तानाका हूँ (विनम्र परिचय)।" },
            { jp: "荷物をお持ちいたします。", romaji: "Nimotsu wo omochi itashimasu.", en: "I will humbly carry your luggage.", hi: "मैं सामान उठा लेता हूँ।" }
          ]
        },
        {
          pattern: "〜ないで",
          romaji: "~naide",
          meaning: "Without doing ~ / Instead of doing ~",
          structure: "[Verb A — ない form] + で、[Verb B]",
          explanation: "Describes doing action B without doing action A. Translates as 'without doing X' or 'instead of doing X.' Compare with 〜なくて (§16.5): 〜なくて connects a reason/state ('because I didn't'), while 〜ないで sequences actions ('without doing X, I did Y').",
          examples: [
            { jp: "昨日は寝ないで、勉強しました。", romaji: "Kinou wa nenaide, benkyou shimashita.", en: "I studied without sleeping yesterday.", hi: "कल मैंने सोए बिना पढ़ाई की।" },
            { jp: "朝ごはんを食べないで、出かけました。", romaji: "Asagohan wo tabenaide, dekakemashita.", en: "I went out without eating breakfast.", hi: "मैं नाश्ता किए बिना ही निकल गया।" }
          ]
        },
        {
          pattern: "Embedded questions: 〜か / 〜かどうか",
          romaji: "~ka / ~ka dou ka",
          meaning: "I know/wonder what/who/where ~ / whether or not ~",
          structure: "[Short form] + か (with Q-word) | [Short form] + かどうか (yes/no question)",
          explanation: "Embed a question inside a larger sentence. Type A (Q-word questions): short form + か alone. Type B (yes/no questions): short form + かどうか ('whether or not'). Rules: verbs and adjectives use short form; for な-adj and nouns in present positive, drop だ before か.",
          examples: [
            { jp: "山田さんがどこに住んでいるか知っていますか。", romaji: "Yamada-san ga doko ni sunde iru ka shitte imasu ka?", en: "Do you know where Mr. Yamada lives?", hi: "क्या आप जानते हैं यामादा जी कहाँ रहते हैं?" },
            { jp: "彼が来るかどうか分かりません。", romaji: "Kare ga kuru ka dou ka wakarimasen.", en: "I don't know whether he will come or not.", hi: "मुझे नहीं पता कि वह आएगा या नहीं।" }
          ]
        },
        {
          pattern: "〜という",
          romaji: "~to iu",
          meaning: "Called ~ / Named ~ / Known as ~",
          structure: "[Name] + という + [Category/Noun]",
          explanation: "Used to introduce or specify the name of a person, place, or thing — 'called X' or 'named X'. Use it when the listener may not know the named thing. If the listener clearly already knows (e.g. 'Tokyo'), という is unnecessary.",
          examples: [
            { jp: "「ポチ」という犬を飼っています。", romaji: "\'Pochi\' to iu inu wo katte imasu.", en: "I have a dog called Pochi.", hi: "मेरे पास \'पोची\' नाम का एक कुत्ता है।" },
            { jp: "「ポケモン」というゲームをやったことがありますか。", romaji: "\'Pokemon\' to iu geemu wo yatta koto ga arimasu ka?", en: "Have you ever played a game called Pokemon?", hi: "क्या आपने \'पोकेमॉन\' नामक गेम कभी खेला है?" }
          ]
        },
        {
          pattern: "〜やすい / 〜にくい",
          romaji: "~yasui / ~nikui",
          meaning: "Easy to ~ / Hard to ~",
          structure: "[Masu-stem] + やすい (easy to) | [Masu-stem] + にくい (hard to)",
          explanation: "Convert a verb into an adjective describing ease or difficulty. Attach やすい or にくい to the masu-stem (the verb with ます removed). The result behaves exactly like an い-adjective and conjugates accordingly: 食べやすかった (was easy to eat), 食べやすくない (not easy to eat).",
          examples: [
            { jp: "このラーメンは食べやすいです。", romaji: "Kono raamen wa tabeyasui desu.", en: "This ramen is easy to eat.", hi: "यह रामेन खाने में आसान है।" },
            { jp: "この漢字は読みにくいです。", romaji: "Kono kanji wa yominikui desu.", en: "This kanji is hard to read.", hi: "यह कांजी पढ़ने में मुश्किल है।" }
          ]
        }
      ]
    },
    9: {
      title: "Lesson 21 — Passive, Intentional State & Desire",
      points: [
        {
          pattern: "Passive voice — 受け身形 (ukemi-kei)",
          romaji: "Godan: u→a+れる | Ichidan: drop る+られる | する→される | くる→こられる",
          meaning: "~ was done / I was ~ed (often with adversative nuance)",
          structure: "[Victim] は/が + [Doer] に + [Passive Verb]",
          explanation: "Passive sentences shift focus to the receiver of an action. Japanese passives often carry an adversative (suffering) nuance — implying inconvenience or harm done to the speaker. Godan: change u-vowel → a-vowel + れる (e.g. 書く→書かれる). Ichidan: drop る + られる (e.g. 食べる→食べられる). Note: for Godan verbs, potential and passive look different (e-vowel+る vs. a-vowel+れる); for Ichidan, they look identical — context distinguishes.",
          examples: [
            { jp: "私は蚊に刺されました。", romaji: "Watashi wa ka ni saseremashita.", en: "I was stung by a mosquito.", hi: "मुझे मच्छर ने काटा।" },
            { jp: "弟に漫画を読まれました。", romaji: "Otouto ni manga wo yomaremashita.", en: "My manga was read by my brother (annoyingly).", hi: "मेरे छोटे भाई ने (मेरा) मांगा पढ़ लिया (अप्रसन्नता का भाव)।" },
            { jp: "先生に怒られた。", romaji: "Sensei ni okorareta.", en: "I was scolded by the teacher.", hi: "शिक्षक ने मुझे डाँटा।" }
          ]
        },
        {
          pattern: "〜てある (intentional state)",
          romaji: "~te aru",
          meaning: "~ has been done (intentionally and left that way)",
          structure: "[Noun] が/は + [Transitive Te-form] + ある",
          explanation: "Use transitive te + ある to show something is in a certain state because someone intentionally put it that way for a purpose. Compare the three-way contrast: ドアを開けている (I am opening — action in progress), ドアが開いている (the door is open — neutral state), ドアが開けてある (the door has been opened and left that way on purpose).",
          examples: [
            { jp: "窓が開けてあります。", romaji: "Mado ga akete arimasu.", en: "The window has been left open (on purpose).", hi: "खिड़की (जान-बूझकर) खुली रखी गई है।" },
            { jp: "名前が書いてあります。", romaji: "Namae ga kaite arimasu.", en: "The name has been written (there).", hi: "नाम (पहले से) लिखा हुआ है।" }
          ]
        },
        {
          pattern: "〜あいだに",
          romaji: "~aida ni",
          meaning: "While ~ / During ~ (a specific event within a duration)",
          structure: "[〜ている / Noun の] + あいだに + [Event B]",
          explanation: "Express that event B happens during the timeframe of event A. Specifically: B is a discrete, point-in-time event that takes place within a longer ongoing situation A. Compare: 〜あいだ without に = the action spans the entire duration of A; 〜あいだに = B happens at some point within A.",
          examples: [
            { jp: "両親が日本にいるあいだに、京都に行きました。", romaji: "Ryoushin ga Nihon ni iru aida ni, Kyouto ni ikimashita.", en: "While my parents were in Japan, I went to Kyoto.", hi: "जब मेरे माता-पिता जापान में थे, उस दौरान मैं क्योटो गया।" },
            { jp: "寝ているあいだに、地震がありました。", romaji: "Nete iru aida ni, jishin ga arimashita.", en: "While I was sleeping, there was an earthquake.", hi: "जब मैं सो रहा था, उसी दौरान भूकंप आया।" }
          ]
        },
        {
          pattern: "〜くする / 〜にする (make [adjective])",
          romaji: "~ku suru / ~ni suru",
          meaning: "Make ~ [adjective] / Turn ~ [adjective]",
          structure: "い-adj: drop い + くする | な-adj/Noun: + にする",
          explanation: "Express that you actively make something become a certain way. Convert the adjective to its adverb form (〜く for い-adj, 〜に for な-adj) and attach する. Pairs with なる (to become): くする/にする = transitive 'make it X'; くなる/になる = intransitive 'it becomes X'.",
          examples: [
            { jp: "部屋をきれいにしました。", romaji: "Heya wo kirei ni shimashita.", en: "I made the room clean.", hi: "मैंने कमरा साफ़ किया।" },
            { jp: "音楽の音を小さくしてください。", romaji: "Ongaku no oto wo chiisaku shite kudasai.", en: "Please turn down the music.", hi: "कृपया संगीत की आवाज़ कम कर दीजिए।" }
          ]
        },
        {
          pattern: "〜てほしい",
          romaji: "~te hoshii",
          meaning: "I want you to ~ / I want [person] to do ~",
          structure: "[Person] に + [Te-form] + ほしい",
          explanation: "Express desire for someone else to do something. The person you want the action from is marked with に. ほしい still behaves as an い-adjective: negative = 〜てほしくない, past = 〜てほしかった. Compare: 〜たい = I want to do X; 〜ほしい = I want X (thing); 〜てほしい = I want you to do X.",
          examples: [
            { jp: "友達に手伝ってほしい。", romaji: "Tomodachi ni tetsudatte hoshii.", en: "I want my friend to help me.", hi: "मैं चाहता हूँ कि दोस्त मदद करे।" },
            { jp: "先生に説明してほしいです。", romaji: "Sensei ni setsumei shite hoshii desu.", en: "I want the teacher to explain it.", hi: "मैं चाहता हूँ कि शिक्षक समझाएँ।" }
          ]
        }
      ]
    },
    10: {
      title: "Lesson 22 — Causative, Commands & Conditionals",
      points: [
        {
          pattern: "Causative form — 使役形 (shieki-kei)",
          romaji: "Godan: u→a+せる | Ichidan: drop る+させる | する→させる | くる→こさせる",
          meaning: "Make someone do ~ / Let someone do ~",
          structure: "[Director] は/が + [Cast member] を/に + [(Object) を] + [Causative verb]",
          explanation: "The causative expresses that someone makes (forces) or lets (allows) someone else do something. Both meanings use the same form — context and particle choice determine which. For intransitive verbs: を = force/make, に = let/allow. For transitive verbs: cast member always takes に; direct object takes を. Both causative and passive forms conjugate further as Ichidan verbs.",
          examples: [
            { jp: "お母さんは私を泳がせた。", romaji: "Okaasan wa watashi wo oyogaseta.", en: "Mom made me swim (forced).", hi: "माँ ने मुझे तैरने पर मजबूर किया।" },
            { jp: "先生は私に本を読ませた。", romaji: "Sensei wa watashi ni hon wo yomaseta.", en: "The teacher had me read a book.", hi: "शिक्षक ने मुझसे किताब पढ़वाई।" }
          ]
        },
        {
          pattern: "Causative + てあげる / てくれる / てもらう / てください",
          romaji: "causative te-form + ageru / kureru / morau / kudasai",
          meaning: "Let (someone do) ~ / Please let me ~",
          structure: "[Causative te-form] + あげる/くれる/もらう/ください",
          explanation: "To make it crystal clear the meaning is 'let' (not 'force'), combine the causative te-form with giving/receiving verbs. させてあげる = let someone do it (I grant). させてくれる = someone lets me do it. させてもらう = I get to do it (by asking). させてください = 'please let me do X' — widely used in business and formal settings.",
          examples: [
            { jp: "子供にゲームをさせてあげました。", romaji: "Kodomo ni geemu wo sasete agemashita.", en: "I let the child play the game.", hi: "मैंने बच्चे को गेम खेलने दिया।" },
            { jp: "ちょっと考えさせてください。", romaji: "Chotto kangaesasete kudasai.", en: "Please let me think about it.", hi: "कृपया मुझे थोड़ा सोचने दीजिए।" }
          ]
        },
        {
          pattern: "〜なさい / Imperative form",
          romaji: "~nasai / imperative",
          meaning: "Do ~ (firm instruction) / Do ~ (harsh command)",
          structure: "なさい: [Masu-stem] + なさい | Imperative: Godan u→e | Ichidan: drop る+ろ | Negative: dict. form + な",
          explanation: "A spectrum of command strength. なさい = firm but not rude instruction (parents to children, teachers to students). Imperative = extremely blunt, used only in emergencies, anger, sports coaching, or anime. Negative command = dictionary form + な ('don't do X!'). All three are very strong; defaulting to 〜てください is safer.",
          examples: [
            { jp: "早く食べなさい。", romaji: "Hayaku tabenasai.", en: "Eat quickly! (parental tone)", hi: "जल्दी खाओ।" },
            { jp: "行くな！", romaji: "Iku na!", en: "Don't go! (harsh)", hi: "मत जाओ!" }
          ]
        },
        {
          pattern: "〜ば (conditional)",
          romaji: "~ba",
          meaning: "If ~ (advice, hypothetical, general truth)",
          structure: "Godan: u→e+ば | Ichidan: drop る+れば | Negative: ない drop い+ければ | い-adj: drop い+ければ",
          explanation: "〜ば is especially common for advice, conditions that yield a good result, general truths, and set proverbs. It joins the conditional family alongside 〜たら (general), 〜なら (scope), and 〜と (inevitable). Often pairs with いい: 〜ばいい = 'you should / it would be good if you...'",
          examples: [
            { jp: "早く起きれば、間に合います。", romaji: "Hayaku okireba, ma ni aimasu.", en: "If you wake up early, you'll make it in time.", hi: "अगर जल्दी उठें, तो समय पर पहुँच जाएँगे।" },
            { jp: "勉強しなければ、合格できません。", romaji: "Benkyou shinakereba, goukaku dekimasen.", en: "If you don't study, you can't pass.", hi: "अगर पढ़ाई नहीं की, तो उत्तीर्ण नहीं हो सकेंगे।" }
          ]
        },
        {
          pattern: "〜のに",
          romaji: "~noni",
          meaning: "Even though ~ / Despite ~ (expressing disappointment)",
          structure: "[Short Form] + のに、[Main Clause] (な-adj/noun present: replace だ→な before のに)",
          explanation: "Express frustration or surprise that the expected outcome didn't happen despite the circumstances. Translates as 'even though / despite / and yet.' Has a distinctly emotional tone of disappointment that けど (but) lacks. For な-adj and nouns in the present positive, replace だ with な before のに.",
          examples: [
            { jp: "勉強したのに、テストが悪かったです。", romaji: "Benkyou shita noni, tesuto ga warukatta desu.", en: "Even though I studied, the test went badly.", hi: "मैंने पढ़ाई की, फिर भी परीक्षा खराब रही।" },
            { jp: "安いのに、おいしい。", romaji: "Yasui noni, oishii.", en: "Even though it's cheap, it's delicious.", hi: "सस्ता होने के बावजूद, स्वादिष्ट है।" }
          ]
        },
        {
          pattern: "〜のように / 〜のような",
          romaji: "~no you ni / ~no you na",
          meaning: "Like ~ / Similar to ~ (formal simile)",
          structure: "[Noun] + のように (modifies verbs/adj) | [Noun] + のような (modifies nouns)",
          explanation: "Express that something is 'like' or 'as [adjective] as' another thing. のように modifies verbs and adjectives; のような modifies nouns. More formal and literary than 〜みたいです (§17.5) — same idea, more elevated register.",
          examples: [
            { jp: "赤ちゃんのように寝ている。", romaji: "Akachan no you ni nete iru.", en: "Sleeping like a baby.", hi: "बच्चे की तरह सो रहा है।" },
            { jp: "先生のような人になりたい。", romaji: "Sensei no you na hito ni naritai.", en: "I want to become a person like my teacher.", hi: "मैं शिक्षक जैसा व्यक्ति बनना चाहता हूँ।" }
          ]
        }
      ]
    },
    11: {
      title: "Lesson 23 — Causative-Passive, Even If & Decisions",
      points: [
        {
          pattern: "Causative-Passive — 使役受け身形",
          romaji: "Ichidan: drop る+させられる | Godan: u→a+せられる (long) / u→a+される (short, non-す)",
          meaning: "I was made/forced to do ~ (against my will)",
          structure: "[Victim] は + [Forcer] に + [Causative-Passive verb]",
          explanation: "Combines causative + passive. Expresses that you were forced or made to do something — usually against your will, with annoyance or grievance. Ichidan: drop る + させられる. Godan long form: u→a + せられる. Godan short contraction: u→a + される (NOT for す-ending verbs — use long form only to avoid double さ). Irregular: する→させられる, くる→こさせられる.",
          examples: [
            { jp: "私はお母さんに勉強させられました。", romaji: "Watashi wa okaasan ni benkyou saseraremashita.", en: "I was made to study by my mom.", hi: "मुझे माँ ने पढ़ाई करने पर मजबूर किया।" },
            { jp: "上司に残業させられました。", romaji: "Joushi ni zangyou saseraremashita.", en: "I was forced to work overtime by my boss.", hi: "बॉस ने मुझसे ओवरटाइम करवाया (मेरी इच्छा के विरुद्ध)।" }
          ]
        },
        {
          pattern: "〜ても",
          romaji: "~te mo",
          meaning: "Even if ~ / Even though ~ / No matter ~",
          structure: "Verb: [Te-form] + も | い-adj: drop い+くても | な-adj/Noun: + でも",
          explanation: "Express that a result holds regardless of a condition. 'Even if A, B still happens.' Compare with 〜たら: たら says 'if A, B follows' (outcome depends on A); ても says 'even if A, B happens anyway' (outcome defies or is independent of A).",
          examples: [
            { jp: "雨が降っても、行きます。", romaji: "Ame ga futte mo, ikimasu.", en: "Even if it rains, I'll go.", hi: "बारिश हो जाए, तो भी मैं जाऊँगा।" },
            { jp: "高くても、買います。", romaji: "Takakute mo, kaimasu.", en: "Even if it's expensive, I'll buy it.", hi: "महँगा हो, तो भी खरीदूँगा।" },
            { jp: "子供でも、分かります。", romaji: "Kodomo demo, wakarimasu.", en: "Even a child would understand.", hi: "बच्चा भी समझ जाएगा।" }
          ]
        },
        {
          pattern: "〜ことにする",
          romaji: "~koto ni suru",
          meaning: "Decide to ~ / I've decided to ~",
          structure: "[Verb Short Present — affirmative or negative] + ことにする",
          explanation: "Used when you make an active, personal decision to do (or not do) something. The decision is yours. Compare with 〜ことになる which is used when a decision is made by an outside force (the company, circumstances) — the agency shifts away from you.",
          examples: [
            { jp: "車を買うことにしました。", romaji: "Kuruma wo kau koto ni shimashita.", en: "I decided to buy a car.", hi: "मैंने कार खरीदने का फ़ैसला किया।" },
            { jp: "明日からお酒を飲まないことにします。", romaji: "Ashita kara osake wo nomanai koto ni shimasu.", en: "I've decided not to drink alcohol from tomorrow.", hi: "मैंने कल से शराब न पीने का फ़ैसला किया है।" }
          ]
        },
        {
          pattern: "〜ことにしている",
          romaji: "~koto ni shite iru",
          meaning: "I make it a rule to ~ / I make a habit of ~",
          structure: "[Verb Short Present] + ことにしている",
          explanation: "When a past decision (〜ことにする) has become an ongoing habit or personal rule that you actively maintain. Translates as 'I make it a rule to...' or 'I make a habit of...' The ている shows the resulting state of that sustained decision.",
          examples: [
            { jp: "毎日、日本語を勉強することにしています。", romaji: "Mainichi, Nihongo wo benkyou suru koto ni shite imasu.", en: "I make it a rule to study Japanese every day.", hi: "मैंने हर रोज़ जापानी पढ़ने का नियम बनाया है।" },
            { jp: "夜10時以降は食べないことにしています。", romaji: "Yoru juu-ji ikou wa tabenai koto ni shite imasu.", en: "I make it a rule not to eat after 10 PM.", hi: "मैंने रात 10 बजे के बाद कुछ न खाने का नियम बनाया है।" }
          ]
        },
        {
          pattern: "〜まで",
          romaji: "~made",
          meaning: "Until ~ / Up until ~ (clause)",
          structure: "[Verb Short Present, Affirmative] + まで、[Action B]",
          explanation: "Link entire clauses with まで to mean 'until [A] happens, [B] continues.' Always attach まで to the short present affirmative form of a verb — never past, never negative. Earlier you learned まで as a particle for time/place ('until 3 o'clock', 'until Tokyo'); here it links clauses.",
          examples: [
            { jp: "日本語が上手になるまで、国に帰りません。", romaji: "Nihongo ga jouzu ni naru made, kuni ni kaerimasen.", en: "I won't go back to my country until my Japanese gets good.", hi: "जब तक जापानी में निपुण नहीं हो जाता, अपने देश वापस नहीं जाऊँगा।" },
            { jp: "雨が止むまで、待ちましょう。", romaji: "Ame ga yamu made, machimashoo.", en: "Let's wait until the rain stops.", hi: "जब तक बारिश रुक न जाए, चलो रुकते हैं।" }
          ]
        },
        {
          pattern: "〜かた (方)",
          romaji: "~kata",
          meaning: "How to ~ / The way of ~ing",
          structure: "[Verb Masu-stem] + 方(かた)",
          explanation: "Express 'how to do X' or 'the way of doing X' by attaching 方 to the masu-stem. The result behaves exactly like a noun. Important particle rule: when the verb has a direct object marked by を, that を changes to の when modifying 方. Suru-verbs are broken up with の: 日本語の勉強の仕方.",
          examples: [
            { jp: "すみません、駅への行き方を教えてください。", romaji: "Sumimasen, eki e no ikikata wo oshiete kudasai.", en: "Excuse me, please tell me how to get to the station.", hi: "माफ़ कीजिए, कृपया स्टेशन का रास्ता बताइए।" },
            { jp: "このレシピは作り方が簡単です。", romaji: "Kono reshipi wa tsukurikata ga kantan desu.", en: "The way to make this recipe is easy.", hi: "इस रेसिपी को बनाने का तरीका आसान है।" }
          ]
        }
      ]
    }
  }
};

function getGrammarLessons(level) {
  return Object.keys(GRAMMAR[level] || {}).map(Number).sort((a, b) => a - b);
}
function getGrammarLesson(level, n) {
  return GRAMMAR[level]?.[n] || null;
}
