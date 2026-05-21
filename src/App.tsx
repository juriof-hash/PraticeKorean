import React, { useState } from 'react';
import { Languages, Settings2, Printer } from 'lucide-react';

const examplesData = [
  {
    koTitle: "예문 1 (흥부와 놀부)",
    enTitle: "Example 1 (Heungbu and Nolbu)",
    text: "제비가 박씨 하나를 물어다 주었습니다. 흥부는 박씨를 마당에 심었습니다. 박 속에서 온갖 보물이 가득 나왔습니다. 마음씨 착한 흥부는 부자가 되었습니다."
  },
  {
    koTitle: "예문 2 (토끼와 거북이)",
    enTitle: "Example 2 (The Tortoise and the Hare)",
    text: "토끼와 거북이가 달리기 경주를 했습니다. 자만심에 빠진 토끼는 나무 그늘 아래에서 낮잠을 잤습니다. 거북이는 끝까지 쉬지 않고 달려 마침내 이겼습니다."
  },
  {
    koTitle: "예문 3 (해님 달님)",
    enTitle: "Example 3 (The Sun and the Moon)",
    text: "오누이는 무서운 호랑이를 피해 나무 위로 올라갔습니다. 하늘에서 튼튼한 동아줄이 내려왔습니다. 오누이는 줄을 잡고 올라가 해와 달이 되었습니다."
  },
  {
    koTitle: "예문 4 (단어 연습)",
    enTitle: "Example 4 (Word Practice)",
    text: "하늘 구름 바람 나무 햇살 바다 소나무 우리나라 대한민국 안녕하세요 감사합니다 사랑합니다 행복하세요 건강하세요"
  }
];

const langStrs = {
  ko: {
    title: "한글 또박또박 쓰기 연습장",
    langToggle: "English",
    exampleLabel: "예문 선택:",
    optionCustom: "-- 직접 입력 --",
    textLabel: "텍스트 입력",
    placeholder: "연습할 내용을 입력하거나 예문을 선택하세요.",
    btnGenerate: "연습장 생성",
    btnGuide: "모양 가이드 켜기/끄기",
    btnPrint: "인쇄하기",
    guideTitle: "가이드 안내:",
    guideType1: "세로 모음 (받침 없음)",
    guideType2: "가로 모음 (받침 없음)",
    guideType3: "가로 모음 (받침 있음)",
    guideType4: "세로 모음 (받침 있음)",
    cellSizeLabel: "칸 크기",
  },
  en: {
    title: "Hangul Handwriting Worksheet",
    langToggle: "한국어",
    exampleLabel: "Select Example:",
    optionCustom: "-- Custom Input --",
    textLabel: "Enter Text",
    placeholder: "Enter practice text or select an example.",
    btnGenerate: "Generate Worksheet",
    btnGuide: "Toggle Shape Guides",
    btnPrint: "Print Worksheet",
    guideTitle: "Guide Types:",
    guideType1: "Vertical (No Patchim)",
    guideType2: "Horizontal (No Patchim)",
    guideType3: "Horizontal (With Patchim)",
    guideType4: "Vertical (With Patchim)",
    cellSizeLabel: "Cell Size",
  }
};

function getGuideType(char: string): number | null {
  const code = char.charCodeAt(0);
  if (code < 0xac00 || code > 0xd7a3) return null;
  
  const baseCode = code - 0xac00;
  const jongIndex = baseCode % 28;
  const jungIndex = Math.floor((baseCode - jongIndex) / 28) % 21;

  const isHorizontalVowel = [8, 12, 13, 17, 18].includes(jungIndex); // ㅗ, ㅛ, ㅜ, ㅠ, ㅡ

  if (jongIndex > 0) {
    if (isHorizontalVowel) {
      return 3; // Diamond for horizontal with patchim
    }
    return 4; // Trapezoid for vertical with patchim
  }

  if (isHorizontalVowel) return 2; // ^ for horizontal without patchim
  
  // Vertical and other complex vowels without patchim
  return 1; // <
}

function getGuideStyle(type: number, width: number, opacity: number): React.CSSProperties {
  const stroke = `rgba(255,0,0,1)`; 
  let svg = '';
  let pos = 'center';
  
  if (type === 1) {
    svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M70 20 L30 50 L70 80' fill='none' stroke='${stroke}' stroke-width='${width}'/></svg>`;
    pos = '40% center';
  } else if (type === 2) {
    svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M20 70 L50 30 L80 70' fill='none' stroke='${stroke}' stroke-width='${width}'/></svg>`;
    pos = 'center 40%';
  } else if (type === 3) {
    svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polygon points='50,15 85,50 50,85 15,50' fill='none' stroke='${stroke}' stroke-width='${width}'/></svg>`;
  } else if (type === 4) {
    svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polygon points='25,35 75,15 75,85 25,65' fill='none' stroke='${stroke}' stroke-width='${width}'/></svg>`;
  }

  return {
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
    opacity: opacity / 100,
    backgroundPosition: pos
  };
}

export default function App() {
  const [isEnglish, setIsEnglish] = useState(false);
  const [inputText, setInputText] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [showGuides, setShowGuides] = useState(false);
  const [selectedExample, setSelectedExample] = useState("");
  const cellSize = 10;
  
  const [borderWidth, setBorderWidth] = useState(1);
  const [borderOpacity, setBorderOpacity] = useState(100);
  const [crossWidth, setCrossWidth] = useState(1);
  const [crossOpacity, setCrossOpacity] = useState(20);
  const [guideWidth, setGuideWidth] = useState(4);
  const [guideOpacity, setGuideOpacity] = useState(80);

  const t = isEnglish ? langStrs.en : langStrs.ko;

  const handleExampleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedExample(val);
    if (val === "") {
      setInputText("");
    } else {
      setInputText(examplesData[Number(val)].text);
    }
  };

  const handleGenerate = () => {
    setDisplayedText(inputText);
  };

  const printableWidth = 190; // mm (210 - margins)
  const printableHeight = 277; // mm (297 - margins)
  const cols = Math.floor(printableWidth / cellSize);
  const rows = Math.floor(printableHeight / cellSize);
  const totalCells = cols * rows;

  const cleanText = displayedText.replace(/\n/g, ' ');
  const chars = cleanText.split('');
  
  return (
    <div className="h-screen w-full flex flex-col font-sans overflow-hidden bg-slate-100">
      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="no-print w-80 bg-white border-r border-slate-200 p-6 flex flex-col shadow-lg z-10 shrink-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-lg font-bold text-slate-800 leading-tight font-nanum">
              {t.title.split(' ').map((word, i) => React.Fragment && (
                <React.Fragment key={i}>
                  {word}
                  {i === 1 && <br/>}
                  {i !== 1 && ' '}
                </React.Fragment>
              ))}
            </h1>
            <button 
              onClick={() => setIsEnglish(!isEnglish)}
              className="px-2 py-1 bg-slate-800 text-white text-xs rounded hover:bg-slate-700 transition-colors"
            >
              {t.langToggle}
            </button>
          </div>

          <div className="space-y-4 flex-1 flex flex-col overflow-y-auto">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{t.exampleLabel}</label>
              <select 
                value={selectedExample}
                onChange={handleExampleChange}
                className="w-full p-2 text-sm border border-slate-200 rounded bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none font-nanum"
              >
                <option value="">{t.optionCustom}</option>
                {examplesData.map((ex, i) => (
                  <option key={i} value={i}>
                    {isEnglish ? ex.enTitle : ex.koTitle}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{t.textLabel}</label>
              <textarea 
                value={inputText}
                maxLength={totalCells}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={t.placeholder}
                className="w-full h-32 p-3 text-sm border border-slate-200 rounded flex-shrink-0 focus:ring-2 focus:ring-blue-500 outline-none resize-none font-nanum leading-relaxed bg-slate-50"
              />
              <p className="text-right text-[10px] text-slate-400 font-mono">{inputText.length} / {totalCells}</p>
            </div>

            <div className="grid grid-cols-1 gap-2 pt-2">
              <button 
                onClick={handleGenerate}
                className="w-full py-2 bg-blue-600 text-white rounded font-medium text-sm hover:bg-blue-700 transition-colors"
              >
                {t.btnGenerate}
              </button>
              <button 
                onClick={() => setShowGuides(!showGuides)}
                className="w-full py-2 bg-slate-100 text-slate-700 border border-slate-200 rounded font-medium text-sm transition-colors hover:bg-slate-200"
              >
                {t.btnGuide}
              </button>
            </div>

            <div className="mt-4 p-3 bg-slate-50 rounded border border-slate-100">
              <p className="text-[10px] text-slate-500 font-medium leading-relaxed text-center">
                <span className="font-bold text-slate-700">{t.guideTitle}</span>
                <br />
                <span className="text-red-500 font-bold ml-1 text-xs">&lt;</span> ({t.guideType1})
                <br />
                <span className="text-red-500 font-bold ml-1 text-xs">^</span> ({t.guideType2})
                <br />
                <span className="text-red-500 font-bold ml-1 text-xs">◇</span> ({t.guideType3})
                <br />
                <span className="text-red-500 font-bold ml-1 text-xs">⬡</span> ({t.guideType4})
              </p>
            </div>

            <div className="mt-4 border-t border-slate-200 pt-4 space-y-3 pb-2">
              <p className="text-xs font-bold text-slate-500 uppercase">Style Adjustments (Temp)</p>
              
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] text-slate-500">Border Width</label>
                  <input type="range" min="0" max="5" step="0.5" value={borderWidth} onChange={(e) => setBorderWidth(Number(e.target.value))} className="w-1/2" />
                </div>
                <div className="flex justify-between items-center">
                  <label className="text-[10px] text-slate-500">Border Opacity</label>
                  <input type="range" min="0" max="100" value={borderOpacity} onChange={(e) => setBorderOpacity(Number(e.target.value))} className="w-1/2" />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] text-slate-500">Cross Width</label>
                  <input type="range" min="0" max="5" step="0.5" value={crossWidth} onChange={(e) => setCrossWidth(Number(e.target.value))} className="w-1/2" />
                </div>
                <div className="flex justify-between items-center">
                  <label className="text-[10px] text-slate-500">Cross Opacity</label>
                  <input type="range" min="0" max="100" value={crossOpacity} onChange={(e) => setCrossOpacity(Number(e.target.value))} className="w-1/2" />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] text-slate-500">Guide Width</label>
                  <input type="range" min="0" max="10" step="0.5" value={guideWidth} onChange={(e) => setGuideWidth(Number(e.target.value))} className="w-1/2" />
                </div>
                <div className="flex justify-between items-center">
                  <label className="text-[10px] text-slate-500">Guide Opacity</label>
                  <input type="range" min="0" max="100" value={guideOpacity} onChange={(e) => setGuideOpacity(Number(e.target.value))} className="w-1/2" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 mt-2 shrink-0">
            <button 
              onClick={() => window.print()}
              className="w-full justify-center flex items-center gap-2 py-3 bg-emerald-500 text-white rounded-lg font-bold shadow-md hover:bg-emerald-600 transition-colors text-sm"
            >
              <Printer size={16} />
              {t.btnPrint}
            </button>
            <p className="mt-3 text-[10px] text-slate-400 text-center uppercase tracking-widest font-semibold">
              Generated for A4 Print
            </p>
          </div>
        </aside>

        {/* Worksheet Area */}
        <main className="flex-1 bg-slate-200 p-8 flex items-start justify-center overflow-auto print:overflow-visible print:bg-white print:p-0 print:block">
          <div className="worksheet-area bg-white p-[10mm] shadow-2xl flex flex-col items-center border border-slate-200 min-h-[297mm] w-[210mm] print:border-none print:shadow-none print:scale-100 print:w-full print:h-auto print:p-0">
            <div 
              className="worksheet-grid grid bg-white"
              style={{ 
                gridTemplateColumns: `repeat(${cols}, ${cellSize}mm)`,
                gridTemplateRows: `repeat(${rows}, ${cellSize}mm)`,
                width: `${cols * cellSize}mm`,
                height: `${rows * cellSize}mm`,
                borderLeftWidth: `${borderWidth}px`,
                borderTopWidth: `${borderWidth}px`,
                borderStyle: 'solid',
                borderColor: `rgba(203, 213, 225, ${borderOpacity / 100})`, // slate-300
                '--cross-width': `${crossWidth}px`,
                '--cross-opacity': crossOpacity / 100,
              } as React.CSSProperties}
            >
              {Array.from({ length: totalCells }).map((_, i) => {
                const char = i < chars.length ? chars[i] : "";
                const guideType = char && showGuides ? getGuideType(char) : null;
                
                return (
                  <div 
                    key={i} 
                    className="cell-cross flex items-center justify-center relative bg-white"
                    style={{ 
                      width: `${cellSize}mm`, 
                      height: `${cellSize}mm`,
                      borderRightWidth: `${borderWidth}px`,
                      borderBottomWidth: `${borderWidth}px`,
                      borderStyle: 'solid',
                      borderColor: `rgba(226, 232, 240, ${borderOpacity / 100})` // slate-200
                    }}
                  >
                    <span className="char-text text-[24px] font-serif z-10 text-[#cbd5e1] leading-none">
                      {char}
                    </span>
                    {guideType !== null && showGuides && (
                      <div className="guide-overlay" style={getGuideStyle(guideType, guideWidth, guideOpacity)} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
