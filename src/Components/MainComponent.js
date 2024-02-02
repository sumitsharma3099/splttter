import Header from "./Header";
import InputSection from "./InputSection"
import OutputSection from "./OutputSection"
import { useState, createContext, useContext } from "react";

export const InputsAndOutputs = createContext()

export const MainComponent = () => {
    const [inputOutputValues, setInputOutputValues] = useState({ billAmount: "", numberOfPeople: "", customTip: "", tipPercentage: 0, tipPerPerson: 0.00, totalPerPerson: 0.00, billInputError: false, customTipInputError: false, numberOfPeopleError: false, btnActive: "" });
    const value = { inputOutputValues, setInputOutputValues }
    return (
        <InputsAndOutputs.Provider value={value}>
            <div className="w-full relative bg-powderblue overflow-hidden flex flex-col items-center justify-start py-[135px] px-5 box-border gap-[85px] tracking-[normal] mq450:gap-[85px] mq750:gap-[85px]">
                <Header />
                <section className="w-[1172px] rounded-mini bg-white flex flex-row items-start justify-start pt-[84px] pb-[83px] pr-[65px] pl-[62px] box-border gap-[24px] max-w-full z-[1] lg:pl-[31px] lg:pr-8 lg:box-border mq750:pt-[55px] mq750:pb-[54px] mq750:box-border mq1050:flex-wrap">
                    <InputSection />
                    <OutputSection />
                </section>
                <div className="w-px h-[33px] absolute my-0 mx-[!important] bottom-[385px] left-[644px]" />
            </div>
        </InputsAndOutputs.Provider>
    );
};

