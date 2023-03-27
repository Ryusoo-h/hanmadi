import { useState } from "react";
import styled from "styled-components";
import SplashScreen from "../components/SplashScreen";

const HomeWrapper = styled.main`
`;

const Home = () => {
    const [openSplashScreen, setOpenSplashScreen] = useState<boolean>(true);
    setTimeout(() => {
        setOpenSplashScreen(false);
    }, 3000);

    return (
        <>
            <HomeWrapper>
                <div className="container">

                </div>
            </HomeWrapper>
            {openSplashScreen && <SplashScreen />}
        </>
    );
}

export default Home;