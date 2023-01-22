import React, { useContext } from "react";
import { FormContext } from "../Contexts/FormContext"

const Asylym = () => {
    const { personData, setPersonData, handleClickNext, handlePrevClick } = useContext(FormContext)

    return (

        <div className="service-container">

            <h4 className="asylym-title">Убежище:</h4>
            <ol>
                <li>Подвергались ли Вы или ваша семья угрозам или вреду?</li>

                <div className="radio1">
                    <input
                        required
                        value="Да"
                        name="yesno"
                        type="radio"
                        onChange={(e) => setPersonData({ ...personData, radio: e.target.value })}
                    />
                    Да
                </div>
                <div className="radio">
                    <input
                        required
                        value="Нет"
                        name="yesno"
                        type="radio"
                        onChange={(e) => setPersonData({ ...personData, radio: e.target.value })}
                    />
                    Нет
                </div>

                <li>Кто Вам угрожал или причинил вред? </li>

                <textarea required name="threat" value={personData.threat} onChange={(e) => setPersonData({ ...personData, threat: e.target.value })} id="story"
                    rows="1" cols="70">
                </textarea>

                <li>Что произошло?  (опишите все инциденты угроз, притеснений, и причинений вреда)</li>

                <textarea required value={personData.reason} onChange={(e) => setPersonData({ ...personData, reason: e.target.value })} id="story" name="reason"
                    rows="8" cols="70">
                </textarea>

                <li>Когда произошли эти инциденты вреда (примерные даты)? </li>

                <textarea required value={personData.when} onChange={(e) => setPersonData({ ...personData, when: e.target.value })} id="story" name="when"
                    rows="1" cols="70">
                </textarea>

                <li>Из-за чего вам угрожали и/или причинили вред? (выберите все подходящие вам варианты и объясните ниже) </li>

                <div onChange={(e) => setPersonData({ ...personData, why: e.target.value })} className="rd">
                    <input
                        required
                        value="Расовая или этническая нетерпимость"
                        name="race"
                        type="radio"
                        onChange={(e) => setPersonData({ ...personData, why: e.target.value })}
                    />
                    <label > Расовая или этническая нетерпимость.</label>
                </div>

                <div onChange={(e) => setPersonData({ ...personData, another: e.target.value })} className="rd" >
                    <input
                        required
                        value="Религиозная нетерпимость"
                        name="religion"
                        type="radio"
                        onChange={(e) => setPersonData({ ...personData, why: e.target.value })}
                    />
                    <label > Религиозная нетерпимость. </label>
                </div>

                <div onChange={(e) => setPersonData({ ...personData, another: e.target.value })} className="rd" >
                    <input
                        required
                        value="Из-за политических убеждений"
                        name="political"
                        type="radio"
                        onChange={(e) => setPersonData({ ...personData, why: e.target.value })}
                    />
                    Из-за политических убеждений.
                </div>

                <div onChange={(e) => setPersonData({ ...personData, another: e.target.value })} className="rd" >
                    <input
                        required
                        value=" Сексуальная ориентация, Пол"
                        name="psg"
                        type="radio"
                        onChange={(e) => setPersonData({ ...personData, why: e.target.value })}
                    />
                    Сексуальная ориентация, Пол ,
                </div>

                <div className="rd" >
                    <input
                        required
                        value="Другое"
                        name="other"
                        type="radio"
                        onChange={(e) => setPersonData({ ...personData, another: e.target.value })}
                    />
                    Другое.
                </div>

                <textarea required value={personData.extra} onChange={(e) => setPersonData({ ...personData, extra: e.target.value })} id="story" name="why"
                    rows="3" cols="70">
                </textarea>

                <li>Что будет с Вами если вы вернетесь в свою страну? </li>

                <textarea required value={personData.harm} onChange={(e) => setPersonData({ ...personData, harm: e.target.value })} id="story" name="harm"
                    rows="3" cols="70">
                </textarea>

                <li>Что еще вы хотите сообщить адвокату? </li>

                <textarea required value={personData.else} onChange={(e) => setPersonData({ ...personData, else: e.target.value })} id="story" name="else"
                    rows="8" cols="70">
                </textarea>

            </ol>

            <div className="btns">
                <button
                    className="btn-prev"
                    onClick={handlePrevClick}
                >
                    Prev</button>
                <button
                    disabled={!personData.why && handleClickNext}
                    onClick={handleClickNext}
                    className="btn2-next">
                    Next
                </button>
            </div>

        </div>

    )
}

export default Asylym;