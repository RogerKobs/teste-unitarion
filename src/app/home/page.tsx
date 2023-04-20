'use client';

import React, { useState } from 'react';

export default function Home() {
  const [list, setList] = useState(['Eduardo']);
  const [name, setName] = useState('');

  function createNewUser() {
    setList((list) => [...list, name]);
    setName('');
  }

  return (
    <div>
      <input
        data-testid='Nome'
        placeholder='Nome'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type='button' onClick={createNewUser}>
        Adiciona nova pessoa
      </button>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
