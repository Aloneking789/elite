import { useDarkMode } from './DarkModeContext';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`${darkMode?" text-white":" text-black"}`}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
