import {
  interpretationDef,
  defList,
  collectionDef,
} from "@/models/privacy-policy-model";

// Metadata
export const metadata = {
  title:
    "Privacy Policy | Luxury Real Estate, Private Air Charters, and Global Trading | JOM International",
  description:
    "Our Privacy Policy outlines how JOM International collects, uses, and protects your personal information when you use our website or services. We are committed to safeguarding your privacy and ensuring your data is secure. Read our Privacy Policy to understand how we handle your information.",
  keywords:
    "Privacy Policy, JOM International, data privacy, personal data protection, website privacy, data security, user information, user data handling, online privacy, data collection, data usage, data protection policy, user consent, data retention, data sharing, data disclosure.",
};

const PrivacyPolicy = () => {
  return (
    <section className="w-full">
      <h1 className="font-mulish font-bold text-3xl text-[#373F41] mt-8">
        Privacy Policy
      </h1>

      <p className="text-xs mt-2">Updated at: August 15, 2023</p>

      <p className="font-mulish my-5">
        This Privacy Policy describes Our policies and procedures on the
        collection, use and disclosure of Your information when You use the
        Service and tells You about Your privacy rights and how the law protects
        You.
      </p>

      <p className="font-mulish my-5">
        We use Your Personal data to provide and improve the Service. By using
        the Service, You agree to the collection and use of information in
        accordance with this Privacy Policy.
      </p>

      {/* Interpretation & Definition */}
      <div className="font-mulish mt-10">
        <h1 className="font-bold text-4xl text-[#373F41] mt-8">
          Interpretation and Definitions
        </h1>

        {interpretationDef.map((item, index) => (
          <InterpretationDefinition key={index} {...item} />
        ))}

        {defList.map((item, index) => (
          <DefinitionList key={index} {...item} />
        ))}
      </div>

      {/* Collection of Data */}
      <div className="font-mulish mt-10">
        <h1 className="font-bold text-4xl text-[#373F41] mt-8 sm:text-5xl">
          Collecting and Using Your Personal Data
        </h1>

        {collectionDef.map((item, index) => (
          <CollectionOfData key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default PrivacyPolicy;

const InterpretationDefinition = ({ title, bodyText }) => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-[#373F41] my-8">{title}</h1>
      <p>{bodyText}</p>
    </div>
  );
};

const DefinitionList = ({ title, bodyText }) => {
  return (
    <div>
      <ul>
        <li className="my-5">
          <strong>{title}</strong> <span>{bodyText}</span>
        </li>
      </ul>
    </div>
  );
};

const CollectionOfData = ({ largeText, title, bodyText, children }) => {
  const renderChildren = (items) => {
    return (
      <ul className="list-disc list-inside">
        {items?.map((item, index) => (
          <li className="my-3" key={index}>
            {typeof item === "string" ? (
              item // Render string directly as a list item
            ) : (
              <>
                <strong>{item.title}</strong> <span>{item.bodyText}</span>
                {item.children && renderChildren(item.children)}
                {item.subList && (
                  <ul className="list-inside px-5 sm:px-10">
                    {item.subList?.map((subItem, subIndex) => (
                      <li className="my-3" key={subIndex}>
                        <strong>Type:</strong> {subItem.type} <br />
                        <strong>Administered By:</strong> {subItem.administered}{" "}
                        <br />
                        <strong>Purpose:</strong> {subItem.purpose}
                      </li>
                    ))}
                  </ul>
                )}
                {item.subLegal && (
                  <ul className="list-disc list-inside px-5 sm:px-10">
                    {item.subLegal?.map((subLegalItem, subLegalIndex) => (
                      <li className="my-3" key={subLegalIndex}>
                        {subLegalItem}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1 className="font-bold text-4xl text-[#373F41] mt-8">{largeText}</h1>
      <h1 className="font-bold text-4xl text-[#373F41] mt-8 mb-3">{title}</h1>
      <p>{bodyText}</p>
      {renderChildren(children)}
    </div>
  );
};
