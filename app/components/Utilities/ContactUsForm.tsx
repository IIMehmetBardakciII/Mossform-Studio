import HoverTextAnimation from "../Animations/HoverTextAnimation";

type ConstactUsFormProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};
const ContactUsForm = ({ isOpen, setIsOpen }: ConstactUsFormProps) => {
  return (
    <div className={`fixed z-250 right-0 top-0 h-dvh bg-black min-w-[582px] px-6 py-6 contaxt-clip-path ${isOpen?"open":""}`}>
      {/* Top */}
      <div className="flex items-start  justify-between">
        {/* Left */}
        <div className="flex flex-col gap-4">
          <img
            src="/images/contact-us-photo.webp"
            alt="contact us form nature photo"
            className="max-w-[400px] max-h-[200px] object-cover"
          />
          <div className="flex flex-col gap-2">
            <h4 className="text-white display-base">We are waiting for you</h4>
            <p className="body-s text-gray max-w-[400px]">
              At Mossform Studio, we create calm, modern spaces inspired by
              nature. Whether you have a project in mind or just want to say
              hello, we’d love to hear from you.
            </p>
          </div>
        </div>
        {/* Right close button */}
        <button
          className="text-white display-base cursor-pointer textBigContainer"
          onClick={() => setIsOpen(false)}
        >
          <HoverTextAnimation text="Close" />
        </button>
      </div>

      {/* Bottom Form */}
      <div className=" mt-10 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
            <span className="text-white display-s">Name</span>
            <input type="text" placeholder="Your full name" className="md:w-[420px] body-s placeholder:text-gray px-3 py-2.5 bg-white text-black rounded-xs"  />
        </div>
        <div className="flex flex-col gap-2">
            <span className="text-white display-s">Email Address</span>
            <input type="text" placeholder="Your full name" className="md:w-[420px] body-s placeholder:text-gray px-3 py-2.5 bg-white text-black rounded-xs"  />
        </div>
        <div className="flex flex-col gap-2">
            <span className="text-white display-s">Name</span>
            <input type="text" placeholder="Your full name" className="md:w-[420px] body-s placeholder:text-gray px-3 py-2.5 bg-white text-black rounded-xs"  />
        </div>
      </div>

      {/* Info & Send Btn */}
      <div className="flex w-full justify-between textBigContainer">
        <span className="text-gray text-[12px]">(This form just for showcase it's not usable)</span>
        <button className="display-s text-black bg-linegray rounded-full px-4 py-3 cursor-pointer"><HoverTextAnimation text="Send" /></button>
      </div>
    </div>
  );
};

export default ContactUsForm;
