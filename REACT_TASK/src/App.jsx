import React from 'react';
import Counter from './React_Q1_counter/counter';
import ToDo from './React_Q2_ToDo/todo';
import Toggle from './React_Q3_Toggle/toggleText'
import CharCount from './React_Q4_CharCount/CharacterCount'
import LiveSearch from './React_Q5_LiveSearch/LiveSearch';
import APIFetch from './React_Q6_APIFetch/userAPI';
import Form from './React_Q7_Form/form';
import Accordion from './React_Q8_Accordion/Accordion';
import Theme from './React_Q9_ThemeToggle/theme';
import Timer from './React_Q10_Timer/timer';

function App() {
  return (
    <div>
      <Counter />
      <ToDo />
      <Toggle />
      <CharCount />
      <LiveSearch />
      <APIFetch />
      <Form />
      <Accordion />
      <Theme />
      <Timer />
    </div>
  );
}

export default App;
