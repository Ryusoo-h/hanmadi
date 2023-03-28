import { useEffect, useState } from "react";
import styled from "styled-components"

const SplashScreenSection = styled.section `
    width: 100vw;
    height: 100vh;
    background-color:#fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -52%);
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
        animation-duration: 0.7s;
    }
    @keyframes zoomout {
        from {
            opacity: 0;
            transform: scale(0);
        }
        30% {
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
        height: 1ex;
        animation: fadeIn 0.6s;
        & > span.point-blue {
            font-size: 2.5rem;
        }
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        50% {
            opacity: 1;
            transform: scale(1);
        }
        85% {
            transform: scale(1.8);
        }
        to {
            transform: scale(1);
        }
    }

`;

const SplashScreen = () => {
    const [pointOfTitle, setPointOfTitle] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const typingText = async (setState:(newState:string)=>void, text:string, delayTime:number = 0) => {
        // 문자를 받아서
        // 한글자씩 출력
            let i = 1 - delayTime;
            const typingTextInterval = setInterval(() => {
                if (i > 0) {
                    setState(text.slice(0, i));
                    if (i > text.length) {
                        clearInterval(typingTextInterval);
                    }
                }
                i++;
            }, 100);
    };

    useEffect(() => {
        typingText(setPointOfTitle, '한마디', 8);
        typingText(setTitle, '로_설명하기', 11);
    },[])
    return (
        <SplashScreenSection>
            <div className="wrapper">
                <img id="splash-thumb" src={`${process.env.PUBLIC_URL}/img/thumb.svg`} alt="thumb" />
                <h1 id="splash-title"><span className="point-blue">#{pointOfTitle}</span>{title}</h1>
            </div>
        </SplashScreenSection>
    )
}

export default SplashScreen;