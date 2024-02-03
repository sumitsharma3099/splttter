import VectorImageUrl from "../images/Vector.png"
import DollerSignImgUrl from "../images/$sign.png"
import { useContext } from 'react';
import { InputsAndOutputs } from "../Components/MainComponent"

const InputSection = () => {
    const { inputOutputValues, setInputOutputValues } = useContext(InputsAndOutputs);

    const handleBillAmountInputChange = (e) => {
        let newValue = e.target.value
        if (newValue == "") {
            setInputOutputValues(prevState => ({
                ...prevState,
                billAmount: ""
            }));
        } else {
            if (/^\d*\.?\d*$/.test(newValue) || newValue === '') {
                setInputOutputValues(prevState => ({
                    ...prevState,
                    billAmount: newValue
                }));
            }
        }
    };

    const handleNumberOfPeopleInputChange = (e) => {
        let newValue = e.target.value
        if ((newValue == "") || (newValue == " ")) {
            setInputOutputValues(prevState => ({
                ...prevState,
                numberOfPeople: ""
            }));
        } else {
            if (!isNaN(newValue) && typeof newValue === 'string') {
                setInputOutputValues(prevState => ({
                    ...prevState,
                    numberOfPeople: parseInt(newValue)
                }));
            }
        }
    };

    const handleCustomTipInputChange = (e) => {
        setInputOutputValues(prevState => ({
            ...prevState,
            btnActive: "",
        }));
        let newValue = e.target.value
        if ((newValue == "") || (newValue == " ")) {
            setInputOutputValues(prevState => ({
                ...prevState,
                customTip: "",
                customTipInputError: false
            }));
        } else {
            if (!isNaN(newValue) && typeof newValue === 'string') {
                setInputOutputValues(prevState => ({
                    ...prevState,
                    customTip: parseInt(newValue),
                    customTipInputError: false
                }));
            }
        }
    };

    const customInputOnKeyPressEnter = (e) => {
        let customTipValue = parseInt(e.target.value)
        if (e.key === 'Enter' && (customTipValue > 0) && (!isNaN(customTipValue))) {
            setInputOutputValues(prevState => ({
                ...prevState,
                tipPercentage: customTipValue
            }));
            calculateTipAndTotalAmount(customTipValue);
        } else {
            if (e.key === 'Enter') {
                setInputOutputValues(prevState => ({
                    ...prevState,
                    customTipInputError: true
                }));
            }
        }
    }
    const calculateTipAndTotalAmount = (tipPercentage) => {
        setInputOutputValues(prevState => ({
            ...prevState,
            tipPercentage: tipPercentage,
            btnActive: tipPercentage
        }));
        let billAmount = parseFloat(inputOutputValues.billAmount);
        let numberOfPersons = parseInt(inputOutputValues.numberOfPeople);

        if ((numberOfPersons > 0) && (billAmount > 0)) {
            let tipPerPerson = calculateTotalTipPerPerson(billAmount, numberOfPersons, tipPercentage)
            setInputOutputValues(prevState => ({
                ...prevState,
                tipPerPerson: tipPerPerson
            }));
            let totalPerPerson = calculateTotalAmountPerPerson(billAmount, numberOfPersons, tipPercentage)
            setInputOutputValues(prevState => ({
                ...prevState,
                totalPerPerson: totalPerPerson,
                numberOfPeopleError: false,
                billInputError: false
            }));
        } else {
            if ((numberOfPersons <= 0) || isNaN(numberOfPersons)) {
                setInputOutputValues(prevState => ({
                    ...prevState,
                    numberOfPeopleError: true
                }));
            } else {
                setInputOutputValues(prevState => ({
                    ...prevState,
                    numberOfPeopleError: false
                }));
            }
            if ((billAmount <= 0) || isNaN(billAmount)) {
                setInputOutputValues(prevState => ({
                    ...prevState,
                    billInputError: true
                }));
            } else {
                setInputOutputValues(prevState => ({
                    ...prevState,
                    billInputError: false
                }));
            }
        }
    }

    const calculateTotalTipPerPerson = (billAmount, numberOfPersons, tipPercentage) => {
        console.log(tipPercentage)
        const totalTip = (billAmount * tipPercentage) / 100;
        const tipPerPerson = totalTip / numberOfPersons;
        return tipPerPerson;
    };

    const calculateTotalAmountPerPerson = (billAmount, numberOfPersons, tipPercentage) => {
        const totalAmount = billAmount + (billAmount * tipPercentage) / 100;
        const amountPerPerson = totalAmount / numberOfPersons;
        return amountPerPerson;
    };

    return (
        <>
            <div className="h-[657px] w-[1170px] relative rounded-mini bg-white hidden max-w-full" />
            <div className="flex-1 flex flex-col items-start justify-start pt-0 pb-2.5 pr-[45px] pl-[7px] box-border relative gap-[35px] min-w-[331px] max-w-full z-[1] text-left text-xl text-gray-100 font-ibm-plex-mono mq750:gap-[35px] mq750:pr-[22px] mq750:box-border mq1050:flex-1">
                <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0.1px] bottom-[0px] left-[-0.1px] bg-gray-200" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
                    <div className="h-[23px] relative leading-[30px] font-medium inline-block shrink-0 z-[1] mq450:text-base mq450:leading-[24px]">
                        Bill
                    </div>
                    <div className="relative leading-[24px] font-semibold text-rosybrown z-[1] mq450:text-base mq450:leading-[24px]">
                        {inputOutputValues.billInputError ? "Can,t be zero Or Blank" : ""}
                    </div>
                    <div className="relative flex items-center self-stretch">
                        <input
                            type="text"
                            className={"bg-[#e8e8e8] self-stretch font-ibm-plex-mono font-semibold text-3xl text-darkslategray-300 gap-[20px] max-w-full h-12 rounded-lg focus:outline-none text-right pr-[2.75rem] " + (!inputOutputValues.billInputError ? "border-[2px] border-solid border-lightseagreen-100" : "border-[2px] border-solid border-red-500")}
                            placeholder="0"
                            name="handleBillAmountInputChange"
                            id="handleBillAmountInputChange"
                            value={inputOutputValues.billAmount}
                            onChange={(e) => handleBillAmountInputChange(e)}
                        />
                        <div className="absolute inset-y-0 left-0 pl-[2rem] flex items-center pointer-events-none">
                            <img
                                src={DollerSignImgUrl}
                                alt="Icon"
                                className="h-4 w-3 text-gray-500"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-start justify-start pt-0 pb-[15px] pr-px pl-0">
                    <div className="relative leading-[23px] font-semibold z-[1] mq450:text-base mq450:leading-[24px]">
                        Select Tip %
                    </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-1 box-border min-h-[141px] max-w-full text-right text-5xl text-darkslategray-300">
                    <div className="w-[450px] flex flex-row flex-wrap items-start justify-center gap-[22px_21px] min-h-[126px] max-w-full z-[1]">
                        <button className={`cursor-pointer border-none pt-[17px] pb-4 pr-14 pl-[52px] rounded-3xs flex items-center justify-center hover:bg-teal ${inputOutputValues.btnActive === 5 ? "bg-paleturquoise-200" : "bg-darkslategray-300"}`} onClick={() => calculateTipAndTotalAmount(5)}>
                            <div className={`h-[52px] w-[134.9px] relative rounded-3xs hidden ${inputOutputValues.btnActive === 5 ? "bg-paleturquoise-200" : "bg-darkslategray-300"}`} />
                            <div className={`relative text-5xl leading-[20px] font-semibold font-ibm-plex-mono text-left z-[1] mq450:text-lgi mq450:leading-[16px] ${inputOutputValues.btnActive === 5 ? "text-darkslategray-300" : "text-white"}`}>
                                5%
                            </div>
                        </button>
                        <button className={`cursor-pointer border-none pt-[17px] pb-4 pr-14 pl-[52px] rounded-3xs flex items-center justify-center hover:bg-teal ${inputOutputValues.btnActive === 10 ? "bg-paleturquoise-200" : "bg-darkslategray-300"}`} onClick={() => calculateTipAndTotalAmount(10)}>
                            <div className={`h-[52px] w-[134.9px] relative rounded-3xs hidden ${inputOutputValues.btnActive === 10 ? "bg-paleturquoise-200" : "bg-darkslategray-300"}`} />
                            <div className={`relative text-5xl leading-[20px] font-semibold font-ibm-plex-mono text-left z-[1] mq450:text-lgi mq450:leading-[16px] ${inputOutputValues.btnActive === 10 ? "text-darkslategray-300" : "text-white"}`}>
                                10%
                            </div>
                        </button>
                        <button className={`cursor-pointer border-none pt-[17px] pb-4 pr-14 pl-[52px] rounded-3xs flex items-center justify-center hover:bg-teal ${inputOutputValues.btnActive === 15 ? "bg-paleturquoise-200" : "bg-darkslategray-300"}`} onClick={() => calculateTipAndTotalAmount(15)}>
                            <div className={`h-[52px] w-[134.9px] relative rounded-3xs hidden ${inputOutputValues.btnActive === 15 ? "bg-paleturquoise-200" : "bg-darkslategray-300"}`} />
                            <div className={`relative text-5xl leading-[20px] font-semibold font-ibm-plex-mono text-left z-[1] mq450:text-lgi mq450:leading-[16px] ${inputOutputValues.btnActive === 15 ? "text-darkslategray-300" : "text-white"}`}>
                                15%
                            </div>
                        </button>
                        <button className={`cursor-pointer border-none pt-[17px] pb-4 pr-14 pl-[52px] rounded-3xs flex items-center justify-center hover:bg-teal ${inputOutputValues.btnActive === 25 ? "bg-paleturquoise-200" : "bg-darkslategray-300"}`} onClick={() => calculateTipAndTotalAmount(25)}>
                            <div className={`h-[52px] w-[134.9px] relative rounded-3xs hidden ${inputOutputValues.btnActive === 25 ? "bg-paleturquoise-200" : "bg-darkslategray-300"}`} />
                            <div className={`relative text-5xl leading-[20px] font-semibold font-ibm-plex-mono text-left z-[1] mq450:text-lgi mq450:leading-[16px] ${inputOutputValues.btnActive === 25 ? "text-darkslategray-300" : "text-white"}`}>
                                25%
                            </div>
                        </button>
                        <button className={`cursor-pointer border-none pt-[17px] pb-4 pr-14 pl-[52px] rounded-3xs flex items-center justify-center hover:bg-teal ${inputOutputValues.btnActive === 50 ? "bg-paleturquoise-200" : "bg-darkslategray-300"}`} onClick={() => calculateTipAndTotalAmount(50)}>
                            <div className={`h-[52px] w-[134.9px] relative rounded-3xs hidden ${inputOutputValues.btnActive === 50 ? "bg-paleturquoise-200" : "bg-darkslategray-300"}`} />
                            <div className={`relative text-5xl leading-[20px] font-semibold font-ibm-plex-mono text-left z-[1] mq450:text-lgi mq450:leading-[16px] ${inputOutputValues.btnActive === 50 ? "text-darkslategray-300" : "text-white"}`}>
                                50%
                            </div>
                        </button>
                        <div className="w-[135px] rounded-3xs bg-aliceblue box-border flex flex-row items-center justify-end">
                            <input
                                type="text"
                                className={"bg-[#e8e8e8] font-ibm-plex-mono font-semibold text-3xl text-darkslategray-300 gap-[20px] max-w-full h-12 rounded-lg focus:outline-none text-center w-50 " + (!inputOutputValues.customTipInputError ? "border-[2px] border-solid border-lightseagreen-100" : "border-[2px] border-solid border-red-500")}
                                placeholder="Custom"
                                value={inputOutputValues.customTip}
                                onChange={(e) => handleCustomTipInputChange(e)}
                                onKeyDown={(e) => customInputOnKeyPressEnter(e)}
                                id="handleNumberOfPeopleInputChange"
                                name="handleNumberOfPeopleInputChange"
                            />
                        </div>
                    </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1 pl-[3px] box-border max-w-full">
                        <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap">
                            <div className="relative leading-[23px] font-semibold z-[1] mq450:text-base mq450:leading-[24px]">
                                Number of People
                            </div>
                            <div className="relative leading-[24px] font-semibold text-rosybrown z-[1] mq450:text-base mq450:leading-[24px]">
                                {inputOutputValues.numberOfPeopleError ? "Can,t be zero Or Blank" : ""}
                            </div>
                        </div>
                    </div>
                    <div className="relative flex items-center self-stretch">
                        <input
                            type="text"
                            className={"bg-[#e8e8e8] self-stretch font-ibm-plex-mono font-semibold text-3xl text-darkslategray-300 gap-[20px] max-w-full h-12 rounded-lg focus:outline-none text-right pr-[2.75rem] " +
                                (!inputOutputValues.numberOfPeopleError ? "border-[2px] border-solid border-lightseagreen-100" : "border-[2px] border-solid border-red-500")}
                            placeholder="0"
                            value={inputOutputValues.numberOfPeople}
                            onChange={(e) => handleNumberOfPeopleInputChange(e)}
                            id="handleNumberOfPeopleInputChange"
                            name="handleNumberOfPeopleInputChange"
                        />
                        <div className="absolute inset-y-0 left-0 pl-[2rem] flex items-center pointer-events-none">
                            <img
                                src={VectorImageUrl}
                                alt="Icon"
                                className="h-4 w-3 text-gray-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InputSection;
