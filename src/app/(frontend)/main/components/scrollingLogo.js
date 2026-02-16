// import Image from "next/image";

// export default function AutoScrollImages() {
//   return (
//     <div className="overflow-hidden w-full bg-gray-100 py-6">
//       <div className="flex gap-10 ">
//         {/* First set */}
//         <Image src="/logos/1.png" width={120} height={60} alt="img" />
//         <Image src="/logos/2.png" width={120} height={60} alt="img" />
//         <Image src="/logos/3.png" width={120} height={60} alt="img" />
//         <Image src="/logos/4.png" width={120} height={60} alt="img" />

//         {/* Duplicate set (smooth loop ke liye) */}
//         <Image src="/logos/1.png" width={120} height={60} alt="img" />
//         <Image src="/logos/2.png" width={120} height={60} alt="img" />
//         <Image src="/logos/3.png" width={120} height={60} alt="img" />
//         <Image src="/logos/4.png" width={120} height={60} alt="img" />
//       </div>
//     </div>
//   );
// }


import Image from "next/image";
import styles from "./scrollingLogo.module.css";

export default function ScrollingLogo() {
  return (

    <>
    <div className={`${styles.wrapper} bg-gray-200 py-6 justify-center items-center`}>
      <div className={styles.marquee}>
        {/* duplicate images for smooth loop */}
        <Image src="/ui/logo1.jpg" width={120} height={60} alt="logo" />
        <Image src="/ui/logo2.png" width={120} height={60} alt="logo" />
        <Image src="/ui/logo3.jpg" width={120} height={60} alt="logo" />
        <Image src="/ui/logo4.png" width={120} height={60} alt="logo" />

        <Image src="/ui/logo1.jpg" width={120} height={60} alt="logo" />
        <Image src="/ui/logo2.png" width={120} height={60} alt="logo" />
        <Image src="/ui/logo3.jpg" width={120} height={60} alt="logo" />
        <Image src="/ui/logo4.png" width={120} height={60} alt="logo" />
      </div>




    </div>

    <div>


        
    </div>





    </>

  );
}
