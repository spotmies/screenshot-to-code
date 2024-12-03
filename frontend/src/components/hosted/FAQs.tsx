function FAQs() {
  const faqs = [
    {
      question: "How do credits work?",
      answer:
        "Each creation, whether from a screenshot or text, consumes 1 credit. Every additional edit also consumes 1 credit. If you run out of credits, you can easily upgrade your plan to obtain more.",
    },
    {
      question: "When do credits reset?",
      answer:
        "Your credits reset at the beginning of each month and do not roll over. Every month, on the 1st, you will receive a fresh batch of credits.",
    },
    {
      question: "Can I cancel my plan?",
      answer:
        "Yes, you can cancel your plan at any time. Your plan will remain active until the end of the billing cycle.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, you can change your plan at any time. When upgrading, changes take effect immediately. When downgrading, changes will take effect at the start of your next billing cycle.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, Alipay, Amazon Pay and Cash App Pay. Certain payment methods may not be available in your country.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "As we provide instant access to digital services and credits, we do not offer refunds. All purchases are final. Unused credits expire at the end of each calendar month.",
    },
    {
      question: "How is the service delivered?",
      answer:
        "Our service is delivered instantly through our web platform. Upon successful payment, credits are immediately added to your account and you can start using the service right away.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
