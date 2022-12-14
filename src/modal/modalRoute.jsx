import { Route } from "react-router-dom";
import { ModalContainer } from '../modal/modalContainer';

export const ModalRoute = ({element, path}) => {

    return (
        <Route path={path} element={element}>
            <ModalContainer />
        </Route>
    );
};
