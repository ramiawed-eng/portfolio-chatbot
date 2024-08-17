export default function Input({
  placeholder,
  label,
  id,
  type,
}: {
  placeholder: string;
  label?: string;
  id?: string;
  type: string;
}) {
  return (
    <div className="input-wrapper">
      {label && <label htmlFor={id}>{label}</label>}
      <input placeholder={placeholder} id={id} type={type} />
    </div>
  );
}
