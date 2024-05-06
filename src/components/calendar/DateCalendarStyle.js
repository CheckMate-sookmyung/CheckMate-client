import Calendar from 'react-calendar';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 620px;
  height: 600px;
  background-color: white;
  align-items: center;
  border-radius: 8px;
  z-index: 1;
  box-shadow: 0px 0px 20px #e0e0e0;
`;

export const CalendarTitle = styled.div`
  display: flex;
  width: 620px;
  height: 60px;
  text-align: center;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(to right, #0a2c83, #1f5fa9);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const CloseWrapper = styled.div`
  display: flex;
  position: absolute;
  cursor: pointer;
  font-size: 25px;
  right: 15px;
`;

export const SelectedButton = styled.div`
  display: flex;
  width: 570px;
  height: 48px;
  color: white;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #0a2c83, #1f5fa9);
  cursor: pointer;
  border-radius: 4px;
`;

export const StyledCalendar = styled(Calendar)`
  .react-calendar {
    width: 300px;
    background: #ffff;
    border: 1px solid #eeeeee;
    line-height: 1.125em;
    border-radius: 10px;
    padding: 2em 0.5em;
  }

  .react-calendar--doubleView {
    width: 700px;
  }

  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }

  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }

  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .react-calendar button {
  }

  .react-calendar button:enabled:hover {
    cursor: pointer;
  }

  .react-calendar__navigation {
    display: flex;
    height: 60px;
    margin-bottom: 1em;
  }

  .react-calendar__navigation button {
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    font-weight: bold;
    text {
      text-decoration: none;
    }
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
    border-bottom: 1px solid gray;
  }

  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
    text-decoration: none;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
    padding: 2em 0.5em;
  }

  .react-calendar__month-view__days__day--neighboringMonth,
  .react-calendar__decade-view__years__year--neighboringDecade,
  .react-calendar__century-view__decades__decade--neighboringCentury {
    color: #757575;
    padding: 2em 0.5em;
    border: 1px solid black;
    display: none;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
    border: 1px solid black;
  }

  .react-calendar__tile {
    display: flex;
    background: none;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
    color: #ababab;
  }

  .react-calendar__month-view__days__day--neighboringMonth:disabled,
  .react-calendar__decade-view__years__year--neighboringDecade:disabled,
  .react-calendar__century-view__decades__decade--neighboringCentury:disabled {
    color: #cdcdcd;
  }

  .react-calendar__tile--active {
    background: #1f5fa9;
    color: white;
    border-radius: 70%;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
  }

  .react-calendar__tile--now {
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
  }

  .react-calendar__tile--hasActive {
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
  }

  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
`;
