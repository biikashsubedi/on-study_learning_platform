'use client';

import Script from 'next/script';
import {useEffect} from 'react';


export default function ScriptJS() {

    useEffect(() => {
        // Your script logic here
        $(document).ready(() => {
            $('.my-carousel').owlCarousel({
                items: 3,
                loop: true,
                margin: 15,
            });

            $('.owl-prev').click(() => {
                $('.my-carousel').trigger('prev.owl.carousel');
            });

            $('.owl-next').click(() => {
                $('.my-carousel').trigger('next.owl.carousel');
            });

            $('.testimonial-carousel').owlCarousel({
                items: 5,
                loop: true,
                margin: 16,
            });

            $('.owl-dot').click(function () {
                const dotIndex = $(this).index();
                const itemsToMove = 5;

                $('.owl-dot').removeClass('active');
                $(this).addClass('active');

                $('.testimonial-carousel').trigger('to.owl.carousel', [dotIndex * itemsToMove, 300, true]);
            });
        });
    }, []); // Empty dependency array ensures the effect runs once when the component mounts


    return (
        <>
            <Script src="https://code.jquery.com/jquery-3.6.4.min.js" strategy="beforeInteractive"/>
            <Script src="/assets/home/js/bootstrap.bundle.min.js" strategy="afterInteractive"/>
            <Script src="/assets/home/js/bootstrap-select.min.js" strategy="afterInteractive"/>
            <Script src="/assets/home/js/isotope.js" strategy="afterInteractive"/>
            <Script src="/assets/home/js/waypoint.min.js" strategy="afterInteractive"/>
            <Script src="/assets/home/js/jquery.counterup.min.js" strategy="afterInteractive"/>
            <Script src="/assets/home/js/fancybox.js" strategy="afterInteractive"/>
            <Script src="/assets/home/js/datedropper.min.js" strategy="afterInteractive"/>
            <Script src="/assets/home/js/emojionearea.min.js" strategy="afterInteractive"/>
            <Script src="/assets/home/js/tooltipster.bundle.min.js" strategy="afterInteractive"/>
            <Script src="/assets/home/js/jquery.lazy.min.js" strategy="afterInteractive"/>
            <Script src="/assets/home/js/owl.carousel.min.js" strategy="afterInteractive"/>
            <Script src="/assets/home/js/main.js" strategy="afterInteractive"/>
            <Script src="https://cdn.jsdelivr.net/npm/owl.carousel@2.3.4/dist/owl.carousel.min.js"
                    strategy="afterInteractive"/>
        </>
    );
}
