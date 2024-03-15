import localFont from "next/font/local";

const mansory = localFont({
    src: "../assets/fonts/mansory/mansory.woff2",
});
const mansoryMedium = localFont({src: "../assets/fonts/mansory/mansory_medium.woff2"})
const mansorySemiBold = localFont({src: "../assets/fonts/mansory/mansory_semi_bold.woff2"})
const mansoryBold = localFont({src: "../assets/fonts/mansory/mansory_bold.woff2"})

export {mansory, mansoryBold, mansoryMedium, mansorySemiBold};