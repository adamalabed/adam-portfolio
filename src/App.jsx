import React, { useState, useEffect } from 'react';

// --- DATA & TRANSLATIONS ---

const SITE_CONTENT = {
  ru: {
    nav: {
      about: "Обо мне",
      cases: "Кейсы"
    },
    hero: {
      title: "Этот сайт – место, где можно увидеть, как я думаю, как принимаю решения и какие проекты собирал.",
      subtitle: "Без украшательств, но с деталями, которые обычно не помещаются в резюме."
    },
    sections: {
      context: {
        label: "Контекст",
        text: [
          "Я учусь на медицинском и параллельно работаю с стратегическими задачами: считаю модели, разбираю процессы и помогаю командам принимать решения не вслепую.",
          "Медицина дала мне дисциплину, устойчивость и привычку смотреть на причину, а не только на симптомы; консалтинг и проектная работа добавили к этому структуру, критическое мышление и умение собирать рабочие решения из неполных данных."
        ]
      },
      path: {
        label: "Путь",
        text: [
          "Я попал в стратегический консалтинг не по случайности – во время учебы, я участвовал в нескольких кейс-чемпионатах, и моя команда часто выходила в финалы. Я не относился к этому как к разовому опыту: разбирал ошибки, улучшал структуру решений, и в итоге моя команда выходила в топ.",
          "Как результат я выиграл грант на обучение в The Experts: School of Consulting, где я научился собирать решения под давлением, держать логику и работать в команде так, чтобы результат был предсказуемым, а не случайным."
        ]
      },
      experience: {
        label: "Опыт",
        text: [
          "Позже у меня появился и рабочий опыт: я занимался развитием и масштабированием проектов, руководил кросс-функциональной командой, улучшал операционную эффективность и повышал удовлетворенность клиентов.",
          "Это научило меня смотреть на работу системно и видеть узкие места, которые можно исправить не за счёт героизма, а за счет структуры."
        ]
      }
    },
    casesSection: {
      title: "Кейсы",
      subtitle: "Выберите кейс из списка ниже, чтобы узнать детали",
      buttonText: "Посмотреть кейс →",
      backButton: "← Назад к списку",
      prevButton: "← Предыдущий кейс",
      nextButton: "Следующий кейс →"
    },
    cases: [
      {
        id: 0,
        title: "Beesline Cosmetics",
        subtitle: "Развитие Beesline Cosmetics на рынке MENA",
        content: {
          "Контекст": "Beesline Cosmetics — международный бренд натуральной уходовой косметики, успешно закрепившийся в нишевых категориях, но сталкивающийся с ограниченным проникновением в более широкие массовые сегменты рынка MENA.\n\nКомпания находилась на этапе, когда устойчивый рост был возможен только через стратегические изменения: расширение продуктовой линейки, перераспределение фокуса между сегментами, улучшение клиентского опыта и усиление каналов дистрибуции.",
          "Цель": "Обеспечить устойчивый рост бренда в регионах MENA за счет стратегии, операционной структурности и повышения качества клиентского пути.\n\nКлючевые задачи:\n• Провести анализ рынка и конкурентной среды в MENA.\n• Определить сегменты с наибольшим потенциалом роста.\n• Разработать стратегию выхода на новые рынки и адаптацию продуктового портфеля.\n• Улучшить элементы клиентского опыта и программы удержания.\n• Предложить инициативы по расширению каналов продаж (ритейл + e-commerce).",
          "Подход": "01. Аналитический блок\nАнализ категорий и динамики спроса в 6 странах региона. Benchmarking конкурентов по ценам, коммуникации, SKU и модели роста. Оценка каналов дистрибуции и региональных особенностей потребления. Глубинные интервью с локальными представителями и партнерами.\n\n02. Продуктово-стратегический анализ\nСегментация целевой аудитории и построение клиентоцентричной карты потребностей. Ревизия текущего продуктового портфеля и определение точек расширения. Формирование гипотез по запуску новых линеек для массовых сегментов.\n\n03. Клиентский опыт\nОценка текущих точек взаимодействия: покупка, повторный заказ, digital-каналы, коммуникации. Анализ программы лояльности и её влияния на удержание. Разработка предложений по улучшению CX для повышения частоты повторных покупок.\n\n04. Каналы продаж\nОценка эффективности текущей дистрибуции. Выявление перспективных ритейлеров и e-commerce площадок. Моделирование потенциала роста при расширении каналов.",
          "Моя роль": "01. Проанализировал рынок MENA и конкурентную среду.\nВыявил ключевые драйверы роста и сегменты, недооцененные компанией.\n\n02. Разработал стратегию выхода на два новых рынка.\nУчитывая локальный спрос, влияние культурных факторов и позиционирование конкурентов.\n\n03. Участвовал в формировании продуктовой стратегии.\nОпределил наиболее перспективные категории для расширения, провел анализ ценовых точек и эластичности спроса.\n\n04. Проработал элементы клиентского опыта и программы лояльности.\nПредложил улучшения, направленные на повышение удержания на этапе повторной покупки.\n\n05. Подготовил рекомендации по расширению каналов продаж.\nС фокусом на e-commerce и альтернативные сети, которые обеспечивают более высокую маржинальность.",
          "Решения": "• Сфокусированное развитие в наиболее емких категориях.\n• Запуск стратегии выхода на два дополнительных рынка MENA.\n• Адаптация продуктовых линеек под особенности потребителей отдельных стран.\n• Переработка программы лояльности и digital-коммуникаций.\n• Расширение каналов продаж: новые ритейлеры и онлайн-площадки.",
          "Результаты": "Коммерческие и операционные результаты:\n• Рост продаж — около 15–18% в течение периода интеграции рекомендаций.\n• Укрепление позиций бренда в ключевых сегментах (рост рыночной доли в некоторых категориях).\n• Выход на две новые страны региона.\n• Увеличение повторных покупок благодаря улучшенному клиентскому пути.\n• Оптимизация маркетинговых активностей и повышение эффективности каналов.\n\nСтратегический эффект:\n• Усиление присутствия бренда на международном рынке.\n• Большая предсказуемость в планировании спроса и управлении продуктовым портфелем.\n• Стратегический фундамент для дальнейшего масштабирования."
        }
      },
      {
        id: 1,
        title: "Москвич",
        subtitle: "Разработка стратегии роста и оптимизации цепочки ценности завода «Москвич» в условиях санкций.",
        content: {
          "Контекст": "После ухода Renault из России правительство Москвы решило сохранить и перезапустить производственные мощности завода, используя инфраструктуру для развития отечественного автопрома под брендом «Москвич». Завод оказался в сложной позиции: отсутствие международного присутствия, слабая узнаваемость бренда, зависимость от китайских комплектующих и санкционные ограничения при сильной конкуренции со стороны Lada и китайских марок. В этих условиях требовался внешний стратегический анализ, который позволил бы сформировать реалистичный маршрут к росту через оптимизацию существующих процессов, локализацию и усиление маркетинга, а не через дорогостоящие долгосрочные R&D.",
          "Цель": "Разработать комплексную стратегию, которая позволит «Москвичу» за 3–4 года выйти на выручку 140 млрд рублей к 2027 году за счет оптимизации цепочки ценности, локализации поставок, усиления дилерской сети и цифрового маркетинга.\n\nКлючевые задачи:\n• Диагностировать текущее положение «Москвича» относительно конкурентов по ключевым метрикам.\n• Выявить узкие места в логистике, производстве и структуре поставок.\n• Сформировать стратегию расширения продаж (регионы РФ, СНГ).\n• Разработать целостную маркетинговую и цифровую стратегию.\n• Подготовить инвестиционный и поэтапный план (2024–2027 гг.).",
          "Подход": "01. Исследование и аналитика\nБыл проведен анализ отраслевого контекста: санкции, тренды локализации, рост цифрового маркетинга. «Москвич» сравнивался с АвтоВАЗом (Lada), Geely, Chery и Haval по надежности, стоимости, рекламным бюджетам и характеристикам моделей.\n\n02. Продукт и стратегия\nВместо фокуса на долгой и капиталоемкой разработке новых моделей был выбран путь рациональной оптимизации существующей продуктовой линейки. Акцент на SUV и электромобилях и адаптации текущих моделей.\n\n03. Клиентский путь и коммуникации\nАнализ клиентского пути выявил, что низкая плотность дилерской сети и слабое медийное присутствие снижают доверие. Методология: расширение дилерских точек и усиление цифровых коммуникаций.\n\n04. Процессы и операции\nОценка текущих производственных процессов, модернизация мощностей, внедрение автоматизации, оптимизация логистики и складской инфраструктуры.\n\n05. Экономика и моделирование\nБыл построен финансовый сценарий: ежегодный выпуск должен расти на 7 000–10 000 автомобилей, а выручка достигнуть 140 млрд рублей к 2027 году.\n\n06. Внедрение и дорожная карта\nИнициативы структурированы в дорожную карту на 3 года, включающую 14 ключевых шагов.",
          "Моя роль": "Моя роль как бизнес-аналитика и стратегического консультанта, отвечающего за аналитику, формирование гипотез и подготовку решений для менеджмента «Москвича».\n\nЯ участвовал в сборе и структурировании данных о рынке, конкурентах и потребителях, готовил сравнительные таблицы по дилерской сети, рекламным бюджетам, ценам и продуктовым характеристикам. Также принимал участие в разработке блоков по локализации поставщиков, улучшению логистики и автоматизации производства, формировал черновую финансовую модель и помогал упаковать результаты в презентацию.",
          "Решения": "• Локализация производства и работа с российскими поставщиками: партнерства с Автоэлектроникой, Северсталью, Автодизелем (ГАЗ), Борским стекольным заводом и КамАЗом.\n• Расширение продаж и диверсификация продуктов: усиление дилерской сети по регионам РФ, выход на рынки СНГ, фокус на SUV и электромобилях.\n• Улучшение логистики и производства: внедрение автоматизации производственных линий, цифровых систем управления, оптимизация маршрутов.\n• Укрепление маркетинговой стратегии: расширение рекламных кампаний в цифровых каналах, использование онлайн‑видео, запуск программ лояльности.",
          "Результаты": "• К 2024 году: ожидается увеличение выручки на 10 млрд рублей, рост выпуска на 7 000 автомобилей, снижение издержек на 5%.\n• К 2025 году: планируется рост выручки до 50 млрд рублей, ежегодный рост выпуска на 10 000 автомобилей, сокращение операционных издержек на 10%.\n• К 2026 году: прогнозируется снижение затрат на 15%, рост доли рынка на 5%.\n• К 2027 году: целевой ориентир — достижение общей выручки 140 млрд рублей, полное покрытие инвестиций, выход на стабильную прибыльность, экономия на логистике до 20% и закрепление присутствия в 12 новых регионах."
        }
      },
      {
        id: 2,
        title: "VK (ВКонтакте)",
        subtitle: "Инновационная стратегия для HTML5-игр ВКонтакте",
        content: {
          "Контекст": "HTML5-игры ВКонтакте — развивающийся, но недооцененный сегмент внутри экосистемы платформы: он не интегрирован полноценно в ленту, группы и другие ключевые сценарии использования соцсети. Игры сложно обнаружить, UX фрагментарный, монетизация ограничена базовыми форматами, а команда, поддерживающая платформу игр, состоит всего из пяти человек. На фоне растущего рынка браузерных и мобильных игр перед ВКонтакте встала задача превратить HTML5-игры из побочного раздела в органичную часть продуктовой экосистемы.",
          "Цель": "Разработать инновационную стратегию развития HTML5-игр ВКонтакте, которая повысит вовлеченность пользователей, расширит аудиторию и укрепит монетизацию за счет интеграции игр в социальные сценарии и улучшения UX.\n\nКлючевые задачи:\n• Повысить вовлеченность пользователей за счет улучшения интерфейса и навигации.\n• Увеличить аудиторию игр через кросс-промо с лентой, клипами и видео.\n• Оптимизировать монетизацию (реклама с вознаграждением, микротранзакции).\n• Усилить социальный аспект игр (челленджи, достижения).\n• Сформировать привлекательные условия для разработчиков.",
          "Подход": "01. Исследование и аналитика\nАналитика пользовательской активности внутри ВКонтакте. Изучение опыта конкурентов — Facebook Gaming, WeChat Mini Games, Snapchat — с акцентом на персонализацию, кросс-промо и геймификацию.\n\n02. Продукт и стратегия\nКонцепция экосистемы нового поколения, где HTML5-игры существуют не изолированно. Создание игрового хаба с персонализированными рекомендациями, интеграция в основные продукты VK.\n\n03. Клиентский путь\nПереосмысление пути от «игра — отдельный раздел» к «игра — естественное продолжение социальной активности». Пользователь находит игры через ленту, клипы, чаты.\n\n04. Взаимодействие с разработчиками\nСнижение комиссии, улучшение инструментов аналитики и промо для студий.\n\n05. Экономика и монетизация\nМодель вокруг рекламы с вознаграждением, микротранзакций и косвенного дохода от роста времени в соцсети.",
          "Моя роль": "Продуктовый и бизнес-аналитик в команде Unlimited Money Limited.\n\nЯ участвовал в анализе текущего состояния игрового сегмента VK, интерпретации внутренних данных и конкурентного ландшафта. Формулировал ключевые проблемы (низкая интеграция, слабый UX) и вносил вклад в разработку концепции игровой экосистемы нового поколения. Помогал структурировать финальную презентацию и визуальные схемы экосистемы.",
          "Решения": "• Инновационный UX и игровой хаб: создание централизованного хаба с персонализированными рекомендациями.\n• Кросс-промо с основными продуктами VK: внедрение ненавязчивых промо-блоков игр в ленту, клипы, видео и мессенджер.\n• Развитие монетизации: реклама с вознаграждением, расширение микротранзакций.\n• Геймификация соцсети: игровые челленджи, система достижений и наград за социальную активность.\n• Поддержка разработчиков: снижение комиссии, улучшение инструментов аналитики, проведение игровых акций.",
          "Результаты": "Проект нацелен на формирование у ВКонтакте долгосрочно конкурентоспособной игровой экосистемы, сопоставимой по вовлеченности с Facebook Gaming и WeChat Mini Games.\n\nОжидаемые эффекты:\n• Перезапуск HTML5-игрового сегмента.\n• Рост вовлеченности за счет улучшенного UX и интеграции с соцфункциями.\n• Расширение аудитории за счет кросс-промо.\n• Улучшение доходности игр через рекламу с вознаграждением и микротранзакции.\n• Повышение привлекательности платформы для разработчиков."
        }
      },
      {
        id: 3,
        title: "Газпромнефть",
        subtitle: "Стратегия развертывания производства винил-н-бутиловых эфиров в России",
        content: {
          "Контекст": "Винил-н-бутиловые эфиры полностью импортируются в Россию, при этом продукт критически важен для нефтегазовой, лакокрасочной, текстильной и химической промышленности. На мировом рынке доминируют BASF и другие зарубежные производители. В России есть сырьевая база, но отсутствует собственное производство. Растет спрос на экологичные материалы и усиливается тренд на импортозамещение, что открывает окно возможностей для запуска отечественного производства.",
          "Цель": "Разработать концепцию локализации производства винил-н-бутиловых эфиров в России на базе отечественных технологий и сырья с фокусом на экономической эффективности, снижении импортозависимости и экологической устойчивости.\n\nКлючевые задачи:\n• Проанализировать мировой и российский рынок.\n• Оценить технологические подходы (вкл. «зеленые» технологии).\n• Сформировать технологическую и производственную модель локализованного завода.\n• Оценить экономику проекта (CAPEX/OPEX, окупаемость).\n• Определить ключевых стейкхолдеров и партнеров.",
          "Подход": "01. Исследование и аналитика\nАнализ глобального рынка (доли игроков, BASF ~40%) и профиля российских потребителей. Сравнение с аналогами (акрилаты, полиэфиры), подтвердившее потенциал целевого продукта.\n\n02. Технологии и продукт\nИзучение каталитического метода производства. Акцент на отечественные катализаторы и технологии «зеленого синтеза» для снижения зависимости от импортного оборудования.\n\n03. Локализация и R&D\nОпора на российские научные центры (КФУ, НХТИ) и стартапы. Использование госпрограмм поддержки (Минпромторг).\n\n04. Экономика и моделирование\nОценка капитальных и операционных затрат. Моделирование пятилетнего финансового профиля с учетом локализации.\n\n05. Экология и устойчивость\nСнижение выбросов CO₂ с помощью современных катализаторов, энергоэффективность, соответствие ESG-стандартам.",
          "Моя роль": "Бизнес-аналитик и стратегический консультант.\n\nЯ участвовал в анализе рынка и импортозависимости, структурировал данные о производителях и потребителях. Сопоставлял целевой продукт с аналогами по свойствам и стоимости. Помогал формировать технологическую и экономическую логику проекта (каталитический метод, «зеленый синтез»), оценивал влияние локализации на себестоимость и окупаемость, участвовал в подготовке выводов по экономике и ESG.",
          "Решения": "• Локализация производства на основе отечественного сырья и технологий.\n• Разработка и внедрение отечественных катализаторов совместно с университетами и НИИ.\n• Использование «зеленых» технологий синтеза: снижение вредных выбросов, повышение энергоэффективности.\n• Привлечение госпрограмм и частных инвестиций для финансирования R&D и строительства.\n• Формирование долгосрочных контрактов с ключевыми потребителями для устойчивого спроса.",
          "Результаты": "Модель показала, что срок окупаемости проекта может составить 3–5 лет за счет снижения логистических расходов и себестоимости.\n\nЭкономическая выгода: сокращение импортозависимости, создание рабочих мест.\n\nЭкологический эффект: внедрение энергоэффективных технологий снижает выбросы CO₂ и улучшает соответствие ESG-требованиям, делая проект устойчивым в долгосрочной перспективе."
        }
      },
      {
        id: 4,
        title: "МФТИ (Долина Физтеха)",
        subtitle: "Продуктовый подход к управлению технопарком и бизнес-модель ИНТЦ",
        content: {
          "Контекст": "«Долина Физтеха» — инновационный научно‑технологический центр (ИНТЦ) МФТИ, который должен стать ядром deeptech‑экосистемы. Рынок технопарков высококонкурентен (Сколково, Иннополис), а текущая модель ИНТЦ во многом опиралась на аренду и не реализовывала весь потенциал value‑added сервисов. Требовалась стратегия, которая обеспечит финансовую устойчивость и максимизирует вклад в развитие технологий.",
          "Цель": "Сформировать стратегию развития «Долины Физтеха» как продукта на рынке технопарков, выстроив воронку работы с резидентами, гибридную бизнес‑модель и план по развитию инфраструктуры.\n\nКлючевые задачи:\n• Проанализировать лучшие практики технопарков.\n• Сформировать воронку резидентов и роли ИНТЦ на каждом этапе.\n• Разработать сбалансированную бизнес‑модель (базовые + высокодоходные сервисы).\n• Спроектировать структуру инфраструктуры (кластеры).\n• Описать модель работы со студентами и учёными.\n• Подготовить финансово‑инвестиционную модель до 2040 года.",
          "Подход": "01. Исследование и аналитика\nТехнопарк рассмотрен как продукт. Анализ показал, что конкуренты (Сколково, ИТ-парк) выигрывают за счет экосистемы и сервисов, а не просто аренды.\n\n02. Продукт и стратегия\nИНТЦ спроектирован как управляемая воронка: от осведомлённости до масштабирования. Для каждого этапа определены функции ИНТЦ (поиск таргетов, инфраструктура, поддержка).\n\n03. Клиентский путь резидента\nРезидент — клиент с полным жизненным циклом. Поддержка от стадии идеи (хакатоны) до зрелости (выход на новые рынки, IPO).\n\n04. Бизнес‑модель и сервисы\nГибрид базовых (аренда) и миссионных направлений (ЦКП, образование, R&D под заказ, акселерация). Оценка доходности и риска каждого сервиса.\n\n05. Инфраструктура и кластеры\nФункционально распределённые здания: «Биотех», «ИИ + Квант», «Робототехника» и др.\n\n06. Экономика\nФинансовая модель с учетом CAPEX, NPV, ROI, динамики резидентов и структуры выручки.",
          "Моя роль": "Бизнес‑аналитик и стратегический консультант в команде Yakov Think Tank.\n\nЯ участвовал в сравнительном анализе российских технопарков, формировал выводы по их бизнес‑моделям. Работал над структурированием воронки резидентов, оценкой доходности сервисов и проработкой роли МФТИ. Участвовал в подготовке финальной логики финансовой модели (NPV, ROI, динамика резидентов) и упаковке выводов.",
          "Решения": "• Управление технопарком как продуктом: выстраивание полной воронки резидентов.\n• Гибридная бизнес‑модель: сочетание аренды с высокодоходными направлениями (ЦКП, R&D, акселерация).\n• Кластерный подход к инфраструктуре: специализированные здания для биотеха, ИИ, робототехники.\n• Модель работы со студентами и учёными: вовлечение в проектные работы и стартапы.\n• Интеграция с инвесторами и индустрией: привлечение крупных партнёров и использование инструментов IRaaS.",
          "Результаты": "Согласно финансовой модели:\n• NPV > 1,743 млрд руб. при CAPEX 13,1 млрд руб. и ROI 10,7%.\n• Устойчивая динамика роста количества резидентов до 1 526 к 2040 году.\n• Смещение структуры выручки от аренды к диверсифицированной модели (R&D, сервисы).\n• Создание около 1 400 рабочих мест и налоговые поступления ~677 млн руб."
        }
      },
      {
        id: 5,
        title: "МТС",
        subtitle: "Повышение удобства и предсказуемости сервиса МТС-Маркетолог",
        content: {
          "Контекст": "МТС-Маркетолог работает в быстрорастущем рынке цифровых маркетинговых сервисов. Несмотря на сильный функционал, пользователи сталкиваются с непредсказуемыми результатами кампаний, сложным интерфейсом и медленными внутренними процессами, что сдерживает рост возвратных клиентов и лояльности. На рынке усиливается тренд на ИИ-подсказки, персонализацию и качественную поддержку.",
          "Цель": "Переработать интерфейс и внутренние процессы сервиса, чтобы повысить удобство, прозрачность и предсказуемость кампаний, увеличить долю возвращающихся клиентов и вывести NPS в положительную зону.\n\nКлючевые задачи:\n• Проанализировать лучшие практики (ИИ, поддержка, сообщества).\n• Выявить проблемы текущего сервиса (трафик, интерфейс, модерация).\n• Сформулировать инициативы по улучшению UX и процессов.\n• Приоритизировать инициативы по методу RICE.\n• Оценить эффект от внедрения.",
          "Подход": "01. Исследование и лучшие практики\nИзучение платформ с ИИ-подсказками, интеграцией с CRM и развитой поддержкой.\n\n02. Анализ проблем и потребностей\nВыявлены проблемы: некачественный трафик, сбои отображения, слабая реакция аудитории. Потребности: автоматизация, шаблоны, аналитика, быстрая поддержка.\n\n03. Диагностика интерфейса\nАудит выявил нелогичную иерархию меню, отсутствие поиска, затянутые процессы модерации и запуска.\n\n04. Приоритизация (RICE)\nИнициативы ранжированы по Reach, Impact, Confidence, Effort. Топ приоритеты: реорганизация меню, поиск, чат-бот, устранение дублей, ИИ-модерация.",
          "Моя роль": "Продуктовый аналитик и UX-консультант в команде «Бесконечные берега брендирования».\n\nЯ участвовал в анализе рынка и конкурентов, формулировал карту проблем пользователей. Помогал структурировать UX-аудит интерфейса и процессов. Внес вклад в разработку списка инициатив и их приоритизацию по методу RICE. Участвовал в упаковке решений в формате Executive Summary.",
          "Решения": "• Реорганизация боковой вкладки: логичная иерархия для снижения когнитивной нагрузки.\n• Введение глобального поиска: по сайту и медиа-материалам.\n• Чат-бот 24/7 и улучшение поддержки: первая линия на базе ИИ для быстрых ответов.\n• Устранение дублирующих элементов и оптимизация UI.\n• ИИ-бот для модерации баннеров: ускорение запуска кампаний.\n• Тестовые кампании: возможность оценить результаты перед масштабным запуском.",
          "Результаты": "• Увеличение доли возвращающихся клиентов на 5% способно поднять прибыль более чем на 25%.\n• Реализация ключевых инициатив в срок до 5 месяцев.\n• Прогноз выхода NPS в положительные значения на 3-й месяц за счет улучшения UX и поддержки.\n• Повышение конкурентоспособности и технологичности сервиса."
        }
      }
    ]
  },
  en: {
    nav: {
      about: "About",
      cases: "Cases"
    },
    hero: {
      title: "This site is a place to see how I think, make decisions, and what projects I've built.",
      subtitle: "No embellishments, but with details that usually don't fit in a resume."
    },
    sections: {
      context: {
        label: "Context",
        text: [
          "I am a medical student also working on strategic tasks: building models, analyzing processes, and helping teams make informed decisions.",
          "Medicine gave me discipline, resilience, and the habit of looking for the root cause, not just symptoms; consulting and project work added structure, critical thinking, and the ability to build working solutions from incomplete data."
        ]
      },
      path: {
        label: "Path",
        text: [
          "I didn't get into strategic consulting by accident – during my studies, I participated in several case championships, and my team often reached the finals. I didn't treat this as a one-time experience: I analyzed mistakes, improved solution structures, and eventually, my team reached the top.",
          "As a result, I won a grant to study at The Experts: School of Consulting, where I learned to build solutions under pressure, maintain logic, and work in a team so that the result was predictable, not accidental."
        ]
      },
      experience: {
        label: "Experience",
        text: [
          "Later, I gained work experience: I was involved in project development and scaling, led a cross-functional team, improved operational efficiency, and increased customer satisfaction.",
          "This taught me to look at work systematically and see bottlenecks that can be fixed not through heroism, but through structure."
        ]
      }
    },
    casesSection: {
      title: "Cases",
      subtitle: "Select a case from the list below to see details",
      buttonText: "View Case →",
      backButton: "← Back to list",
      prevButton: "← Previous Case",
      nextButton: "Next Case →"
    },
    cases: [
      {
        id: 0,
        title: "Beesline Cosmetics",
        subtitle: "Expansion of Beesline Cosmetics in the MENA Market",
        content: {
          "Context": "Beesline Cosmetics is an international brand of natural skincare cosmetics, successfully established in niche categories but facing limited penetration in broader mass segments of the MENA market.\n\nThe company was at a stage where sustainable growth was possible only through strategic changes: expanding the product line, redistributing focus between segments, improving customer experience, and strengthening distribution channels.",
          "Goal": "Ensure sustainable brand growth in MENA regions through strategy, operational structure, and improving the quality of the customer journey.\n\nKey Tasks:\n• Conduct market and competitive analysis in MENA.\n• Identify segments with the highest growth potential.\n• Develop a strategy for entering new markets and adapting the product portfolio.\n• Improve elements of customer experience and retention programs.\n• Propose initiatives to expand sales channels (retail + e-commerce).",
          "Approach": "01. Analytical Block\nAnalysis of categories and demand dynamics in 6 countries of the region. Benchmarking competitors by price, communication, SKUs, and growth models. Evaluation of distribution channels and regional consumption patterns. In-depth interviews with local representatives and partners.\n\n02. Product-Strategic Analysis\nSegmentation of the target audience and building a client-centric needs map. Revision of the current product portfolio and identifying expansion points. Forming hypotheses for launching new lines for mass segments.\n\n03. Customer Experience\nEvaluation of current touchpoints: purchase, repeat order, digital channels, communications. Analysis of the loyalty program and its impact on retention. Developing proposals to improve CX to increase repeat purchase frequency.\n\n04. Sales Channels\nEvaluation of current distribution effectiveness. Identifying promising retailers and e-commerce platforms. Modeling growth potential with channel expansion.",
          "My Role": "01. Analyzed the MENA market and competitive environment.\nIdentified key growth drivers and segments undervalued by the company.\n\n02. Developed a strategy for entering two new markets.\nConsidering local demand, cultural factors, and competitor positioning.\n\n03. Participated in forming the product strategy.\nIdentified the most promising categories for expansion, conducted analysis of price points and demand elasticity.\n\n04. Worked on elements of customer experience and loyalty programs.\nProposed improvements aimed at increasing retention at the repeat purchase stage.\n\n05. Prepared recommendations for expanding sales channels.\nWith a focus on e-commerce and alternative networks that provide higher margins.",
          "Solutions": "• Focused development in the most capacious categories.\n• Launch of a strategy to enter two additional MENA markets.\n• Adaptation of product lines to the consumer specifics of individual countries.\n• Overhaul of the loyalty program and digital communications.\n• Expansion of sales channels: new retailers and online platforms.",
          "Results": "Commercial and Operational Results:\n• Sales growth — about 15–18% during the recommendation integration period.\n• Strengthening brand positions in key segments (market share growth in some categories).\n• Entry into two new countries in the region.\n• Increase in repeat purchases due to improved customer journey.\n• Optimization of marketing activities and increased channel efficiency.\n\nStrategic Effect:\n• Strengthening brand presence in the international market.\n• Greater predictability in demand planning and product portfolio management.\n• Strategic foundation for further scaling."
        }
      },
      {
        id: 1,
        title: "Moskvich",
        subtitle: "Development of a growth strategy and value chain optimization for the Moskvich plant under sanctions.",
        content: {
          "Context": "After Renault's exit from Russia, the Moscow government decided to preserve and relaunch the plant's production capacities, using the infrastructure to develop the domestic auto industry under the Moskvich brand. The plant found itself in a difficult position: lack of international presence, weak brand recognition, dependence on Chinese components, and sanctions restrictions amidst strong competition from Lada and Chinese brands. Under these conditions, an external strategic analysis was required to form a realistic route to growth through optimization of existing processes, localization, and strengthening marketing, rather than through expensive long-term R&D.",
          "Goal": "Develop a comprehensive strategy that will allow Moskvich to reach revenue of 140 billion rubles by 2027 within 3–4 years through value chain optimization, supply localization, strengthening the dealer network, and digital marketing.\n\nKey Tasks:\n• Diagnose Moskvich's current position relative to competitors on key metrics.\n• Identify bottlenecks in logistics, production, and supply structure.\n• Form a sales expansion strategy (RF regions, CIS).\n• Develop a holistic marketing and digital strategy.\n• Prepare an investment and phased plan (2024–2027).",
          "Approach": "01. Research and Analytics\nAnalysis of the industry context: sanctions, localization trends, growth of digital marketing. Moskvich was compared with AvtoVAZ (Lada), Geely, Chery, and Haval in terms of reliability, cost, advertising budgets, and model characteristics.\n\n02. Product and Strategy\nInstead of focusing on long and capital-intensive development of new models, a path of rational optimization of the existing product line was chosen. Emphasis on SUVs and electric vehicles and adaptation of current models.\n\n03. Customer Journey and Communications\nAnalysis of the customer journey revealed that low dealer network density and weak media presence reduce trust. Methodology: expansion of dealer points and strengthening digital communications.\n\n04. Processes and Operations\nAssessment of current production processes, modernization of capacities, introduction of automation, optimization of logistics and warehouse infrastructure.\n\n05. Economics and Modeling\nA financial scenario was built: annual output should grow by 7,000–10,000 cars, and revenue reach 140 billion rubles by 2027.\n\n06. Implementation and Roadmap\nInitiatives structured into a roadmap for a 3-year period, including 14 key steps.",
          "My Role": "My role as a business analyst and strategic consultant responsible for analytics, hypothesis formation, and preparation of solutions for Moskvich management.\n\nI participated in collecting and structuring data on the market, competitors, and consumers, prepared comparative tables on the dealer network, advertising budgets, prices, and product characteristics. Also participated in developing blocks on supplier localization, improving logistics and production automation, formed a draft financial model, and helped package results into a presentation.",
          "Solutions": "• Localization of production and work with Russian suppliers: partnerships with Avtoelektronika, Severstal, Avtodizel (GAZ), Bor Glassworks, and KAMAZ.\n• Sales expansion and product diversification: strengthening the dealer network across RF regions, entering CIS markets, focus on SUVs and EVs.\n• Improving logistics and production: implementing production line automation, digital management systems, route optimization.\n• Strengthening marketing strategy: expanding advertising campaigns in digital channels, using online video, launching loyalty programs.",
          "Results": "• By 2024: expected revenue increase by 10 billion rubles, output growth by 7,000 cars, cost reduction by 5%.\n• By 2025: planned revenue growth to 50 billion rubles, annual output growth by 10,000 cars, operational cost reduction by 10%.\n• By 2026: forecasted cost reduction by 15%, market share growth by 5%.\n• By 2027: target benchmark — achieving total revenue of 140 billion rubles, full investment coverage, reaching stable profitability, logistics savings up to 20%, and securing presence in 12 new regions."
        }
      },
      {
        id: 2,
        title: "VK (Vkontakte)",
        subtitle: "Innovative strategy for HTML5 games on VKontakte",
        content: {
          "Context": "HTML5 games on VKontakte are a developing but undervalued segment within the platform's ecosystem: it is not fully integrated into the feed, groups, and other key social network usage scenarios. Games are hard to discover, UX is fragmented, monetization is limited to basic formats, and the team supporting the games platform consists of only five people. Against the backdrop of a growing browser and mobile games market, VK faced the task of turning HTML5 games from a side section into an organic part of the product ecosystem.",
          "Goal": "Develop an innovative strategy for the development of HTML5 games on VKontakte that will increase user engagement, expand the audience, and strengthen monetization by integrating games into social scenarios and improving UX.\n\nKey Tasks:\n• Increase user engagement by improving interface and navigation.\n• Increase the game audience through cross-promotion with the feed, clips, and video.\n• Optimize monetization (rewarded ads, microtransactions).\n• Strengthen the social aspect of games (challenges, achievements).\n• Create attractive conditions for developers.",
          "Approach": "01. Research and Analytics\nAnalytics of user activity within VKontakte. Study of competitor experience — Facebook Gaming, WeChat Mini Games, Snapchat — focusing on personalization, cross-promotion, and gamification.\n\n02. Product and Strategy\nA concept of a next-generation ecosystem where HTML5 games exist not in isolation. Creation of a game hub with personalized recommendations, integration into main VK products.\n\n03. Customer Journey\nRethinking the path from \"game — separate section\" to \"game — natural continuation of social activity\". The user finds games through the feed, clips, chats.\n\n04. Interaction with Developers\nReducing commission, improving analytics and promo tools for studios.\n\n05. Economics and Monetization\nModel around rewarded ads, microtransactions, and indirect revenue from increased time spent in the social network.",
          "My Role": "Product and Business Analyst in the Unlimited Money Limited team.\n\nI participated in analyzing the current state of the VK gaming segment, interpreting internal data and the competitive landscape. Formulated key problems (low integration, weak UX) and contributed to the development of the next-generation game ecosystem concept. Helped structure the final presentation and visual schemes of the ecosystem.",
          "Solutions": "• Innovative UX and Game Hub: creating a centralized hub with personalized recommendations.\n• Cross-promo with main VK products: introducing unobtrusive game promo blocks in the feed, clips, video, and messenger.\n• Monetization development: rewarded ads, expanding microtransactions.\n• Social network gamification: game challenges, achievement system, and rewards for social activity.\n• Developer support: reducing commission, improving analytics tools, holding game promotions.",
          "Results": "The project aims to form a long-term competitive gaming ecosystem for VKontakte, comparable in engagement to Facebook Gaming and WeChat Mini Games.\n\nExpected Effects:\n• Relaunch of the HTML5 game segment.\n• Growth in engagement due to improved UX and integration with social functions.\n• Audience expansion through cross-promo.\n• Improved game profitability through rewarded ads and microtransactions.\n• Increased platform attractiveness for developers."
        }
      },
      {
        id: 3,
        title: "Gazprom Neft",
        subtitle: "Strategy for deploying vinyl-n-butyl ether production in Russia",
        content: {
          "Context": "Vinyl-n-butyl ethers are fully imported into Russia, while the product is critical for the oil and gas, paint and varnish, textile, and chemical industries. The global market is dominated by BASF and other foreign manufacturers. Russia has the raw material base but lacks domestic production. Demand for eco-friendly materials is growing, and the trend for import substitution is intensifying, opening a window of opportunity to launch domestic production.",
          "Goal": "Develop a concept for localizing the production of vinyl-n-butyl ethers in Russia based on domestic technologies and raw materials with a focus on economic efficiency, reducing import dependence, and environmental sustainability.\n\nKey Tasks:\n• Analyze the global and Russian markets.\n• Evaluate technological approaches (incl. \"green\" technologies).\n• Form a technological and production model of a localized plant.\n• Evaluate project economics (CAPEX/OPEX, payback).\n• Identify key stakeholders and partners.",
          "Approach": "01. Research and Analytics\nAnalysis of the global market (player shares, BASF ~40%) and the profile of Russian consumers. Comparison with analogues (acrylates, polyesters), confirming the potential of the target product.\n\n02. Technologies and Product\nStudy of the catalytic production method. Emphasis on domestic catalysts and \"green synthesis\" technologies to reduce dependence on imported equipment.\n\n03. Localization and R&D\nReliance on Russian scientific centers (KFU, NHTI) and startups. Use of state support programs (Ministry of Industry and Trade).\n\n04. Economics and Modeling\nAssessment of capital and operational costs. Modeling a five-year financial profile taking localization into account.\n\n05. Ecology and Sustainability\nReducing CO₂ emissions using modern catalysts, energy efficiency, compliance with ESG standards.",
          "My Role": "Business Analyst and Strategic Consultant.\n\nI participated in market and import dependence analysis, structured data on manufacturers and consumers. Compared the target product with analogues in terms of properties and cost. Helped form the technological and economic logic of the project (catalytic method, \"green synthesis\"), evaluated the impact of localization on cost and payback, participated in preparing conclusions on economics and ESG.",
          "Solutions": "• Localization of production based on domestic raw materials and technologies.\n• Development and introduction of domestic catalysts together with universities and research institutes.\n• Use of \"green\" synthesis technologies: reducing harmful emissions, increasing energy efficiency.\n• Attracting state programs and private investment to finance R&D and construction.\n• Forming long-term contracts with key consumers for sustainable demand.",
          "Results": "The model showed that the project payback period could be 3–5 years due to reduced logistics costs and production costs.\n\nEconomic Benefit: reducing import dependence, creating jobs.\n\nEnvironmental Effect: introducing energy-efficient technologies reduces CO₂ emissions and improves compliance with ESG requirements, making the project sustainable in the long term."
        }
      },
      {
        id: 4,
        title: "MIPT (Phystech Valley)",
        subtitle: "Product approach to technopark management and INTC business model",
        content: {
          "Context": "\"Phystech Valley\" is the innovative scientific and technological center (INTC) of MIPT, which should become the core of the deeptech ecosystem. The technopark market is highly competitive (Skolkovo, Innopolis), and the current INTC model relied largely on rent and did not realize the full potential of value-added services. A strategy was required that would ensure financial sustainability and maximize the contribution to technology development.",
          "Goal": "Form a development strategy for \"Phystech Valley\" as a product in the technopark market, building a resident funnel, a hybrid business model, and an infrastructure development plan.\n\nKey Tasks:\n• Analyze best practices of technoparks.\n• Form a resident funnel and INTC roles at each stage.\n• Develop a balanced business model (basic + high-margin services).\n• Design infrastructure structure (clusters).\n• Describe the model of working with students and scientists.\n• Prepare a financial and investment model until 2040.",
          "Approach": "01. Research and Analytics\nThe technopark was viewed as a product. Analysis showed that competitors (Skolkovo, IT Park) win due to the ecosystem and services, not just rent.\n\n02. Product and Strategy\nINTC is designed as a managed funnel: from awareness to scaling. INTC functions are defined for each stage (target search, infrastructure, support).\n\n03. Resident Customer Journey\nThe resident is a client with a full life cycle. Support from the idea stage (hackathons) to maturity (entering new markets, IPO).\n\n04. Business Model and Services\nA hybrid of basic (rent) and mission directions (shared use centers, education, R&D on order, acceleration). Assessment of profitability and risk of each service.\n\n05. Infrastructure and Clusters\nFunctionally distributed buildings: \"Biotech\", \"AI + Quantum\", \"Robotics\", etc.\n\n06. Economics\nFinancial model taking into account CAPEX, NPV, ROI, resident dynamics, and revenue structure.",
          "My Role": "Business Analyst and Strategic Consultant in the Yakov Think Tank team.\n\nI participated in a comparative analysis of Russian technoparks, formed conclusions on their business models. Worked on structuring the resident funnel, assessing service profitability, and elaborating MIPT's role. Participated in preparing the final logic of the financial model (NPV, ROI, resident dynamics) and packaging conclusions.",
          "Solutions": "• Managing the technopark as a product: building a full resident funnel.\n• Hybrid business model: combining rent with high-margin directions (Shared Use Centers, R&D, acceleration).\n• Cluster approach to infrastructure: specialized buildings for biotech, AI, robotics.\n• Model of working with students and scientists: involvement in project work and startups.\n• Integration with investors and industry: attracting major partners and using IRaaS tools.",
          "Results": "According to the financial model:\n• NPV > 1.743 billion rubles with CAPEX 13.1 billion rubles and ROI 10.7%.\n• Sustainable growth dynamics of the number of residents to 1,526 by 2040.\n• Shift in revenue structure from rent to a diversified model (R&D, services).\n• Creation of about 1,400 jobs and tax revenues ~677 million rubles."
        }
      },
      {
        id: 5,
        title: "MTS",
        subtitle: "Improving convenience and predictability of the MTS-Marketer service",
        content: {
          "Context": "MTS-Marketer operates in the fast-growing digital marketing services market. Despite strong functionality, users face unpredictable campaign results, a complex interface, and slow internal processes, which holds back the growth of returning customers and loyalty. The market trend is strengthening towards AI tips, personalization, and high-quality support.",
          "Goal": "Redesign the interface and internal processes of the service to increase convenience, transparency, and predictability of campaigns, increase the share of returning customers, and bring NPS into the positive zone.\n\nKey Tasks:\n• Analyze best practices (AI, support, communities).\n• Identify current service problems (traffic, interface, moderation).\n• Formulate initiatives to improve UX and processes.\n• Prioritize initiatives using the RICE method.\n• Evaluate the effect of implementation.",
          "Approach": "01. Research and Best Practices\nStudy of platforms with AI tips, integration with CRM, and developed support.\n\n02. Problem and Need Analysis\nIdentified problems: poor traffic quality, display glitches, weak audience reaction. Needs: automation, templates, analytics, fast support.\n\n03. Interface Diagnostics\nAudit revealed illogical menu hierarchy, lack of search, prolonged moderation and launch processes.\n\n04. Prioritization (RICE)\nInitiatives ranked by Reach, Impact, Confidence, Effort. Top priorities: menu reorganization, search, chatbot, eliminating duplicates, AI moderation.",
          "My Role": "Product Analyst and UX Consultant in the \"Endless Branding Shores\" team.\n\nI participated in analyzing the market and competitors, formulated a user problem map. Helped structure the UX audit of the interface and processes. Contributed to the development of the list of initiatives and their prioritization using the RICE method. Participated in packaging solutions in Executive Summary format.",
          "Solutions": "• Sidebar reorganization: logical hierarchy to reduce cognitive load.\n• Introduction of global search: across the site and media materials.\n• 24/7 Chatbot and improved support: first line based on AI for quick answers.\n• Elimination of duplicate elements and UI optimization.\n• AI bot for banner moderation: accelerating campaign launch.\n• Test campaigns: ability to evaluate results before a large-scale launch.",
          "Results": "• Increasing the share of returning customers by 5% can raise profits by more than 25%.\n• Implementation of key initiatives within 5 months.\n• Forecast of NPS entering positive values in the 3rd month due to improved UX and support.\n• Increasing competitiveness and technological advancement of the service."
        }
      }
    ]
  }
};

// --- COMPONENTS ---

const SmartContent = ({ text }) => {
  if (!text) return null;
  
  const blocks = text.split('\n\n');
  
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        const lines = block.split('\n');
        
        const firstLine = lines[0].trim();
        const isHeaderPattern = /^\d+(\.\d+)?\.?/.test(firstLine) || (lines.length > 1 && firstLine.length < 60 && !firstLine.endsWith('.'));
        
        const isListBlock = lines.every(line => /^\d+\.|^-|^•/.test(line.trim()));

        if (isHeaderPattern && lines.length > 1 && !isListBlock) {
          return (
            <div key={index} className="block">
              <h4 className="font-normal text-black mb-2 text-lg">{firstLine}</h4>
              <div className="space-y-2 text-neutral-800 font-light leading-relaxed text-lg">
                {lines.slice(1).map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          );
        }

        const renderBullet = (text, key) => (
          <li key={key} className="flex gap-3 items-start pl-1">
             <span className="block w-1 h-1 mt-2.5 rounded-full bg-black flex-shrink-0 opacity-60"></span>
             <span className="leading-relaxed">{text}</span>
          </li>
        );

        if (isListBlock) {
          return (
            <ul key={index} className="space-y-3 text-neutral-800 font-light text-lg">
              {lines.map((line, i) => {
                const cleanText = line.replace(/^•|^-/, '').trim();
                return renderBullet(cleanText, i);
              })}
            </ul>
          );
        }
        
        return (
          <div key={index} className="text-neutral-800 font-light leading-relaxed text-lg space-y-1">
            {lines.map((line, i) => {
               const isBulletLine = /^•|^-/.test(line.trim());
               if (isBulletLine) {
                 return (
                   <div key={i} className="flex gap-3 items-start pl-1 mb-2">
                      <span className="block w-1 h-1 mt-2.5 rounded-full bg-black flex-shrink-0 opacity-60"></span>
                      <span className="leading-relaxed">{line.replace(/^•|^-/, '').trim()}</span>
                   </div>
                 )
               }
               return (
                 <p key={i}>{line}</p>
               );
            })}
          </div>
        );
      })}
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function Portfolio() {
  const [currentCaseId, setCurrentCaseId] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false);
  const [language, setLanguage] = useState('ru'); // 'ru' or 'en'

  const content = SITE_CONTENT[language];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [isDetailView, currentCaseId]);

  const openCase = (index) => {
    setCurrentCaseId(index);
    setIsDetailView(true);
  };

  const closeCase = () => {
    setIsDetailView(false);
    setCurrentCaseId(null);
  };

  const nextCase = () => {
    if (currentCaseId !== null && currentCaseId < content.cases.length - 1) {
      setCurrentCaseId(currentCaseId + 1);
    }
  };

  const prevCase = () => {
    if (currentCaseId !== null && currentCaseId > 0) {
      setCurrentCaseId(currentCaseId - 1);
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ru' ? 'en' : 'ru');
  };

  return (
    <div className="font-sans text-[#1a1a1a] bg-white min-h-screen flex flex-col selection:bg-black selection:text-white">
      <style>{`
        body { scroll-behavior: smooth; }
        .hover-underline { position: relative; text-decoration: none; padding-bottom: 2px; }
        .hover-underline::after { content: ''; position: absolute; width: 100%; transform: scaleX(0); height: 1px; bottom: 0; left: 0; background-color: currentColor; transform-origin: bottom right; transition: transform 0.25s ease-out; }
        .hover-underline:hover::after { transform: scaleX(1); transform-origin: bottom left; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .fade-in { animation: fadeIn 0.5s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <header className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-start z-50 text-black bg-white/90 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
        <div className="font-medium tracking-tight text-sm md:text-base uppercase">
          <button onClick={closeCase} className="hover:opacity-60 transition-opacity text-left">
            ADAM Al-ABED
          </button>
        </div>
        <nav className="flex items-center gap-6 md:gap-8">
          <ul className="flex gap-6 text-sm md:text-base font-medium">
            <li>
              <button 
                onClick={() => { if(isDetailView) closeCase(); setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100); }} 
                className="hover-underline uppercase tracking-wide cursor-pointer text-left"
              >
                {content.nav.about}
              </button>
            </li>
            <li>
              <button 
                onClick={() => { if(isDetailView) closeCase(); setTimeout(() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' }), 100); }} 
                className="hover-underline uppercase tracking-wide cursor-pointer text-left"
              >
                {content.nav.cases}
              </button>
            </li>
          </ul>
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="text-sm md:text-base font-medium hover:opacity-60 transition-opacity uppercase"
          >
            <span className={language === 'ru' ? 'opacity-100' : 'opacity-40'}>RU</span>
            <span className="opacity-40 mx-1">/</span>
            <span className={language === 'en' ? 'opacity-100' : 'opacity-40'}>EN</span>
          </button>
        </nav>
      </header>

      {!isDetailView ? (
        <main id="home-view" className="flex-grow pt-32 md:pt-40 px-6 md:px-10 pb-20 max-w-screen-xl mx-auto w-full fade-in">
          <section id="about" className="mb-24 md:mb-32">
            <div className="max-w-2xl">
              <h1 className="text-2xl md:text-4xl font-normal leading-tight mb-12">
                {content.hero.title} 
                <span className="opacity-50"> {content.hero.subtitle}</span>
              </h1>
            </div>
            <hr className="border-black border-t mb-12 opacity-20" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="col-span-1 md:col-span-3">
                <span className="text-xs uppercase tracking-widest opacity-50 sticky top-32">{content.sections.context.label}</span>
              </div>
              <div className="col-span-1 md:col-span-8 text-lg md:text-xl leading-relaxed space-y-8 font-light">
                {content.sections.context.text.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </section>

          <section className="mb-24 md:mb-32">
            <hr className="border-black border-t mb-12 opacity-20" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="col-span-1 md:col-span-3">
                <span className="text-xs uppercase tracking-widest opacity-50 sticky top-32">{content.sections.path.label}</span>
              </div>
              <div className="col-span-1 md:col-span-8 text-lg md:text-xl leading-relaxed space-y-8 font-light">
                {content.sections.path.text.map((p, i) => (
                  <p key={i}>
                    {p.includes("The Experts: School of Consulting") ? 
                      <>{p.split("The Experts: School of Consulting")[0]}<a href="#" className="hover:opacity-60 transition-opacity">The Experts: School of Consulting</a>{p.split("The Experts: School of Consulting")[1]}</> 
                      : p}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-32">
            <hr className="border-black border-t mb-12 opacity-20" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="col-span-1 md:col-span-3">
                <span className="text-xs uppercase tracking-widest opacity-50 sticky top-32">{content.sections.experience.label}</span>
              </div>
              <div className="col-span-1 md:col-span-8 text-lg md:text-xl leading-relaxed space-y-8 font-light">
                {content.sections.experience.text.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </section>

          <section id="cases" className="mb-32 min-h-[60vh] scroll-mt-32 md:scroll-mt-40">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-black pb-4">
              <h2 className="text-2xl md:text-4xl font-normal uppercase">{content.casesSection.title}</h2>
              <span className="text-sm md:text-base opacity-50 mt-2 md:mt-0 max-w-md text-left md:text-right">{content.casesSection.subtitle}</span>
            </div>
            <div className="flex flex-col">
              {content.cases.map((item, index) => (
                <button key={index} onClick={() => openCase(index)} className="group py-6 border-b border-black/10 flex justify-between items-center hover:pl-4 transition-all duration-300 hover:bg-gray-50 hover:pr-4 text-left w-full">
                  <span className="text-xl md:text-3xl font-light group-hover:font-normal">{index + 1}. {item.title}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm uppercase tracking-wider">{content.casesSection.buttonText}</span>
                </button>
              ))}
            </div>
          </section>
        </main>
      ) : (
        <main id="case-detail-view" className="flex-grow pt-32 md:pt-40 px-6 md:px-10 pb-20 max-w-screen-xl mx-auto w-full fade-in">
          <button onClick={closeCase} className="mb-12 group flex items-center gap-2 text-sm uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
            <span>←</span> {content.casesSection.backButton.split(' ')[1]} {content.casesSection.backButton.split(' ')[2]} {content.casesSection.backButton.split(' ')[3]}
          </button>

          {currentCaseId !== null && (
            <article className="fade-in">
              <h1 className="text-3xl md:text-6xl font-normal uppercase mb-8 leading-tight">
                {content.cases[currentCaseId].title}
              </h1>
              <p className="text-xl md:text-2xl font-light mb-20 max-w-3xl text-neutral-600 leading-normal">
                {content.cases[currentCaseId].subtitle}
              </p>

              <div className="space-y-20">
                {Object.entries(content.cases[currentCaseId].content).map(([key, value], i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-black/10 pt-8">
                    <div className="col-span-1 md:col-span-3">
                      <span className="text-xs uppercase tracking-widest opacity-40 sticky top-32 text-black font-medium">{key}</span>
                    </div>
                    <div className="col-span-1 md:col-span-8 lg:col-span-7">
                      <SmartContent text={value} />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          )}
          
          <div className="mt-32 pt-12 border-t border-black/20 flex flex-col gap-6 md:flex-row md:justify-between md:gap-0">
            <button onClick={prevCase} className={`text-sm uppercase tracking-widest hover:opacity-50 transition-opacity text-left ${currentCaseId > 0 ? 'visible' : 'invisible'}`}>{content.casesSection.prevButton}</button>
            <button onClick={nextCase} className={`text-sm uppercase tracking-widest hover:opacity-50 transition-opacity text-left md:text-right ${currentCaseId < content.cases.length - 1 ? 'visible' : 'invisible'}`}>{content.casesSection.nextButton}</button>
          </div>
        </main>
      )}

      <footer className="px-6 md:px-10 pb-10 mt-auto">
        <hr className="border-black border-t mb-10 opacity-100" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="flex flex-col gap-2">
            <a href="mailto:adamalabedd@gmail.com" className="text-2xl md:text-4xl font-light hover:opacity-50 transition-opacity flex items-center gap-2 group">
              ADAMALABEDD@GMAIL.COM
              <svg className="w-6 h-6 md:w-8 md:h-8 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 17L17 7M17 7H7M17 7V17"></path>
              </svg>
            </a>
            <a href="https://drive.google.com/file/d/1fJKqLBi3OaVvnPu37-i5XZyDRmOzr8E5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-light hover:opacity-50 transition-opacity flex items-center gap-2 group w-max">
              CV / RESUME
              <svg className="w-4 h-4 md:w-5 md:h-5 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 17L17 7M17 7H7M17 7V17"></path>
              </svg>
            </a>
          </div>
          <div className="text-xs opacity-40 uppercase tracking-widest">© 2025 NISFALDAM</div>
        </div>
      </footer>
    </div>
  );
}