import { useState, useEffect } from "react";
import styled from "styled-components";
import SplashScreen from "../components/SplashScreen";
import terms, { Term } from "../terms";
import { useNavigate, useParams } from "react-router-dom";

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
    .description {
        width: 80%;
        margin: 0 auto;
    }
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
        max-height: 10rem;
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
    const navigate = useNavigate();
    const [openSplashScreen, setOpenSplashScreen] = useState<boolean>(true);
    const [openDescriptionCard, setOpenDescriptionCard] = useState<boolean>(false);

    const [randomTermList, setRandomTermList] = useState<Term[]>([]);
    const [currentListIndex, setCurrentListIndex] = useState<number>(0);
    const [currentList, setCurrentList] = useState<Term>({
        category: 'CS',
        term: '',
        description: ''
    });
    const makeRandomList = (list:Term[]) => { // TODO: 만약 list 개수가 엄청크다면 어떻게 할거야? 고민이 필요해
        const randomList = list;
        //피셔 예이츠 셔플 알고리즘으로 랜덤만들기
        for(let i = list.length; i > 0; i--) {
            const lastIdx = i-1;
            let roll = Math.floor(Math.random()*i);
            let temp = randomList[lastIdx];
            randomList[lastIdx] = randomList[roll];
            randomList[roll] = temp;
        }
        return randomList;
    }
    useEffect(() => {
        setTimeout(() => { setOpenSplashScreen(false); }, 3000);
        const newRandomList = makeRandomList(terms);
        setRandomTermList(newRandomList);
        navigate('/1');
        setCurrentListIndex(1);
        setCurrentList(newRandomList[0]);
    },[])
    const params = useParams();
    const onClickPrev = () => {
        const firstIndex = Number(params.randomListIndex);
        const lastIndex = randomTermList.length;
        if (firstIndex === 1) {
            //TODO 음.. 더이상 뒤로가기 아닐떈 어떻게 할지 고민이 필요함
            navigate(-1);
            setCurrentList(randomTermList[lastIndex - 1]);
            setCurrentListIndex(lastIndex);
            setOpenDescriptionCard(false);
            return false;
        }
        navigate(-1);
        setCurrentList(randomTermList[firstIndex - 2]);
        setCurrentListIndex(firstIndex);
        setOpenDescriptionCard(false);
    }
    const onClickRandomNext = () => {
        if (currentListIndex === randomTermList.length) {
            navigate('/1');
            setCurrentListIndex(1);
            setCurrentList(randomTermList[0]);
            setOpenDescriptionCard(false);
            return false;
        }
            navigate(`/${currentListIndex + 1}`);
            setCurrentList(randomTermList[currentListIndex]);
            setCurrentListIndex(currentListIndex + 1);
            setOpenDescriptionCard(false);
    }
    return (
        <>
            <HomeWrapper className={openDescriptionCard ? "opened-description-card" : ""}>
                {currentListIndex > 0 ? (
                    <>
                        <KeywordCard className={openDescriptionCard ? "opened-description-card" : ""} onClick={() => {setOpenDescriptionCard(false);}}>
                            {currentList.term}
                        </KeywordCard>
                        <DescriptionCard className={openDescriptionCard ? "opened-description-card" : ""}>
                            <button id="description-toggle-button" onClick={() => {setOpenDescriptionCard(true);}}>#한마디보기</button>
                            <h2 style={{display: "none"}}>키워드 설명</h2>
                            <p className="description">{currentList.description}</p>
                            {currentList.more ? (
                                <details className="detail-description">
                                    <summary>더보기</summary>
                                    자세한 설명
                                </details>
                                ) : <div className="detail-description" />}

                            {currentList.link ? (
                                <LinkInfoWrapper>
                                    <h2 style={{fontWeight: "normal", fontSize: "1.125rem", margin: "0.5rem"}}>참고링크</h2>
                                    {currentList.link?.map((link) => {
                                        return <LinkButton href={link[1]} key={link[0]} target="_blank">{link[0]}</LinkButton>
                                    })}
                                </LinkInfoWrapper>
                                ) : ''}
                            
                        </DescriptionCard>
                        <MainButton id="back-button" onClick={() => {onClickPrev();}} ><img className="icon" src={`${process.env.PUBLIC_URL}/img/icon/Arrow.svg`} alt="back-button-icon" /></MainButton>
                        <MainButton id="random-button" onClick={() => {onClickRandomNext();}} ><img className="icon" src={`${process.env.PUBLIC_URL}/img/icon/Random.svg`} alt="random-button-icon" /></MainButton>
                    </>
                ) : (
                    <>
                        <KeywordCard className={openDescriptionCard ? "opened-description-card" : ""}>
                            잘못된 경로!
                        </KeywordCard>
                        <MainButton id="back-button" onClick={() => {onClickPrev();}} ><img className="icon" src={`${process.env.PUBLIC_URL}/img/icon/Arrow.svg`} alt="back-button-icon" /></MainButton>
                        <MainButton id="random-button" onClick={() => {onClickRandomNext();}} ><img className="icon" src={`${process.env.PUBLIC_URL}/img/icon/Random.svg`} alt="random-button-icon" /></MainButton>
                    </>
                )}
                
            </HomeWrapper>
            {openSplashScreen && <SplashScreen />}
        </>
    );
}

export default Home;