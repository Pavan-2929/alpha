import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/bmw";
import faq from "../assets/faq.png";
import { motion } from "framer-motion";

const FAQAccordion = () => {
    return (
        <>
            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="w-full">
                    <h2 className="text-4xl font-bold text-primary mb-6 text-center md:text-left">
                        FAQs
                    </h2>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <Accordion key={index} type="single" collapsible>
                                <AccordionItem
                                    value={faq.answer}
                                    className="border border-gray-300 rounded-lg mb-4 shadow-sm hover:shadow-lg transition-shadow duration-300"
                                >
                                    <AccordionTrigger className="p-4 flex justify-between items-center text-lg text-gray-700 font-medium rounded-lg cursor-pointer transition-colors duration-300">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="p-4 rounded-b-lg text-gray-700">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-end items-center">
                    <img
                        src={faq}
                        className="w-full h-auto max-w-[400px] rounded-lg shadow-lg"
                        alt="FAQ illustration"
                    />
                </div>
            </div>
        </>
    );
};

export default FAQAccordion;
