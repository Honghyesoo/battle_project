import React, { useState } from "react";
import "./JoinForm.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { join } from "../../redux/store";

const JoinForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 생년월일
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const [name, setName] = useState("");
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear; i >= 1900; i--) {
      years.push(i);
    }
    return years;
  };

  // 생년월일
  const generateMonthOptions = () => {
    return Array.from({ length: 12 }, (v, k) => k + 1);
  };

  const generateDayOptions = (year, month) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    return Array.from({ length: daysInMonth }, (v, k) => k + 1);
  };

  const years = generateYearOptions();
  const months = generateMonthOptions();
  const days = year && month ? generateDayOptions(year, month) : [];

  const joinHandler = (e) => {
    e.preventDefault();
    const birthday = `${year}-${month}-${day}`;
    const payload = { name, userid, password, birthday };
    if (!name || !userid || !password || !year || !month || !day) {
      alert("양식을 확인해주세요");
      return;
    }
    dispatch(join(payload)).then((result) => {
      if (result.type === "join/fulfilled") {
        alert("회원가입 되었습니다.");
        navigate("/login");
      }
    });
  };

  return (
    <div className="loginimg">
      <form className="loginForm" onSubmit={joinHandler}>
        <input
          type="text"
          name="name"
          placeholder="이름"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="userid"
          placeholder="ID"
          onChange={(e) => setUserid(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="PASSWORD"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* 생년 월일 */}
        <div className="dropDay">
          <div>
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="">연도 선택</option>
              {years.map((yr) => (
                <option key={yr} value={yr}>
                  {yr}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              disabled={!year}
            >
              <option value="">월 선택</option>
              {months.map((mn) => (
                <option key={mn} value={mn}>
                  {mn}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              value={day}
              onChange={(e) => setDay(e.target.value)}
              disabled={!year || !month}
            >
              <option value="">일 선택</option>
              {days.map((dy) => (
                <option key={dy} value={dy}>
                  {dy}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button className="w-btn w-btn-indigo" type="submit">
          Join
        </button>
      </form>
    </div>
  );
};

export default JoinForm;
