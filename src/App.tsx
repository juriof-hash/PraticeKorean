import React, { useState } from 'react';
import { Languages, Settings2, Printer } from 'lucide-react';

const examplesData = [
  {
    koTitle: "윤동주 - 서시",
    enTitle: "Yoon Dong-ju - Prologue",
    text: "서시\n윤동주\n죽는날 까지 하늘을 우러러\n한점 부끄럼이 없기를\n잎새에 이는 바람에도\n나는 괴로워 했다\n별을 노래하는 마음으로\n모든 죽어가는 것을 사랑해야지\n그리고 나에게 주어진 길을\n걸어가야겠다.\n오늘밤에도 별이 바람에 스치운다"
  },
  {
    koTitle: "윤동주 - 별 헤는 밤",
    enTitle: "Yoon Dong-ju - Counting the Stars at Night",
    text: "계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헤일 듯합니다. 가슴속에 하나둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은 까닭이요, 아직 나의 청춘이 다하지 않은 까닭입니다. 별 하나에 추억과 별 하나에 사랑과 별 하나에 쓸쓸함과 별 하나에 동경과 별 하나에 시와 별 하나에 어머니, 어머니, 어머님, 나는 별 하나에 아름다운 말 한마디씩 불러 봅니다. 소학교 때 책상을 같이 했던 아이들의 이름과, 패, 경, 옥, 이런 이국 소녀들의 이름과, 벌써 아기 어머니 된 계집애들의 이름과, 가난한 이웃 사람들의 이름과, 비둘기, 강아지, 토끼, 노새, 노루, '프랑시스 잠', '라이너 마리아 릴케' 이런 시인의 이름을 불러 봅니다. 이네들은 너무나 멀리 있습니다. 별이 아스라이 멀듯이. 어머님, 그리고 당신은 멀리 북간도에 계십니다. 나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써 보고 흙으로 덮어 버리었습니다. 딴은 밤을 새워 우는 벌레는 부끄러운 이름을 슬퍼하는 까닭입니다. 그러나 겨울이 지나고 나의 별에도 봄이 오면 무덤 위에 파란 잔디가 피어나듯이 내 이름자 묻힌 언덕 위에도 자랑처럼 풀이 무성할 거외다."
  },
  {
    koTitle: "김소월 - 진달래꽃",
    enTitle: "Kim So-wol - Azaleas",
    text: "진달래 꽃\n김소월\n\n나 보기가 역겨워\n가실 때에는\n말없이 고이 보내 드리우리다\n\n영변에 약산\n진달래꽃\n아름 따다 가실 길에 뿌리우리다\n\n가시는 걸음걸음\n놓인 그 꽃을\n사뿐히 즈려밟고 가시옵소서\n\n나 보기가 역겨워\n가실 때에는\n죽어도 아니 눈물 흘리우리다"
  },
  {
    koTitle: "김소월 - 엄마야 누나야",
    enTitle: "Kim So-wol - Mother, Sister",
    text: "엄마야 누나야\n김소월\n\n엄마야 누나야 강변 살자. \n뜰에는 반짝이는 금모래 빛, \n뒷문 밖에는 갈잎의 노래, \n엄마야 누나야 강변 살자."
  },
  {
    koTitle: "김영랑 - 모란이 피기까지는",
    enTitle: "Kim Yeong-rang - Until the Peony Blooms",
    text: "모란이 피기까지는\n김영랑\n\n모란이 피기까지는\n나는 아직 나의 봄을 기둘리고 있을 테요\n모란이 뚝뚝 떨어져 버린 날\n나는 비로소 봄을 여읜 설움에 잠길 테요\n오월 어느 날 그 하루 무덥던 날\n떨어져 누운 꽃잎마저 시들어 버리고는\n천지에 모란은 자취도 없어지고\n뻗쳐 오르던 내 보람 서운케 무너졌으니\n모란이 지고 말면 그뿐 내 한 해는 다 가고 말아\n삼백예순 날 하냥 섭섭해 우옵네다\n모란이 피기까지는\n나는 아직 기둘리고 있을 테요 찬란한 슬픔의 봄을"
  },
  {
    koTitle: "김영랑 - 돌담에 속삭이는 햇발같이",
    enTitle: "Kim Yeong-rang - Like Sunlight Whispering on a Stone Wall",
    text: "돌담에 속삭이는 햇발같이\n김영랑\n\n돌담에 속삭이는 햇발같이\n풀 아래 웃음 짓는 샘물같이\n내 마음 고요히 고운 봄 길 위에\n오늘 하루 하늘을 우러르고 싶다\n\n새악시 볼에 떠 오는 부끄럼같이\n시의 가슴 살포시 젖는 물결같이\n보드레한 에메랄드 얇게 흐르는\n실비단 하늘을 바라보고 싶다"
  },
  {
    koTitle: "한용운 - 님의 침묵",
    enTitle: "Han Yong-un - The Silence of Love",
    text: "님의 침묵\n한용운\n\n님은 갔습니다. 아아, 사랑하는 나의 님은 갔습니다.\n푸른 산빛을 깨치고 단풍나무 숲을 향하여 난 작은 길을 걸어서, 차마 떨치고 갔습니다.\n황금의 꽃같이 굳고 빛나던 옛 맹세는 차디찬 티끌이 되어서 한숨의 미풍에 날아갔습니다.\n날카로운 첫 키스의 추억은 나의 운명의 지침을 돌려놓고 뒷걸음쳐서 사라졌습니다.\n나는 향기로운 님의 말소리에 귀먹고, 꽃다운 님의 얼굴에 눈멀었습니다.\n사랑도 사람의 일이라 만날 때에 미리 떠날 것을 염려하고 경계하지 아니한 것은 아니지만,\n이별은 뜻밖의 일이 되고 놀란 가슴은 새로운 슬픔에 터집니다.\n그러나 이별을 쓸데없는 눈물의 원천을 만들고 마는 것은 스스로 사랑을 깨치는 것인 줄 아는 까닭에,\n걷잡을 수 없는 슬픔의 힘을 옮겨서 새 희망의 정수박이에 들어부었습니다.\n우리는 만날 때에 떠날 것을 염려하는 것과 같이 떠날 때에 다시 만날 것을 믿습니다.\n아아, 님은 갔지마는 나는 님을 보내지 아니하였습니다.\n제 곡조를 못 이기는 사랑의 노래는 님의 침묵을 휩싸고 돕니다."
  },
  {
    koTitle: "한용운 - 알 수 없어요",
    enTitle: "Han Yong-un - I Do Not Know",
    text: "바람도 없는 공중에 수직의 파문을 내이며 고요히 떨어지는 오동잎은 누구의 발자취입니까."
  },
  {
    koTitle: "정지용 - 향수",
    enTitle: "Jeong Ji-yong - Nostalgia",
    text: "넓은 벌 동쪽 끝으로 옛이야기 지줄대는 실개천이 휘돌아 나가고, 얼룩백이 황소가 해설피 금빛 게으른 울음을 우는 곳, 그곳이 참하 꿈엔들 잊힐 리야."
  },
  {
    koTitle: "백석 - 나와 나타샤와 흰 당나귀",
    enTitle: "Baek Seok - Me, Natasha and the White Donkey",
    text: "가난한 내가 아름다운 나타샤를 사랑해서 오늘 밤은 푹푹 눈이 나린다. 나타샤는 눈은 푹푹 나리고 나는 혼자 쓸쓸히 앉어 소주를 마신다."
  },
  {
    koTitle: "이육사 - 청포도",
    enTitle: "Lee Yuk-sa - Green Grapes",
    text: "내 고장 칠월은 청포도가 익어가는 시절. 이 마을 전설이 주저리주저리 열리고, 먼 데 하늘이 꿈꾸며 알알이 들어와 박혀"
  },
  {
    koTitle: "이육사 - 광야",
    enTitle: "Lee Yuk-sa - The Vast Plain",
    text: "까마득한 날에 하늘이 처음 열리고 어데 닭 우는 소리 들렸으랴. 모든 산맥들이 바다를 연모해 휘달릴 때도 차마 이곳을 범하던 못하였으리라."
  },
  {
    koTitle: "이상화 - 빼앗긴 들에도 봄은 오는가",
    enTitle: "Lee Sang-hwa - Does Spring Come to Stolen Fields?",
    text: "지금은 남의 땅, 빼앗긴 들에도 봄은 오는가? 나는 온몸에 햇살을 받고 푸른 하늘 푸른 들이 맞붙은 곳으로 가르마 같은 논길을 따라 꿈속을 가듯 걸어만 간다."
  },
  {
    koTitle: "노천명 - 사슴",
    enTitle: "Noh Cheon-myeong - Deer",
    text: "모가지가 길어서 슬픈 짐승이여, 언제나 점잖은 편 말이 없구나. 관이 향기로운 너는 무척 높은 족속이었나 보다."
  },
  {
    koTitle: "김동환 - 산 너머 남촌에는",
    enTitle: "Kim Dong-hwan - In the Southern Village Across the Mountain",
    text: "산 너머 남촌에는 누가 살길래 해마다 봄바람이 남으로 오네. 꽃 피는 사월이면 진달래 향기, 밀 익은 오월이면 보리 내음새."
  },
  {
    koTitle: "박목월 - 나그네",
    enTitle: "Park Mok-wol - Traveler",
    text: "강나루 건너서 밀밭 길을 구름에 달 가듯이 가는 나그네. 길은 외줄기 남도 삼백 리, 술 익는 마을마다 타는 저녁놀."
  },
  {
    koTitle: "조지훈 - 승무",
    enTitle: "Cho Ji-hun - Nun's Dance",
    text: "얇은 사 하이얀 고깔은 고이 접어서 나빌레라. 파르라니 깎은 머리 박사 고깔에 감추오고, 두 볼에 흐르는 빛이 정작으로 고와서 서러워라."
  },
  {
    koTitle: "박두진 - 해",
    enTitle: "Park Du-jin - Sun",
    text: "해야 솟아라. 해야 솟아라. 말갛게 씻은 얼굴 고운 해야 솟아라. 산 넘어 산 넘어서 어둠을 살라 먹고, 산 넘어서 밤새도록 어둠을 살라 먹고, 이글이글 앳된 얼굴 고운 해야 솟아라."
  },
  {
    koTitle: "심훈 - 그 날이 오면",
    enTitle: "Sim Hun - When That Day Comes",
    text: "그 날이 오면, 그 날이 오면은, 삼각산이 일어나 더덩실 춤이라도 추고, 한강물이 뒤집혀 용솟음칠 그 날이 이 목숨이 끊기기 전에 와 주기만 할 양이면"
  },
  {
    koTitle: "김소월 - 초혼",
    enTitle: "Kim So-wol - Invocation of the Dead",
    text: "산산이 부서진 이름이여! 허공 중에 헤어진 이름이여! 불러도 주인 없는 이름이여! 부르다가 내가 죽을 이름이여!"
  }
];

const fonts = [
  { value: 'font-nanum-myeongjo', koLabel: '나눔명조 (기본)', enLabel: 'Nanum Myeongjo' },
  { value: 'font-nanum-gothic', koLabel: '나눔고딕', enLabel: 'Nanum Gothic' },
  { value: 'font-nanum-pen', koLabel: '나눔바른펜', enLabel: 'Nanum Barun Pen' },
  { value: 'font-maru-buri', koLabel: '마루부리', enLabel: 'Maru Buri' },
  { value: 'font-hangeul-nuri', koLabel: '국립한글박물관 한글누리체', enLabel: 'Hangeul Nuri' },
  { value: 'font-kyobo-hand', koLabel: '교보손글씨체', enLabel: 'Kyobo Hand Writing' },
  { value: 'font-diphylleia', koLabel: '디필레이아 (Diphylleia)', enLabel: 'Diphylleia' },
  { value: 'font-gaegu', koLabel: '개구체 (Gaegu)', enLabel: 'Gaegu' },
  { value: 'font-grandiflora-one', koLabel: '그란디플로라 (Grandiflora)', enLabel: 'Grandiflora One' },
  { value: 'font-nanum-pen-script', koLabel: '나눔펜 (Nanum Pen Script)', enLabel: 'Nanum Pen Script' },
];

const langStrs = {
  ko: {
    title: "한글 또박또박 쓰기 연습장",
    langToggle: "English",
    exampleLabel: "예문 선택:",
    fontLabel: "글꼴 선택:",
    optionCustom: "-- 직접 입력 --",
    textLabel: "텍스트 입력",
    placeholder: "연습할 내용을 입력하거나 예문을 선택하세요.",
    btnGenerate: "연습장 생성",
    btnGuide: "모양 가이드 켜기/끄기",
    btnBold: "글씨 진하기 켜기/끄기",
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
    fontLabel: "Select Font:",
    optionCustom: "-- Custom Input --",
    textLabel: "Enter Text",
    placeholder: "Enter practice text or select an example.",
    btnGenerate: "Generate Worksheet",
    btnGuide: "Toggle Shape Guides",
    btnBold: "Toggle Text Thickness",
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
  const [selectedFont, setSelectedFont] = useState('font-nanum-pen');
  const [inputText, setInputText] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [showGuides, setShowGuides] = useState(false);
  const [isBold, setIsBold] = useState(false);
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

  const calculateGridChars = (text: string) => {
    const gridChars: string[] = [];
    for (let i = 0; i < text.length; i++) {
      if (gridChars.length >= totalCells) break;
      const char = text[i];
      if (char === '\n') {
        const currentCol = gridChars.length % cols;
        const spacesToFill = cols - currentCol;
        for (let j = 0; j < spacesToFill; j++) {
          gridChars.push(' ');
        }
      } else {
        gridChars.push(char);
      }
    }
    return gridChars;
  };

  const chars = calculateGridChars(displayedText);
  const inputGridUsed = calculateGridChars(inputText).length;
  
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
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{t.fontLabel}</label>
              <select 
                value={selectedFont}
                onChange={(e) => setSelectedFont(e.target.value)}
                className="w-full p-2 text-sm border border-slate-200 rounded bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none font-nanum"
              >
                {fonts.map((f, i) => (
                  <option key={i} value={f.value}>
                    {isEnglish ? f.enLabel : f.koLabel}
                  </option>
                ))}
              </select>
            </div>

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
                onChange={(e) => setInputText(e.target.value)}
                placeholder={t.placeholder}
                className="w-full h-32 p-3 text-sm border border-slate-200 rounded flex-shrink-0 focus:ring-2 focus:ring-blue-500 outline-none resize-none font-nanum leading-relaxed bg-slate-50"
              />
              <p className="text-right text-[10px] text-slate-400 font-mono">{Math.min(inputGridUsed, totalCells)} / {totalCells}</p>
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
                className={`w-full py-2 border rounded font-medium text-sm transition-colors ${
                  showGuides ? 'bg-slate-700 text-white border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                {t.btnGuide}
              </button>
              <button 
                onClick={() => setIsBold(!isBold)}
                className={`w-full py-2 border rounded font-medium text-sm transition-colors ${
                  isBold ? 'bg-slate-700 text-white border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                {t.btnBold}
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
              <p className="text-xs font-bold text-slate-500 uppercase">Style Adjustments</p>
              
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] text-slate-500">Border Width</label>
                  <div className="flex items-center gap-1.5">
                    <button onClick={() => setBorderWidth(Math.max(0, borderWidth - 0.5))} className="w-5 h-5 flex items-center justify-center bg-slate-200 hover:bg-slate-300 rounded text-slate-600 font-bold text-[10px] transition-colors">&lt;</button>
                    <span className="text-[10px] font-mono w-6 text-center text-slate-600">{borderWidth}</span>
                    <button onClick={() => setBorderWidth(Math.min(5, borderWidth + 0.5))} className="w-5 h-5 flex items-center justify-center bg-slate-200 hover:bg-slate-300 rounded text-slate-600 font-bold text-[10px] transition-colors">&gt;</button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <label className="text-[10px] text-slate-500">Border Opacity</label>
                  <div className="flex items-center gap-1.5">
                    <button onClick={() => setBorderOpacity(Math.max(0, borderOpacity - 5))} className="w-5 h-5 flex items-center justify-center bg-slate-200 hover:bg-slate-300 rounded text-slate-600 font-bold text-[10px] transition-colors">&lt;</button>
                    <span className="text-[10px] font-mono w-6 text-center text-slate-600">{borderOpacity}</span>
                    <button onClick={() => setBorderOpacity(Math.min(100, borderOpacity + 5))} className="w-5 h-5 flex items-center justify-center bg-slate-200 hover:bg-slate-300 rounded text-slate-600 font-bold text-[10px] transition-colors">&gt;</button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] text-slate-500">Cross Width</label>
                  <div className="flex items-center gap-1.5">
                    <button onClick={() => setCrossWidth(Math.max(0, crossWidth - 0.5))} className="w-5 h-5 flex items-center justify-center bg-slate-200 hover:bg-slate-300 rounded text-slate-600 font-bold text-[10px] transition-colors">&lt;</button>
                    <span className="text-[10px] font-mono w-6 text-center text-slate-600">{crossWidth}</span>
                    <button onClick={() => setCrossWidth(Math.min(5, crossWidth + 0.5))} className="w-5 h-5 flex items-center justify-center bg-slate-200 hover:bg-slate-300 rounded text-slate-600 font-bold text-[10px] transition-colors">&gt;</button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <label className="text-[10px] text-slate-500">Cross Opacity</label>
                  <div className="flex items-center gap-1.5">
                    <button onClick={() => setCrossOpacity(Math.max(0, crossOpacity - 5))} className="w-5 h-5 flex items-center justify-center bg-slate-200 hover:bg-slate-300 rounded text-slate-600 font-bold text-[10px] transition-colors">&lt;</button>
                    <span className="text-[10px] font-mono w-6 text-center text-slate-600">{crossOpacity}</span>
                    <button onClick={() => setCrossOpacity(Math.min(100, crossOpacity + 5))} className="w-5 h-5 flex items-center justify-center bg-slate-200 hover:bg-slate-300 rounded text-slate-600 font-bold text-[10px] transition-colors">&gt;</button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] text-slate-500">Guide Width</label>
                  <div className="flex items-center gap-1.5">
                    <button onClick={() => setGuideWidth(Math.max(0, guideWidth - 0.5))} className="w-5 h-5 flex items-center justify-center bg-slate-200 hover:bg-slate-300 rounded text-slate-600 font-bold text-[10px] transition-colors">&lt;</button>
                    <span className="text-[10px] font-mono w-6 text-center text-slate-600">{guideWidth}</span>
                    <button onClick={() => setGuideWidth(Math.min(10, guideWidth + 0.5))} className="w-5 h-5 flex items-center justify-center bg-slate-200 hover:bg-slate-300 rounded text-slate-600 font-bold text-[10px] transition-colors">&gt;</button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <label className="text-[10px] text-slate-500">Guide Opacity</label>
                  <div className="flex items-center gap-1.5">
                    <button onClick={() => setGuideOpacity(Math.max(0, guideOpacity - 5))} className="w-5 h-5 flex items-center justify-center bg-slate-200 hover:bg-slate-300 rounded text-slate-600 font-bold text-[10px] transition-colors">&lt;</button>
                    <span className="text-[10px] font-mono w-6 text-center text-slate-600">{guideOpacity}</span>
                    <button onClick={() => setGuideOpacity(Math.min(100, guideOpacity + 5))} className="w-5 h-5 flex items-center justify-center bg-slate-200 hover:bg-slate-300 rounded text-slate-600 font-bold text-[10px] transition-colors">&gt;</button>
                  </div>
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
                    <span className={`char-text text-[24px] z-10 text-[#cbd5e1] leading-none ${selectedFont} ${isBold ? 'font-bold' : 'font-normal'}`}>
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
