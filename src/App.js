import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonInfo from './components/PersonInfo';
import SubmitInfo from "./components/SubmitInfo";
import NavBar from "./components/NavBar";
import Asylym from "./components/Asylym";
import { FormContext } from "./Contexts/FormContext"
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';

function App() {
  const [personData, setPersonData] = useState({
    number: "",
    firstName: "",
    lastName: "",
    gender: "",
    place: "",
    dateBirth: "",
    nationality: "",
    phone: "",
    address: "",
    email: "",
    radio: "",
    threat: "",
    reason: "",
    harm: "",
    why: "",
    when: "",
    else: "",
    extra: "",
    another: ""
  });
  const [form, setForm] = useState({});
  const [result, setResult] = useState(false);
  const [validated, setValidated] = useState(false);
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState("Семейная иммиграция");
  const [title] = useState({
    formTitles: {
      info: "Личная информация",
      service: "Убежище",
      submitInfo: "Отправка формы"
    }
  });

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonInfo />
    } else if (page === 1) {
      return <Asylym />
    } else {
      return <SubmitInfo />
    }
  }

  const handleClickNext = (e) => {
    e.preventDefault();
      setPage(page + 1);
  }

  const handlePrevClick = () => {
    setPage(function (currPage) {
      if (currPage > 0) {
        return (currPage - 1)
      } else {
        return (currPage = 0)
      }
    })
  }

  const sendEmail = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setResult(true);
    }, 1000)


    emailjs.send("service_34e5zrk", "template_ak85ekk", personData, "D0SVtaJwSKyD9NsWj")
      .then(response => {
        console.log("Success", response);
        setPersonData({
          number: "",
          firstName: "",
          lastName: "",
          place: "",
          dateBirth: "",
          nationality: "",
          phone: "",
          gender: "",
          address: "",
          email: "",
          radio: "",
          threat: "",
          reason: "",
          harm: "",
          why: "",
          when: "",
          else: "",
          extra: "",
          another: ""
        })
      }, error => {
        console.log("Failed", error);
      })
  };
  

  console.log("validated",validated)
  return (
    <>
      <NavBar page={page} title={title.formTitles} />
      <div className="App">
        <Form onSubmit={sendEmail} className="wrapper">
          <FormContext.Provider value={{ result, setResult, personData, setPersonData, selected, setSelected, handlePrevClick, handleClickNext, page, title }}>
            {PageDisplay()}
          </FormContext.Provider>
        </Form>
      </div>
    </>
  );
}

export default App;