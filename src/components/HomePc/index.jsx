import React, { useEffect, useState, useRef, useCallback } from "react";
import Header from "../Header";
import Slide from "../Slide";
import Footer from "../Footer";
import { useMediaQuery } from "@/utils/mediaQueryHook";
import CircularSlider from "../Slider";
import Selector from "./Selector";
import heroAnimation from "public/static/img/heroPCAnimation.json";
import lottie from "lottie-web";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import styles from './HomePc.module.css';
import classNames from "classnames";
import Image from "next/image";

function HomePc(props) {
  const isTabletBreakpoint = useMediaQuery(1550);

  const lottieContainerRef = useRef();

  const [sliderValue, setSliderValue] = useState(10000);
  const [monthlyPayment, setMonthlyPayment] = useState(177.42);
  const [newPayoff, setNewPayoff] = useState(7451.50);
  const [totalSavings, setTotalSavings] = useState(2548.50);
  const [payoffMonths, setPayoffMonths] = useState(42);

  const router = useRouter();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieContainerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: heroAnimation,
    });
    anim.setSpeed(1.0)

    return () => {
      anim.destroy();
    };

  }, []);

  const handleSliderChange = (value, months) => {
    setSliderValue(value);
    setPayoffMonths(months);

    setMonthlyPayment(parseFloat((((value)*0.7)/months+10.75).toFixed(2)));
    setNewPayoff(parseFloat(((((value)*0.7)/months+10.75) * months)).toFixed(2));
    setTotalSavings(parseFloat((value - ((((value)*0.7)/months+10.75) * months))).toFixed(2));
    // (total debt - projected payoff) = total savings
    // monthly payment * amount of months = projected payoff
  };

  const containerRef = useRef();
  const overlapGroupRef = useRef();
  const rectangleRef = useRef();
  const [dragging, setDragging] = useState(false);
  let initialX, initialY, scrollStartX;

  const handleMouseDown = useCallback((e) => {
    setDragging(true);
    e.persist();
  }, []);

  const handleMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!dragging) return;
      const containerWidth = containerRef.current.clientWidth;
      const scrollWidth = containerRef.current.scrollWidth - containerWidth;
      const sliderWidth = sliderRef.current.clientWidth;
      const maxSliderPosition = overlapGroupRef.current.clientWidth - sliderWidth;
      const deltaX = e.movementX;

      let newSliderPos = parseFloat(sliderRef.current.style.left || 0) + deltaX;
      newSliderPos = Math.max(0, Math.min(newSliderPos, maxSliderPosition));

      const scrollPercentage = newSliderPos / maxSliderPosition;
      containerRef.current.scrollLeft = scrollWidth * scrollPercentage;
      sliderRef.current.style.left = `${newSliderPos}px`;
    },
    [dragging]
  );


  const {
    overlapGroup6,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    forbes,
    theWallSteetJournal,
    bloomberg,
    usaToday,
    businessInsider,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    group1,
    sombruilla1,
    spanText12,
    spanText13,
    spanText14,
    group2,
    group3,
    spanText15,
    spanText17,
    spanText19,
    spanText20,
    spanText22,
    spanText23,
    spanText25,
    spanText26,
    spanText28,
    spanText29,
    spanText30,
    spanText31,
    spanText32,
    macBookPro164Props,
    frame231Props,
    frame232Props,
    frame371Props,
    frame372Props,
    frame373Props,
    frame374Props,
    frame511Props,
    frame512Props,
    footerProps,
    mesaDeTrabajo1Propuesta1
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className={classNames(styles.root, 'screen')}>
        <div className={styles.background}>
          <Image src={'static/img/home/hero2.svg'} alt={'Grey line art of sunrise via a beach perspective.'} fill={true} priority/>
        </div>
        <div className={styles.backgroundMobile}>
          <Image src={'static/img/home/heroMobile2.svg'} alt={'Grey line art of sunrise via a beach perspective.'} fill={true} priority/>
        </div>
          <div className={styles.overlapGroup8}>
            <h1 className={styles.takeControlOverYo}>
              <span>{spanText2}</span>
            </h1>
          </div>
          <button className={classNames(styles.button, "grow")} onClick={() => router.push('/book-online')}>
            <div className={styles.getStarted}>
              <span>{spanText3}</span>
              <span>{spanText4}</span>
            </div>
          </button>
        </div>
        <Header className={macBookPro164Props.className} />

        <div className={styles.flexCol}>
          <p className={styles.whereWeHaveBeenFeature}>
            <span>{spanText6}</span>
          </p>
          <div className={styles.overlapGroup7}>
            <Image className={styles.forbes} src={forbes} alt="Forbes" width={155} height={38}/>
            <Image src={theWallSteetJournal} alt="The wall street journal" width={311} height={26}/>
            <Image src={bloomberg} alt="Bloomberg" width={207} height={38}/>
            <Image className={styles.usaToday} src={usaToday} alt="USA TODAY" width={158} height={55}/>
            <Image src={businessInsider} alt="BUSINESS INSIDER" width={159} height={48}/>
          </div>
        </div>
        <div className={styles.flexRow}>
          <div className={styles.flexCol1}>
            <p className={styles.dontLentCreditCar}>
              <span>{spanText7}</span>
              <span>{spanText8}</span>
              <span>{spanText9}</span>
            </p>
            <p className={styles.cutYourMonthlyPay}>
              <span>{spanText11}</span>
            </p>
          </div>
          <Image className={styles.group1} src={group1} alt="Linear orange sun." width={168} height={163}/>
        </div>
        <div className={styles.flexCol2}>
          <div className={styles.flexRow1}>
            {!isTabletBreakpoint && <Image className={styles.sombruilla} src={'static/img/home/sombruilla2.svg'} alt="sombruilla 1" width={526} height={534} />}
            <div className={styles.frame25}>
              <div className={styles.frame231}>
                {
                  [frame231Props.frame171Props, frame231Props.frame172Props, frame231Props.frame173Props].map((item, i) => (<Item item={item} key={i}></Item>))
                }
              </div>
              <div className={styles.frame231}>
                {
                  [frame232Props.frame171Props, frame232Props.frame172Props, frame232Props.frame173Props].map((item, i) => (<Item item={item} key={i}></Item>))
                }
              </div>
            </div>
          </div>
          <div className={styles.overlapGroup5}>
            <div className={styles.takeStepContainer}>
              <div className={styles.takeControlContent}>
                <p className={styles.takeYourFirstStep}>
                  <span>{spanText12}</span>
                </p>
                <p className={styles.itTakes30Seconds}>
                  <span>{spanText13}</span>
                </p>
                <button className={classNames('grow', styles.frame28)} onClick={() => router.push('/book-online')}>
                  <div className={styles.getStarted}>
                    <span>{spanText14}</span>
                  </div>
                </button>
              </div>
              <Image className={styles.group2} src={group2} alt="Orange beach sand castle with protruding bucket and shovel." width={660} height={562}/>
            </div>
            <div className={styles.frame98}>
            <div className={styles.flexRow2}>
              <Image className={styles.group3} src={group3} alt="Coconut margarita drink." width={183} height={245}/>
              <p className={styles.theDRCProgramDebtCalculator}>
                <span>{spanText15}</span>
              </p>
            </div>
              <div className={styles.overlapGroup2}>
                <div className={styles.frame117}>
                  <p className={styles.howMuchTotalUnsec}>
                    <span>{spanText28}</span>
                  </p>
                  <div className={styles.flexRow3}>
                  <CircularSlider payoffMonths={payoffMonths} value={sliderValue} onChange={handleSliderChange} />
                    <div className={styles.payOffContainer}>
                      <div className={styles.payOffOption}>
                        <span>{spanText17}</span>
                      </div>
                      <div className={styles.payOffMonths}>
                        <div className={styles.frame119}>
                          <Selector handleSliderChange={handleSliderChange} sliderValue={sliderValue} setPayoffMonths={setPayoffMonths}/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.debtCalculatorPayments}>
                    <div className={styles.debtCalculator}>
                      <div className={styles.monthlyPayment}>
                        <span>{spanText19}</span>
                      </div>
                      <div className={styles.frame116}>
                        <div className={styles.price1}>
                          <span>{spanText20}</span>
                        </div>
                        <div className={styles.text1}>
                          <span>{monthlyPayment.toLocaleString("en-US")}</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.debtCalculator}>
                      <div className={styles.monthlyPayment}>
                        <span>{spanText22}</span>
                      </div>
                      <div className={styles.frame1161}>
                        <div className={styles.price1}>
                          <span>{spanText23}</span>
                        </div>
                        <div className={styles.text1}>
                          <span>{newPayoff.toLocaleString("en-US")}</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.debtCalculator}>
                      <div className={styles.monthlyPayment}>
                        <span>{spanText25}</span>
                      </div>
                      <div className={styles.frame1162}>
                        <div className={styles.price1}>
                          <span>{spanText26}</span>
                        </div>
                        <div className={styles.text1}>
                          <span>{totalSavings.toLocaleString("en-US")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={classNames('grow', styles.frame281)} onClick={() => router.push('/book-online')}>
                    <div className={styles.getStarted}>
                      <span>{spanText29}</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.frame981}>
              <div className={styles.sliderWrapper}>
                <div className={styles.contentContainer}>
                  <Image className={styles.vector} src="/static/img/vector-4@2x.svg" alt="Orange linear sandals." width={180} height={142}/>
                  <div className={styles.textsContainer}>
                    <p className={styles.gettingBackOnTrac}>
                      <span>{spanText32}</span>
                    </p>
                    <p className={styles.helpingThousandsOf}>
                      <span className={styles.span19}>{spanText31}</span>
                    </p>
                  </div>
                </div>
                <div className={classNames('w-[1500px]', styles.slider)}>
                  <Swiper
                      slidesPerView={3.5}
                      spaceBetween={30}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                      }}
                      modules={[FreeMode, Pagination, Autoplay]}
                      className="mySwiper"
                      loop={true}
                  >
                    <SwiperSlide>
                      <Slide
                          spanText={frame371Props.spanText}
                          frame38Props={frame371Props.frame38Props}
                          frame39Props={frame371Props.frame39Props}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Slide
                          spanText={frame372Props.spanText}
                          frame38Props={frame372Props.frame38Props}
                          frame39Props={frame372Props.frame39Props}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Slide
                          spanText={"Truly Grateful…"}
                          frame38Props={{children: "Over the past 2 years I’ve had the pleasure of working with Dino… Truly grateful and would highly recommend."}}
                          frame39Props={{spanText: "- Frank E."}}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Slide
                          spanText={frame373Props.spanText}
                          frame38Props={frame373Props.frame38Props}
                          frame39Props={frame373Props.frame39Props}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Slide
                          spanText={frame374Props.spanText}
                          frame38Props={frame374Props.frame38Props}
                          frame39Props={frame374Props.frame39Props}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Slide
                          spanText={frame511Props.spanText}
                          frame38Props={frame511Props.frame38Props}
                          frame39Props={frame511Props.frame39Props}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Slide
                          spanText={frame512Props.spanText}
                          frame38Props={frame512Props.frame38Props}
                          frame39Props={frame512Props.frame39Props}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Slide
                          spanText={"Glad I found them..."}
                          frame38Props={{children: "They are ethical, honest, reliable, dependable and actually caring... They have made a profound difference in my life."}}
                          frame39Props={{spanText: "- Myles Paulson"}}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Slide
                          spanText={"Best financial decision..."}
                          frame38Props={{children: "Using them is one of the best financial decisions I made in a long time. Really helpful company and always there to answer my questions and concerns."}}
                          frame39Props={{spanText: "- Hector Garcia"}}
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className={styles.rectangle30}></div>
            </div>
          </div>
          <Image className={styles.frame129} onClick={() => router.push('tel:+1-888-344-0214')} src={"/static/img/frame-129-2@2x.svg"} alt="Frame 129" width={112} height={112}/>
          <Footer className={footerProps.className} />
        </div>
    </div>
  );
}

const Item = ({ item, key }) => <div key={key} className={classNames('frame-17', item.className, styles.frame171)}>
  <div className={classNames('icono-pc', styles.iconoPc)}>
    <Image className="tablercoin-off" src={item.tablerCoinOff} alt="tabler:coin-off" width={32} height={32}/>
  </div>
  <div className={classNames('frame-15', styles.frame15)}>
    <div className={classNames('no-up-front-cost-ever', styles.noUpFrontCostEver)}>
      <span>{item.spanText1}</span>
    </div>
    <p className={classNames('as-a-part-of-our-gua', styles.asAPartOfOurGua)}>
      <span>{item.spanText2}</span>
    </p>
  </div>
</div>;

export default HomePc;
