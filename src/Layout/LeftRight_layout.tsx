import * as React from "react";


interface IRegisterUser {
    Left?: JSX.Element;
    Right?: JSX.Element;
}


let RegisterUser: React.FC<IRegisterUser> = ({Left, Right}) => {
    return (
        <div>
            leftRight
        </div>
    );
};

export default RegisterUser
