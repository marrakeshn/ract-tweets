import background from '../../images/bgHome.gif';
import { HeroImage, HeroSlogan, HeroTitle, HomeContainer } from './homePage.styled';

const Home = () => {
  return (
    <HomeContainer>
      <HeroTitle>GoTweetIT</HeroTitle>
      <HeroSlogan>Read. Follow. Enjoy.</HeroSlogan>
      <HeroImage src={background} alt='main image' />
    </HomeContainer>
  );
};

export default Home;
