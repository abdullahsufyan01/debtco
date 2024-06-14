import React from "react";
import OurCompanyPc from "@/components/OurCompanyPc";
import generatePageSEO from "@/utils/generatePageSEO";
import Head from "next/head";

const macBookPro1642Data = {
  className: "mac-book-pro-16-4-1",
};

const ourCompanyPcData = {
  spanText1: "At The Debt Relief Company, our ultimate goal is to provide the best customer service in the U.S. and alleviate the stress load of all clients (regardless of whether it pertains to their finances or not). With over a decade of professional consumer debt relief experience, our team of experts has been helping clients attain financial freedom nationwide since 2009. Over a decade of experience has taught us to always make your financial success our top priority and in doing so we can help lay down a foundation for you to grow and prosper in the future. Moreover, our ",
  spanText2: "organization was founded without the use of servicing debt and this is something we are very proud of.",
  spanText3: "We take great pride in helping our clients establish a plan that works best for them early on. We never take shortcuts or use cookie cutter solutions; so each debt relief program is personally customized to help you achieve the financial goals that matter most. We never charge upfront fees and if we do not save you money on your debt, then we will charge nothing for our debt relief options. This is how we strive to be the best debt relief company in the industry.",
  spanText4: "Committed To Excellence",
  group8: "/static/img/group-8-1@2x.svg",
  spanText5: "Our company",
  spanText6: "The Team",
  image1: "/static/img/image-1-1@2x.png",
  spanText7: "Adem Selita",
  spanText8: "CEO",
  spanText9: "Adem Selita (aka Adam Selita) is a 2nd generation Albanian American and native Staten Islander.",
  spanText10: "Adem received a Bachelors in Economics from New York University. While attaining his degree from NYU, Adem was instrumental in helping a startup get acquired by the largest beverage company in the United States.",
  spanText11: "Adem helped close family and friends negotiate on their debt obligations following the aftermath of the Great Recession—which eventually led to the conception and co-founding of The Debt Relief Company as it is known today. Adem has a passion for helping Americans become debt free and has helped countless Americans achieve financial freedom.",
  image2: "/static/img/image-2-1@2x.png",
  spanText12: "Dino Selita",
  spanText13: "President",
  spanText14: "Dino Selita is a native New Yorker and a longtime community activist in the NYC metro area.",
  spanText15: "Dino graduated from Wagner College with a degree in Finance. He has worked in the financial services industry for over 20 years and has years of industry expertise in real estate, mortgage lending, debt consolidation loans, HELOCs and insurance services. Dino has also worked in the Trust Department of Morgan Stanley.",
  spanText16: "More recently Dino has spent over half a decade in the credit card consolidation industry, helping consumers make the most of their personal finances. Dino has helped over 1,000 clients eliminate their unsecured debt and achieve financial freedom.",
  img_35081: "/static/img/img-3508-1-1@2x.png",
  group1: "/static/img/group-2@2x.svg",
  spanText17: "Meet all the team",
  spanText18: "Our Company was founded to be a better alternative within the debt relief space. Our clients save more money when compared to our debt settlement companies and successfully complete the program in a shorter time frame.",
  spanText19: "Why Did The Debt Relief Co Form?",
  spanText20: "The Debt Relief Company was formed out of a desire to help struggling consumers save as much money as possible. It all started during the 2008 financial crisis, although back then we really had no idea something good (if anything good at all) could actually come about from the failure of the US banking system. What began as an attempt to help a sister renegotiate a 2nd mortgage balance during the Great Recession and help an uncle consolidate credit card accounts would eventually lead to our co-founders forming The Debt Relief Company.",
  spanText21: "Although the road to our formation wasn't easy, by any means. Years of trials and tribulations in the financial services industry helped develop our expertise and know-how of debt consolidation and various debt relief products (loan modifications, credit card resolution programs, traditional debt settlement programs, debt consolidation loans, etc). Until eventually, right time and right place. Previously strangers, an introduction from a friend of a friend in downtown Manhattan would lead our co-founders to form The Debt Relief Company in New York as it is known today.",
  spanText22: "Our Company strives to provide value to US consumers whenever possible. To this extent, we are frequently cited and featured on various news platforms and receive a considerable amount of press. Feel free to check out our media mentions.",
  group2: "/static/img/group-1@2x.svg",
  spanText23: "The DRC Mission Statement",
  spanText24: "First and foremost, our goal is to help struggling Americans become debt free and gain a better foothold on their personal finances. Our secondary mission is to increase financial literacy and awareness for the general public in the United States.",
  macBookPro164Props: macBookPro1642Data,
};

function OurCompany() {
  return (
    <>
     <Head>
        <title>Our Company</title>
        {generatePageSEO(
              'our-company',
              'Our Company',
              `Our goal is to help struggling Americans become debt free and gain a better 
              foothold on their personal finances. Co-founded by Adem Selita and Dino Selita.`,
              'explainer'
        )}
      </Head>
      <OurCompanyPc {...ourCompanyPcData} />
    </>
  );
}

export default OurCompany;
