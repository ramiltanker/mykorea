import React from "react";


// Картинки
import blackHeart from "../../images/black-heart.svg";
import top from "../../images/top.svg";
import flag from "../../images/flag.svg";
import greyHeart from "../../images/grey.svg";
// Картинки

// Стили
import univercityTablesStyles from './UnivercityTables.module.css';
// Стили

function UnivercityTables() {
  return (
    <>
      <table className={univercityTablesStyles.table}>
        <thead>
          <tr>
            <th>
              <span>
                <img src={blackHeart} alt="Сердце" />
              </span>
            </th>
            <th>
              <span>
                <img src={top} alt="Сердце" />
              </span>
            </th>
            <th>
              <span>
                <img src={flag} alt="Сердце" />
              </span>
            </th>
            <th>
              <span>Название</span>
            </th>
            <th>
              <span>Город</span>
            </th>
            <th>
              <span>Бакалавр</span>
            </th>
            <th>
              <span>Магистр</span>
            </th>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>52</td>
            <td>1</td>
            <td>Сеульский национальный университет</td>
            <td>Сеул</td>
            <td>6,775 USD</td>
            <td>4,303 USD</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>114</td>
            <td>2</td>
            <td>Корейский ведущий научно-технический интитут</td>
            <td>Тэджон</td>
            <td>7,000 USD</td>
            <td>27,000 USD</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>147</td>
            <td>3</td>
            <td>Университет Корё</td>
            <td>Сеул</td>
            <td>11,220 USD</td>
            <td>11,000 USD</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>148</td>
            <td>4</td>
            <td>Университет Ёнсе</td>
            <td>Сеул</td>
            <td>8,236 USD</td>
            <td>12,068 USD</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>159</td>
            <td>5</td>
            <td>Университет Сангюнван</td>
            <td>Сувон</td>
            <td>12,900 USD</td>
            <td>14,820 USD</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>194</td>
            <td>6</td>
            <td>Пхоханский университет науки и технологий</td>
            <td>Пхохан</td>
            <td>10,890 USD</td>
            <td>10,819 USD</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>245</td>
            <td>7</td>
            <td>Университет Ханянг</td>
            <td>Сеул</td>
            <td>11,252 USD</td>
            <td>12,584 USD</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>288</td>
            <td>8</td>
            <td>Университет Кён-хи</td>
            <td>Сеул</td>
            <td>7,579 USD</td>
            <td>{}</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>369</td>
            <td>9</td>
            <td>Женский университет Ихва</td>
            <td>Сеул</td>
            <td>{}</td>
            <td>{}</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>429</td>
            <td>10</td>
            <td>Пусанский национальный университет</td>
            <td>Янсан</td>
            <td>{}</td>
            <td>{}</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>489</td>
            <td>11</td>
            <td>Sogang University</td>
            <td>Сеул</td>
            <td>7,000 USD</td>
            <td>7,000 USD</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>525</td>
            <td>12</td>
            <td>Chung-Ang University</td>
            <td>Сеул</td>
            <td>11,322 USD</td>
            <td>11,322 USD</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>534</td>
            <td>13</td>
            <td>Корейский католический университет</td>
            <td>Сеул</td>
            <td>{}</td>
            <td>{}</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>549</td>
            <td>14</td>
            <td>Hankuk University of Foreign Studies</td>
            <td>Сеул</td>
            <td>12,366 USD</td>
            <td>12,366 USD</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>567</td>
            <td>15</td>
            <td>Dongguk University</td>
            <td>Сеул</td>
            <td>7,111 USD</td>
            <td>11,050 USD</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>568</td>
            <td>16</td>
            <td>Национальный университет Кёнбук</td>
            <td>Санджу</td>
            <td>4,118 USD</td>
            <td>5,129 USD</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>581</td>
            <td>17</td>
            <td>Chonbuk National University</td>
            <td>Чонджу</td>
            <td>{}</td>
            <td>{}</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>602</td>
            <td>18</td>
            <td>Inha University</td>
            <td>Инчхон</td>
            <td>7,000 USD</td>
            <td>9,000 USD</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>679</td>
            <td>19</td>
            <td>University of Seoul</td>
            <td>Сеул</td>
            <td>3,000 USD</td>
            <td>{}</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>683</td>
            <td>20</td>
            <td>Ajou University</td>
            <td>Сувон</td>
            <td>8,665 USD</td>
            <td>6,754 USD</td>
          </tr>
        </thead>
      </table>
      <table className={univercityTablesStyles.table}>
        <thead>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>21</td>
            <td>Chungam National University</td>
            <td>Тэджон</td>
            <td>3,000 USD</td>
            <td>{}</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>22</td>
            <td>Chungam National University</td>
            <td>Кванджу</td>
            <td>3,000 USD</td>
            <td>5,000 USD</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>23</td>
            <td>Universiti of Ulsan</td>
            <td>Ульсан</td>
            <td>7,000 USD</td>
            <td>{}</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>24</td>
            <td>Dankook University</td>
            <td>Чхонан</td>
            <td>{}</td>
            <td>{}</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>25</td>
            <td>Halym University</td>
            <td>Чхунчхон</td>
            <td>7,000 USD</td>
            <td>2,500 USD</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>26</td>
            <td>Konkun University</td>
            <td>Сеул</td>
            <td>{}</td>
            <td>{}</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>27</td>
            <td>Yeungnam University</td>
            <td>Тэгу</td>
            <td>{}</td>
            <td>{}</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>28</td>
            <td>Korea National Open University</td>
            <td>Сеул</td>
            <td>{}</td>
            <td>{}</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>29</td>
            <td>Korea Polytechnic Univerity</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
          </tr>
          <tr>
            <td>
              <img src={greyHeart} alt="Сердце" />
            </td>
            <td>30</td>
            <td>Keimyung University</td>
            <td>Тэгу</td>
            <td>5,000 USD</td>
            <td>5,000 USD</td>
          </tr>
        </thead>
      </table>
    </>
  );
}

export default UnivercityTables;