import { useState } from "react";

export const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const bukaAccordion = () => {
    setIsOpen(true);
  };

  const tutupAccordion = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div onClick={bukaAccordion}> Ini adalah Title </div>
      {isOpen === true && (
        <>
          <div> Ini adalah Content</div>
          <button onClick={tutupAccordion}>Close</button>
        </>
      )}
    </div>
  );
};
