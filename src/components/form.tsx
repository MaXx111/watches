import { memo, useState } from "react"

interface FormProps {
    onSubmit: ( text: string, time: number) => void
}

const Form = memo(function Form({onSubmit}: FormProps) {

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSubmit(valueText, Number(valueTime))

        setValueText('');
        setValueTime('');
    };

    const [valueText, setValueText] = useState('');

    const textInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueText(e.target.value)
    };


    const [valueTime, setValueTime] = useState('');

    const timeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueTime(e.target.value)
    };

    return (
        <form className="form" onSubmit={submitHandler}>
            <label className="label">
                <p className="txt">Название</p>
                <input type="text" value={valueText} onChange={textInputHandler}/>
            </label>
            <label className="label">
                <p className="txt">Временная зона</p>
                <input type="text" value={valueTime} onChange={timeInputHandler}/>
            </label>
            <button className="form-button" type="submit">Добавить</button>
        </form>
    )
})

export default Form