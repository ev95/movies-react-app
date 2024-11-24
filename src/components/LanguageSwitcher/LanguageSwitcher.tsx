import "./LanguageSwitcher.css";
export const LanguageSwitcher = () => {
  return (
    <div className="language-switcher">
      <select>
        <option value="en">EN</option>
        <option value="fr">RU</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
};
