import './GeneralPage.css'
import { Switch, Route, useHistory, Link } from 'react-router-dom'

export const GeneralPage = () => {
  return (
    <div>
      <div className="v1_2">
        <span className="v1_17">Общение в режиме реального времени</span>
        <span className="v1_18">Личный кабинет и учителя, и студента</span>
        <span className="v1_19">Интерактивные домашние задания</span>
        <span className="v1_20">Словарь</span>
        <span className="v1_21">Преимущества платформы</span>
        <div className="v1_25">
          <div className="v1_26">
            <div className="v1_27"></div>
          </div>
        </div>
        <div className="v1_28"></div>
        <div className="v1_31"></div>
        <div className="v1_34"></div>
        <div className="v1_281"></div>
        <div className="v1_282"></div>
        <span className="v1_296">Easy Teaching</span>
        <span className="v1_297">
          Бесплатная платформа для интерактивного онлайн-обучения
        </span>
        <div className="v1_298"
        onClick={(e) => {
          e.preventDefault()
          
            //  <Link to="/login"/>  
          
          window.location.href = 'http://localhost:3000/login'
        }}>
          <div className="v1_299"></div>
          <div
            className="v1_300"
            
          >
            <span className="v1_301">В мой кабинет</span>
          </div>
        </div>
        <div className="v1_302">
          {/* <div className="v1_303"></div> */}
          <span className="v1_305">Онлайн</span>
        </div>
        <div className="v1_306"></div>
        <span className="v1_308">Бесплатно</span>
        <div className="v1_309"> </div>

        {/* <div className="v1_310"> */}
        <span className="v1_312">Безлимитно</span>
        {/* </div> */}
        <div className="v1_313"></div>
        <div className="v1_314"></div>
        <div className="v1_315"></div>
        <div className="v1_326"></div>
        <div className="v1_518"></div>
        <div className="v11_45"></div>
        <div className="v341_2">
          <div
            className="v341_4"
            onClick={(e) => {
              e.preventDefault()
              ;<Link to="/signup" />
              // window.location.href='http://localhost:3000/signup';
            }}
          ></div>
          <span className="v341_5">Попробовать</span>
        </div>
      </div>{' '}
    </div>
  )
}
