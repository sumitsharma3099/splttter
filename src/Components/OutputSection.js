import { useContext } from 'react';
import { InputsAndOutputs } from "../Components/MainComponent"

const OutputSection = () => {

    const { inputOutputValues, setInputOutputValues } = useContext(InputsAndOutputs);

    const resetApp = () => {
        setInputOutputValues({ billAmount: "", numberOfPeople: "", customTip: "", tipPercentage: 0, tipPerPerson: 0.00, totalPerPerson: 0.00, billInputError: false, customTipInputError: false, numberOfPeopleError: false, btnActive: "" })
    }

    return (
        <>
            <div className="flex-[0.8689] rounded-mini bg-darkslategray-300 flex flex-col items-center justify-start py-[62px] px-14 box-border gap-[134px] min-w-[331px] max-w-full z-[1] text-left text-xl text-white font-ibm-plex-mono mq450:gap-[134px] mq750:gap-[134px] mq750:py-10 mq750:px-7 mq750:box-border mq1050:flex-1">
                <div className="w-[509.6px] h-[490px] relative rounded-mini bg-darkslategray-300 hidden max-w-full" />
                <div className="self-stretch flex flex-row items-end justify-between py-0 pr-px pl-0 gap-[20px] mq450:flex-wrap">
                    <div className="w-[121px] flex flex-col items-start justify-start gap-[70px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                            <div className="relative leading-[30px] font-medium z-[1] mq450:text-base mq450:leading-[24px]">
                                Tip Amount
                            </div>
                            <div className="flex flex-row items-start justify-start py-0 px-1.5 text-base text-cadetblue">
                                <div className="relative leading-[19px] font-medium z-[1]">
                                    /Person
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[6px]">
                            <div className="relative leading-[30px] font-medium z-[1] mq450:text-base mq450:leading-[24px]">
                                Total
                            </div>
                            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1 text-base text-cadetblue">
                                <div className="relative leading-[19px] font-medium z-[1]">
                                    /Person
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[82px] text-13xl text-lightseagreen-200">
                        <b className="h-[43px] relative leading-[50px] inline-block shrink-0 whitespace-nowrap z-[1] mq450:text-lgi mq450:leading-[30px] mq1050:text-7xl mq1050:leading-[40px]">
                            <span>$</span>
                            <span className="text-21xl">{inputOutputValues.tipPerPerson.toFixed(2)}</span>
                        </b>
                        <b className="relative leading-[50px] whitespace-nowrap z-[1] mq450:text-lgi mq450:leading-[30px] mq1050:text-7xl mq1050:leading-[40px]">
                            <span>$</span>
                            <span className="text-21xl">{inputOutputValues.totalPerPerson.toFixed(2)}</span>
                        </b>
                    </div>
                </div>
                <button className="cursor-pointer [border:none] pt-[17px] pb-[18px] pr-[22px] pl-5 bg-paleturquoise-100 self-stretch rounded-3xs flex flex-row items-center justify-center box-border max-w-full z-[1] hover:bg-paleturquoise-300" onClick={() => resetApp()}>
                    <div className="h-[55px] w-[397px] relative rounded-3xs bg-paleturquoise-100 hidden max-w-full" />
                    <b className="relative text-5xl leading-[20px] uppercase font-ibm-plex-mono text-darkslategray-200 text-left z-[1] mq450:text-lgi mq450:leading-[16px]">
                        Reset
                    </b>
                </button>
            </div>
        </>
    );
};

export default OutputSection;
