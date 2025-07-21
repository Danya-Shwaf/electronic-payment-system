import { CheckCircle, Share } from "lucide-react";
import { useTranslation } from "react-i18next";
export default function SuccessfulTransfer({ onClose }) {
  const { t, i18n } = useTranslation();
  console.log(t, i18n.language);
  return (
    <div className="fixed inset-0 backdrop-blur-[2px] backdrop-grayscale flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full overflow-auto custom-scrollbar max-w-sm mx-4 relative max-h-screen">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-[#03B961]" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-[#03B961] font-bold text-lg mb-1">
            {t("SuccessTrans.Successful")}
          </h2>
          <p className="text-[#999999] mb-6">{t("SuccessTrans.Your Tran")}</p>
          {/* Amount */}
          <div className="text-4xl font-bold text-gray-800 mb-6">
            Rp 200.000
          </div>

          {/* Recipient Info */}
          <div className="p-4 mb-4 flex flex-col items-center justify-between">
            <p className="text-lg font-bold text-black mb-2">
              {t("SuccessTrans.Send")}
            </p>
            <div className="flex items-center">
              <div className="w-14 h-14 mx-4 bg-black rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                AM
              </div>
              <div>
                <p className="text-gray-800">Abdul Mustakim</p>
                <p className="text-sm text-[#999999] font-medium">
                  +62 1234567890
                </p>
              </div>
            </div>
          </div>

          {/* Transaction Details */}
          <div className="space-y-3 mb-6">
            <h3 className="font-bold text-lg text-black text-left">
              {t("SuccessTrans.Detail")}
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-start">
                <span className="text-[#999999] font-medium">
                  {t("SuccessTrans.Payment")}
                </span>
                <span className="font-medium text-right">$ 200.000</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-[#999999] font-medium">
                  {t("SuccessTrans.Date")}
                </span>
                <span className="font-medium text-right">June 12, 2023</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-[#999999] font-medium">
                  {t("SuccessTrans.Time")}
                </span>
                <span className="font-medium text-right">20:32</span>
              </div>
              <div className="flex justify-between items-start gap-4">
                <span className="text-[#999999] font-medium flex-shrink-0">
                  {t("SuccessTrans.Ref Num")}
                </span>
                <span className="font-medium text-right break-all">
                  GQH-0012-ADFE-2234
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-[#999999] font-medium">
                  {t("SuccessTrans.Fee")}
                </span>
                <span className="font-medium text-right">$ 0</span>
              </div>
              <div className="flex justify-between items-start border-t pt-2 font-bold">
                <span className="text-gray-800 text-lg">
                  {t("SuccessTrans.Total Payment")}
                </span>
                <span className="text-2xl text-right">$ 200.000</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-white text-gray-800 text-xl font-bold border border-gray-200 hover:bg-gray-50 py-3 px-4 rounded-xl transition-colors flex items-center justify-center cursor-pointer">
              <Share className="w-5 h-5 mr-2" />
              {t("SuccessTrans.Share")}
            </button>
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-xl font-medium transition-colors cursor-pointer"
              onClick={onClose}
            >
              {t("SuccessTrans.Back")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
