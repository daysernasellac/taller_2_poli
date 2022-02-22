import { useState } from "react";
import { Form } from "react-bootstrap";

const useSelect = (initialState, options, label) => {
    const [state, setState] = useState(initialState);
    const handleChange = (e) => {
        e.preventDefault();

        const selectedValue = parseInt(e.target.value);

        if (!selectedValue) return;

        const itemSelected = options.find(
            (option) => option.value === selectedValue
        );

        if (!itemSelected) return;

        setState(itemSelected);
    };
    const select = () => (
        <Form.Group className="f-group">
            <Form.Label>{label}</Form.Label>
            <Form.Select value={state.value} onChange={(e) => handleChange(e)}>
                {options.map((option) => (
                    <option value={option.value} key={option.value}>
                        {option.label}
                    </option>
                ))}
            </Form.Select>
        </Form.Group>
    );
    return [state, select];
};

export default useSelect;
