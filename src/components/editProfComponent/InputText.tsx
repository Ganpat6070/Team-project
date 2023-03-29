import React, {useState} from "react";

const InputText = (props: any) => {

  return (
    <div>
      <input
        type="text"
        value={props.value}
        id={props.id}
        // defaultValue={props.defaultValue}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputText;
