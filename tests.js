// ──────────────────────────────────────────────────────────────────
//  AnthonyTheSabakumono — Test Registry
//  To add a new test: copy one object below and change the fields.
//  No other file needs editing.
// ──────────────────────────────────────────────────────────────────

const TESTS = [
  {
    id:         "EEE-01",
    title:      "ЭЕШ English Mock Test",
    subtitle:   "Жинхэнэ мэт мэдрэмж",
    href:       "EEE-01/index.html",
    category:   "ЭЕШ",
    lang:       "EN",
    questions:  40,
    minutes:    80,
    difficulty: 4,          // 1–5
    sections:   ["Grammar", "Vocabulary", "Reading"],
    score:      "200–800",
    desc:       "Англи хэл Элсэлтийн ерөнхий шалгалтыг дуурайлган бүтээсэн mock test. Оноо нь 200–800 хуваарь дээр тооцогдоно.",
    featured:   true,
    new:        false,
  },
     {
     id:         "EEE-02",
     title:      "ЭЕШ English Mock Test #2",
     subtitle:   "Common English Idioms",
     href:       "EEE-02/index.html",
     category:   "Idioms",
     lang:       "EN",
     questions:  20,
     minutes:    15,
     difficulty: 2,
     sections:   ["Idioms", "Context"],
     score:      "0–100",
     desc:       "Хэдэн нийтлэг idiom мэдэх вэ? Тест аваад оноогоо хар.",
     featured:   false,
     new:        false,
   },
];
