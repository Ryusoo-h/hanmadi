import { useState, useEffect } from "react";
import styled from "styled-components";
import SplashScreen from "../components/SplashScreen";

const HomeWrapper = styled.main`
    width: 100%;
    padding-top: 100vh;
    background-color: #fff;
    transition: all 0.4s cubic-bezier(0.215, 0.610, 0.355, 1.000);
    &.opened-description-card {
        background-color: var(--point-light-blue);
    }
`;
const KeywordCard = styled.h1`
    margin: 0;
    padding: 36px;
    width: 100%;
    font-size: 2.5rem;
    font-weight: normal;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    &.opened-description-card {
        transition: all 0.4s cubic-bezier(0.215, 0.610, 0.355, 1.000);
        color: var(--point-blue);
        top: 0;
        transform: translate(-50%, 0);
    }
`;
const DescriptionCard = styled.section`
    --padding: 20px;
    --font-size: 1.125rem;
    width: 100%;
    background-color: var(--point-blue);
    color: #fff;
    overflow: hidden;
    border-radius: 40px 40px 0 0;
    min-height: 100vh;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, calc(100% - (var(--padding)*2 + var(--font-size))));
    #description-toggle-button {
        width: 60%;
        font-size: var(--font-size);
        padding: var(--padding);
        border: none;
        background: unset;
        color: #fff;
        &:hover {
            transition: all 0.4s cubic-bezier(0.215, 0.610, 0.355, 1.000);
            font-size: 1.2em;
        }
    }
    &.opened-description-card {
        transition: all 0.4s cubic-bezier(0.215, 0.610, 0.355, 1.000);
        background-color: #fff;
        color: #000;
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
        bottom: unset;
        top: 122px;
        transform: translate(-50%, 0);
        #description-toggle-button {
            pointer-events: none;
            user-select:none;
            -webkit-user-select:none;
            -moz-user-select:none;
            -ms-user-select:none;
            padding: calc(var(--padding)/2);
        }
    }
    .detail-description {
        margin: 1rem auto;
        border-top: solid 1px #ddd;
        width: 80%;
        height: 14rem;
        overflow-Y: auto;
        color: #333;
        &::-webkit-scrollbar {
            width: 10px; /*스크롤바의 너비*/
        }
        &::-webkit-scrollbar-thumb {
            /*스크롤바*/
            background-color: #ddd;
            border-radius: 5px;
        }
        &::-webkit-scrollbar-track {
            /* 스크롤바 트랙*/
            background-color: #f2f2f2;
        }
        summary {
            padding: 0.5rem;
            color: var(--point-blue);
        }
    }
`;
const MainButton = styled.button`
    background-color: unset;
    border:none;
    width: 40px;
    height: 40px;
    padding: 0;
    margin: 0;
    position: fixed;
    bottom: 0.5rem;
    left: 0.75rem;
    z-index: 999;
    cursor: pointer;

    img {
        transition: all 0.3s cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }
    &#back-button:hover img {
        transform: translateX(-4px);
    }
    &#random-button {
        left: unset;
        right: 0.75rem;
        &:hover img {
            transform: translateX(4px);
        }
    }
`;

const LinkInfoWrapper = styled.div`
    margin: 2rem 0;
`;

const LinkButton = styled.a`
    display: block;
    padding: 0.625rem;
    margin: 0.25rem auto;
    border: solid 1px #C0D2FF;
    border-radius: 20px;
    width: calc(100% - 160px);
    color: #3C62C3;
    text-decoration: none;
    background-color: var(--point-light-blue);
    transition: background-color 0.2s ease-in-out;
    &:hover {
        background-color: #E9EFFF;
    }
`;

const Home = () => {
    const [openSplashScreen, setOpenSplashScreen] = useState<boolean>(true);
    const [openDescriptionCard, setOpenDescriptionCard] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => { setOpenSplashScreen(false); }, 3000);
    },[])

    return (
        <>
            <HomeWrapper className={openDescriptionCard ? "opened-description-card" : ""}>
                <KeywordCard className={openDescriptionCard ? "opened-description-card" : ""} onClick={() => {setOpenDescriptionCard(false);}}>
                    키워드
                </KeywordCard>
                <DescriptionCard className={openDescriptionCard ? "opened-description-card" : ""}>
                    <button id="description-toggle-button" onClick={() => {setOpenDescriptionCard(true);}}>#한마디보기</button>
                    <h2 style={{display: "none"}}>키워드 설명</h2>
                    <p className="description">키워드 한문장으로 설명</p>
                    <details className="detail-description">
                        <summary>더보기</summary>
                        자세한 설명
                    </details>
                    <LinkInfoWrapper>
                        <h2 style={{fontWeight: "normal", fontSize: "1.125rem", margin: "0.5rem"}}>참고링크</h2>
                        <LinkButton href="http://naver.com" target="_blank">참고링크입니다</LinkButton>
                        <LinkButton href="" target="_blank">참고링크는 최대 두개까지만</LinkButton>
                    </LinkInfoWrapper>
                </DescriptionCard>
                <MainButton id="back-button" ><img className="icon" src={`${process.env.PUBLIC_URL}/img/icon/Arrow.svg`} alt="back-button-icon" /></MainButton>
                <MainButton id="random-button" ><img className="icon" src={`${process.env.PUBLIC_URL}/img/icon/Random.svg`} alt="random-button-icon" /></MainButton>
            </HomeWrapper>
            {openSplashScreen && <SplashScreen />}
        </>
    );
}

export default Home;