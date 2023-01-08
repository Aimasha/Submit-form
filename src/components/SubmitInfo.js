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
            <p>A number</p>
            <h6>{personData.number}</h6>
            <hr />
          </div>
          <div>
            <p>  First Name / Имя </p>
            <h6>{personData.firstName}</h6>
            <hr />
          </div>
          <div>
            <p>Last Name / Фамилия</p>
            <h6>{personData.lastName}</h6>
            <hr />
          </div>
          <div>
            <p>Date of Birth / Дата рождения</p>
            <h6>{personData.dateBirth}</h6>
            <hr />
          </div>
          <div>
            <p>Gender/Пол</p>
            <h6>{personData.gender}</h6>
            <hr />
          </div>
          <div>
            <p> Place of Birth / Место Рождения (город,страна)</p>
            <h6>{personData.place}</h6>
            <hr />
          </div>
          <div>
            <p> Nationality / Гражданство</p>
            <h6>{personData.nationality}</h6>
            <hr />
          </div>
          <div>
            <p>Phone / Телефон</p>
            <h6>{personData.phone}</h6>
            <hr />
          </div>
          <div>
            <p> Email</p>
            <h6>{personData.email}</h6>
            <hr />
          </div>
          <div>
            <p>Residence Address / Адрес Проживания</p>
            <h6>{personData.address}</h6>
            <hr />
          </div>
          <div>
            <p>Причиняли ли вам или вашей семьей вред, жестокое обращение, или угрозы в прошлом от кого-либо?</p>
            <h6>{personData.radio}</h6>
            <hr />
          </div>
          <div>
            <p> Кто Вам нанес вред, жестокое обращение или угрозы? </p>
            <h6>{personData.threat}</h6>
            <hr />
          </div>
          <div>
            <p>Что произошло?  (опишите все инциденты угроз, притеснений, и причинений вреда)</p>
            <h6>{personData.reason}</h6>
            <hr />
          </div>
          <div>
            <p>Когда вред, жестокое обращение или угрозы произошли? </p>
            <h6>{personData.when}</h6>
            <hr />
          </div>
          <div>
            <p>Почему вам причинили вред? (расовая или этническая нетерпимость, религиозная, из-за политических взглядов, из-за сексуальной ориентации, и других причин).</p>
            <h6>{personData.why}</h6>
            <hr />
          </div>
          <div>
            <p> Какого вреда или жестокого обращения вы опасаетесь если вы вернетесь в свою страну? </p>
            <h6>{personData.harm}</h6>
            <hr />
          </div>
        </div>
        <div className="btns-submit">
        {result ? <Result/> : null}   
          <button onClick={handlePrevClick} className="btn3-prev">Prev</button>
          <button type="submit" value="sendForm"className="btn-submit"> Submit </button>
        </div>
      </div>
    </div>
  )
}

export default SubmitInfo