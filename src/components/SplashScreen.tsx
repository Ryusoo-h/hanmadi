import styled from "styled-components"

const SplashScreenSection = styled.section `
    width: 100vw;
    height: 100vh;
    background-color:#fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999999999;
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 1.875rem;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        animation-name: zoomout;
        animation-duration: 0.4s;
    }
    @keyframes zoomout {
        from {
            opacity: 0;
            transform: scale(0);
            animation-timing-function: cubic-bezier(0.000, 0.865, 0.740, 1.010);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    #splash-thumb {
        width: 176px;
        height: 176px;
    }
    #splash-title {
        margin: 0;
        padding: 0;
        font-size: 1.875rem;
        & > span {
            font-size: 1.25em;
        }
    }
`;

const SplashScreen = () => {

    return (
        <SplashScreenSection>
            <div className="wrapper">
                <img id="splash-thumb" src={`${process.env.PUBLIC_URL}/img/thumb.svg`} alt="thumb" />
                <h1 id="splash-title"><span className="point-blue">#한마디</span>로_설명하기</h1>
            </div>
        </SplashScreenSection>
    )
}

export default SplashScreen;