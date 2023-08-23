export default function FormInput({ labelHtmlFor, label, inputType, inputId, value, placeholder, onChange }) {
    return (
      <div className="mb-2">
        <label className="text-Azul/800 text-14px font-bold" htmlFor={labelHtmlFor}>
          {label}
        </label>
        <input
          type={inputType}
          id={inputId}
          placeholder={placeholder}
          className="w-full h-12 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mt-2 text-lg placeholder-Grises/350"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }