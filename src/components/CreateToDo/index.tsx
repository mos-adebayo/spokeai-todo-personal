import React, { useState } from 'react';
import { Form, InputGroup, FormControl} from 'react-bootstrap';
import {FormWrapper} from "./styles";

type Props = {};
type TaskType = {
    isChecked: boolean,
    description: string,
    isDirty: boolean
}

const  CreateToDo: React.FC<Props>  = () => {
    const [titlePlaceholder, setTitlePlaceholder] = useState('Add new task . . .');
    const [isStarted, setIsStarted] = useState(false);
    const [title, setTitle] = useState('');
    const [items, setItems] = useState<TaskType[]>([{
        isChecked: false,
        description: '',
        isDirty: false
    }]);

    const handleChange = (e: any, item: TaskType, index: number) => {
        const newItems = [...items]
        newItems[index] = {
            ...items[index],
            description: e.target.value,
            isDirty: true
        }

        if(!item.isDirty){
            newItems.push({
                isChecked: false,
                description: '',
                isDirty: false
            });
        }

        setItems(newItems);
    };

    const handleTitleChange = (e: any) => {
        setTitle(e.target.value);
        if(!isStarted){
            setIsStarted(true);
        }
    };

    const handleTitleFocus = (isFocus: boolean) => {
        if(isStarted){
            return;
        }

        setTitlePlaceholder(isFocus ? 'Title': 'Add new task . . .')
    };

    return (
        <FormWrapper>
            <Form>
                <Form.Control className="mb-2" value={title} type="text"
                              placeholder={titlePlaceholder} onFocus={() => handleTitleFocus(true)}
                              onBlur={() => handleTitleFocus(false)} onChange={handleTitleChange}/>
                {isStarted && items.map((item, index) => <InputGroup className="mb-1" key={index}>
                    <InputGroup.Checkbox checked={item.isChecked} />
                    <FormControl value={item.description} placeholder="Add Task"  onChange={(e) => handleChange(e, item, index)}/>
                </InputGroup>)}
            </Form>
        </FormWrapper>
    );
};

export default CreateToDo;
