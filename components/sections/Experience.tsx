import Customtext from "../ui/CustomText";
import BgCard from "../ui/bg-Card";

const Experience = () => {
    return (
        <section className="md:w-2/3 w-full mt-10">
            <Customtext heading={true}>Experience</Customtext>
            <Customtext subHeading={true}>
                Companies I have worked with
            </Customtext>

            <div className="mt-7 flex flex-col  gap-10 ">
                <BgCard
                    className=" w-full flex flex-col gap-2 hover:border-gray-200  "
                    delay={0.1}
                >
                    <div className="flex justify-between">
                        <Customtext heading={true}>
                            React Native App Developer
                        </Customtext>
                        <Customtext>February 25 - September 25</Customtext>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Customtext bold={true}>Droppins</Customtext>
                        <Customtext>
                            • Developed 30+ cross platform screens using React
                            Native, ensuring 100% pixel-perfect to the Figma
                            design.
                        </Customtext>
                        <Customtext>
                            • Architected a Redux Toolkit store spanning 7
                            feature slices (products, categories, promotions,
                            restaurants) with persisted state via redux-persist
                            and AsyncStorage, eliminating redundant refetches
                            across app relaunches.
                        </Customtext>
                        <Customtext>
                            • Integrated 3 third-party SDKs — Firebase Auth,
                            Firebase App Check, and Google Maps — into a single
                            Expo Router-based navigation flow spanning 4 route
                            groups (auth, tabs, screens, index).
                        </Customtext>
                    </div>
                </BgCard>
            </div>
        </section>
    );
};

export default Experience;
