import Link from 'next/link';

export default function SubTitle({ subTitleText, linkText, linkUrl }) {
  return (
    <div className="items-center text-lg mt-20 hidden md:flex">
      <p>{subTitleText}</p>
      <Link className="text-Azul/800 underline ml-5 font-semibold" href={linkUrl}>
       {linkText}
      </Link>
    </div>
  );
}
