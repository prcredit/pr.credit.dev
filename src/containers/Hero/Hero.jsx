import React, { useContext, useState, useEffect, useRef, useCallback } from "react";

import { LINK_ROUTES } from "../../config/constants";
import { MultiLangContext } from "../../context/MultiLang/MultiLang";

import './Hero.scss';
import SocialListFixed from "../../components/SocialListFixed/SocialListFixed";
import AnimateCounter from "../../components/AnimateCounter/AnimateCounter";

const Hero = (props) => {
  const {
    loaded,
  } = props

  const {
    words, selectedLang
  } = useContext(MultiLangContext);

  const videoRef = useRef(null)

  const [animateNums, seAnimateNums] = useState(false)


  useEffect(() => {
    const checkPageScroll = () => {
      const section = document.querySelector('#hero').getBoundingClientRect().top;

      if (section <= 0 && loaded) {
        seAnimateNums(true)
      }
    }

    document.addEventListener('scroll', checkPageScroll);
    checkPageScroll();
    return () => {
      document.removeEventListener('scroll', checkPageScroll);
    }
  }, [loaded])


  const playVideo = useCallback(() => {
    videoRef.current.setAttribute("src", words.videoInStartPage)
    videoRef.current.classList.add("hero__video--before")
  }, [selectedLang])

  useEffect(() => {
    videoRef.current.removeAttribute("src")
    videoRef.current.classList.remove("hero__video--before")
  }, [selectedLang])

  return (
    <section className="hero" id='hero'>
      <SocialListFixed />

      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__left-side">
            <h1 className="title hero__title">
              {words.trustAssetManagement}<br/> <span>{words.onTheStockMarketIpo}</span>
            </h1>

            <p className="hero__subtext">
              {words.investmentsGlobalFastGrowingCompanies} <span><svg width="100" height="39" viewBox="0 0 100 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.2154 37.9918C65.3282 37.9918 99 39.0433 99 17.3657C99 1.0411 75.3795 1.04111 49.7487 1.0411C31.1523 1.0411 0.999994 -0.631639 0.999994 17.3657C0.999994 35.363 25.1231 35.8888 54.2718 34.8372" stroke="#1FBF75"/>
              </svg>
              {words.days100}</span>
            </p>

            <div className="hero__inner-link-btn">
              <a href={`${LINK_ROUTES.signUp}?lang=${selectedLang}`} target="_blank" rel="noopener noreferrer" className="link-btn link-btn--lg hero__link-btn">
                {words.getIn}
              </a>

              <a href={words.videoLinkInStartPage} target="_blank" rel="noopener noreferrer" className="link-btn link-btn--lg hero__link-btn hero__link-btn--small">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.28721 1.17963C10.7293 0.606792 13.2708 0.606792 15.7129 1.17962C19.2395 2.00687 21.9932 4.76053 22.8204 8.28721C23.3933 10.7293 23.3933 13.2708 22.8204 15.7129C21.9932 19.2395 19.2395 21.9932 15.7129 22.8204C13.2708 23.3933 10.7293 23.3933 8.28721 22.8204C4.76053 21.9932 2.00687 19.2395 1.17963 15.7129C0.606791 13.2708 0.606791 10.7293 1.17963 8.2872C2.00687 4.76053 4.76053 2.00687 8.28721 1.17963ZM9.90762 9.97294C9.90762 9.57328 10.0997 9.27747 10.3349 9.12694C10.5641 8.98026 10.839 8.96258 11.0959 9.12694L14.2634 11.154C14.5328 11.3264 14.6907 11.6441 14.6907 12C14.6907 12.3559 14.5328 12.6736 14.2634 12.846L11.0959 14.8731C10.839 15.0374 10.5641 15.0198 10.3349 14.8731C10.0997 14.7225 9.90762 14.4267 9.90762 14.0271V9.97294ZM11.7427 8.11619C11.061 7.67994 10.2801 7.73733 9.68809 8.11619C9.10212 8.49119 8.70762 9.17137 8.70762 9.97294L8.70762 14.0271C8.70762 14.8286 9.10211 15.5088 9.68809 15.8838C10.2801 16.2627 11.061 16.3201 11.7427 15.8838L14.9102 13.8568C15.5793 13.4286 15.8907 12.6952 15.8907 12C15.8907 11.3048 15.5793 10.5715 14.9102 10.1433L11.7427 8.11619Z" fill="#0F0F0F"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="hero__right-side">
            <div className="hero__video-wrap">
              <div className="hero__preview">
                <div className="hero__play-video" onClick={playVideo}>
                  <img src="/media/images/sections/hero/play.svg" alt=""/>
                </div>

                <img className="hero__preview-video" src={words.imageForVideoInStartPage} />

                <iframe
                  ref={videoRef}
                  title="YouTube video player"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowTransparency="true"
                  allowFullScreen
                  frameBorder="0"
                  className="hero__video"
                />
              </div>
            </div>

            <div className="hero__info-block hero__info-block--first">
              <div className="hero__num-info">
                <AnimateCounter needNumber={23.37} isAnimate={animateNums} height={30} /><span className='perc'>%</span>
              </div>

              <div className="hero__text-info">
                {words.average} <span className="hero__marked-text-info">{words.allocation}<span className="hero__tooltip-box">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.14855 0.647095C6.69519 0.284302 8.30481 0.284302 9.85145 0.647095C12.085 1.17102 13.829 2.915 14.3529 5.14855C14.7157 6.69519 14.7157 8.30481 14.3529 9.85145C13.829 12.085 12.085 13.829 9.85145 14.3529C8.30481 14.7157 6.69519 14.7157 5.14855 14.3529C2.915 13.829 1.17102 12.085 0.647096 9.85145C0.284301 8.30481 0.284301 6.69519 0.647096 5.14855C1.17102 2.91499 2.915 1.17102 5.14855 0.647095ZM7.49998 5.98428C7.91853 5.98428 8.25783 5.64497 8.25783 5.22642C8.25783 4.80787 7.91853 4.46857 7.49998 4.46857C7.08143 4.46857 6.74213 4.80787 6.74213 5.22642C6.74213 5.64497 7.08143 5.98428 7.49998 5.98428ZM7.49998 6.55266C7.81389 6.55266 8.06837 6.80714 8.06837 7.12105V10.1525C8.06837 10.4664 7.81389 10.7208 7.49998 10.7208C7.18607 10.7208 6.93159 10.4664 6.93159 10.1525V7.12105C6.93159 6.80714 7.18607 6.55266 7.49998 6.55266Z" fill="#10FF90"/>
                  </svg><div className="hero__tooltip-body">
                  {words.allocationDescriptionInfo}
                  </div>
                </span></span> {words.onApplicationParticipation}
              </div>
            </div>

            <div className="hero__info-block">
              <div className="hero__num-info">
                <AnimateCounter needNumber={29.07} isAnimate={animateNums} height={30} /><span className='perc'>%</span>
              </div>

              <div className="hero__text-info">
                {words.averageReturnFirstDay}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;