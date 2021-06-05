import React from "react";

// Стили
import universitiesStyles from "./Universities.module.css";
// Стили

// Компоненты
import UnivercityTables from "../UnivercityTables/UnivercityTables.js";
import Visa from "../Visa/Visa.js";
// Компоненты

function Universities(props) {
  return (
    <section
      className={
        props.isUnivercities
          ? universitiesStyles.universities
          : universitiesStyles.universities_unactive
      }
      ref={props.univercitiesRef}
    >
      <div className={universitiesStyles.institutions}>
        <div className={universitiesStyles.institutions_box}>
          <h2 className={universitiesStyles.institutions_title}>
            Университеты в Корее
          </h2>
          <p className={universitiesStyles.institutions_text}>
            Университеты в Корее реализуют традиционные четырехгодичные
            программы бакалавриата, а также программы магистратуры и
            докторантуры. За последние полвека Южная Корея значительно
            преобразилась, в том числе преобразились и корейские университеты.
            Разумеется, степень развитости инфраструктуры полностью зависит от
            конкретного учебного заведения. Что касается наиболее престижных
            вузов, то в каждом из них есть спортивный комплекс, сеть библиотек,
            лабораторий, музеев и исследовательских центров. Все они расположены
            в роскошных исторических зданиях, хотя некоторые кампусы сооружены
            или реконструированы совсем недавно и часто представляют собой
            футуристические сооружения. Таким образом, вузы Южной Кореи сочетают
            в себе величественность восточной традиции и прогрессивность
            современной архитектуры.
          </p>
        </div>
      </div>
      <div className={universitiesStyles.advantages}>
        <h2 className={universitiesStyles.advantages_title}>
          Преимущество университетов Южной Кореи.
        </h2>
        <div className={universitiesStyles.advantages_box}>
          <h3 className={universitiesStyles.advantages_subtitle}>
            Престижные университеты
          </h3>
          <p className={universitiesStyles.advantages_text}>
            Южная Корея на данный момент развивается бешеными темпами - растущая
            экономика требует технических новшеств, а финансовые рынки - новых
            профессионалов, поэтому и сами университеты растут, богатеют и
            повышают свой уровень. Корейская система образования на данный
            момент почти ничем не уступает странам Европы, Великобритании и США,
            более того, построена по образцу последней. По версии наиболее
            авторитетных рейтингов QS и THE, несколько корейских вузов входят в
            сотню лучших, а в специальном рейтинге QS Asia University Rankings 8
            корейских вузов находятся в топ-50.
          </p>
        </div>
        <div className={universitiesStyles.advantages_box}>
          <h3 className={universitiesStyles.advantages_subtitle}>
            Международная перспектива
          </h3>
          <p className={universitiesStyles.advantages_text}>
            Около трети программ в корейских университетах преподаются на
            английском языке, и их доля увеличивается с каждым годом. Вместе с
            ними растет и количество иностранных студентов и преподавателей, что
            говорит о стремлении государства вывести корейское образование на
            мировой уровень.
          </p>
        </div>
        <div className={universitiesStyles.advantages_box}>
          <h3 className={universitiesStyles.advantages_subtitle}>
            Доступные цены
          </h3>
          <p className={universitiesStyles.advantages_text}>
            Стоимость обучения в корейских вузах одинакова для всех студентов,
            независимо от гражданства. Год обучения на программе бакалавриата в
            среднем стоит 13,005 USD, магистратуры - 16,145 USD, докторантуры -
            17,490 USD. Цены варьируются в зависимости от престижа университета,
            типа финансирования, но в любом случае остаются более доступными,
            чем аналогичные программы в Англии или Америке. К тому же, каждый
            год примерно 2 тысячи студентов получают стипендии от правительства
            Кореи.
          </p>
        </div>
        <div className={universitiesStyles.advantages_box}>
          <h3 className={universitiesStyles.advantages_subtitle}>
            Перспективы трудоустройства
          </h3>
          <p className={universitiesStyles.advantages_text}>
            Как было сказано выше, Южная Корея стремительно развивается, а темпы
            ее развития уступают только Китаю. При таком раскладе построить
            карьеру или собственный бизнес в Корее - очень многообещающая затея,
            особенно в сфере IT и других технологий.
          </p>
        </div>
      </div>
      <div className={universitiesStyles.requires}>
        <h2 className={universitiesStyles.requires_title}>
          Требования для поступления в корейские вузы
        </h2>
        <p className={universitiesStyles.requires_text}>
          Каждый университет самостоятельно проводит отбор абитуриентов.
          Документы отправляются с помощью почты или загружаются онлайн на сайте
          вуза. Хотя обучение в корейских образовательных учреждениях начинается
          не в сентябре, как во многих странах, а в марте, значительная часть
          университетов предлагают два периода поступления. Крайние сроки подачи
          заявок обычно приходятся на сентябрь-ноябрь и май-июнь.
        </p>
        <p className={universitiesStyles.requires_text}>
          Около трети курсов в стране проводятся на английском, остальные - на
          корейском. В процессе обучения (особенно в магистратуре и
          докторантуре) могут добавляться и другие иностранные языки. В любом
          случае, при поступлении от абитуриента требуется продемонстрировать
          знание английского (TOEFL 80 / IELTS 6.0) или корейского (TOPIK Level
          3). Стоит обратить внимание, что в случае с последним от студента
          также ожидают улучшения навыка языка до 4 уровня к моменту завершения
          обучения.
        </p>
        <div className={universitiesStyles.requires_box}>
          <h3 className={universitiesStyles.requires_subtitle}>
            Основные требования для поступления на все программы сводятся к
            следующему списку:
          </h3>
          <ul className={universitiesStyles.requires_list}>
            <li className={universitiesStyles.requires_li}>
              Документ об образовании с апостилем (аттестат или диплом бакалавра
              / магистра);
            </li>
            <li className={universitiesStyles.requires_li}>
              Языковой сертификат;
            </li>
            <li className={universitiesStyles.requires_li}>
              Мотивационное письмо;
            </li>
            <li className={universitiesStyles.requires_li}>
              Рекомендации с предыдущего места учебы / работы;
            </li>
            <li className={universitiesStyles.requires_li}>
              Документы абитуриента и его родителей с указанием гражданства
              (паспорта и/или иные документы);
            </li>
            <li className={universitiesStyles.requires_li}>
              Портфолио (для творческих направлений);
            </li>
            <li className={universitiesStyles.requires_li}>
              Подтверждения индивидуальных достижений, публикаций, текст
              диссертации (опционально).
            </li>
          </ul>
          <p className={universitiesStyles.requires_text}>
            Все документы должны быть переведены на язык программы, копии
            заверены. Вуз может вводить дополнительные этапы отбора в виде
            вступительных экзаменов или интервью.
          </p>
          <p className={universitiesStyles.requires_text}>
            В Корее существует также единый государственный экзамен Suneung
            (수능), аналог ЕГЭ или SAT, который не является обязательным для
            иностранных студентов, но может стать их дополнительным
            преимуществом, особенно при поступлении в тройку самых престижных
            университетов страны - SKY.
          </p>
        </div>
      </div>
      <UnivercityTables />
      <Visa />
      <div className={universitiesStyles.free_education}>
        <h2 className={universitiesStyles.free_education_title}>
          Бесплатное обучение в Корее:
        </h2>
        <p className={universitiesStyles.free_education_text}>
          Пройти обучение в Южной Корее бесплатно возможно. Последние годы
          государство активно наращивает международные связи, в том числе и в
          образовательном секторе. С целью привлечения иностранных студентов
          Правительство страны ежегодно выделяет стипендии по программе Global
          Korea Scholarship. Они полностью покрывают все расходы на обучение в
          университете и проживание в стране. Учиться можно на бакалавриате,
          магистратуре или докторантуре в одном из 65 университетов, участвующих
          в программе. Выбор курсов ограничен только длительностью: стипендия
          покрывает расходы в течение 4 лет.
        </p>
      </div>
    </section>
  );
}

export default Universities;

// &#36;
