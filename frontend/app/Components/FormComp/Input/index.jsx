
export default function FormInput({ labelHtmlFor, label}) {
    return (
      <div>
        <label className="text-Azul/800 text-14px font-bold" htmlFor={labelHtmlFor}>
          {label}
        </label>
      </div>
    );
  }