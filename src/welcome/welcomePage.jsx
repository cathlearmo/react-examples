import { Banner } from '../banners/banner.jsx';

export const WelcomePage = () => {
    const textOne = "Welcome to my react demo web site.";
    const textTwo = "Click on a link in the menu to get started.";
    return <>
        <Banner text1={textOne} text2={textTwo}/>
        {/*<button type="button">{'Open Modal'}</button>*/}
    </>
}