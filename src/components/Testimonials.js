import { Fragment } from "react";
import Image from "next/image";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const props = {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2, spaceBetween: 25 },
    },
  };
  return (
    <Fragment>
      <div className="title">
        <h3>Testimonials</h3>
      </div>
      <Swiper {...props}>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <Image
              src="/static/img/parent.png"
              title="parent icon"
              alt="stick figure of parent holding stick figure child"
              width={499}
              height={518}
            />
          </div>
          <div className="media-body">
            <p>
              My daughter Amy is in Ms. Parks&apos; 3rd-grade class. She is a
              fabulous teacher. This review is long overdue as she was
              Julia&apos;s(my other daughter) teacher two years ago. She remains
              Julia&apos;s favorite teacher to this day. But two years ago, we
              all heard about what a great teacher Mrs. Parks is. With online
              school, I could see more of what Julia has been bragging about
              her. I do not know when Ms. Parks sleeps. She is thorough with
              every assignment for Amy; imagining she does that for all her
              students is unbelievable. She explains everything well and makes
              the lessons so interesting that I learn too! She went out of her
              way to meet with me to discuss Amy&apos;s progress and spent 45
              minutes with me! I don&apos;t have enough words to describe what
              an incredible teacher she is truly! I thank her for all that she
              does.
            </p>
            <h6>Allison</h6>
            <span>Parent</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <Image
              src="/static/img/parent.png"
              title="parent icon"
              alt="stick figure of parent holding stick figure child"
              width={499}
              height={518}
            />
          </div>
          <div className="media-body">
            <p>
              Jenny has grown leaps and bounds under Ms. Parks! I will forever
              be grateful for her helping raise such a great thinker. Thank you,
              Ms. Parks!
            </p>
            <h6>Sarah</h6>
            <span>Parent</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <Image
              src="/static/img/parent.png"
              title="parent icon"
              alt="stick figure of parent holding stick figure child"
              width={499}
              height={518}
            />
          </div>
          <div className="media-body">
            <p>
              Ms. Parks has been wonderful with her support and help. It makes
              me feel so supported that I can survive and persist to the end!
              She is a great teacher with the best students!
            </p>
            <h6>Maria</h6>
            <span>Parent</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <Image
              src="/static/img/studenticon.png"
              title="student icon"
              alt="stick figure representing student reading an open book"
              width={443}
              height={478}
            />
          </div>
          <div className="media-body">
            <p>
              Thank you Ms. Parks for being a good teacher. I am going to miss
              you in 4th grade.
            </p>
            <h6>Tony</h6>
            <span>Former student and tutee</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <Image
              src="/static/img/studenticon.png"
              title="student icon"
              alt="stick figure representing student reading an open book"
              width={443}
              height={478}
            />
          </div>
          <div className="media-body">
            <p>
              Thank you for teaching me so much in 3rd grade Ms. Parks. I have
              learned so much and hope you have a good year. When I was down,
              you cheered me up all the way.
            </p>
            <h6>Jessica</h6>
            <span>Former student and tutee</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <Image
              src="/static/img/studenticon.png"
              title="student icon"
              alt="stick figure representing student reading an open book"
              width={443}
              height={478}
            />
          </div>
          <div className="media-body">
            <p>
              Ms. Parks has been the best teacher, she teaches students so they
              can live an awesome life! I really appreciate her being my
              teacher. She really taught me a lot in this school year!
            </p>
            <h6>Jonathan</h6>
            <span>Former student and tutee</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <Image
              src="/static/img/studenticon.png"
              title="student icon"
              alt="stick figure representing student reading an open book"
              width={443}
              height={478}
            />
          </div>
          <div className="media-body">
            <p>
              For teacher appreciation week I chose to write about Ms. Parks
              because I had the funnest and best time with her as my teacher.
              When she was my teacher, I felt like she was family. She is the
              best and my favorite teacher. When she was my teacher, I wanted to
              live at school to see and talk to her everyday because of how kind
              and amazing she is. Whenever she walks into a room, she brings so
              many people joy. She is the best teacher anyone could ask for.
            </p>
            <h6>Barbara</h6>
            <span>Former student and tutee</span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="owl-dots"></div>
    </Fragment>
  );
};
export default Testimonials;
