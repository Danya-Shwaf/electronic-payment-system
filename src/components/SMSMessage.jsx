import { MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SMSMessage({ onClose }) {
  const { t, i18n } = useTranslation();
  console.log(t, i18n.language);
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }
  return (
    <div className="fixed inset-0 backdrop-blur-[2px] backdrop-grayscale flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm mx-4 relative">
        {/* Close button */}
        <button
          onClick={handleBackdropClick}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer text-2xl font-bold"
        >
          ×
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
            <MessageSquare className="w-8 h-8 text-purple-600" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-lg font-normal text-black mb-2 leading-6">
            {t("SMSMsg.Msg1")}
          </h2>
          <p className="text-[#7D848D] text-sm mb-6 leading-5">
            {t("SMSMsg.Msg2")}
          </p>
        </div>
      </div>
    </div>
  );
}
