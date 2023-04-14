import styled from "styled-components";

const ModalWrapper = styled.div`
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    background-color: var(--point-light-blue);
    box-shadow: rgb(41 51 126 / 25%) 0px 0px 14px;
    border-radius: 20px;
    padding: 1rem 1rem 2em;
    min-width: 260px;
    width: 50%;
    p {
        font-size: 18px;
        padding: 0.5rem 0;
    }
    div.flex {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        & .basic-button {
            padding: 4px 8px;
            font-size: 18px;
            border: none;
            border-radius: 12px;
            padding: 0.5rem 2rem;
            transition: 0.2s all cubic-bezier(0.215, 0.610, 0.355, 1.000);
        }
        #yes-button {
            background-color: var(--point-blue);
            color: #fff;
            &:hover {
                background-color: #396df3;
            }
        }
        #no-button {
            background-color: #bdbdbd;
            color: #fff;
            &:hover {
                background-color: #a7a7a7;
            }
        }
    }
`;

type yesOrNoModalType = {
    children:JSX.Element;
    onClickYes: () => void;
    onClickNo: () => void;
}

const YesOrNoModal = ({ children, onClickYes, onClickNo }:yesOrNoModalType) => {

    return (
        <ModalWrapper>
            <p>{children}</p>
            <div className="flex">
                <button id="yes-button" className="basic-button" onClick={onClickYes}>네</button>
                <button id="no-button" className="basic-button" onClick={onClickNo}>아니요</button>
            </div>
        </ModalWrapper>
    );
}

export default YesOrNoModal;