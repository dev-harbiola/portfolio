import React from "react";

type FieldProps = {
  id: string;
  label: string;
  placeholder: string;
  name?: string;
  children?: React.ReactNode;
  required?: boolean;
};

const TextArea = React.forwardRef<HTMLTextAreaElement, FieldProps>(
  (props, ref) => {
    const { label, ...rest } = props;
    return (
      <div className="flex w-full">
        <label htmlFor={props.id} className="relative w-full group">
          <textarea
            {...rest}
            ref={ref}
            className="text-area py-3 px-5 w-full flex bg-transparent transition duration-200 border rounded-lg border-zinc-200 focus:border-emerald-500 focus:text-zinc-200 border-opacity-50 outline-none"
          >
            {props.children}
          </textarea>
          <span className="absolute input-text -top-3 left-5 bg-zinc-900 px-1 transition duration-200">
            {props.label}
          </span>
        </label>
      </div>
    );
  }
);

export default TextArea;
