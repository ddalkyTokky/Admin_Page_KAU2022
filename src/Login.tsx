import React, { useState } from 'react';
import Dronia from "./Dronia.png";
import axios from 'axios'
import './Login.css';
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { URL } from './constants/CONSTANTS';

function Login() {
  const [inputState, setInputState] = useState({
    id_field: "",
    pw_field: ""
  });

  const [cookies, setCookie, removeCookie] = useCookies(['id']);
  const navigate = useNavigate();

  const handleChangeState = (e: { target: { name: any; value: any; }; }) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        URL, inputState
      )

      if (response?.status != 200) {
        alert(response?.status + "Connection Error.");
      }
      else {
        if (response?.data.message == 'fail') {
          alert("Wrong ID or PW!!");
        }
        if (response?.data.message == 'success') {
          setCookie("id", response?.data.token);
          navigate("/dashboard");
        }
      }
    }
    catch (error) {
      alert("Connection Lost.");
    }
  };

  //removeCookie('id');

  return (
    <>
      <div className="login_form">
        <img className="Dronia_logo" alt="Empty image" src={Dronia} />

        <p>관리자 페이지</p>

        <form>
          <p>ID:
            <input
              type="text"
              name="id_field"
              className="text_field"
              placeholder="ID"
              value={inputState.id_field}
              onChange={handleChangeState}>
            </input></p>

          <p>PW:
            <input
              type="text"
              name="pw_field"
              className="text_field"
              placeholder="PW"
              value={inputState.pw_field}
              onChange={handleChangeState}>
            </input></p>

          <button onClick={handleSubmit}>로그인</button>
        </form>
      </div>
    </>
  );
}

export default Login;