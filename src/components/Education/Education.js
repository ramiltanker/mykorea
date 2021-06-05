import React from "react";

// Стили
import educationStyles from "./Education.module.css";
// Стили

// Картинки
import mainImage from "../../images/concerns_main_image.png";
import food from "../../images/food.png";
import home from "../../images/home.png";
import safety from "../../images/safety.png";
import language from "../../images/language.png";
// Картинки

function Education(props) {
  return (
    <section
      className={
        props.isEducation
          ? educationStyles.education
          : educationStyles.education_unactive
      }
      ref={props.educationRef}
    >
      <div className={educationStyles.advantages}>
        <h2 className={educationStyles.advantages_title}>
          Почему стоит получить образование в Корее?
        </h2>
        <p className={educationStyles.advantages_text}>
          Сегодня высшее образование в Южной Корее считается престижным. В
          большинстве случаев знания полученные в процессе обучения превосходят
          по качеству те, что студенты получают даже в европейских заведениях.
        </p>
        <p className={educationStyles.advantages_text}>
          Большинство университетов Кореи придерживаются либеральных стандартов
          обучения, как правило строгих учебных планов здесь не существует.
          Студенты самостоятельно выбирают интересующие дисциплины, так
          называемые majors и minors, в числе которых есть как общенаучные, так
          и профильные предметы. Такая система образования позволяет студентам
          самостоятельно выбирать свое направление, что впоследствии взращивает
          настоящих специалистов своего дела.
        </p>
        <p className={educationStyles.advantages_text}>
          Знание корейского языка ― это скорее преимущество, чем обязательное
          требование для студентов-иностранцев. Значительная часть
          образовательных программ предполагает преподавание на английском.
          Таким образом, поступающему в любом случае понадобится сертификат,
          подтверждающий уровень владения языком: TOEFL или IELTS ― английским,
          TOPIK ― корейским.
        </p>
        <p className={educationStyles.advantages_text}>
          Корейское правительство лояльно относится к зарубежным студентам: на
          территории страны действует три правительственных программы поддержки.
          Южнокорейские университеты утверждают и свои, локальные стипендии,
          действующие на разных условиях. В одних учебных заведениях приоритет
          отдается спортсменам, в других ― отличникам, в третьих ― студентам,
          делающим успехи в творчестве.
        </p>
      </div>
      <div className={educationStyles.concerns}>
        <div className={educationStyles.concerns_shell}>
          {props.screenWidth > 769 && (
            <img
              src={mainImage}
              alt="Картинка"
              className={educationStyles.concerns_image}
            />
          )}
          <h2 className={educationStyles.concerns_title}>
            Опасения родителей при выборе образования в Корее:
          </h2>
          <div className={educationStyles.concerns_box}>
            {props.screenWidth > 768 ? (
              <h3 className={educationStyles.concerns_subtitle}>Питание</h3>
            ) : (
              <div className={educationStyles.concerns_container}>
                <h3 className={educationStyles.concerns_subtitle}>Питание</h3>
                <img
                  src={food}
                  alt="food"
                  className={educationStyles.concerns_container_image}
                />
              </div>
            )}
            <p className={educationStyles.concerns_text}>
              Первое, о чем задумывается каждый родитель, когда отправляет
              своего ребенка на учебы это, то чем же он там будет питаться. В
              этом плане в Корее точно не будет никаких проблем. На территории
              городов присутствует огромное количество ресторанов и кафе для
              иностранцев с Русской, Итальянской, Французской и т.п кухнями. Ко
              всему прочему, в кампусе университета всегда присутствует
              несколько столовых, в которых предусмотрено питание для
              иностранных студентов. Так же, Корея разнообразна в выборе
              продуктов питания. В магазинах можно найти наши блюда, такие как
              пельмени, манты, котлеты, супы и так далее.
            </p>
          </div>
          <div className={educationStyles.concerns_box}>
            {props.screenWidth > 768 ? (
              <h3 className={educationStyles.concerns_subtitle}>Питание</h3>
            ) : (
              <div className={educationStyles.concerns_container}>
                <h3 className={educationStyles.concerns_subtitle}>
                  Проживание
                </h3>
                <img
                  src={home}
                  alt="home"
                  className={educationStyles.concerns_container_image}
                />
              </div>
            )}
            <p className={educationStyles.concerns_text}>
              Второе, о чем думает родитель, это то, где же будет жить его
              ребенок. Студенты университетов проживают на территории кампуса,
              который предусматривает охрану 24 часа в сутки. Они проживают в
              крайне комфортных общежитиях гостиничного типа. Во всех случаях, в
              номерах есть все необходимое для комфортной жизни: мебель,
              телевизор, интернет, отдельный душ и туалет, кондиционер и так
              далее.
            </p>
          </div>
          <div className={educationStyles.concerns_box}>
            {props.screenWidth > 768 ? (
              <h3 className={educationStyles.concerns_subtitle}>Питание</h3>
            ) : (
              <div className={educationStyles.concerns_container}>
                <h3 className={educationStyles.concerns_subtitle}>
                  Безопасность
                </h3>
                <img
                  src={safety}
                  alt="safety"
                  className={educationStyles.concerns_container_image}
                />
              </div>
            )}
            <p className={educationStyles.concerns_text}>
              Южная Корея является одной из самых безопасных стран мира, в
              которой преступность находится на очень низком уровне.
              Правительство выделяет немалые средства для сокращения уличной
              преступности по всей Корее. ВВП на душу населения на 2021 год
              составляет 12.203.288 тенге, а средняя зароботная плата состовляет
              1.706.395 тенге. Таким образом, Корея занимает 12 место в мировом
              экономическом рейтинге. Помимо всего прочего, Корея считается
              лидером в мировом сообществе в сфере медицины.
            </p>
          </div>
          <div className={educationStyles.concerns_box}>
            {props.screenWidth > 768 ? (
              <h3 className={educationStyles.concerns_subtitle}>Питание</h3>
            ) : (
              <div className={educationStyles.concerns_container}>
                <h3 className={educationStyles.concerns_subtitle}>
                  Корейский язык
                </h3>
                <img
                  src={language}
                  alt="languae"
                  className={educationStyles.concerns_container_image}
                />
              </div>
            )}
            <p className={educationStyles.concerns_text}>
              Знание корейского языка ― это скорее преимущество, чем
              обязательное требование для студентов-иностранцев. Значительная
              часть образовательных программ предполагает преподавание на
              английском. Таким образом, поступающему в любом случае понадобится
              сертификат, подтверждающий уровень владения языком: TOEFL или
              IELTS ― английским, TOPIK ― корейским.
            </p>
          </div>
        </div>
      </div>
      <div className={educationStyles.entrance}>
        <div className={educationStyles.entrance_shell}>
          <h2 className={educationStyles.entrance_title}>
            Поступление и подача документов на обучение в Корее после 11/12
            классов:
          </h2>
          <p className={educationStyles.entrance_text}>
            Если вы все-таки решили получать высшее образование в Корее, то
            необходимо разобрать процедуру поступления и подачи документов.
            Сейчас, поэтапно разберем процесс поступления.
          </p>
          <div className={educationStyles.entrance_container}>
            <div className={educationStyles.entrance_circle}>
              <h3 className={educationStyles.entrance_subtitle}>
                Этап подготовки к поступлению:
              </h3>
              <ul className={educationStyles.entrance_list}>
                <li className={educationStyles.entrance_li}>
                  Выбор университета по специальности.
                </li>
                <li className={educationStyles.entrance_li}>
                  Удовлетворение требований и подготовка документов для подачи
                  заявки.
                </li>
                <li className={educationStyles.entrance_li}>
                  Отправка заявки на поступление и сопутствующих документов.
                </li>
                <li className={educationStyles.entrance_li}>
                  Получение одобрения заявки.
                </li>
              </ul>
            </div>
            <div className={educationStyles.entrance_circle}>
              <h3 className={educationStyles.entrance_subtitle}>
                Визовый процесс:
              </h3>
              <ul className={educationStyles.entrance_list}>
                <li className={educationStyles.entrance_li}>
                  Подготовка необходимых визовых документов.
                </li>
                <li className={educationStyles.entrance_li}>Подача на визу.</li>
                <li className={educationStyles.entrance_li}>Получение визы.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={educationStyles.entrance_sub_text_box}>
          <p className={educationStyles.entrance_sub_text}>
            Заявления на весенний семестр (начало в марте) обычно принимаются в
            сентябре-ноябре предыдущего года, на осенний семестр (начало в
            сентябре) - в мае-июне того же года. В последнее время много
            университетов осуществляют приём документов через интернет.
            Стоимость регистрационного взноса варьируется от &#36;60 до &#36;150
            (в зависимости от университета).
          </p>
          <p className={educationStyles.entrance_sub_text}>
            Поступление на бакалавриат делится на стандартное поступление и
            перевод с другого университета. Стандартное поступление доступно
            после окончания полного среднего образования. Перевод возможен в
            случае студентов, проучившихся определённый период времени в другом
            ВУЗе и получивших определенное количество кредитов, или студентов,
            получивших бакалавриат.
          </p>
          <p className={educationStyles.entrance_sub_text}>
            Хотя и большинство ВУЗов производят отбор путём оценивания поданных
            студентами документов, в некоторых случаях проводятся собеседования
            или экзамены. Рекомендуется заранее уточнять способ отбора в
            интересующем вас ВУЗе.
          </p>
        </div>
      </div>
      {/* <div className={educationStyles.cost}>
        <h2 className={educationStyles.cost_title}>
          Стоимость обучения в Корее для Казахстанцев:
        </h2>
        <div className={educationStyles.cost_box}>
          <p className={educationStyles.cost_degree}>
            Бакалавриат. Стоимость обучения за один семестр в USD для разных
            направлений:
          </p>
          <p className={educationStyles.cost_text}>
            Гуманитарные науки (＄1,600~＄7,400), естественные науки
            (＄1,800~＄8,400), культура и искусство (＄1,900~＄8,500),
            технические науки (＄1,800~＄8,300), медицина (＄4,300~＄10,800).
            Планирующим учёбу в Корею также требуется учитывать и другие затраты
            на обучение и проживание (языковые курсы, учебная литература,
            общежитие, и др.). Приблизительный список затрат Вы можете увидеть в
            ниже приведенной таблице.
          </p>
        </div>
        <table className={educationStyles.table}>
          <thead>
            <tr>
              <th>
                <span>Тип затрат</span>
              </th>
              <th>
                <span>Приблизительные затраты (USD)</span>
              </th>
            </tr>
            <tr>
              <td>Регистрационный взнос</td>
              <td>&#36;50 ~ &#36;150</td>
            </tr>
            <tr>
              <td>Курсы корейского языка</td>
              <td>10 недель приблизительно &#36;1.300 ~ &#36;1.600</td>
            </tr>
            <tr>
              <td>Общежитие</td>
              <td>
                Примерно 420~1 тыс. 550&#36; (за 1 семестр) *Стоимость
                проживания в общежитии варьируется в зависимости от количества
                проживающих в комнате и от того, входит ли питание в обющюю
                сумму.
              </td>
            </tr>
            <tr>
              <td>Питание</td>
              <td>
                Примерно &#36;300 ~ &#36;400 в месяц *Стоимость питания в
                студенческой столовой за один прием пищи: от 3.2 &#36;
              </td>
            </tr>
            <tr>
              <td>Съём комнаты (вне кампуса)</td>
              <td>
                В месяц приблизительно &#36;300 (залог &#36;3.000 ~ &#36;5.000)
              </td>
            </tr>
            <tr>
              <td>Съём комнаты в пансионе (хасук)</td>
              <td>В месяц приблизительно &#36;300 ~ &#36;500</td>
            </tr>
            <tr>
              <td>Медицинская страховка</td>
              <td>В месяц приблизительно &#36;20</td>
            </tr>
            <tr>
              <td>Транспорт</td>
              <td>Автобус &#36;1.0 ~ &#36;1.2 Метро &#36;1.1 ~ &#36;2.5</td>
            </tr>
            <tr>
              <td>Интернет</td>
              <td>Примерно &#36;20 в месяц</td>
            </tr>
          </thead>
        </table>
      </div> */}
    </section>
  );
}

export default Education;
