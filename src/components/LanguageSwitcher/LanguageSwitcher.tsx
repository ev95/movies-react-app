import { ChangeEvent } from "react";
import { useAppDispatch } from "../../store/hooks";
import { changeLanguage } from "../../store/slices/globalSlice";
import "./LanguageSwitcher.css";
export const LanguageSwitcher = () => {
  const dispatch = useAppDispatch();

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value, "-----");
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="language-switcher">
      <select onChange={handleChange}>
        <option value="en-US">EN</option>
        <option value="ru-RU">RU</option>
        <option value="es-ES">ES</option>
      </select>
    </div>
  );
};
