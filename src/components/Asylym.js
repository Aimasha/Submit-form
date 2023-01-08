import React, { useContext } from "react";
import { FormContext } from "../Contexts/FormContext"

const Asylym = () => {
    const { personData, setPersonData, handleClickNext, handlePrevClick } = useContext(FormContext)

    return (

        <div className="service-container">

            <h4 className="asylym-title">Убежище:</h4>
            <ol>
                <li>Причиняли ли вам или вашей семьей вред, жестокое обращение, или угрозы в прошлом от кого-либо?</li>

                <div onChange={(e) => setPersonData({ ...personData, radio: e.target.value })}>
                    <div className="radio1">
                        <input
                            value="Да"
                            name="yes_no"
                            type="radio"
                        />
                        Да
                    </div>
                    <div className="radio">
                        <input
                            value="Нет"
                            name="Нет"
                            type="radio"
                        />
                        Нет
                    </div>
                </div>
                <li>Кто Вам нанес вред, жестокое обращение или угрозы? </li>

                <textarea name="threat" value={personData.threat} onChange={(e) => setPersonData({ ...personData, threat: e.target.value })} id="story"
                    rows="1" cols="70">
                </textarea>

                <li>Что произошло?  (опишите все инциденты угроз, притеснений, и причинений вреда)</li>

                <textarea value={personData.reason} onChange={(e) => setPersonData({ ...personData, reason: e.target.value })} id="story" name="reason"
                    rows="8" cols="70">
                </textarea>

                <li>Когда вред, жестокое обращение или угрозы произошли? </li>

                <textarea value={personData.when} onChange={(e) => setPersonData({ ...personData, when: e.target.value })} id="story" name="when"
                    rows="1" cols="70">
                </textarea>

                <li>Почему вам причинили вред? (расовая или этническая нетерпимость, религиозная, из-за политических взглядов, из-за сексуальной ориентации, и других причин).</li>

                <textarea value={personData.why} onChange={(e) => setPersonData({ ...personData, why: e.target.value })} id="story" name="why"
                    rows="1" cols="70">
                </textarea>

                <li>Какого вреда или жестокого обращения вы опасаетесь если вы вернетесь в свою страну? </li>

                <textarea value={personData.harm} onChange={(e) => setPersonData({ ...personData, harm: e.target.value })} id="story" name="harm"
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
                    disabled={!personData.radio}
                    onClick={handleClickNext}
                    className="btn2-next">
                    Next
                </button>

            </div>

        </div>

    )
}

export default Asylym;