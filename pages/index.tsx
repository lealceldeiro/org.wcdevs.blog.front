import type { NextPage } from 'next';
import {
    IntroductionSection,
    Details1Section,
    Details2Section,
    Details3Section,
    DetailsLightboxSection,
    DownloadSection,
    FeaturesSection,
    PricingSection,
    StadisticsSection,
    TestimonialsSection,
} from '../components/sections';

const Home: NextPage = () => {
    return (
        <>
            <IntroductionSection />
            <FeaturesSection />
            {/* <Details1Section />
            <Details2Section />
            <DetailsLightboxSection />
            <Details3Section />
            <StadisticsSection />
            <TestimonialsSection />
            <PricingSection /> */}
            {/* <DownloadSection /> */}
        </>
    )
}

export default Home
