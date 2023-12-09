
import Competence from "../Components/Competence/Competence";
import Contact from "../Components/Contact/Contact";
import LeftDivider from "../Components/Divider/LeftDivider";
import LeftDivider2 from "../Components/Divider/LeftDivider2";
import LeftDivider3 from "../Components/Divider/LeftDivider3";
import RightDivider from "../Components/Divider/RightDivider";
import RightDivider2 from "../Components/Divider/RightDivider2";
import Experience from "../Components/Experience/Experience";
import Formation from "../Components/Formation";
import Langues from "../Components/Langues";
import Presentation from "../Components/Presentation/Presentation";

const Home = () => {
    return (
        <div>
            <Presentation></Presentation>
            <LeftDivider></LeftDivider>
            <Contact></Contact>
            <RightDivider></RightDivider>
            <Competence></Competence>
            <LeftDivider2></LeftDivider2>
            <Formation></Formation>
            <RightDivider2></RightDivider2>
            <Experience></Experience>
            <LeftDivider3></LeftDivider3>
            <Langues></Langues>
        </div>
        
    );
};

export default Home;