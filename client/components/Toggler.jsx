import React from 'react';
import { DarkModeToggler } from './StyledComponents/SideBar.js';
import { themeToggle } from '../redux/globalSlice';
import { useDispatch, useSelector } from 'react-redux';

const Toggler = (props) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.global.theme);
  return (
    <DarkModeToggler>
      <label>
        <input
          onChange={() => dispatch(themeToggle())}
          type="checkbox"
          checked={theme === 'light' ? true : false}
        />
        <span className="slider"></span>
      </label>
    </DarkModeToggler>
  );
};

export default Toggler;
