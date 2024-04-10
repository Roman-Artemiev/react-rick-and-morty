import React from 'react'
import "./style/home.css"

import Header from '../../components/Header/Header'
import ApplyTextStroke from '../../components/UI/ApplyTextStroke/ApplyTextStroke'
import HomeBg from "./img/homeBg"


import { Link } from "react-router-dom";


const Home = () => {
  return (
    <section className='home'>
        <HomeBg 
            className="home-bg"
            circleType1="home-bg-circle-1"
            circleType2="home-bg-circle-2"
            circleType3="home-bg-circle-3"
        />

        <Header/>

        <div className="intro">
            <div className="wrapper">
                <h1 className="intro__title"></h1>
                <ApplyTextStroke
                text = "Rick and Morty"
                textSize="50"
                className="intro__title"
                />

                <ApplyTextStroke
                text="Your Favorite Cartoon Adventure"
                textSize="40"
                className="intro__subtitle"
                />

                <p className="intro__description">
                 Step into the chaotic universe of Rick and Morty! Join us for a mind-bending adventure through dimensions, outrageous humor, and intergalactic escapades on our inspired website.
                </p>

                <Link to="/characters">
                    <ApplyTextStroke
                    text="Get Started"
                    textSize="24"
                    className="intro__btn"
                    />
                </Link>
            </div>
        </div>


        <div className="social-media__container">
            <a href='https://twitter.com/RickandMorty' target='_blank' className="social-media">
                <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_50_12)">
                    <path d="M26.931 8.88218C26.9434 9.14517 26.9496 9.40904 26.9496 9.67645C26.9496 17.8113 20.7583 27.1903 9.43569 27.1903C5.95753 27.1903 2.72376 26.1729 -0.000854492 24.425C0.482617 24.4808 0.972286 24.5091 1.46727 24.5091C4.35393 24.5091 7.00505 23.5289 9.11072 21.8757C6.41975 21.8243 4.14584 20.0472 3.36308 17.6006C3.73852 17.6732 4.12282 17.7113 4.52128 17.7113C5.08356 17.7113 5.62636 17.6369 6.14171 17.4952C3.32854 16.9294 1.20428 14.4421 1.20428 11.4607C1.20428 11.435 1.20428 11.4093 1.20428 11.3837C2.03575 11.845 2.98409 12.1213 3.99354 12.1531C2.34301 11.0507 1.25652 9.16465 1.25652 7.02887C1.25652 5.90077 1.56024 4.8444 2.08887 3.93413C5.12341 7.65845 9.66148 10.1086 14.7751 10.3654C14.6715 9.91465 14.6157 9.44623 14.6157 8.96276C14.6157 5.56429 17.3713 2.80957 20.7725 2.80957C22.5416 2.80957 24.1417 3.55691 25.2618 4.75054C26.6627 4.47515 27.982 3.96246 29.1721 3.25762C28.7108 4.69564 27.7367 5.90166 26.4652 6.6614C27.7102 6.51441 28.8967 6.18324 29.9991 5.69446C29.1757 6.9297 28.1326 8.01353 26.931 8.88218Z" fill="#292929"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_50_12">
                    <rect width="30" height="28" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </a>

            <a href='https://youtu.be/I1Q4FQNSb5c?si=d-sQsK2EGPTZDBgL' target='_blank' className="social-media">
                <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9025 15.057L11.9016 6.26854L20.0072 10.6779L11.9025 15.057ZM29.7 4.74563C29.7 4.74563 29.4066 2.59031 28.5075 1.64118C27.3666 0.3949 26.0878 0.389035 25.5019 0.316702C21.3038 5.39948e-07 15.0066 0 15.0066 0H14.9934C14.9934 0 8.69625 5.39948e-07 4.49813 0.316702C3.91125 0.389035 2.63344 0.3949 1.49156 1.64118C0.5925 2.59031 0.3 4.74563 0.3 4.74563C0.3 4.74563 0 7.27729 0 9.80797V12.1813C0 14.7129 0.3 17.2436 0.3 17.2436C0.3 17.2436 0.5925 19.3989 1.49156 20.3481C2.63344 21.5943 4.1325 21.5552 4.8 21.6853C7.2 21.9257 15 22 15 22C15 22 21.3038 21.9902 25.5019 21.6735C26.0878 21.6002 27.3666 21.5943 28.5075 20.3481C29.4066 19.3989 29.7 17.2436 29.7 17.2436C29.7 17.2436 30 14.7129 30 12.1813V9.80797C30 7.27729 29.7 4.74563 29.7 4.74563Z" fill="#292929"/>
                </svg>
            </a>

            <a href='https://www.reddit.com/r/rickandmorty/' target='_blank' className="social-media">
                <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 12.4444C30.0002 11.6494 29.78 10.8711 29.3657 10.2022C28.9513 9.53322 28.3603 9.0019 27.6631 8.67146C26.9658 8.34103 26.1916 8.22541 25.4327 8.33838C24.6739 8.45135 23.9623 8.78814 23.3828 9.30865C21.2885 8.1548 18.7876 7.45767 16.1746 7.2961L16.824 3.2548L19.5529 3.69014C19.6845 4.41138 20.0577 5.06116 20.6066 5.52462C21.1555 5.98808 21.8447 6.23539 22.5525 6.22283C23.2602 6.21027 23.9408 5.93865 24.4741 5.45598C25.0074 4.97332 25.359 4.31068 25.4667 3.58519C25.5744 2.85971 25.4313 2.11809 25.0628 1.49141C24.6942 0.864734 24.1239 0.393355 23.4526 0.160589C22.7813 -0.0721765 22.0523 -0.0513409 21.3944 0.219413C20.7364 0.490167 20.192 0.993405 19.8573 1.64018L16.152 1.04906C15.892 1.00745 15.6267 1.07383 15.4136 1.23379C15.2004 1.39376 15.0567 1.63441 15.0136 1.90355L14.1495 7.28033C11.4196 7.4024 8.79784 8.10723 6.61717 9.30865C5.82314 8.59549 4.79042 8.23496 3.74217 8.30494C2.69391 8.37493 1.7143 8.86981 1.015 9.68266C0.3157 10.4955 -0.0471275 11.5611 0.00491596 12.649C0.0569594 13.737 0.519695 14.7601 1.29313 15.4972C1.09898 16.1901 1.00028 16.908 0.999981 17.6296C0.999981 20.473 2.50523 23.1196 5.23839 25.0819C7.85936 26.9637 11.3262 28 15 28C18.6738 28 22.1406 26.9637 24.7616 25.0819C27.4947 23.1196 29 20.473 29 17.6296C28.9997 16.9081 28.901 16.1902 28.7068 15.4973C29.1133 15.1081 29.4379 14.6361 29.6604 14.1108C29.8829 13.5855 29.9985 13.0182 30 12.4444ZM7.99998 16.0741C7.99998 15.6639 8.11728 15.2629 8.33705 14.9218C8.55681 14.5807 8.86917 14.3149 9.23462 14.1579C9.60007 14.0009 10.0022 13.9598 10.3902 14.0399C10.7781 14.1199 11.1345 14.3174 11.4142 14.6075C11.6939 14.8975 11.8844 15.2671 11.9616 15.6694C12.0387 16.0718 11.9991 16.4888 11.8477 16.8678C11.6964 17.2468 11.44 17.5707 11.1111 17.7986C10.7822 18.0265 10.3955 18.1481 9.99999 18.1481C9.46974 18.1475 8.96138 17.9288 8.58644 17.54C8.2115 17.1511 8.00059 16.624 7.99998 16.0741ZM19.587 22.6994C18.1685 23.4573 16.5958 23.8527 15 23.8527C13.4042 23.8527 11.8316 23.4573 10.413 22.6994C10.1782 22.5727 10.0013 22.3547 9.92122 22.093C9.84113 21.8314 9.86436 21.5474 9.9858 21.3035C10.1072 21.0596 10.317 20.8756 10.5691 20.7918C10.8212 20.7079 11.095 20.7312 11.3306 20.8564C12.4654 21.4628 13.7234 21.7791 15 21.7791C16.2765 21.7791 17.5346 21.4628 18.6694 20.8564C18.9051 20.7304 19.1793 20.7066 19.4319 20.7903C19.6844 20.8739 19.8946 21.0581 20.0163 21.3024C20.1379 21.5467 20.161 21.8311 20.0805 22.093C20 22.355 19.8225 22.5731 19.587 22.6994ZM20 18.1481C19.6044 18.1481 19.2177 18.0265 18.8889 17.7986C18.56 17.5707 18.3036 17.2468 18.1522 16.8678C18.0009 16.4888 17.9613 16.0718 18.0384 15.6694C18.1156 15.2671 18.3061 14.8975 18.5858 14.6075C18.8655 14.3174 19.2218 14.1199 19.6098 14.0399C19.9978 13.9598 20.3999 14.0009 20.7654 14.1579C21.1308 14.3149 21.4432 14.5807 21.6629 14.9218C21.8827 15.2629 22 15.6639 22 16.0741C21.9994 16.624 21.7885 17.1511 21.4135 17.54C21.0386 17.9288 20.5302 18.1475 20 18.1481Z" fill="#292929"/>
                </svg>
            </a>
        </div>
    </section>
  )
}

export default Home