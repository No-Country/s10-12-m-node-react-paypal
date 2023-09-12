import Link from 'next/link';

export default function SubTitle({ subTitleText, linkText, linkUrl }) {
  return (
    <div className=" mt-5 text-lg md:flex md:items-center md:mt-20">
      <p className="mb-5 md:mb-0 md:mr-5">{subTitleText}</p>
      <Link className="block text-center text-Azul/800 underline font-semibold" href={linkUrl}>
       {linkText}
      </Link>
    </div>
  );
}
