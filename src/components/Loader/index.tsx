import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/reducers/rootReducers";
import {Spinner} from "react-bootstrap";
import {Wrapper} from "./styles";

const Index: React.FC = () => {
    const { loading } = useSelector((state: RootState) => state.tasks)

    if(!loading) return <React.Fragment />

    return (
        <Wrapper>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Wrapper>
    );
};

export default Index;
