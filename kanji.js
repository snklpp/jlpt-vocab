const KANJI = {
  N5: [
    // Nature & Elements
    { kanji: "山", kun: "やま", on: "サン", imi: "やま", en: "mountain", group: "Nature" },
    { kanji: "川", kun: "かわ", on: "セン", imi: "かわ", en: "river", group: "Nature" },
    { kanji: "田", kun: "た", on: "デン", imi: "た", en: "rice field", group: "Nature" },
    { kanji: "日", kun: "ひ・び", on: "ニチ・ニ・ジツ", imi: "ひ", en: "sun / day", group: "Nature" },
    { kanji: "月", kun: "つき", on: "ゲツ・ガツ", imi: "つき", en: "moon / month", group: "Nature" },
    { kanji: "火", kun: "ひ", on: "カ", imi: "ひ", en: "fire", group: "Nature" },
    { kanji: "水", kun: "みず", on: "スイ", imi: "みず", en: "water", group: "Nature" },
    { kanji: "木", kun: "き", on: "モク", imi: "き", en: "tree", group: "Nature" },
    { kanji: "金", kun: "かね", on: "キン", imi: "きん・かね", en: "gold / money", group: "Nature" },
    { kanji: "土", kun: "つち", on: "ド・ト", imi: "つち", en: "soil", group: "Nature" },
    { kanji: "雨", kun: "あめ", on: "ウ", imi: "あめ", en: "rain", group: "Nature" },
    { kanji: "天", kun: "", on: "テン", imi: "てん", en: "heaven", group: "Nature" },
    { kanji: "気", kun: "", on: "キ", imi: "き", en: "spirit / air", group: "Nature" },
    { kanji: "花", kun: "はな", on: "カ", imi: "はな", en: "flower", group: "Nature" },
    { kanji: "国", kun: "くに", on: "コク", imi: "くに", en: "country", group: "Nature" },

    // Numbers
    { kanji: "一", kun: "ひとつ", on: "イチ・イッ", imi: "いち", en: "one", group: "Numbers" },
    { kanji: "二", kun: "ふたつ", on: "ニ", imi: "に", en: "two", group: "Numbers" },
    { kanji: "三", kun: "みっつ", on: "サン", imi: "さん", en: "three", group: "Numbers" },
    { kanji: "四", kun: "よっつ・よん・よ", on: "シ", imi: "よん", en: "four", group: "Numbers" },
    { kanji: "五", kun: "いつつ", on: "ゴ", imi: "ご", en: "five", group: "Numbers" },
    { kanji: "六", kun: "むっつ", on: "ロク・ロッ", imi: "ろく", en: "six", group: "Numbers" },
    { kanji: "七", kun: "ななつ", on: "シチ", imi: "なな", en: "seven", group: "Numbers" },
    { kanji: "八", kun: "やっつ", on: "ハチ・ハッ", imi: "はち", en: "eight", group: "Numbers" },
    { kanji: "九", kun: "ここのつ", on: "キュウ", imi: "きゅう", en: "nine", group: "Numbers" },
    { kanji: "十", kun: "とお", on: "ジュウ・ジュッ・ジッ", imi: "じゅう", en: "ten", group: "Numbers" },
    { kanji: "百", kun: "", on: "ヒャク", imi: "ひゃく", en: "hundred", group: "Numbers" },
    { kanji: "千", kun: "ち", on: "セン", imi: "せん", en: "thousand", group: "Numbers" },
    { kanji: "万", kun: "", on: "マン・バン", imi: "まん", en: "ten thousand", group: "Numbers" },

    // Time & Money
    { kanji: "円", kun: "", on: "エン", imi: "まる・えん", en: "circle / yen", group: "Time & Money" },
    { kanji: "年", kun: "とし", on: "ネン", imi: "ねん・とし", en: "year / age", group: "Time & Money" },
    { kanji: "半", kun: "", on: "ハン", imi: "はんぶん", en: "half", group: "Time & Money" },
    { kanji: "分", kun: "わける・わかる", on: "ブン・フン", imi: "ふん・ぶん", en: "minute / divide", group: "Time & Money" },
    { kanji: "時", kun: "とき", on: "ジ", imi: "じかん", en: "time / hour", group: "Time & Money" },
    { kanji: "週", kun: "", on: "シュウ", imi: "しゅう", en: "week", group: "Time & Money" },
    { kanji: "午", kun: "", on: "ゴ", imi: "ひる", en: "noon", group: "Time & Money" },
    { kanji: "今", kun: "いま", on: "コン", imi: "いま", en: "now", group: "Time & Money" },

    // Directions & Position
    { kanji: "上", kun: "うえ・あがる", on: "ジョウ", imi: "うえ", en: "above / up", group: "Directions" },
    { kanji: "下", kun: "した・さがる", on: "カ・ゲ", imi: "した", en: "below / down", group: "Directions" },
    { kanji: "中", kun: "なか", on: "チュウ・ジュウ", imi: "なか", en: "middle / inside", group: "Directions" },
    { kanji: "前", kun: "まえ", on: "ゼン", imi: "まえ", en: "front / before", group: "Directions" },
    { kanji: "後", kun: "うしろ・あと", on: "ゴ・ゴウ", imi: "うしろ・あと", en: "back / after", group: "Directions" },
    { kanji: "外", kun: "そと", on: "ガイ", imi: "そと", en: "outside", group: "Directions" },
    { kanji: "左", kun: "ひだり", on: "サ", imi: "ひだり", en: "left", group: "Directions" },
    { kanji: "右", kun: "みぎ", on: "ウ・ユウ", imi: "みぎ", en: "right", group: "Directions" },
    { kanji: "東", kun: "ひがし", on: "トウ", imi: "ひがし", en: "east", group: "Directions" },
    { kanji: "西", kun: "にし", on: "サイ・セイ", imi: "にし", en: "west", group: "Directions" },
    { kanji: "南", kun: "みなみ", on: "ナン", imi: "みなみ", en: "south", group: "Directions" },
    { kanji: "北", kun: "きた", on: "ホク・ホッ", imi: "きた", en: "north", group: "Directions" },

    // People & Family
    { kanji: "人", kun: "ひと", on: "ジン・ニン", imi: "ひと", en: "person", group: "People" },
    { kanji: "子", kun: "こ", on: "シ", imi: "こども", en: "child", group: "People" },
    { kanji: "女", kun: "おんな", on: "ジョ", imi: "おんな", en: "woman", group: "People" },
    { kanji: "男", kun: "おとこ", on: "ダン・ナン", imi: "おとこ", en: "man", group: "People" },
    { kanji: "父", kun: "ちち", on: "フ", imi: "ちち", en: "father", group: "People" },
    { kanji: "母", kun: "はは", on: "ボ", imi: "はは", en: "mother", group: "People" },
    { kanji: "名", kun: "な", on: "メイ", imi: "なまえ", en: "name", group: "People" },

    // Body
    { kanji: "目", kun: "め", on: "モク", imi: "め", en: "eye", group: "Body" },
    { kanji: "口", kun: "くち", on: "コウ", imi: "くち", en: "mouth", group: "Body" },
    { kanji: "耳", kun: "みみ", on: "ジ", imi: "みみ", en: "ear", group: "Body" },
    { kanji: "手", kun: "て", on: "シュ", imi: "て", en: "hand", group: "Body" },
    { kanji: "足", kun: "あし・たりる", on: "ソク", imi: "あし", en: "leg / foot", group: "Body" },
    { kanji: "力", kun: "ちから", on: "リョク・リキ", imi: "ちから", en: "power / strength", group: "Body" },

    // Education & Society
    { kanji: "先", kun: "さき", on: "セン", imi: "さき・まえ", en: "previous / ahead", group: "Society" },
    { kanji: "生", kun: "うまれる・いきる", on: "セイ", imi: "うまれる・いきる", en: "be born / live", group: "Society" },
    { kanji: "学", kun: "まなぶ", on: "ガク・ガッ", imi: "べんきょうする", en: "study / learn", group: "Society" },
    { kanji: "校", kun: "", on: "コウ", imi: "がっこう", en: "school", group: "Society" },
    { kanji: "友", kun: "とも", on: "ユウ", imi: "ともだち", en: "friend", group: "Society" },
    { kanji: "本", kun: "もと", on: "ホン・ボン", imi: "ほん・もと", en: "book / origin", group: "Society" },
    { kanji: "毎", kun: "", on: "マイ", imi: "まい", en: "every", group: "Society" },
    { kanji: "何", kun: "なに・なん", on: "", imi: "なに", en: "what", group: "Society" },
    { kanji: "会", kun: "あう", on: "カイ", imi: "あう", en: "meet", group: "Society" },
    { kanji: "社", kun: "", on: "シャ", imi: "かいしゃ・やしろ", en: "company / shrine", group: "Society" },
    { kanji: "店", kun: "みせ", on: "テン", imi: "みせ", en: "shop / store", group: "Society" },
    { kanji: "駅", kun: "", on: "エキ", imi: "えき", en: "station", group: "Society" },

    // Animals
    { kanji: "牛", kun: "うし", on: "ギュウ", imi: "うし", en: "cow", group: "Animals" },
    { kanji: "馬", kun: "うま", on: "バ", imi: "うま", en: "horse", group: "Animals" },
    { kanji: "魚", kun: "さかな", on: "ギョ", imi: "さかな", en: "fish", group: "Animals" },
    { kanji: "貝", kun: "かい", on: "", imi: "かい", en: "shellfish", group: "Animals" },

    // Objects & Places
    { kanji: "車", kun: "くるま", on: "シャ", imi: "くるま", en: "car / vehicle", group: "Objects" },
    { kanji: "門", kun: "", on: "モン", imi: "もん", en: "gate", group: "Objects" },
    { kanji: "道", kun: "みち", on: "ドウ", imi: "みち", en: "road / street", group: "Objects" },

    // Verbs & Actions
    { kanji: "行", kun: "いく・おこなう", on: "コウ・ギョウ", imi: "いく", en: "go", group: "Verbs" },
    { kanji: "来", kun: "くる・こない・きます", on: "ライ", imi: "くる", en: "come", group: "Verbs" },
    { kanji: "食", kun: "たべる", on: "ショク", imi: "たべる", en: "eat", group: "Verbs" },
    { kanji: "見", kun: "みる", on: "ケン", imi: "みる", en: "see / look", group: "Verbs" },
    { kanji: "入", kun: "はいる・いれる", on: "ニュウ", imi: "はいる・いれる", en: "enter / put in", group: "Verbs" },
    { kanji: "出", kun: "でる・だす", on: "シュツ・シュッ", imi: "でる・だす", en: "go out / take out", group: "Verbs" },
    { kanji: "立", kun: "たつ", on: "リツ・リッ", imi: "たつ", en: "stand", group: "Verbs" },
    { kanji: "書", kun: "かく", on: "ショ", imi: "かく", en: "write", group: "Verbs" },
    { kanji: "言", kun: "いう", on: "ゲン・ゴン", imi: "いう", en: "say / speak", group: "Verbs" },
    { kanji: "飲", kun: "のむ", on: "イン", imi: "のむ", en: "drink", group: "Verbs" },
    { kanji: "話", kun: "はなす・はなし", on: "ワ", imi: "はなす", en: "speak / talk", group: "Verbs" },
    { kanji: "読", kun: "よむ", on: "ドク", imi: "よむ", en: "read", group: "Verbs" },
    { kanji: "語", kun: "かたる", on: "ゴ", imi: "ことば", en: "word / language", group: "Verbs" },
    { kanji: "間", kun: "あいだ・ま", on: "カン", imi: "あいだ", en: "between / interval", group: "Verbs" },
    { kanji: "聞", kun: "きく・きこえる", on: "ブン", imi: "きく", en: "listen / hear", group: "Verbs" },
    { kanji: "買", kun: "かう", on: "バイ", imi: "かう", en: "buy", group: "Verbs" },
    { kanji: "休", kun: "やすむ", on: "キュウ", imi: "やすむ", en: "rest", group: "Verbs" },

    // Descriptions
    { kanji: "白", kun: "しろ・しろい", on: "ハク", imi: "しろ", en: "white", group: "Descriptions" },
    { kanji: "空", kun: "そら・ぞら", on: "クウ", imi: "そら・くう", en: "sky / empty", group: "Descriptions" },
    { kanji: "電", kun: "", on: "デン", imi: "でんき", en: "electricity", group: "Descriptions" },
  ],

  N4: [
    // Places
    { kanji: "住", kun: "すむ", on: "ジュウ", imi: "すむ", en: "live", group: "Places" },
    { kanji: "所", kun: "ところ・どころ", on: "ショ・ジョ", imi: "ばしょ", en: "place", group: "Places" },
    { kanji: "京", kun: "", on: "キョウ", imi: "みやこ", en: "capital", group: "Places" },
    { kanji: "都", kun: "みやこ", on: "ト・ツ", imi: "みやこ", en: "metropolis", group: "Places" },
    { kanji: "府", kun: "", on: "フ", imi: "ふ", en: "admin prefecture", group: "Places" },
    { kanji: "県", kun: "", on: "ケン", imi: "けん", en: "prefecture", group: "Places" },
    { kanji: "市", kun: "いち", on: "シ", imi: "し・いち", en: "city", group: "Places" },
    { kanji: "区", kun: "", on: "ク", imi: "く", en: "ward", group: "Places" },
    { kanji: "町", kun: "まち", on: "チョウ", imi: "まち", en: "town", group: "Places" },
    { kanji: "村", kun: "むら", on: "ソン", imi: "むら", en: "village", group: "Places" },

    // Descriptions
    { kanji: "明", kun: "あかるい", on: "メイ", imi: "あかるい・はっきり", en: "bright / clear", group: "Descriptions" },
    { kanji: "暗", kun: "くらい", on: "アン", imi: "くらい", en: "dark", group: "Descriptions" },
    { kanji: "遠", kun: "とおい", on: "エン", imi: "とおい", en: "far", group: "Descriptions" },
    { kanji: "近", kun: "ちかい", on: "キン", imi: "ちかい", en: "near", group: "Descriptions" },
    { kanji: "強", kun: "つよい", on: "キョウ", imi: "つよい", en: "strong", group: "Descriptions" },
    { kanji: "弱", kun: "よわい", on: "ジャク", imi: "よわい", en: "weak", group: "Descriptions" },
    { kanji: "重", kun: "おもい", on: "ジュウ", imi: "おもい・だいじな", en: "heavy / important", group: "Descriptions" },
    { kanji: "軽", kun: "かるい", on: "ケイ", imi: "かるい", en: "light", group: "Descriptions" },
    { kanji: "太", kun: "ふとい", on: "タイ", imi: "ふとい", en: "fat / thick", group: "Descriptions" },
    { kanji: "細", kun: "ほそい・こまかい", on: "サイ", imi: "ほそい・こまかい", en: "slender / fine", group: "Descriptions" },
    { kanji: "特", kun: "", on: "トク・トッ", imi: "とくべつな", en: "special", group: "Descriptions" },
    { kanji: "別", kun: "わかれる", on: "ベツ", imi: "わかれる", en: "separate", group: "Descriptions" },
    { kanji: "有", kun: "ある", on: "ユウ", imi: "ある", en: "exist / have", group: "Descriptions" },
    { kanji: "便", kun: "たより", on: "ベン・ビン", imi: "べんり・びん", en: "convenience / mail", group: "Descriptions" },
    { kanji: "利", kun: "", on: "リ", imi: "りえき", en: "profit / advantage", group: "Descriptions" },
    { kanji: "不", kun: "", on: "フ・ブ", imi: "〜ではない", en: "not- (prefix)", group: "Descriptions" },
    { kanji: "元", kun: "もと", on: "ゲン・ガン", imi: "もと", en: "origin", group: "Descriptions" },
    { kanji: "好", kun: "すき", on: "コウ", imi: "すき", en: "like / fond", group: "Descriptions" },
    { kanji: "低", kun: "ひくい", on: "テイ", imi: "ひくい", en: "low", group: "Descriptions" },
    { kanji: "広", kun: "ひろい", on: "コウ", imi: "ひろい", en: "spacious / wide", group: "Descriptions" },
    { kanji: "短", kun: "みじかい", on: "タン", imi: "みじかい", en: "short", group: "Descriptions" },
    { kanji: "良", kun: "よい", on: "リョウ", imi: "よい", en: "good", group: "Descriptions" },
    { kanji: "悪", kun: "わるい", on: "アク", imi: "わるい", en: "bad", group: "Descriptions" },
    { kanji: "正", kun: "ただしい", on: "セイ・ショウ", imi: "ただしい", en: "correct / right", group: "Descriptions" },
    { kanji: "変", kun: "かわる・かえる", on: "ヘン", imi: "かわる・へんな", en: "change / strange", group: "Descriptions" },

    // Colors
    { kanji: "赤", kun: "あかい", on: "セキ", imi: "あか", en: "red", group: "Colors" },
    { kanji: "青", kun: "あおい", on: "セイ", imi: "あお", en: "blue", group: "Colors" },
    { kanji: "黒", kun: "くろい", on: "コク", imi: "くろ", en: "black", group: "Colors" },

    // Arts & Travel
    { kanji: "映", kun: "うつす", on: "エイ", imi: "うつす", en: "reflect / project", group: "Arts" },
    { kanji: "画", kun: "", on: "ガ・カク", imi: "え", en: "picture / drawing", group: "Arts" },
    { kanji: "音", kun: "おと", on: "オン", imi: "おと", en: "sound", group: "Arts" },
    { kanji: "楽", kun: "たのしい", on: "ガク・ラク", imi: "たのしい・かんたん", en: "enjoyable / music", group: "Arts" },
    { kanji: "歌", kun: "うた・うたう", on: "カ", imi: "うた", en: "song", group: "Arts" },
    { kanji: "写", kun: "うつす", on: "シャ", imi: "うつす", en: "copy / photograph", group: "Arts" },
    { kanji: "真", kun: "ま", on: "シン", imi: "ほんとう", en: "truth / real", group: "Arts" },
    { kanji: "旅", kun: "たび", on: "リョ", imi: "たび", en: "trip / travel", group: "Arts" },

    // Society & World
    { kanji: "世", kun: "よ", on: "セ・セイ", imi: "せかい・せだい", en: "world / generation", group: "Society" },
    { kanji: "界", kun: "", on: "カイ", imi: "さかいめ", en: "boundary / world", group: "Society" },
    { kanji: "主", kun: "おもな・ぬし", on: "シュ", imi: "おもな・しゅじん", en: "main / master", group: "Society" },
    { kanji: "民", kun: "", on: "ミン", imi: "ひとびと", en: "people / nation", group: "Society" },

    // Work
    { kanji: "仕", kun: "つかえる", on: "シ", imi: "つかえる", en: "serve", group: "Work" },
    { kanji: "事", kun: "こと", on: "ジ", imi: "こと", en: "matter / thing", group: "Work" },
    { kanji: "銀", kun: "", on: "ギン", imi: "ぎん", en: "silver", group: "Work" },
    { kanji: "員", kun: "", on: "イン", imi: "なかま", en: "member", group: "Work" },
    { kanji: "医", kun: "", on: "イ", imi: "いがく", en: "medicine / doctor", group: "Work" },
    { kanji: "者", kun: "もの", on: "シャ", imi: "ひと", en: "person / expert", group: "Work" },
    { kanji: "働", kun: "はたらく", on: "ドウ", imi: "はたらく", en: "work / labor", group: "Work" },
    { kanji: "産", kun: "うむ", on: "サン", imi: "つくる", en: "produce / birth", group: "Work" },
    { kanji: "業", kun: "", on: "ギョウ", imi: "わざ", en: "deed / industry", group: "Work" },

    // Nature
    { kanji: "林", kun: "はやし", on: "リン", imi: "はやし", en: "wood / grove", group: "Nature" },
    { kanji: "森", kun: "もり", on: "シン", imi: "もり", en: "forest", group: "Nature" },
    { kanji: "地", kun: "", on: "ジ・チ", imi: "じめん", en: "ground / earth", group: "Nature" },
    { kanji: "池", kun: "いけ", on: "チ", imi: "いけ", en: "pond", group: "Nature" },
    { kanji: "海", kun: "うみ", on: "カイ", imi: "うみ", en: "sea", group: "Nature" },
    { kanji: "洋", kun: "", on: "ヨウ", imi: "おおきいうみ", en: "ocean / Western", group: "Nature" },
    { kanji: "雪", kun: "ゆき", on: "セツ", imi: "ゆき", en: "snow", group: "Nature" },
    { kanji: "光", kun: "ひかり・ひかる", on: "コウ", imi: "ひかり", en: "light / shine", group: "Nature" },
    { kanji: "台", kun: "", on: "ダイ・タイ", imi: "だい", en: "platform / stand", group: "Nature" },
    { kanji: "風", kun: "かぜ", on: "フウ", imi: "かぜ・ふう", en: "wind / style", group: "Nature" },

    // Seasons & Weather
    { kanji: "季", kun: "", on: "キ", imi: "きせつ", en: "season", group: "Seasons" },
    { kanji: "節", kun: "ふし", on: "セツ", imi: "くぎり", en: "season / joint", group: "Seasons" },
    { kanji: "春", kun: "はる", on: "シュン", imi: "はる", en: "spring", group: "Seasons" },
    { kanji: "夏", kun: "なつ", on: "カ", imi: "なつ", en: "summer", group: "Seasons" },
    { kanji: "秋", kun: "あき", on: "シュウ", imi: "あき", en: "autumn", group: "Seasons" },
    { kanji: "冬", kun: "ふゆ", on: "トウ", imi: "ふゆ", en: "winter", group: "Seasons" },
    { kanji: "暑", kun: "あつい", on: "ショ", imi: "あつい", en: "hot", group: "Seasons" },
    { kanji: "寒", kun: "さむい", on: "カン", imi: "さむい", en: "cold", group: "Seasons" },
    { kanji: "暖", kun: "あたたかい", on: "ダン", imi: "あたたかい", en: "warm", group: "Seasons" },

    // Body & Health
    { kanji: "体", kun: "からだ", on: "タイ", imi: "からだ", en: "body", group: "Body" },
    { kanji: "頭", kun: "あたま", on: "ズ", imi: "あたま", en: "head", group: "Body" },
    { kanji: "顔", kun: "かお", on: "ガン", imi: "かお", en: "face", group: "Body" },
    { kanji: "首", kun: "くび", on: "シュ", imi: "くび・だいいちの", en: "neck / prime", group: "Body" },
    { kanji: "心", kun: "こころ", on: "シン", imi: "こころ・きもち", en: "heart / feelings", group: "Body" },
    { kanji: "声", kun: "こえ", on: "セイ", imi: "こえ", en: "voice", group: "Body" },
    { kanji: "病", kun: "やまい", on: "ビョウ", imi: "びょうき", en: "illness", group: "Body" },
    { kanji: "薬", kun: "くすり", on: "ヤク・ヤッ", imi: "くすり", en: "medicine / drug", group: "Body" },
    { kanji: "科", kun: "", on: "カ", imi: "わけたもの", en: "category / dept", group: "Body" },

    // Time
    { kanji: "内", kun: "うち", on: "ナイ", imi: "うち", en: "inside / within", group: "Time" },
    { kanji: "朝", kun: "あさ", on: "チョウ", imi: "あさ", en: "morning", group: "Time" },
    { kanji: "昼", kun: "ひる", on: "チュウ", imi: "ひる", en: "noon / daytime", group: "Time" },
    { kanji: "夜", kun: "よる・よ", on: "ヤ", imi: "よる", en: "night", group: "Time" },
    { kanji: "夕", kun: "ゆう", on: "", imi: "ゆうがた", en: "evening", group: "Time" },
    { kanji: "方", kun: "かた・がた", on: "ホウ", imi: "ほうがく・ほうほう", en: "direction / way", group: "Time" },
    { kanji: "晩", kun: "", on: "バン", imi: "よる", en: "late evening", group: "Time" },
    { kanji: "計", kun: "はかる", on: "ケイ", imi: "はかる", en: "measure / plan", group: "Time" },
    { kanji: "曜", kun: "", on: "ヨウ", imi: "かがやく", en: "day of week", group: "Time" },
    { kanji: "以", kun: "", on: "イ", imi: "〜から", en: "since / from", group: "Time" },
    { kanji: "度", kun: "", on: "ド", imi: "ど・ひんど", en: "degree / frequency", group: "Time" },

    // Actions
    { kanji: "切", kun: "きる・きっ", on: "セツ", imi: "きる", en: "cut", group: "Actions" },
    { kanji: "急", kun: "いそぐ", on: "キュウ", imi: "いそぐ・きゅうに", en: "hurry / suddenly", group: "Actions" },
    { kanji: "止", kun: "とまる", on: "シ", imi: "とまる", en: "stop", group: "Actions" },
    { kanji: "歩", kun: "あるく", on: "ホ・ボ", imi: "あるく", en: "walk", group: "Actions" },
    { kanji: "走", kun: "はしる", on: "ソウ", imi: "はしる", en: "run", group: "Actions" },
    { kanji: "起", kun: "おきる・おこす", on: "キ", imi: "おきる", en: "get up / wake", group: "Actions" },
    { kanji: "持", kun: "もつ", on: "ジ", imi: "もつ", en: "have / hold", group: "Actions" },
    { kanji: "待", kun: "まつ", on: "タイ", imi: "まつ", en: "wait", group: "Actions" },
    { kanji: "借", kun: "かりる", on: "シャク・シャッ", imi: "かりる", en: "borrow", group: "Actions" },
    { kanji: "貸", kun: "かす", on: "タイ", imi: "かす", en: "lend", group: "Actions" },
    { kanji: "始", kun: "はじまる・はじめる", on: "シ", imi: "はじまる", en: "begin / start", group: "Actions" },
    { kanji: "終", kun: "おわる", on: "シュウ", imi: "おわる", en: "end / finish", group: "Actions" },
    { kanji: "活", kun: "", on: "カツ", imi: "いきいき", en: "lively / active", group: "Actions" },
    { kanji: "回", kun: "まわす・まわる", on: "カイ", imi: "まわる", en: "turn / time", group: "Actions" },

    // Family
    { kanji: "家", kun: "いえ・や", on: "カ・ケ", imi: "いえ", en: "home / house", group: "Family" },
    { kanji: "族", kun: "", on: "ゾク", imi: "いちぞく", en: "tribe / family", group: "Family" },
    { kanji: "私", kun: "わたし・わたくし", on: "シ", imi: "わたし", en: "I / private", group: "Family" },
    { kanji: "自", kun: "みずから", on: "シ・ジ", imi: "じぶん", en: "self / oneself", group: "Family" },
    { kanji: "親", kun: "おや・したしい", on: "シン", imi: "おや・したしい", en: "parent / close", group: "Family" },
    { kanji: "両", kun: "", on: "リョウ", imi: "りょうほう", en: "both", group: "Family" },
    { kanji: "兄", kun: "あに", on: "ケイ・キョウ", imi: "あに", en: "elder brother", group: "Family" },
    { kanji: "弟", kun: "おとうと", on: "ダイ", imi: "おとうと", en: "younger brother", group: "Family" },
    { kanji: "姉", kun: "あね", on: "シ", imi: "あね", en: "elder sister", group: "Family" },
    { kanji: "妹", kun: "いもうと", on: "マイ", imi: "いもうと", en: "younger sister", group: "Family" },

    // Objects
    { kanji: "屋", kun: "や", on: "オク", imi: "やね", en: "roof / shop", group: "Objects" },
    { kanji: "色", kun: "いろ", on: "ショク・シキ", imi: "いろ", en: "color", group: "Objects" },
    { kanji: "形", kun: "かたち", on: "ケイ・ギョウ", imi: "かたち", en: "shape / form", group: "Objects" },
    { kanji: "品", kun: "しな", on: "ヒン", imi: "しな", en: "goods / item", group: "Objects" },
    { kanji: "服", kun: "", on: "フク", imi: "ふく・したがう", en: "clothes / obey", group: "Objects" },
    { kanji: "犬", kun: "いぬ", on: "ケン", imi: "いぬ", en: "dog", group: "Objects" },
  ]
};

function getKanjiGroups(level) {
  const seen = new Set();
  return (KANJI[level] || []).reduce((acc, k) => {
    if (!seen.has(k.group)) { seen.add(k.group); acc.push(k.group); }
    return acc;
  }, []);
}

function getKanjiByGroup(level, group) {
  const all = KANJI[level] || [];
  return group === 'all' ? all : all.filter(k => k.group === group);
}

function getKanjiGroupCount(level, group) {
  return getKanjiByGroup(level, group).length;
}
