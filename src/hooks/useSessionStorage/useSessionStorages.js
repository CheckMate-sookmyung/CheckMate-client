import React from 'react';

const useSessionStorages = () => {
  const getSessionStorage = (key) => {
    return window.sessionStorage.getItem(key);
  };

  const setSessionStorage = (key, value) => {
    window.sessionStorage.setItem(key, value);
  };

  const clearSessionStorage = () => {
    window.sessionStorage.clear();
  };

  return {
    getSessionStorage,
    setSessionStorage,
    clearSessionStorage,
  };
};

export default useSessionStorages;
