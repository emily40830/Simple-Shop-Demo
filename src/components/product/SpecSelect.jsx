import { Select, Space } from "antd";
// import { useState } from "react";

const SpecSelect = ({ value, specs, onSelect, className }) => {
  // const [selectSpec, setSpecSelect] = useState("S");
  const options = specs.map((spec) => ({
    value: spec.size,
    label: spec.size,
  }));

  const handleChange = (value) => {
    // setSpecSelect(value);
    onSelect && onSelect(value);
  };

  // console.log("spec", selectSpec);

  return (
    <div className={`mb-3 ${className}`}>
      <Space wrap>
        <Select
          className="w-120"
          value={value}
          onChange={handleChange}
          options={options}
        />
      </Space>
    </div>
  );
};

export default SpecSelect;
