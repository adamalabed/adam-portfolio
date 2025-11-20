import React, { useState, useEffect } from 'react';

// --- DATA ---
const casesData = [
  {
    id: 0,
    title: "Beesline Cosmetics",
    subtitle: "Развитие Beesline Cosmetics на рынке MENA",
    content: {
      "Контекст": "Beesline Cosmetics — международный бренд натуральной уходовой косметики, успешно закрепившийся в нишевых категориях, но сталкивающийся с ограниченным проникновением в более широкие массовые сегменты рынка MENA.<br><br>Компания находилась на этапе, когда устойчивый рост был возможен только через стратегические изменения: расширение продуктовой линейки, перераспределение фокуса между сегментами, улучшение клиентского опыта и усиление каналов дистрибуции.",
      "Цель": "Обеспечить устойчивый рост бренда в регионах MENA за счет стратегии, операционной структурности и повышения качества клиентского пути.<br><br><strong>Ключевые задачи:</strong><br>0.1. Провести анализ рынка и конкурентной среды в MENA.<br>0.2. Определить сегменты с наибольшим потенциалом роста.<br>0.3. Разработать стратегию выхода на новые рынки и адаптацию продуктового портфеля.<br>0.4. Улучшить элементы клиентского опыта и программы удержания.<br>0.5. Предложить инициативы по расширению каналов продаж (ритейл + e-commerce).",
      "Подход": "<strong>0.1. Аналитический блок</strong><br>Анализ категорий и динамики спроса в 6 странах региона. Benchmarking конкурентов по ценам, коммуникации, SKU и модели роста.<br><br><strong>0.2. Продуктово-стратегический анализ</strong><br>Сегментация целевой аудитории и построение клиентоцентричной карты потребностей. Ревизия текущего продуктового портфеля.<br><br><strong>0.3. Клиентский опыт</strong><br>Оценка текущих точек взаимодействия: покупка, повторный заказ, digital-каналы.<br><br><strong>0.4. Каналы продаж</strong><br>Оценка эффективности текущей дистрибуции. Моделирование потенциала роста при расширении каналов.",
      "Моя роль": "0.1. Проанализировал рынок MENA и конкурентную среду.<br>0.2. Разработал стратегию выхода на два новых рынка.<br>0.3. Участвовал в формировании продуктовой стратегии.<br>0.4. Проработал элементы клиентского опыта и программы лояльности.<br>0.5. Подготовил рекомендации по расширению каналов продаж.",
      "Результаты": "<strong>Коммерческие результаты:</strong><br>Рост продаж — около 15–18% в течение периода интеграции.<br>Укрепление позиций бренда в ключевых сегментах.<br>Выход на две новые страны региона.<br><br><strong>Стратегический эффект:</strong><br>Усиление присутствия бренда на международном рынке. Большая предсказуемость в планировании спроса."
    }
  },
  {
    id: 1,
    title: "Москвич",
    subtitle: "Разработка стратегии роста и оптимизации цепочки ценности завода «Москвич» в условиях санкций.",
    content: {
      "Контекст": "После ухода Renault из России правительство Москвы решило сохранить и перезапустить производственные мощности завода под брендом «Москвич». Завод оказался в сложной позиции: отсутствие международного присутствия, слабая узнаваемость бренда, зависимость от китайских комплектующих и санкционные ограничения.",
      "Цель": "Разработать комплексную стратегию, которая позволит «Москвичу» за 3–4 года выйти на выручку 140 млрд рублей к 2027 году за счет оптимизации цепочки ценности, локализации поставок, усиления дилерской сети и цифрового маркетинга.",
      "Подход": "<strong>Исследование и аналитика:</strong> Анализ отраслевого контекста, сравнение с Lada, Geely, Chery.<br><strong>Продукт и стратегия:</strong> Отказ от долгого R&D в пользу оптимизации текущей линейки с фокусом на SUV и электромобили.<br><strong>Процессы:</strong> Модернизация мощностей, автоматизация, оптимизация логистики.<br><strong>Экономика:</strong> Финансовая модель роста выпуска на 7-10 тыс. авто ежегодно.",
      "Моя роль": "Роль бизнес-аналитика и стратегического консультанта. Сбор и структурирование данных о рынке, подготовка сравнительных таблиц, разработка блоков по локализации поставщиков, формирование черновой финансовой модели.",
      "Результаты": "К 2027 году целевой ориентир — достижение общей выручки 140 млрд рублей, полное покрытие инвестиций, выход на стабильную прибыльность, экономия на логистике до 20% и закрепление присутствия в 12 новых регионах."
    }
  },
  {
    id: 2,
    title: "VK (ВКонтакте)",
    subtitle: "Инновационная стратегия для HTML5-игр ВКонтакте",
    content: {
      "Контекст": "HTML5-игры ВКонтакте — развивающийся, но недооцененный сегмент. Игры сложно обнаружить, UX фрагментарный, монетизация ограничена. Задача: превратить HTML5-игры из побочного раздела в органичную часть продуктовой экосистемы.",
      "Цель": "Разработать инновационную стратегию развития HTML5-игр ВКонтакте, которая повысит вовлеченность пользователей, расширит аудиторию и укрепит монетизацию.",
      "Подход": "Создание концепции экосистемы, где игры интегрированы в ленту, клипы и чаты. Развитие игрового хаба с персонализацией. Внедрение рекламы с вознаграждением и микротранзакций. Геймификация социальной активности (челленджи, достижения).",
      "Моя роль": "Продуктовый и бизнес-аналитик. Анализ конкурентов (Facebook Gaming, WeChat), разработка концепции игровой экосистемы, проработка идей кросс-промо и геймификации, структурирование финальной презентации.",
      "Результаты": "Перезапуск HTML5-игрового сегмента, рост вовлеченности за счет улучшенного UX, расширение аудитории через кросс-промо и улучшение доходности игр."
    }
  },
  {
    id: 3,
    title: "Газпромнефть",
    subtitle: "Стратегия развертывания производства винил-н-бутиловых эфиров в России",
    content: {
      "Контекст": "Винил-н-бутиловые эфиры полностью импортируются, что создает риски для промышленности. Растет спрос на импортозамещение и экологичные материалы.",
      "Цель": "Разработать концепцию локализации производства в России на базе отечественных технологий и сырья с фокусом на экономической эффективности и экологии.",
      "Подход": "Анализ глобального рынка и аналогов. Изучение каталитического метода и «зеленых» технологий. Моделирование производственной модели и экономики (CAPEX/OPEX). Оценка ESG-эффектов.",
      "Моя роль": "Бизнес-аналитик. Анализ рынка и импортозависимости. Сравнение с аналогами. Формирование технологической и экономической логики проекта. Оценка окупаемости.",
      "Результаты": "Срок окупаемости 3–5 лет. Снижение импортозависимости. Создание рабочих мест. Снижение выбросов CO2 за счет энергоэффективных технологий."
    }
  },
  {
    id: 4,
    title: "МФТИ (Долина Физтеха)",
    subtitle: "Продуктовый подход к управлению технопарком и бизнес-модель ИНТЦ",
    content: {
      "Контекст": "Рынок технопарков высококонкурентен (Сколково, Иннополис). Текущая модель ИНТЦ опиралась на аренду. Требовалась стратегия для финансовой устойчивости и технологической ценности.",
      "Цель": "Сформировать стратегию развития как продукта: воронка резидентов, гибридная бизнес-модель, план инфраструктуры.",
      "Подход": "Анализ лучших практик. Построение воронки резидентов. Гибридная бизнес-модель (аренда + R&D + акселерация). Кластерный подход к инфраструктуре (Биотех, ИИ+Квант).",
      "Моя роль": "Стратегический консультант. Сравнительный анализ технопарков. Структурирование воронки. Оценка доходности сервисов. Подготовка финансовой модели.",
      "Результаты": "NPV > 1.7 млрд руб, ROI 10.7%. Рост резидентов до 1526 к 2040 году. Создание 1400 рабочих мест. Диверсификация выручки."
    }
  },
  {
    id: 5,
    title: "МТС",
    subtitle: "Повышение удобства и предсказуемости сервиса МТС-Маркетолог",
    content: {
      "Контекст": "МТС-Маркетолог работает в конкурентном рынке. Пользователи сталкиваются с непредсказуемыми результатами, сложным интерфейсом и медленными процессами, что снижает NPS.",
      "Цель": "Переработать интерфейс и процессы, повысить удобство и прозрачность, увеличить долю возвращающихся клиентов и вывести NPS в положительную зону.",
      "Подход": "UX-аудит. Приоритизация инициатив по методу RICE (поиск по сайту, чат-бот, тестовые кампании). Внедрение ИИ для модерации.",
      "Моя роль": "Продуктовый аналитик и UX-консультант. Анализ конкурентов, карта проблем пользователей, UX-аудит, приоритизация RICE.",
      "Результаты": "Рост прибыли на >25% за счет удержания клиентов. Выход NPS в положительную зону на 3-й месяц. Ускорение запуска кампаний."
    }
  }
];

// --- REACT COMPONENT ---
function App() {
  const [currentCaseId, setCurrentCaseId] = useState(null);

  // Scroll to top whenever the view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentCaseId]);

  const openCase = (index) => setCurrentCaseId(index);
  const closeCase = () => setCurrentCaseId(null);

  const nextCase = () => {
    if (currentCaseId !== null && currentCaseId < casesData.length - 1) {
      setCurrentCaseId(currentCaseId + 1);
    }
  };

  const prevCase = () => {
    if (currentCaseId !== null && currentCaseId > 0) {
      setCurrentCaseId(currentCaseId - 1);
    }
  };

  const currentCaseData = currentCaseId !== null ? casesData[currentCaseId] : null;

  return (
    <div className="bg-white text-[#1a1a1a] antialiased min-h-screen flex flex-col selection:bg-black selection:text-white font-sans">
      
      {/* Navigation / Header */}
      <header className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-start z-50 mix-blend-difference text-black md:mix-blend-normal bg-white/90 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
        <div className="font-medium tracking-tight text-sm md:text-base uppercase cursor-pointer">
          <button onClick={closeCase} className="hover:opacity-60 transition-opacity">ADAM Al-ABED</button>
        </div>
        <nav>
          <ul className="flex gap-6 text-sm md:text-base font-medium">
            <li>
              <button onClick={closeCase} className="hover-underline uppercase tracking-wide">Обо мне</button>
            </li>
            <li>
              <button onClick={closeCase} className="hover-underline uppercase tracking-wide">Кейсы</button>
            </li>
          </ul>
        </nav>
      </header>

      {/* HOME VIEW */}
      {currentCaseId === null && (
        <main className="flex-grow pt-32 md:pt-40 px-6 md:px-10 pb-20 max-w-screen-xl mx-auto w-full animate-fade-in">
          
          {/* Intro */}
          <section className="mb-24 md:mb-32">
            <div className="max-w-2xl">
              <h1 className="text-2xl md:text-4xl font-normal leading-tight mb-12">
                Этот сайт – место, где можно увидеть, как я думаю, как принимаю решения и какие проекты собирал. 
                <span className="opacity-50"> Без украшательств, но с деталями, которые обычно не помещаются в резюме.</span>
              </h1>
            </div>
            <hr className="border-black border-t mb-12 opacity-20" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="col-span-1 md:col-span-3">
                <span className="text-xs uppercase tracking-widest opacity-50 sticky top-32">Контекст</span>
              </div>
              <div className="col-span-1 md:col-span-8 text-lg md:text-xl leading-relaxed space-y-8 font-light">
                <p>Я учусь на медицинском и параллельно работаю с стратегическими задачами: считаю модели, разбираю процессы и помогаю командам принимать решения не вслепую.</p>
                <p>Медицина дала мне дисциплину, устойчивость и привычку смотреть на причину, а не только на симптомы; консалтинг и проектная работа добавили к этому структуру, критическое мышление и умение собирать рабочие решения из неполных данных.</p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-24 md:mb-32">
            <hr className="border-black border-t mb-12 opacity-20" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="col-span-1 md:col-span-3">
                <span className="text-xs uppercase tracking-widest opacity-50 sticky top-32">Путь</span>
              </div>
              <div className="col-span-1 md:col-span-8 text-lg md:text-xl leading-relaxed space-y-8 font-light">
                <p>Я попал в стратегический консалтинг не по случайности – во время учебы, я участвовал в нескольких кейс-чемпионатах, и моя команда часто выходила в финалы. Я не относился к этому как к разовому опыту: разбирал ошибки, улучшал структуру решений, и в итоге моя команда выходила в топ.</p>
                <p>Как результат я выиграл грант на обучение в <a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline">The Experts: School of Consulting</a>, где я научился собирать решения под давлением, держать логику и работать в команде так, чтобы результат был предсказуемым, а не случайным.</p>
              </div>
            </div>
          </section>

          {/* Work */}
          <section className="mb-32">
            <hr className="border-black border-t mb-12 opacity-20" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="col-span-1 md:col-span-3">
                <span className="text-xs uppercase tracking-widest opacity-50 sticky top-32">Опыт</span>
              </div>
              <div className="col-span-1 md:col-span-8 text-lg md:text-xl leading-relaxed space-y-8 font-light">
                <p>Позже у меня появился и рабочий опыт: я занимался развитием и масштабированием проектов, руководил кросс-функциональной командой, улучшал операционную эффективность и повышал удовлетворенность клиентов.</p>
                <p>Это научило меня смотреть на работу системно и видеть узкие места, которые можно исправить не за счёт героизма, а за счет структуры.</p>
              </div>
            </div>
          </section>

          {/* Cases List */}
          <section id="cases" className="mb-32 min-h-[60vh]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-black pb-4">
              <h2 className="text-2xl md:text-4xl font-normal uppercase">Кейсы</h2>
              <span className="text-sm md:text-base opacity-50 mt-2 md:mt-0 max-w-md text-right">Выберите кейс из списка ниже, чтобы узнать детали</span>
            </div>
            <div className="flex flex-col">
              {casesData.map((item, index) => (
                <button 
                  key={item.id}
                  onClick={() => openCase(index)}
                  className="group py-6 border-b border-black/10 flex justify-between items-center hover:pl-4 transition-all duration-300 hover:bg-gray-50 hover:pr-4 w-full text-left"
                >
                  <span className="text-xl md:text-3xl font-light group-hover:font-normal">{index + 1}. {item.title}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm uppercase tracking-wider">Посмотреть кейс →</span>
                </button>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* DETAIL VIEW */}
      {currentCaseId !== null && currentCaseData && (
        <main className="flex-grow pt-32 md:pt-40 px-6 md:px-10 pb-20 max-w-screen-xl mx-auto w-full animate-fade-in">
          <button onClick={closeCase} className="mb-12 group flex items-center gap-2 text-sm uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
            <span>←</span> Назад к списку
          </button>

          <article>
            <h1 className="text-3xl md:text-6xl font-normal uppercase mb-6 leading-tight">{currentCaseData.title}</h1>
            <p className="text-xl md:text-2xl font-light mb-16 max-w-3xl text-neutral-600">{currentCaseData.subtitle}</p>

            <div className="space-y-20">
              {Object.entries(currentCaseData.content).map(([key, value]) => (
                <div key={key} className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-black/10 pt-8">
                  <div className="col-span-1 md:col-span-3">
                    <span className="text-xs uppercase tracking-widest opacity-50 sticky top-32 text-black">{key}</span>
                  </div>
                  <div className="col-span-1 md:col-span-9 text-lg md:text-xl leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: value }}>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <div className="mt-32 pt-12 border-t border-black/20 flex justify-between">
            <button 
              onClick={prevCase} 
              className={`text-sm uppercase tracking-widest hover:opacity-50 transition-opacity ${currentCaseId === 0 ? 'invisible' : ''}`}
            >
              ← Предыдущий кейс
            </button>
            <button 
              onClick={nextCase} 
              className={`text-sm uppercase tracking-widest hover:opacity-50 transition-opacity ${currentCaseId === casesData.length - 1 ? 'invisible' : ''}`}
            >
              Следующий кейс →
            </button>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="px-6 md:px-10 pb-10 mt-auto">
        <hr className="border-black border-t mb-10 opacity-100" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <a href="mailto:adamalabedd@gmail.com" className="text-2xl md:text-4xl font-normal hover:opacity-50 transition-opacity flex items-center gap-2 group">
            ADAMALABEDD@GMAIL.COM
            <svg className="w-6 h-6 md:w-8 md:h-8 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 17L17 7M17 7H7M17 7V17"></path></svg>
          </a>
          <div className="text-xs opacity-40 uppercase tracking-widest">
            © 2025 Adam Alabedd
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;