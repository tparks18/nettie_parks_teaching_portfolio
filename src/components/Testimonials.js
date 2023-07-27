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
        <h3>Testimonials.</h3>
      </div>
      <Swiper {...props}>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <Image
              src="/static/img/parent.png"
              title=""
              alt=""
              width={499}
              height={518}
            />
          </div>
          <div className="media-body">
            <p>
              My daughter Amy is in Ms. Parks&apos; 3rd grade class. She is a
              fabulous teacher. This review is long overdue as she was
              Julia&apos;s(my other daughter) teacher two years ago. She remains
              Julia&apos;s favorite teacher to this day. But two years ago, all
              we heard about is what a great teacher Mrs. Parks is. With online
              school, I was able to see more of what Julia has been bragging
              about her. I do not know when Ms. Parks sleeps. She is so thorough
              with every assignment for Amy and to imagine she does that for all
              her students is uneblievable. She explains everything so well and
              she makes the lessons so interesting that I find myself learning
              too! From US History, to Geography, and so much more. She went out
              of her way to have a meeting with me to talk about Amy&apos;s
              progress and spent 45 minutes with me! I just don&apos;t have
              enough words to truly describe what an incredible teacher she is!
              I thank her for all that she does.
            </p>
            <h6>Allison</h6>
            <span>Parent</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <Image
              src="/static/img/parent.png"
              title=""
              alt=""
              width={499}
              height={518}
            />
          </div>
          <div className="media-body">
            <p>
              Jenny has grow leaps and bounds under Ms. Parks! I will be forever
              grateful for her role in helping raise such a great thinker. Thank
              you Ms. Parks!
            </p>
            <h6>Sarah</h6>
            <span>Parent</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <Image
              src="/static/img/parent.png"
              title=""
              alt=""
              width={499}
              height={518}
            />
          </div>
          <div className="media-body">
            <p>
              Ms. Parks has been wonderful with her support and help, it makes
              me feel so supported so that I can survive and persist to the end!
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
              title=""
              alt=""
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
              title=""
              alt=""
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
              title=""
              alt=""
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
              title=""
              alt=""
              width={443}
              height={478}
            />
          </div>
          <div className="media-body">
            <p>
              For teacher appreciation week I chose to write about Ms. Parks
              because I had the funnest and best time with her as my teacher.
              When she was my teacher, I felt like she was family. She is the
              best teacher and my favorite teacher. When she was my teacher, I
              wanted to live at school to see and talk to her everyday because
              of how kind and amazing she is. Whenever she walks in a room, she
              brings so many people joy. She is the best teacher anyone could
              ask for.
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
