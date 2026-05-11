// JLPT N5 Grammar — Genki Lessons 1-12
// Each point: { pattern, romaji, meaning, structure, explanation, examples:[{jp,romaji,en}] }

const GRAMMAR = {
  N5: {
    1: {
      title: "Basic Statements & Questions",
      points: [
        {
          pattern: "X は Y です",
          romaji: "X wa Y desu",
          meaning: "X is Y",
          structure: "[Topic] は [Description] です",
          explanation: "The fundamental copula sentence. は (written 'ha', pronounced 'wa') marks the topic — the main focus. です is the polite copula meaning 'is/am/are'. In casual speech both the topic and です can be dropped when context is clear.",
          examples: [
            { jp: "バナナは甘いです。", romaji: "Banana wa amai desu.", en: "Bananas are sweet." },
            { jp: "私は学生です。", romaji: "Watashi wa gakusei desu.", en: "I am a student." }
          ]
        },
        {
          pattern: "〜か",
          romaji: "~ka",
          meaning: "Question marker",
          structure: "[Polite statement] + か",
          explanation: "Attach か to the end of any polite statement to turn it into a yes/no question. Do NOT change the word order — just add か at the end. It acts as a spoken question mark. In informal speech, drop か and use a rising intonation instead.",
          examples: [
            { jp: "今日は日曜日ですか。", romaji: "Kyou wa nichiyoubi desu ka?", en: "Is today Sunday?" },
            { jp: "留学生ですか。", romaji: "Ryuugakusei desu ka?", en: "Are you an international student?" }
          ]
        },
        {
          pattern: "名詞A の 名詞B",
          romaji: "Noun A no Noun B",
          meaning: "A's B / B of A",
          structure: "[Noun A] の [Noun B]",
          explanation: "の connects two nouns. Noun A modifies Noun B. Used for possession (A's B) or classification (B of A). Can chain multiple の for complex relationships.",
          examples: [
            { jp: "アンディの携帯", romaji: "Andii no keitai", en: "Andy's cell phone (possession)" },
            { jp: "幼稚園の先生", romaji: "Yochien no sensei", en: "Kindergarten teacher (type of)" },
            { jp: "私のお母さんは幼稚園の先生です。", romaji: "Watashi no okaasan wa yochien no sensei desu.", en: "My mother is a kindergarten teacher." }
          ]
        }
      ]
    },
    2: {
      title: "Demonstratives & Particles",
      points: [
        {
          pattern: "これ / それ / あれ / どれ",
          romaji: "Kore / Sore / Are / Dore",
          meaning: "This / That / That over there / Which one",
          structure: "これ・それ・あれ・どれ は [Noun] です",
          explanation: "Demonstrative pronouns that stand alone without a following noun. これ = near speaker, それ = near listener, あれ = far from both, どれ = which one (among 3 or more items).",
          examples: [
            { jp: "これは何ですか。", romaji: "Kore wa nan desu ka?", en: "What is this?" },
            { jp: "それはピカチュウです。", romaji: "Sore wa Pikachuu desu.", en: "That is Pikachu." }
          ]
        },
        {
          pattern: "この / その / あの / どの + Noun",
          romaji: "Kono / Sono / Ano / Dono + Noun",
          meaning: "This / That / That over there / Which [Noun]",
          structure: "この・その・あの・どの + [Noun]",
          explanation: "Demonstrative adjectives — must ALWAYS be followed by a noun. Structurally related to the pronouns above. この本 = this book, その本 = that book, あの本 = that book over there, どの本 = which book.",
          examples: [
            { jp: "この本はいくらですか。", romaji: "Kono hon wa ikura desu ka?", en: "How much is this book?" },
            { jp: "あの人はだれですか。", romaji: "Ano hito wa dare desu ka?", en: "Who is that person over there?" }
          ]
        },
        {
          pattern: "ここ / そこ / あそこ / どこ",
          romaji: "Koko / Soko / Asoko / Doko",
          meaning: "Here / There / Over there / Where",
          structure: "[Location word] は [Noun] です / [Location word] に / で [verb]",
          explanation: "Location pronouns referring to physical places. ここ = here (where speaker is), そこ = there (where listener is), あそこ = over there (far from both), どこ = where.",
          examples: [
            { jp: "トイレはどこですか。", romaji: "Toire wa doko desu ka?", en: "Where is the bathroom?" },
            { jp: "ここはどこですか。", romaji: "Koko wa doko desu ka?", en: "Where is this place?" }
          ]
        },
        {
          pattern: "〜も",
          romaji: "~mo",
          meaning: "Also / Too",
          structure: "[Topic] も [Description]",
          explanation: "も replaces は (wa) to express 'also' or 'too'. With movement particles (に/へ) or location (で), も is added AFTER the particle (e.g., にも, でも, へも).",
          examples: [
            { jp: "バナナは甘いです。りんごも甘いです。", romaji: "Banana wa amai desu. Ringo mo amai desu.", en: "Bananas are sweet. Apples are also sweet." },
            { jp: "京都にも行きました。", romaji: "Kyouto ni mo ikimashita.", en: "I went to Kyoto too." }
          ]
        },
        {
          pattern: "〜じゃないです",
          romaji: "~ja nai desu",
          meaning: "Is not ~ / Am not ~",
          structure: "[Noun / Na-adj] + じゃないです",
          explanation: "To negate a copula sentence, replace です with じゃないです. The formal written equivalent is ではありません (dewa arimasen), but じゃないです is far more common in speech.",
          examples: [
            { jp: "今日は月曜日じゃないです。", romaji: "Kyou wa getsuyoubi ja nai desu.", en: "Today is not Monday." },
            { jp: "私は学生じゃないです。", romaji: "Watashi wa gakusei ja nai desu.", en: "I am not a student." }
          ]
        },
        {
          pattern: "〜ね / 〜よ",
          romaji: "~ne / ~yo",
          meaning: "Isn't it? (seeking agreement) / I tell you! (asserting info)",
          structure: "[Sentence] + ね or よ",
          explanation: "Sentence-final particles that add nuance. ね seeks agreement or confirmation ('isn't it?', 'right?'). よ asserts information the listener probably doesn't know ('I'm telling you!'). よ can sound pushy if overused.",
          examples: [
            { jp: "この本は高いですね。", romaji: "Kono hon wa takai desu ne.", en: "This book is expensive, isn't it?" },
            { jp: "僕のバッグですよ。", romaji: "Boku no baggu desu yo.", en: "It's my bag! (asserting new info)" }
          ]
        }
      ]
    },
    3: {
      title: "Polite Verbs & Sentence Particles",
      points: [
        {
          pattern: "〜ます / 〜ません",
          romaji: "~masu / ~masen",
          meaning: "Polite present/future: do ~ / do not ~",
          structure: "[Verb stem] + ます (pos.) / ません (neg.)",
          explanation: "The polite verb form for present/future. Find the verb stem, then add ます or ません. U-verbs (Godan): change final U-sound to I-sound (飲む→飲み). Ru-verbs (Ichidan): drop る (食べる→食べ). Irregulars: くる→き, する→し. Japanese present tense covers both habitual and future actions.",
          examples: [
            { jp: "飲みます / 飲みません", romaji: "Nomimasu / Nomimasen", en: "I drink / I do not drink" },
            { jp: "食べます / 食べません", romaji: "Tabemasu / Tabemasen", en: "I eat / I do not eat" }
          ]
        },
        {
          pattern: "を / で / に / へ",
          romaji: "o / de / ni / e",
          meaning: "Object / Location of action / Time or Goal / Direction",
          structure: "[Noun] + particle",
          explanation: "Four key particles. を marks the direct object (what the verb acts on). で marks where an action happens. に marks specific times or a movement destination. へ marks direction of movement (often interchangeable with に for movement).",
          examples: [
            { jp: "コーヒーを飲みます。", romaji: "Kohii o nomimasu.", en: "I drink coffee. (を = direct object)" },
            { jp: "家でコーヒーを飲みます。", romaji: "Ie de kohii o nomimasu.", en: "I drink coffee at home. (で = location of action)" },
            { jp: "アメリカに帰ります。", romaji: "Amerika ni kaerimasu.", en: "I return to America. (に = destination)" }
          ]
        },
        {
          pattern: "〜ませんか",
          romaji: "~masen ka",
          meaning: "Won't you ~? / Would you like to ~?",
          structure: "[Verb stem] + ませんか",
          explanation: "A polite invitation — uses the negative form of the verb plus か. Softer than a direct suggestion. More formal than 〜ましょうか.",
          examples: [
            { jp: "コーヒーを飲みませんか。", romaji: "Kohii o nomimasen ka?", en: "Won't you drink coffee?" }
          ]
        },
        {
          pattern: "Frequency Adverbs",
          romaji: "mainichi / yoku / tokidoki / zenzen / amari",
          meaning: "Everyday / Often / Sometimes / Never / Not often",
          structure: "[Frequency adverb] + [Verb ます / ません]",
          explanation: "Positive adverbs (pair with ます): 毎日 mainichi (every day), よく yoku (often), 時々 tokidoki (sometimes). Negative adverbs (MUST pair with ません): 全然 zenzen (never/not at all), あまり amari (not very often). They go before the verb or direct object.",
          examples: [
            { jp: "よくコーヒーを飲みます。", romaji: "Yoku kohii o nomimasu.", en: "I often drink coffee." },
            { jp: "全然コーヒーを飲みません。", romaji: "Zenzen kohii o nomimasen.", en: "I never drink coffee." }
          ]
        },
        {
          pattern: "は (wa) Particle Nuance",
          romaji: "wa",
          meaning: "As for ~ / Speaking of ~ (topic marker)",
          structure: "[Topic] は [Comment]",
          explanation: "は marks the TOPIC of the sentence, not just the subject. It translates more accurately as 'as for...' or 'speaking of...'. While often confused with the subject marker が, は sets what the sentence is about.",
          examples: [
            { jp: "今日は忙しいです。", romaji: "Kyou wa isogashii desu.", en: "As for today, I am busy." }
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
          explanation: "あります for inanimate objects (things, plants, events). います for animate beings (people, animals). Use が to mark what exists. Context can make は acceptable too.",
          examples: [
            { jp: "コーヒーがあります。", romaji: "Kouhii ga arimasu.", en: "There is coffee. / I have coffee." },
            { jp: "アンドーさんがいます。", romaji: "Andoo-san ga imasu.", en: "Ando-san is here." }
          ]
        },
        {
          pattern: "X は Y の [Location] です",
          romaji: "X wa Y no [location] desu",
          meaning: "X is [location word] of Y",
          structure: "X は Y の 上/下/前/後ろ/中/隣/近く です",
          explanation: "Describes where X is relative to Y. Location words: 上 ue (above/on), 下 shita (under), 前 mae (in front), 後ろ ushiro (behind), 中 naka (inside), 隣 tonari (next to), 近く chikaku (near). Between Y and Z: Y と Z の間 (aida).",
          examples: [
            { jp: "犬は家の前です。", romaji: "Inu wa ie no mae desu.", en: "The dog is in front of the house." },
            { jp: "本は机の上です。", romaji: "Hon wa tsukue no ue desu.", en: "The book is on the desk." }
          ]
        },
        {
          pattern: "でした / じゃなかったです",
          romaji: "Deshita / Ja nakatta desu",
          meaning: "Was ~ / Was not ~",
          structure: "[Noun/Na-adj] + でした (past aff.) / じゃなかったです (past neg.)",
          explanation: "Past tense of the copula です. Affirmative past: でした (deshita). Negative past: じゃなかったです (ja nakatta desu). Formal written negative: ではありませんでした.",
          examples: [
            { jp: "昨日は土曜日でした。", romaji: "Kinou wa doyoubi deshita.", en: "Yesterday was Saturday." },
            { jp: "雨じゃなかったです。", romaji: "Ame ja nakatta desu.", en: "It was not rain." }
          ]
        },
        {
          pattern: "〜ました / 〜ませんでした",
          romaji: "~mashita / ~masen deshita",
          meaning: "Did ~ / Did not ~",
          structure: "[Verb stem] + ました (past aff.) / ませんでした (past neg.)",
          explanation: "Past tense for action verbs in polite form. Attach to the same verb stem used for ます/ません.",
          examples: [
            { jp: "聞きました。", romaji: "Kikimashita.", en: "I listened." },
            { jp: "食べませんでした。", romaji: "Tabemasen deshita.", en: "I did not eat." }
          ]
        },
        {
          pattern: "〜と",
          romaji: "~to",
          meaning: "And (exhaustive list) / With (accompaniment)",
          structure: "[Noun A] と [Noun B] | [Person] と [verb]",
          explanation: "と connects nouns exhaustively (implies 'only A and B, nothing else'). Also indicates the person you do something with. Unlike や which is non-exhaustive.",
          examples: [
            { jp: "砂糖とミルクを入れます。", romaji: "Satou to miruku o iremasu.", en: "I put in sugar and milk. (only those two)" },
            { jp: "友達と話しました。", romaji: "Tomodachi to hanashimashita.", en: "I talked with a friend." }
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
          meaning: "Conjugating い-adjectives across all tenses",
          structure: "[Stem] + い (pres+) / くない (pres−) / かった (past+) / くなかった (past−)",
          explanation: "I-adjectives always end in hiragana い. Drop the final い (i) and add the appropriate ending. Irregular: いい (good) changes base to よ- for all conjugations except present affirmative (e.g., よかった, よくない — NOT いかった).",
          examples: [
            { jp: "おいしい / おいしくない / おいしかった / おいしくなかった", romaji: "Oishii / Oishikunai / Oishikatta / Oishikunakatta", en: "Delicious / Not delicious / Was delicious / Was not delicious" },
            { jp: "よかったです", romaji: "Yokatta desu", en: "It was good (irregular いい→よ-)" }
          ]
        },
        {
          pattern: "な-Adjective Conjugation",
          romaji: "Na-adjective forms",
          meaning: "Conjugating な-adjectives across all tenses",
          structure: "[Na-adj] + です / じゃないです / でした / じゃなかったです",
          explanation: "Na-adjectives conjugate exactly like nouns — just change the です ending. Do NOT use な when the adjective is at the end of a sentence; な is only used when directly modifying a noun (e.g., きれいな町). Exceptions that look like い-adj: きれい and 有名 are Na-adjectives.",
          examples: [
            { jp: "元気です / 元気じゃないです / 元気でした / 元気じゃなかったです", romaji: "Genki desu / Genki ja nai desu / Genki deshita / Genki ja nakatta desu", en: "Am energetic / Not energetic / Was energetic / Was not energetic" }
          ]
        },
        {
          pattern: "〜が好きです / 〜が嫌いです",
          romaji: "~ga suki desu / ~ga kirai desu",
          meaning: "I like ~ / I dislike ~",
          structure: "[Thing] が 好き・嫌い です",
          explanation: "好き (suki) and 嫌い (kirai) are Na-adjectives, not verbs — they describe a state. Therefore the thing liked/disliked is marked with が (not を). Intensifiers: 大好き (daisuki) = love, 大嫌い (daikirai) = hate.",
          examples: [
            { jp: "ロックが好きです。", romaji: "Rokku ga suki desu.", en: "I like rock music." },
            { jp: "トマトが嫌いです。", romaji: "Tomato ga kirai desu.", en: "I dislike tomatoes." }
          ]
        },
        {
          pattern: "〜ましょう / 〜ましょうか",
          romaji: "~mashou / ~mashou ka",
          meaning: "Let's ~ / Shall we ~?",
          structure: "[Verb stem] + ましょう / ましょうか",
          explanation: "Change the ます ending to ましょう to enthusiastically suggest doing something together ('Let's...'). Adding か makes it a question ('Shall we?') which can also offer assistance ('Shall I do it for you?'). Context determines which meaning.",
          examples: [
            { jp: "行きましょう！", romaji: "Ikimashou!", en: "Let's go!" },
            { jp: "行きましょうか？", romaji: "Ikimashou ka?", en: "Shall we go?" }
          ]
        },
        {
          pattern: "〜枚 / 〜人 (Counters)",
          romaji: "~mai / ~nin",
          meaning: "Counter for flat objects / Counter for people",
          structure: "[Number] + 枚 (flat things) / [Number] + 人 (people)",
          explanation: "Japanese uses specific counters for different categories. 枚 (mai) for flat thin objects (paper, tickets, plates, shirts). 人 (nin) for people. Irregulars for 人: 一人 hitori (1 person), 二人 futari (2 people), 四人 yo-nin (4 people, NOT yon-nin).",
          examples: [
            { jp: "切符を三枚ください。", romaji: "Kippu o san-mai kudasai.", en: "Please give me three tickets." },
            { jp: "男の人が二人います。", romaji: "Otoko no hito ga futari imasu.", en: "There are two men." }
          ]
        }
      ]
    },
    6: {
      title: "Te-Form & Requests",
      points: [
        {
          pattern: "て-Form (Te-Form)",
          romaji: "Te-form conjugation",
          meaning: "Connective form — foundation for many grammar patterns",
          structure: "U: う/つ/る→って, む/ぬ/ぶ→んで, く→いて, ぐ→いで, す→して | Ru: drop る+て | Irr: くる→きて, する→して, 行く→行って",
          explanation: "The Te-form connects verbs and serves as the base for requests, permission, prohibition, sequences, and continuous forms. The informal past (Ta-form) conjugates identically but replaces て/で with た/だ.",
          examples: [
            { jp: "待つ → 待って / 飲む → 飲んで / 聞く → 聞いて", romaji: "Matsu→Matte / Nomu→Nonde / Kiku→Kiite", en: "wait / drink / listen (te-forms)" },
            { jp: "食べる → 食べて / する → して / 行く → 行って", romaji: "Taberu→Tabete / Suru→Shite / Iku→Itte", en: "eat / do / go (te-forms)" }
          ]
        },
        {
          pattern: "〜てください",
          romaji: "~te kudasai",
          meaning: "Please do ~",
          structure: "[Te-form] + ください",
          explanation: "Politely asks someone to do something. Simply attach ください to the Te-form of any verb.",
          examples: [
            { jp: "待ってください。", romaji: "Matte kudasai.", en: "Please wait." },
            { jp: "シャワーを浴びてください。", romaji: "Shawaa o abite kudasai.", en: "Please take a shower." }
          ]
        },
        {
          pattern: "〜てもいいですか",
          romaji: "~te mo ii desu ka",
          meaning: "May I ~? / Is it okay to ~?",
          structure: "[Te-form] + もいいですか",
          explanation: "Asks permission to do something. Casual version: drop 'desu ka' and use rising intonation (e.g., 開けてもいい？ Akete mo ii?).",
          examples: [
            { jp: "座ってもいいですか。", romaji: "Suwatte mo ii desu ka?", en: "May I sit down?" },
            { jp: "窓を開けてもいいですか。", romaji: "Mado o akete mo ii desu ka?", en: "May I open the window?" }
          ]
        },
        {
          pattern: "〜てはいけません",
          romaji: "~te wa ikemasen",
          meaning: "Must not ~ / You cannot ~",
          structure: "[Te-form] + はいけません",
          explanation: "Formally forbids an action ('You must not...'). Quite strong — can sound playful or sarcastic among friends.",
          examples: [
            { jp: "ここで走ってはいけません。", romaji: "Koko de hashitte wa ikemasen.", en: "You must not run here." }
          ]
        },
        {
          pattern: "〜から",
          romaji: "~kara",
          meaning: "Because ~ / Since ~",
          structure: "[Reason] から、[Result/Action]",
          explanation: "Explains a reason. In Genki it is placed after the reason sentence. In natural Japanese, から frequently links two full clauses: [Reason]から、[Result]. Can also offer assistance: 〜ましょうか (mashou ka) = Shall I?",
          examples: [
            { jp: "忙しいですから。", romaji: "Isogashii desu kara.", en: "Because I am busy." },
            { jp: "手伝いましょうか。", romaji: "Tetsudaimashou ka?", en: "Shall I help you?" }
          ]
        }
      ]
    },
    7: {
      title: "Continuous Actions & States",
      points: [
        {
          pattern: "〜ています (ongoing action)",
          romaji: "~te imasu",
          meaning: "Is currently doing ~ (action in progress)",
          structure: "[Te-form] + います",
          explanation: "Expresses an action currently in progress, like English '-ing' or Hindi 'रहा हूँ'. For past continuous, use いました (imashita) instead.",
          examples: [
            { jp: "食べています。", romaji: "Tabete imasu.", en: "I am eating." },
            { jp: "見ていました。", romaji: "Mite imashita.", en: "I was watching." }
          ]
        },
        {
          pattern: "〜ています (resultant state)",
          romaji: "~te imasu",
          meaning: "Is in the state of having done ~ (current state)",
          structure: "[State-change verb Te-form] + います",
          explanation: "With verbs of change or movement, 〜ています expresses the current state resulting from a past action, not an ongoing process. Critical note: 知っています (I know) — its negative is 知りません (NOT 知っていません).",
          examples: [
            { jp: "結婚しています。", romaji: "Kekkon shite imasu.", en: "I am married. (= the state of having married)" },
            { jp: "東京に住んでいます。", romaji: "Toukyou ni sunde imasu.", en: "I live in Tokyo. (= currently residing)" }
          ]
        },
        {
          pattern: "A は B が [Adjective]",
          romaji: "A wa B ga [adjective]",
          meaning: "As for A, B is [adjective]",
          structure: "[Person A] は [Feature B] が [Adjective] です",
          explanation: "Describes a specific physical feature using a double topic-subject structure. A is the person being described; B is the feature; the adjective describes B.",
          examples: [
            { jp: "彼女は目が青いです。", romaji: "Kanojo wa me ga aoi desu.", en: "She has blue eyes. (lit. As for her, eyes are blue)" }
          ]
        },
        {
          pattern: "Adj + くて / Noun + で (chaining)",
          romaji: "~kute / ~de",
          meaning: "~ and ~ (connecting descriptions)",
          structure: "I-adj: drop い + くて | Na-adj/Noun: drop です + で",
          explanation: "Links adjectives or nouns to combine descriptions into one sentence. Irregular: いい (good) → よくて. The final adjective/noun carries the tense.",
          examples: [
            { jp: "安くて、おいしいです。", romaji: "Yasukute, oishii desu.", en: "It is cheap and delicious." },
            { jp: "学生で、日本人です。", romaji: "Gakusei de, Nihonjin desu.", en: "I am a student and Japanese." }
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
          structure: "Verbs: dictionary form | I-adj: drop です | Na-adj/Nouns: add だ (often dropped in speech)",
          explanation: "Short forms are used in casual conversation with friends and family, and are required building blocks for quoting, nominalizing, and other complex structures. Note: in spoken conversation, だ is often dropped for Na-adj/Nouns.",
          examples: [
            { jp: "食べる / 寒い / 元気（だ）", romaji: "Taberu / Samui / Genki (da)", en: "Eat / Cold / Well/healthy (casual forms)" }
          ]
        },
        {
          pattern: "〜ない (Nai Form)",
          romaji: "~nai",
          meaning: "Negative short/plain form",
          structure: "U-verbs: change U→A sound + ない (exception: う→わない) | Ru-verbs: drop る + ない | Irregular: くる→こない, する→しない",
          explanation: "The informal negative form. For adjectives: I-adj drop い + くない; Na-adj/Nouns + じゃない.",
          examples: [
            { jp: "飲まない / 食べない / こない / しない", romaji: "Nomanai / Tabenai / Konai / Shinai", en: "Won't drink / Won't eat / Won't come / Won't do" }
          ]
        },
        {
          pattern: "〜と思います",
          romaji: "~to omoimasu",
          meaning: "I think that ~ / I believe that ~",
          structure: "[Short form] + と思います",
          explanation: "Express an opinion or belief. The idea is stated in short/plain form first, then と思います follows. For past thoughts: と思いました or と思った.",
          examples: [
            { jp: "明日雨が降ると思います。", romaji: "Ashita ame ga furu to omoimasu.", en: "I think that it will rain tomorrow." },
            { jp: "彼女は忙しいと言っていました。", romaji: "Kanojo wa isogashii to itte imashita.", en: "She said that she is busy." }
          ]
        },
        {
          pattern: "〜ないでください",
          romaji: "~nai de kudasai",
          meaning: "Please don't ~",
          structure: "[Nai-form verb] + でください",
          explanation: "Politely asks someone NOT to do something.",
          examples: [
            { jp: "写真を撮らないでください。", romaji: "Shashin o toranai de kudasai.", en: "Please don't take pictures." }
          ]
        },
        {
          pattern: "[Dictionary form] + のが好き",
          romaji: "~no ga suki",
          meaning: "Like doing ~ / (nominalizing verbs)",
          structure: "[Dictionary form verb] + の + が/を + [adjective/verb]",
          explanation: "の (no) nominalizes a verb — turns it into a noun phrase meaning 'the act of doing X'. The resulting noun can then be used with が好き, が上手, が下手, etc.",
          examples: [
            { jp: "運転するのが好きです。", romaji: "Unten suru no ga suki desu.", en: "I like driving." },
            { jp: "日本語を話すのが難しいです。", romaji: "Nihongo o hanasu no ga muzukashii desu.", en: "Speaking Japanese is difficult." }
          ]
        },
        {
          pattern: "何か / 何も + negative",
          romaji: "Nanika / Nanimo",
          meaning: "Something / Nothing (not anything)",
          structure: "何か + positive verb | 何も + negative verb",
          explanation: "Adding か to a question word = some/any (positive context). Adding も to a question word = no/none (MUST pair with negative verb). Pattern applies to: 誰か/誰も (someone/no one), どこか/どこも (somewhere/nowhere).",
          examples: [
            { jp: "何か食べますか。", romaji: "Nanika tabemasu ka?", en: "Will you eat something?" },
            { jp: "何も食べません。", romaji: "Nanimo tabemasen.", en: "I will eat nothing." }
          ]
        }
      ]
    },
    9: {
      title: "Ta-Form & Informal Past",
      points: [
        {
          pattern: "た-Form (Ta-Form)",
          romaji: "Ta-form — informal past tense",
          meaning: "Informal/casual past tense",
          structure: "Same conjugation as Te-form but replace て/で with た/だ",
          explanation: "The informal past tense. Conjugates exactly like the Te-form (Lesson 6). U-verbs: う/つ/る→った, む/ぬ/ぶ→んだ, く→いた, ぐ→いだ, す→した. Ru-verbs: drop る+た. Irregulars: くる→きた, する→した, 行く→行った.",
          examples: [
            { jp: "歌った / 飲んだ / 聞いた / 話した", romaji: "Utatta / Nonda / Kiita / Hanashita", en: "Sang / Drank / Listened / Spoke" }
          ]
        },
        {
          pattern: "〜なかった",
          romaji: "~nakatta",
          meaning: "Did not ~ (informal past negative)",
          structure: "[Nai-form] drop い + かった",
          explanation: "Informal past negative. Take the Nai-form, drop the final い (i), and add かった (katta).",
          examples: [
            { jp: "食べなかった / しなかった", romaji: "Tabenakatta / Shinakatta", en: "Didn't eat / Didn't do" }
          ]
        },
        {
          pattern: "Informal past: Adjectives & Nouns",
          romaji: "~katta / ~ja nakatta / ~datta / ~ja nakatta",
          meaning: "Was ~ / Was not ~ (casual past for adj/nouns)",
          structure: "I-adj: drop い + かった (aff.) / くなかった (neg.) | Na-adj/Nouns: + だった (aff.) / じゃなかった (neg.)",
          explanation: "You must also conjugate adjectives and nouns into the informal past when speaking casually.",
          examples: [
            { jp: "楽しかった / 楽しくなかった", romaji: "Tanoshikatta / Tanoshikunakatta", en: "Was fun / Was not fun" },
            { jp: "きれいだった / 静かじゃなかった", romaji: "Kirei datta / Shizuka ja nakatta", en: "Was beautiful / Was not quiet" }
          ]
        },
        {
          pattern: "[Short form] から、[Result]",
          romaji: "[Short form] kara, [result]",
          meaning: "Because ~ / Since ~ (as conjunction)",
          structure: "[Reason — short/long form] から、[Action/Result]",
          explanation: "In natural Japanese, から connects two clauses. The reason/cause comes BEFORE から, and the result/action follows. Both short and long forms can precede から.",
          examples: [
            { jp: "もう食べたから、行かない。", romaji: "Mou tabeta kara, ikanai.", en: "Because I already ate, I won't go." },
            { jp: "早かったから、よかったです。", romaji: "Hayakatta kara, yokatta desu.", en: "Because it was fast, it was good." }
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
          structure: "[Noun A] のほうが、[Noun B] より [Adjective] です",
          explanation: "Comparing two items. のほうが marks the item that is more/better. より marks the standard of comparison ('more than'). Question: どっちのほうが〜ですか (which of the two is more ~?).",
          examples: [
            { jp: "長野のほうが、福岡より寒いです。", romaji: "Nagano no hou ga, Fukuoka yori samui desu.", en: "Nagano is colder than Fukuoka." },
            { jp: "マンガとアニメと、どっちのほうが面白いですか。", romaji: "Manga to anime to, dotchi no hou ga omoshiroi?", en: "Between manga and anime, which is more interesting?" }
          ]
        },
        {
          pattern: "[Category] の中で〜が一番 [Adj]",
          romaji: "~no naka de ~ ga ichiban [adj]",
          meaning: "~ is the most [adj] in [category]",
          structure: "[Category] の中で、[Noun] が一番 [Adjective] です",
          explanation: "一番 (ichiban) = number one / the most. Use with の中で (within a category) for superlatives. Question words: どれ (which item), 何 (what), 誰 (who), どこ (where), いつ (when).",
          examples: [
            { jp: "動物の中で、猫が一番かわいいです。", romaji: "Doubutsu no naka de, neko ga ichiban kawaii desu.", en: "Among animals, cats are the cutest." }
          ]
        },
        {
          pattern: "〜つもりです",
          romaji: "~tsumori desu",
          meaning: "I intend to ~ / I plan to ~",
          structure: "[Dictionary form] + つもりです (pos.) | [Nai-form] + つもりです (neg.)",
          explanation: "Expresses a firm intention or plan. Positive: attach つもりです to the dictionary form. Negative: attach つもりです to the Nai-form.",
          examples: [
            { jp: "たくさん勉強するつもりです。", romaji: "Takusan benkyou suru tsumori desu.", en: "I intend to study a lot." },
            { jp: "行かないつもりです。", romaji: "Ikanai tsumori desu.", en: "I do not intend to go." }
          ]
        },
        {
          pattern: "Question word + か / も",
          romaji: "Question word + ka / mo",
          meaning: "Some~/Any~ / No~/Not any~",
          structure: "[Q-word] + か (some/any, positive verb) | [Q-word] + も (none, negative verb)",
          explanation: "Adding か to a question word creates 'some/any'. Adding も with a negative verb creates 'no/none'. Directional particles slip between word and か/も (e.g., どこにも, どこかに).",
          examples: [
            { jp: "どこかに行きます。", romaji: "Dokoka ni ikimasu.", en: "I am going somewhere." },
            { jp: "どこにも行かない。", romaji: "Doko ni mo ikanai.", en: "I am going nowhere." }
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
          structure: "[Verb stem] + たいです (want) / たくないです (don't want)",
          explanation: "Express a personal desire to do an action. たい acts like an I-adjective and conjugates the same way. The object particle can be を or が. Important: you can only state YOUR OWN desires directly. For others' desires, quote them (〜と言っていました).",
          examples: [
            { jp: "日本に行きたいです。", romaji: "Nihon ni ikitai desu.", en: "I want to go to Japan." },
            { jp: "仕事に行きたくない。", romaji: "Shigoto ni ikitakunai.", en: "I don't want to go to work." }
          ]
        },
        {
          pattern: "〜たり〜たりします",
          romaji: "~tari ~tari shimasu",
          meaning: "Do things like ~ and ~ (non-exhaustive actions)",
          structure: "[Ta-form] り、[Ta-form] り します",
          explanation: "Lists multiple representative actions without implying a strict sequence ('doing things like A and B, among others'). The final verb (します) determines the tense.",
          examples: [
            { jp: "買い物したり、映画を見たりします。", romaji: "Kaimono shitari, eiga o mitari shimasu.", en: "I do things like shopping and watching movies." }
          ]
        },
        {
          pattern: "〜たことがあります",
          romaji: "~ta koto ga arimasu",
          meaning: "Have done ~ before / Have the experience of ~",
          structure: "[Ta-form verb] + ことがあります",
          explanation: "Express that you have the experience of having done something in the past. For 'have never done': 〜たことがありません.",
          examples: [
            { jp: "寿司を食べたことがあります。", romaji: "Sushi o tabeta koto ga arimasu.", en: "I have eaten sushi before." },
            { jp: "日本に行ったことがありますか。", romaji: "Nihon ni itta koto ga arimasu ka?", en: "Have you ever been to Japan?" }
          ]
        },
        {
          pattern: "〜や〜（など）",
          romaji: "~ya~(nado)",
          meaning: "~ and ~ (among other things) — non-exhaustive list",
          structure: "[Noun A] や [Noun B] （など）",
          explanation: "や lists nouns non-exhaustively, implying there are more items not mentioned. Unlike と which implies you are listing everything. など (nado) = 'etc.' can optionally be added at the end.",
          examples: [
            { jp: "ピカチュウやマリオが好きです。", romaji: "Pikachuu ya Mario ga suki desu.", en: "I like Pikachu and Mario (among others)." }
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
          explanation: "〜んです provides explanation or context, or invites one. It signals that the statement is directly relevant to the current situation. Very common in natural spoken Japanese. Casual: 〜んだ.",
          examples: [
            { jp: "飲みすぎたんです。", romaji: "Nomi sugita n desu.", en: "The thing is, I drank too much." },
            { jp: "何を食べたんですか。", romaji: "Nani o tabeta n desu ka?", en: "What is it that you ate?" }
          ]
        },
        {
          pattern: "〜すぎる",
          romaji: "~sugiru",
          meaning: "Too much ~ / Excessively ~",
          structure: "[Verb stem / I-adj stem / Na-adj] + すぎる",
          explanation: "Expresses that something is excessive. Verbs: verb stem + すぎる. I-adj: drop い + すぎる. Na-adj: drop な + すぎる. すぎる conjugates like a regular Ru-verb.",
          examples: [
            { jp: "食べすぎた。", romaji: "Tabesugita.", en: "I ate too much." },
            { jp: "高すぎる。", romaji: "Takasugiru.", en: "It's too expensive." }
          ]
        },
        {
          pattern: "〜ほうがいいです",
          romaji: "~hou ga ii desu",
          meaning: "You had better ~ / It is better to ~",
          structure: "[Ta-form] + ほうがいいです (do it) | [Nai-form] + ほうがいいです (don't do it)",
          explanation: "Gives strong advice or recommendation ('had better'). Positive advice: Ta-form + ほうがいい. Negative advice: Nai-form + ほうがいい. Can sound bossy or paternalistic if used carelessly.",
          examples: [
            { jp: "食べたほうがいいです。", romaji: "Tabeta hou ga ii desu.", en: "You had better eat." },
            { jp: "行かないほうがいいです。", romaji: "Ikanai hou ga ii desu.", en: "You had better not go." }
          ]
        },
        {
          pattern: "〜でしょう / 〜だろう",
          romaji: "~deshou / ~darou",
          meaning: "Probably ~ / I guess ~ / ~ right? (probability or seeking agreement)",
          structure: "[Short form] + でしょう | [Base word] + でしょう (Na-adj/Nouns, no だ/な before it)",
          explanation: "Expresses probability, guesses, or seeks confirmation. Intonation changes the meaning: flat = 'probably'; rising = 'right? / isn't it?'. Casual form: だろう (darou). Do NOT use だ or な before でしょう with Na-adj/Nouns.",
          examples: [
            { jp: "雨が降るでしょう。", romaji: "Ame ga furu deshou.", en: "It will probably rain." },
            { jp: "今日は土曜日でしょう？", romaji: "Kyou wa doyoubi deshou?", en: "Today is Saturday, right?" }
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
