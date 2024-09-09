const steps = [
    { number: 1, text: 'Step 1 description' },
    { number: 2, text: 'Step 2 description' },
    { number: 3, text: 'Step 3 description' },
    { number: 4, text: 'Step 4 description' },
    { number: 5, text: 'Step 5 description' },
  ];
  
  const Process = () => {
    return (
      <div className="flex flex-col items-center bg-oakhill-green mt-14">
        <h2 className="text-2xl font-bold mb-4">Hur fungerar det?</h2>
        <div className="flex items-center">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 border border-gray-400 rounded-full text-center font-bold text-gray-800">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-10 border-t border-gray-400 mx-2" />
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="flex flex-col items-center mt-4">
          {steps.map(step => (
            <div key={step.number} className="text-center mt-2">
              <p className="font-semibold">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Process;