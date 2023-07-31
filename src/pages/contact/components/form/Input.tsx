import React from "react";

type FieldProps = {
  id: string;
  label: string;
  placeholder: string;
  name?: string;
  type?: string;
  children?: React.ReactNode;
  required?: boolean;
};

const TextField = React.forwardRef<HTMLInputElement, FieldProps>(
  (props, ref) => {
    const { label, ...rest } = props;
    return (
      <div className="w-full bg-blend-normal">
        <label
          htmlFor={props.id}
          className="relative w-full group bg-blend-normal"
        >
          <input
            {...rest}
            ref={ref}
            className="py-3 px-5 w-full flex bg-transparent transition duration-200 border rounded-lg border-zinc-200 focus:border-emerald-500 bg-none focus:text-zinc-200 border-opacity-50 outline-none"
          />
          <span className="absolute input-text -top-3 left-5 bg-zinc-900 transition duration-200">
            {props.label}
          </span>
        </label>
      </div>
    );
  }
);

export default TextField;
