import * as React from "react";
import { registerComponent, PlasmicCanvasHost } from "@plasmicapp/host";
import { Swiper, SwiperSlide } from "swiper/react";

import Head from "next/head";

// A very simple component that takes two props: a string caption, and a
// children prop that takes any ReactNode.

// Showing some more options.

export const MySwiper = React.forwardRef((props, ref) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        {...props}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
});

MySwiper.displayName = "MySwiper";

registerComponent(MySwiper, {
  // We encourage setting a name that matches the component's name in code, but
  // you can diverge if (say) the component is renamed in code. The name should
  // be unique and stable over time.
  name: "MySwiper",
  // Any human-readable name, for users in Plasmic Studio.
  displayName: "My Swiper",
  // The name of the symbol to import from the module path.
  importName: "MySwiper",
  importPath: "./pages/plasmic-host",
  // If it were instead the default export, use this instead of importName.
  // isDefaultExport: true,
  // You can have any number of slots.
  props: {
    slidesPerView: "number",
    spaceBetween: "number",
    centeredSlides: "boolean",
    pagination: "object",
  },
  // Plasmic usually tries to pass in styles via className, but you can specify
  // a different prop name to use.  Here, Plasmic will pass styles to
  // containerClassName instead.
  // classNameProp: "containerClassName",
});

function Host() {
  return (
    <div>
      <Head>
        {/* Optional: */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(){const n=window,i="__REACT_DEVTOOLS_GLOBAL_HOOK__",o="__PlasmicPreambleVersion",t=function(){}
if(void 0!==n){if(n.parent!==n)try{n[i]=n.parent[i]}catch(e){}if(!n[i]){const r=new Map
n[i]={supportsFiber:!0,renderers:r,inject:function(n){r.set(r.size+1,n)},onCommitFiberRoot:t,onCommitFiberUnmount:t}}n[i][o]||(n[i][o]="1")}}()
`,
          }}
        ></script>
      </Head>
      <PlasmicCanvasHost />
    </div>
  );
}

export default Host;
