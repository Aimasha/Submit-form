import React, { useContext } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormContext } from "../Contexts/FormContext"


const PersonInfo = () => {

  const { setPage,page,setValidated, validated, personData, setPersonData, handleClickNext } = useContext(FormContext)

  return (
    <div className="container">

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          A-number
        </InputGroup.Text>
        <Form.Control
          required
          type="text"
          name="number"
          value={personData.number}
          onChange={(e) => setPersonData({ ...personData, number: e.target.value })}
          aria-label="Large"
          aria-describedby="inputGroup-sizing-default"
        />

      </InputGroup>
      <InputGroup
        className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Имя
        </InputGroup.Text>
        <Form.Control
          required
          type="text"
          name="first_name"
          value={personData.firstName}
          onChange={(e) => setPersonData({ ...personData, firstName: e.target.value })}
          aria-label="Large"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Фамилия
        </InputGroup.Text>
        <Form.Control
          required
          type="text"
          name="last_name"
          value={personData.lastName}
          onChange={(e) => setPersonData({ ...personData, lastName: e.target.value })}
          aria-label="Large"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <div>
        <select name="gender" value={personData.gender} onChange={(e) => setPersonData({ ...personData, gender: e.target.value })} >
          <option value="gender">Пол</option>
          <option value="female">Женский</option>
          <option value="male">Мужской</option>
          <option value="other">Другой</option>
        </select>
      </div>


      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Дата рождения
        </InputGroup.Text>
        <Form.Control
          required
          name="date_birth"
          value={personData.dateBirth}
          onChange={(e) => setPersonData({ ...personData, dateBirth: e.target.value })}
          type="date" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Страна рождения
        </InputGroup.Text>
        <Form.Control
          required
          type="text"
          name="place_birth"
          value={personData.place}
          onChange={(e) => setPersonData({ ...personData, place: e.target.value })}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Гражданство
        </InputGroup.Text>
        <Form.Control
          required
          type="text"
          name="nation"
          value={personData.nationality}
          onChange={(e) => setPersonData({ ...personData, nationality: e.target.value })}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <div className="number-email">
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Телефон
          </InputGroup.Text>
          <Form.Control
            required
            type="number"
            name="phone"
            value={personData.phone}
            onChange={(e) => setPersonData({ ...personData, phone: e.target.value })}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Email
          </InputGroup.Text>
          <Form.Control
            required
            type="email"
            name="email"
            value={personData.email}
            onChange={(e) => setPersonData({ ...personData, email: e.target.value })}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />

        </InputGroup>

      </div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Адрес проживания
        </InputGroup.Text>
        <Form.Control
          required
          type="text"
          name="address"
          value={personData.address}
          onChange={(e) => setPersonData({ ...personData, address: e.target.value })}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <button
        disabled={!personData.address && handleClickNext}
        onClick={handleClickNext}
        className="btn-next">
        Next
      </button>

    </div>
  )
}

export default PersonInfo