import React, { useContext } from "react";
import { FormContext } from "../Contexts/FormContext"

const SubmitInfo = () => {
  const {result, personData,handlePrevClick } = useContext(FormContext);
 
  const Result = () => {
     return (
        <p className="sent-text">Your application has been succesfully sent. We will contact you soon. Thank you for your trust! </p>
     )
  }
  return (
    <div className="container-submit">
      <div className="submit-info">
        <div className="submit-content">
          <div>
            <p> A-number</p>
            <h6>{personData.number}</h6>
            <hr />
          </div>
          <div>
            <p> Имя </p>
            <h6>{personData.firstName}</h6>
            <hr />
          </div>
          <div>
            <p> Фамилия</p>
            <h6>{personData.lastName}</h6>
            <hr />
          </div>
          <div>
            <p> Дата рождения</p>
            <h6>{personData.dateBirth}</h6>
            <hr />
          </div>
          <div>
            <p>Пол</p>
            <h6>{personData.gender}</h6>
            <hr />
          </div>
          <div>
            <p> Страна рождения</p>
            <h6>{personData.place}</h6>
            <hr />
          </div>
          <div>
            <p>Гражданство</p>
            <h6>{personData.nationality}</h6>
            <hr />
          </div>
          <div>
            <p>Телефон</p>
            <h6>{personData.phone}</h6>
            <hr />
          </div>
          <div>
            <p> Email</p>
            <h6>{personData.email}</h6>
            <hr />
          </div>
          <div>
            <p>Адрес Проживания</p>
            <h6>{personData.address}</h6>
            <hr />
          </div>
          <div>

            <p>Подвергались ли Вы или ваша семья угрозам или вреду?</p>
            <h6>{personData.radio}</h6>
            <hr />
          </div>
          <div>
            <p>Кто Вам угрожал или причинил вред? </p>
            <h6>{personData.threat}</h6>
            <hr />
          </div>
          <div>
            <p>Что произошло?  (опишите все инциденты угроз, притеснений, и причинений вреда)</p>
            <h6>{personData.reason}</h6>
            <hr />
          </div>
          <div>
            <p>Когда произошли эти инциденты вреда (примерные даты)?  </p>
            <h6>{personData.when}</h6>
            <hr />
          </div>
          <div>
            <p>Из-за чего вам угрожали и/или причинили вред? (выберите все подходящие вам варианты и объясните ниже) </p>
            <h6>{personData.why},{personData.another},{personData.extra}</h6>
            <hr />
          </div>
          <div>
            <p>Что будет с Вами если вы вернетесь в свою страну? </p>
            <h6>{personData.harm}</h6>
            <hr />
          </div>
          <div>
            <p>Что еще вы хотите сообщить адвокату?  </p>
            <h6>{personData.else}</h6>
            <hr />
          </div>
        </div>
        <div className="btns-submit">
        {result ? <Result/> : null}   
          <button onClick={handlePrevClick} className="btn3-prev">Prev</button>
          <button type="submit" value="sendForm" className="btn-submit"> Submit </button>
        </div>
      </div>
    </div>
  )
}

export default SubmitInfo