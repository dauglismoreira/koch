import styled from 'styled-components';
import { EmailInput } from "../emailInput";
import { PhoneInput } from "../phoneInputMask";
import { SelectInput } from "../selectInput";
import { Col, Row } from '../grid';
import { IoDocumentAttachOutline } from "react-icons/io5";
import { OpenSans } from '@/app/fonts';


interface FormInput {
    placeholder: string;
    name: string;
    type: string;
    options?: { label: string; value: string }[];
}

export interface LocalFormData {
    [key: string]: string | File | null;
}

interface InputProps {
    leftInputs: FormInput[];
    rightInputs?: FormInput[];
    formData: any;
    color: string;
    singleColumn?: boolean;
    setFormData: (data: any) => void;
    dataForm?:any;
}

export const InputGenerate: React.FC<InputProps> = ({ dataForm, leftInputs, singleColumn, rightInputs, formData, color, setFormData }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (type === 'file') {
            const fileInput = e.target as HTMLInputElement;
            const file = fileInput.files && fileInput.files[0];

            if (file) {
                setFormData({ ...formData, [name]: file });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    return (
        <InputGenerateContainer>
            <Row className="break" gap="20px">
                <Col flex={5} padding="15px 0px">
                    <Form color={color}>
                        {leftInputs.map((input, index) => input?.name && (
                            <div key={index}>
                                {renderInput(input, formData[input.name], handleChange, color)}
                            </div>
                        ))}
                    </Form>
                </Col>
                {!singleColumn &&
                    <Col flex={5} padding="15px 0px">
                        {rightInputs &&
                        <Form className="right" color={color}>
                            {rightInputs.map((input, index) => input?.name && (
                                <div key={index}>
                                    {renderInput(input, formData[input.name], handleChange, color)}
                                </div>
                            ))}
                        </Form>}
                    </Col>
                }
            </Row>
        </InputGenerateContainer>
    );
};

const InputGenerateContainer = styled.div`
    .break {
        @media(max-width:768px){
            flex-direction:column;
        }
    }
`;

const Form = styled.div<{color: string}>`
    display:flex;
    flex-direction:column;
    gap:20px;
    margin:30px 0 0;

    input::placeholder {
        color: ${props => props.color};
        text-transform:uppercase;
    }

    textarea::placeholder {
        color:  ${props => props.color};
        text-transform:uppercase;
    }

    @media(max-width:768px){
        margin:-10px 0 0;

        &.right {
            margin-top:-30px;
        }
    }
`;


const renderInput = (input: FormInput, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void, color: string) => {
    const { placeholder, name, type, options } = input;

    if (type === 'textarea') {
        return (
            <Textarea
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                rows={8}
                color={color}
                className={`${OpenSans.className}`}
            />
        );
    }

    if (type === 'phone') {
        return (
            <PhoneInput
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                color={color}
            />
        );
    }

    if (type === 'email') {
        return (
            <EmailInput
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                color={color}
            />
        );
    }

    if (type === 'select') {
        return (
            <SelectInput
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                options={options}
                color={color}
            />
        );
    }

    if (type === 'file') {
        return (
            <FileInputWrapper color={color}>
                <label htmlFor={name} className="file-label">
                    Clique aqui para enviar seu currículo <IoDocumentAttachOutline color="var(--text-primary)" size="1.2rem" />
                </label>
                <input
                    type="file"
                    id={name}
                    name={name}
                    onChange={onChange}
                    className="file-input"
                />
            </FileInputWrapper>
        );
    }

    return (
        <InputElement
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            color={color}
        />
    );
};

const InputElement = styled.input<{color: string}>`
    background-color:transparent;
    border:solid 1px ${props => props.color};
    width:100%;
    height:35px;
    color:${props => props.color};
    padding:0 10px;
    font-size:var(--labels-size);
    font-weight:var(--labels-weight);
`;

const Textarea = styled.textarea<{color: string}>`
    background-color:transparent;
    border:solid 1px ${props => props.color};
    width:100%;
    color:${props => props.color};
    padding:10px;
    font-size:var(--labels-size);
    font-weight:var(--labels-weight);
`;

const FileInputWrapper = styled.div<{color: string}>`
    position: relative;

    .file-label {
        background-color: transparent;
        padding: 10px;
        cursor: pointer;
        border: 1px solid ${props => props.color};
        display: flex;
        width:100%;
        color: ${props => props.color};
        align-items:center;
        flex-direction:row;
        justify-content:space-between;
        font-size:var(--labels-size);
        font-weight:var(--labels-weight);
        text-transform:uppercase;
    }

    .file-input {
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        cursor: pointer;
    }
`;