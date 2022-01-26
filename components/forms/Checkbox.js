import { useField } from "formik";

const boxValue = {
  id: 'ID',
  user: 'User',
  fullName: 'String',
  email: 'String',
  position: 'Position',
  name: 'String',
  status: 'Boolean',
  score: 'Int'
}

const Checkbox = ({ placeholder, type, detail, addOnClasses, disabled, disableAutoCapitalize, onChange, value, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <div className={`w-full py-1 ${addOnClasses}`}>
        <div className="flex space-x-4">
            <input
                {...field}
                checked={value}
                placeholder={placeholder}
                type={type}
                className={`w-6 h-6 ${!!errorText && "border border-red-500"}`}
                autoCapitalize={disableAutoCapitalize ? "off" : "on"}
                onChange={onChange}
            /> 
            <label htmlFor={field.name} className="float-left text-blue-400 mb-1 w-full cursor-pointer font-semibold">
                {placeholder + ':'}
                <span className="ml-2 text-yellow-500">{boxValue[placeholder]}</span>
            </label>
        </div>
      
      {detail && <div className="pt-1 px-2 text-gray-500 text-sm font-semibold leading-4">&#10045; {detail}</div>}
      
    </div>
  );
};

export default Checkbox;