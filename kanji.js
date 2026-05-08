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
