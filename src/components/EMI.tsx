import { RangeSlider } from "@/components/ui/slider";
import { useState } from "react";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";

const EMI = () => {
    const [loanAmount, setLoanAmount] = useState(100000);
    const [downPayment, setDownPayment] = useState(26520);
    const [duration, setDuration] = useState(66);
    const [monthlySalary, setMonthlySalary] = useState(50000); // Default monthly salary
    const interestRate = 7.5;

    const {toast} = useToast()

    const calculateEMI = (
        principal: number,
        rate: number,
        tenure: number
    ): number => {
        const monthlyRate = rate / 12 / 100;
        return Math.round(
            (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
            (Math.pow(1 + monthlyRate, tenure) - 1)
        );
    };

    const emi = calculateEMI(loanAmount - downPayment, interestRate, duration);

    const checkEligibility = (): string => {
        if (emi > monthlySalary * 0.5) {
            return "You are not eligible as EMI exceeds 50% of your monthly salary.";
        }
        return "Congratulations! You are eligible for the loan.";
    };

    const handleCheckEligibility = () => {
        toast({
            description: checkEligibility()
        })

    };

    return (
        <div className="py-6 max-w-lg mx-auto">
            <h2 className="text-xl font-bold text-primary mb-6">EMI Calculator</h2>

            <div className="mb-10">
                <p className="flex justify-between ">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Loan Amount
                    </label>
                    <span className="text-sm text-primary font-semibold">
                        ₹{loanAmount.toLocaleString()}
                    </span>
                </p>
                <RangeSlider
                    defaultValue={[loanAmount]}
                    max={1326000}
                    step={1000}
                    onValueChange={(value) => setLoanAmount(value[0])}
                    className="text-purple-800"
                />
                <div className="flex justify-between text-xs font-semibold text-gray-500 mt-2">
                    <span>₹1,00,000</span>
                    <span>₹13,26,000</span>
                </div>
            </div>

            <div className="mb-10">
                <p className="flex justify-between">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Down Payment
                    </label>
                    <span className="text-sm text-primary font-bold">
                        ₹{downPayment.toLocaleString()}
                    </span>
                </p>
                <RangeSlider
                    defaultValue={[downPayment]}
                    max={loanAmount}
                    step={100}
                    onValueChange={(value) => setDownPayment(value[0])}
                    className="text-purple-800"
                />
                <div className="flex justify-between text-xs font-semibold text-gray-500 mt-2">
                    <span>₹0</span>
                    <span>₹{loanAmount.toLocaleString()}</span>
                </div>
            </div>

            <div className="mb-10">
                <p className="flex justify-between">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Duration of Loan
                    </label>
                    <span className="text-sm text-primary font-bold">
                        {duration} Months
                    </span>
                </p>

                <RangeSlider
                    defaultValue={[duration]}
                    max={84}
                    step={6}
                    onValueChange={(value) => setDuration(value[0])}
                    className="text-purple-800"
                />
                <div className="flex justify-between text-xs font-semibold text-gray-500 mt-2">
                    <span>12 Months</span>
                    <span>84 Months</span>
                </div>
            </div>

            <div className="mb-10 flex bg-gray-100 p-4 rounded-lg items-center justify-between space-x-4">
                <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Salary
                    </label>
                    <Input
                        type="number"
                        value={monthlySalary}
                        onChange={(e) => setMonthlySalary(Number(e.target.value))}
                        className="font-bold rounded-lg w-full p-2"
                    />
                </div>

                <div className="w-1/2  text-center">
                    <p className="text-lg font-bold text-green-600">
                        ₹{emi.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">EMI per month</p>
                </div>
            </div>

            <button
                className="bg-primary w-full py-2 px-4 rounded-lg font-medium text-white"
                onClick={handleCheckEligibility}
            >
                Check Eligibility
            </button>

            <p className="text-xs text-gray-500 mt-4 text-center">
                *Rate of interest can vary subject to credit profile. Loan approval is
                at the sole discretion of the finance partner. **Processing fees and
                other loan charges are not included.
            </p>
        </div>
    );
};

export default EMI;
